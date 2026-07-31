import type { FormEvent } from "react"
import { useState } from "react"

import { PageHeader } from "@/components/shared/PageHeader"
import { Button } from "@/components/ui/Button"
import { Container } from "@/components/ui/Container"
import { Reveal } from "@/components/ui/Reveal"
import {
	ClockIcon,
	MailIcon,
	MapPinIcon,
	PhoneIcon,
	WhatsAppIcon,
} from "@/components/ui/icons"
import { siteConfig, whatsappLink } from "@/config/site"
import { services } from "@/data/services"
import { usePageMeta } from "@/hooks/usePageMeta"
import { cn } from "@/lib/utils"
import { contactSchema, type ContactFormData } from "@/lib/validation"

const MAP_EMBED_URL =
	"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3533.8479662172213!2d85.31766467551228!3d27.660175127570334!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x688955478151e4d%3A0x5486a2c24feb5895!2sBlazibyte!5e0!3m2!1sen!2snp!4v1785395608328!5m2!1sen!2snp"

const inputClasses =
	"w-full rounded-xl border border-ink/10 bg-white px-4 py-3 text-sm text-ink placeholder:text-ink-muted focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/20"

const inputErrorClasses =
	"border-red-400 focus:border-red-500 focus:ring-red-500/20"

type FieldErrors = Partial<Record<keyof ContactFormData, string>>

function FieldError({ message }: { message?: string }) {
	if (!message) return null
	return <p className="mt-1.5 text-xs font-medium text-red-500">{message}</p>
}

