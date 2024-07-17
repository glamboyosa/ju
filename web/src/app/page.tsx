import { Faqs } from "@/components/landing/faqs";
import Heading from "@/components/landing/heading";
import Motivation from "@/components/landing/motivation";

export default function Home() {
	return (
		<main className="flex min-h-screen flex-col items-center gap-3 p-24">
			<Heading />
			<p className="w-full text-pretty p-4 text-base italic leading-relaxed md:w-3/4 md:p-6 md:text-lg">
				With Jū, transform your writing into clear, error-free, and compelling
				communication. Correct errors, enhance clarity, improve readability.
				Perfect for any audience, every time.
			</p>
			<Motivation />
			<Faqs />
		</main>
	);
}
