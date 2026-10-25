import { z } from "zod";

export const demoRequestSchema = z.object({
  name: z.string().trim().min(2, "Please enter your name").max(120),
  email: z.string().trim().email("Please enter a valid work email").max(200),
  company: z.string().trim().min(2, "Please enter your company name").max(160),
  message: z.string().trim().min(10, "Please add a few details").max(2000),
  // Honeypot field: real visitors never fill this in (hidden via CSS).
  // Any non-empty value here means a bot filled every field, including
  // the hidden one — reject without revealing why.
  website: z.string().max(0).optional().or(z.literal("")),
});

export type DemoRequestFormValues = z.infer<typeof demoRequestSchema>;