export default function ContactPage() {
	usePageMeta(
		"Contact Us",
		"Get in touch with Blazibyte — call or WhatsApp us to discuss video ads, social media content and more. Based in Mahalaxmisthan, Lalitpur, Nepal.",
	)

	const [form, setForm] = useState<ContactFormData>({
		name: "",
		phone: "",
		company: "",
		service: services[0].title,
		message: "",
	})
	const [errors, setErrors] = useState<FieldErrors>({})
	const [submitted, setSubmitted] = useState(false)

	function update<K extends keyof ContactFormData>(key: K, value: string) {
		setForm((current) => ({ ...current, [key]: value }))
		// Clear the field's error as soon as the user starts fixing it
		if (errors[key]) setErrors((current) => ({ ...current, [key]: undefined }))
	}

	function handleSubmit(event: FormEvent<HTMLFormElement>) {
		event.preventDefault()
		const result = contactSchema.safeParse(form)

		if (!result.success) {
			const fieldErrors = result.error.flatten().fieldErrors
			setErrors({
				name: fieldErrors.name?.[0],
				phone: fieldErrors.phone?.[0],
				company: fieldErrors.company?.[0],
				service: fieldErrors.service?.[0],
				message: fieldErrors.message?.[0],
			})
			setSubmitted(false)
			return
		}

		setErrors({})
		const data = result.data
		const text = [
			`Hello Blazibyte! I'm ${data.name} from ${data.company}.`,
			`Phone: ${data.phone}.`,
			`I'm interested in: ${data.service}.`,
			`Message: ${data.message}`,
		].join(" ")
		window.open(whatsappLink(text), "_blank", "noopener,noreferrer")
		setSubmitted(true)
	}

	return (
		<>
			<PageHeader
				eyebrow="Contact Us"
				title="Let’s talk about your brand"
				description="Call us or message us on WhatsApp — or fill in the form and we’ll get back to you quickly."
			/>

			<section className="bg-white py-16 sm:py-24">
				<Container className="grid gap-10 lg:grid-cols-5">
					{/* Contact info */}
					<Reveal className="lg:col-span-2">
						<div className="space-y-4">
							<div className="flex items-start gap-4 rounded-2xl border border-ink/5 bg-white p-5 shadow-card">
								<span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
									<MapPinIcon className="h-5 w-5" />
								</span>
								<div>
									<h2 className="text-sm font-bold text-ink">Visit Us</h2>
									<p className="mt-1 text-sm text-ink-soft">{siteConfig.address}</p>
								</div>
							</div>

							<div className="flex items-start gap-4 rounded-2xl border border-ink/5 bg-white p-5 shadow-card">
								<span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
									<PhoneIcon className="h-5 w-5" />
								</span>
								<div>
									<h2 className="text-sm font-bold text-ink">Call Us</h2>
									{siteConfig.phones.map((phone) => (
										<p key={phone} className="mt-1 text-sm text-ink-soft">
											<a
												href={`tel:${phone.replace(/\s/g, "")}`}
												className="hover:text-brand-600"
											>
												{phone}
											</a>
										</p>
									))}
								</div>
							</div>

							<div className="flex items-start gap-4 rounded-2xl border border-ink/5 bg-white p-5 shadow-card">
								<span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
									<MailIcon className="h-5 w-5" />
								</span>
								<div>
									<h2 className="text-sm font-bold text-ink">Email Us</h2>
									<p className="mt-1 text-sm text-ink-soft">
										<a href={`mailto:${siteConfig.email}`} className="hover:text-brand-600">
											{siteConfig.email}
										</a>
									</p>
								</div>
							</div>

							<div className="flex items-start gap-4 rounded-2xl border border-ink/5 bg-white p-5 shadow-card">
								<span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
									<ClockIcon className="h-5 w-5" />
								</span>
								<div>
									<h2 className="text-sm font-bold text-ink">Working Hours</h2>
									<p className="mt-1 text-sm text-ink-soft">{siteConfig.hours}</p>
								</div>
							</div>

							<Button
								href={whatsappLink("Hello Blazibyte! I’d like to discuss a project.")}
								className="w-full"
								size="lg"
							>
								<WhatsAppIcon className="h-5 w-5" />
								Chat on WhatsApp
							</Button>
						</div>
					</Reveal>

					{/* Form — validated with Zod (see src/lib/validation.ts) */}
					<Reveal delay={0.15} className="lg:col-span-3">
						<form
							onSubmit={handleSubmit}
							noValidate
							className="rounded-3xl border border-ink/5 bg-surface-soft p-6 shadow-card sm:p-8"
						>
							<h2 className="text-xl font-bold text-ink">Send us a message</h2>
							<p className="mt-1 text-sm text-ink-soft">
								Submitting opens WhatsApp with your message ready to send — the fastest way to
								reach us.
							</p>

							<div className="mt-6 grid gap-4 sm:grid-cols-2">
								<div>
									<label htmlFor="name" className="mb-1.5 block text-sm font-semibold text-ink">
										Your Name
									</label>
									<input
										id="name"
										type="text"
										autoComplete="name"
										placeholder="e.g. Prensu Dangol"
										value={form.name}
										onChange={(event) => update("name", event.target.value)}
										aria-invalid={Boolean(errors.name)}
										className={cn(inputClasses, errors.name && inputErrorClasses)}
									/>
									<FieldError message={errors.name} />
								</div>
								<div>
									<label
										htmlFor="phone"
										className="mb-1.5 block text-sm font-semibold text-ink"
									>
										Phone Number
									</label>
									<input
										id="phone"
										type="tel"
										autoComplete="tel"
										placeholder="98XXXXXXXX"
										value={form.phone}
										onChange={(event) => update("phone", event.target.value)}
										aria-invalid={Boolean(errors.phone)}
										className={cn(inputClasses, errors.phone && inputErrorClasses)}
									/>
									<FieldError message={errors.phone} />
								</div>
								<div className="sm:col-span-2">
									<label
										htmlFor="company"
										className="mb-1.5 block text-sm font-semibold text-ink"
									>
										Company / Business Name
									</label>
									<input
										id="company"
										type="text"
										autoComplete="organization"
										placeholder="e.g. Blazibyte Pvt. Ltd."
										value={form.company}
										onChange={(event) => update("company", event.target.value)}
										aria-invalid={Boolean(errors.company)}
										className={cn(inputClasses, errors.company && inputErrorClasses)}
									/>
									<FieldError message={errors.company} />
								</div>
								<div className="sm:col-span-2">
									<label
										htmlFor="service"
										className="mb-1.5 block text-sm font-semibold text-ink"
									>
										Service You Need
									</label>
									<select
										id="service"
										value={form.service}
										onChange={(event) => update("service", event.target.value)}
										aria-invalid={Boolean(errors.service)}
										className={cn(inputClasses, errors.service && inputErrorClasses)}
									>
										{services.map((service) => (
											<option key={service.slug} value={service.title}>
												{service.title}
											</option>
										))}
									</select>
									<FieldError message={errors.service} />
								</div>
								<div className="sm:col-span-2">
									<label
										htmlFor="message"
										className="mb-1.5 block text-sm font-semibold text-ink"
									>
										Your Message
									</label>
									<textarea
										id="message"
										rows={5}
										placeholder="Tell us about your business and what you’re looking for…"
										value={form.message}
										onChange={(event) => update("message", event.target.value)}
										aria-invalid={Boolean(errors.message)}
										className={cn(inputClasses, errors.message && inputErrorClasses)}
									/>
									<FieldError message={errors.message} />
								</div>
							</div>

							<div className="mt-6 flex flex-col items-start gap-3">
								<Button type="submit" size="lg">
									Send via WhatsApp
									<WhatsAppIcon className="h-4 w-4" />
								</Button>
								{submitted ? (
									<p className="text-sm font-medium text-brand-600">
										WhatsApp should now be open with your message — just press send!
									</p>
								) : null}
							</div>
						</form>
					</Reveal>
				</Container>
			</section>

			{/* Map — find us in Mahalaxmisthan, Lalitpur */}
			<section className="bg-white pb-16 sm:pb-24">
				<Container>
					<Reveal>
						<iframe
							src={MAP_EMBED_URL}
							title="Blazibyte — Mahalaxmisthan, Lalitpur"
							className="h-[420px] w-full rounded-3xl border-0 shadow-card"
							allowFullScreen
							loading="lazy"
							referrerPolicy="strict-origin-when-cross-origin"
						/>
					</Reveal>
				</Container>
			</section>
		</>
	)
}
