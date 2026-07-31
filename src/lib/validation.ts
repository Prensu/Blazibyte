import { z } from "zod"

/**
 * Nepali phone validation — matches what most Nepali business sites accept:
 * - Mobile: 10 digits starting with 96 / 97 / 98 (e.g. 9767475676)
 * - Optional +977 country code (e.g. +977 9767475676)
 * - Landline: area code + 6–7 digits (e.g. 01-5521234)
 */
export const NEPAL_PHONE_REGEX = /^(?:\+977[-\s]?)?(?:9[678]\d{8}|0\d{1,2}[-\s]?\d{6,7})$/

export const contactSchema = z.object({
	name: z
		.string()
		.trim()
		.min(3, "Please enter your full name (at least 3 characters)")
		.max(50, "Name looks too long — 50 characters max")
		.regex(/^[A-Za-z\u0900-\u097F\s.'-]+$/, "Name can only contain letters"),
	phone: z
		.string()
		.trim()
		.min(1, "Please enter your phone number")
		.regex(NEPAL_PHONE_REGEX, "Enter a valid Nepali number, e.g. 98XXXXXXXX or +977 98XXXXXXXX"),
	company: z
		.string()
		.trim()
		.min(2, "Please enter your company or business name")
		.max(60, "Company name looks too long — 60 characters max"),
	service: z.string().min(1, "Please select a service"),
	message: z
		.string()
		.trim()
		.min(10, "Please tell us a bit more about your project (at least 10 characters)")
		.max(1000, "Message is too long — 1000 characters max"),
})

export type ContactFormData = z.infer<typeof contactSchema>
