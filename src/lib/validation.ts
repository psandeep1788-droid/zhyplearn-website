import { z } from "zod";

export const demoRequestSchema = z.object({
  name: z.string().trim().min(2, "Please enter your name").max(120),
  email: z.string().trim().email("Please enter a valid work email").max(200),
  company: z.string().trim().min(2, "Please enter your company name").max(160),
  message: z.string().trim().min(10, "Please add a few details").max(2000),
  // Honeypot field: real visitors never fill this in (hidden via CSS).
  // Checked separately in the route handler *before* this schema runs, so
  // a bot filling it gets a silent fake success instead of a revealing
  // validation error — this field is intentionally unconstrained here.
  website: z.string().optional(),
});

export type DemoRequestFormValues = z.infer<typeof demoRequestSchema>;
