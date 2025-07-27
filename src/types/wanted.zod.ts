import { z } from 'zod';

export const ImageSchema = z.object({
  large: z.string().optional(),
  thumb: z.string().optional(),
  caption: z.string().nullable().optional(),
  original: z.string().optional(),
});

export const FileSchema = z.object({
  url: z.string(),
  name: z.string(),
});

export const WantedPersonSchema = z.object({
  uid: z.string(),
  title: z.string(),
  description: z.string().nullable().optional(),
  field_offices: z.array(z.string()).nullable().optional(),
  images: z.array(ImageSchema).optional(),
  files: z.array(FileSchema).optional(),
  details: z.string().nullable().optional(),
  reward_text: z.string().nullable().optional(),
  status: z.string().optional(),
  poster_classification: z.string().optional(),
  person_classification: z.string().optional(),
  subjects: z.array(z.string()).optional(),
  remarks: z.string().nullable().optional(),
  caution: z.string().nullable().optional(),
  sex: z.string().nullable().optional(),
  race: z.string().nullable().optional(),
  nationality: z.string().nullable().optional(),
  place_of_birth: z.string().nullable().optional(),
  dates_of_birth_used: z.array(z.string()).nullable().optional(),
  age_min: z.number().nullable().optional(),
  age_max: z.number().nullable().optional(),
  age_range: z.string().nullable().optional(),
  height_min: z.number().nullable().optional(),
  height_max: z.number().nullable().optional(),
  weight_min: z.number().nullable().optional(),
  weight_max: z.number().nullable().optional(),
  reward_min: z.number().nullable().optional(),
  reward_max: z.number().nullable().optional(),
  url: z.string().optional(),
  path: z.string().optional(),
  pathId: z.string().optional(),
  publication: z.string().optional(),
  modified: z.string().optional(),
  additional_information: z.string().nullable().optional(),
  aliases: z.array(z.string()).nullable().optional(),
  languages: z.array(z.string()).nullable().optional(),
  legat_names: z.array(z.string()).nullable().optional(),
  ncic: z.string().nullable().optional(),
  suspects: z.array(z.string()).nullable().optional(),
  possible_states: z.array(z.string()).nullable().optional(),
  possible_countries: z.array(z.string()).nullable().optional(),
  locations: z.array(z.string()).nullable().optional(),
  build: z.string().nullable().optional(),
  complexion: z.string().nullable().optional(),
  eyes: z.string().nullable().optional(),
  eyes_raw: z.string().nullable().optional(),
  hair: z.string().nullable().optional(),
  hair_raw: z.string().nullable().optional(),
  race_raw: z.string().nullable().optional(),
  warning_message: z.string().nullable().optional(),
  coordinates: z.array(z.any()).optional(),
  scars_and_marks: z.string().nullable().optional(),
});

export const WantedListResponseSchema = z.object({
  items: z.array(WantedPersonSchema),
  total: z.number(),
  page: z.number().optional(),
  pageSize: z.number().optional(),
  totalPages: z.number().optional(),
});

export type WantedPerson = z.infer<typeof WantedPersonSchema>;
export type WantedListResponse = z.infer<typeof WantedListResponseSchema>;
