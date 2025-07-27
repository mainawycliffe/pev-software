
# --- Build Stage ---
FROM node:20-alpine AS builder
WORKDIR /app

# Only copy package files and install all dependencies (including dev)
COPY package.json package-lock.json* ./
RUN npm install

# Copy source code and build
COPY . .
RUN npm run build

# --- Production Stage ---
FROM node:20-alpine AS production
WORKDIR /app

# Copy only production dependencies
COPY package.json package-lock.json* ./
RUN npm install --omit=dev --ignore-scripts

# Copy built assets and server code from builder
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/src ./src
COPY --from=builder /app/public ./public
COPY --from=builder /app/*.js ./
COPY --from=builder /app/*.ts ./
COPY --from=builder /app/vite.config.* ./
COPY --from=builder /app/tsconfig.json ./

# Expose port
EXPOSE 3000

# Start the server
CMD ["npm", "start"]
