import { Button } from "@/components/ui/Button"
import { Container } from "@/components/ui/Container"
import { Reveal } from "@/components/ui/Reveal"
import { ArrowRightIcon } from "@/components/ui/icons"

/** Full-width call-to-action banner shown above the footer. */
export function CtaBanner() {
	return (
		<section className="bg-white pb-16 sm:pb-24">
			<Container>
				<Reveal>
					<div className="relative overflow-hidden rounded-3xl bg-linear-to-r from-brand-500 to-brand-600 px-6 py-12 text-center shadow-lift sm:px-12 sm:py-16">
						<div
							aria-hidden
							className="absolute -left-16 -top-16 h-48 w-48 rounded-full bg-white/10 blur-2xl"
						/>
						<div
							aria-hidden
							className="absolute -bottom-20 -right-10 h-56 w-56 rounded-full bg-white/10 blur-2xl"
						/>
						<h2 className="relative text-balance text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
							Ready to grow your brand with us?
						</h2>
						<p className="relative mx-auto mt-3 max-w-xl text-white/90">
							Let’s talk about your goals — we’ll craft a content plan that fits your business and
							budget.
						</p>
						<div className="relative mt-8 flex justify-center">
							<Button to="/contact" variant="white" size="lg">
								Contact Us Today
								<ArrowRightIcon className="h-4 w-4" />
							</Button>
						</div>
					</div>
				</Reveal>
			</Container>
		</section>
	)
}
