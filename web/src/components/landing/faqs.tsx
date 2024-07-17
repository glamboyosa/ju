import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion";

export function Faqs() {
	return (
		<section className="flex w-full flex-col md:w-3/4">
			<h2 className="text-2xl md:text-3xl">FAQs</h2>
			<div>
				<Accordion type="single" collapsible className="w-full">
					<AccordionItem value="item-1">
						<AccordionTrigger>What models do you use?</AccordionTrigger>
						<AccordionContent>
							We use state-of-the-art AI models to ensure the highest quality of
							service. Currently, our platform leverages models such as
							Gemini&apos;s Flash series for text processing. If you bring your
							own API keys, we support both Gemini and OpenAI models, allowing
							you to choose the best option for your needs.
						</AccordionContent>
					</AccordionItem>
					<AccordionItem value="item-2">
						<AccordionTrigger>
							How do you ensure my API keys are secure?
						</AccordionTrigger>
						<AccordionContent>
							We prioritize your privacy. We understand that the information you
							enter might be sensitive and private, so we do not store any of
							your text. To ensure your data remains secure, we use AES-GCM to
							encrypt your text during processing. Additionally, we use RSA
							encryption for secure key exchanges, providing multiple layers of
							protection for your data{" "}
							<a
								href="https://en.wikipedia.org/wiki/Galois/Counter_Mode"
								target="_blank"
								rel="noreferrer"
								className=" flex items-center gap-0.5 underline"
							>
								Learn More{" "}
								<span>
									<svg
										width="15"
										height="15"
										viewBox="0 0 15 15"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<title>External Link</title>
										<path
											d="M3 2C2.44772 2 2 2.44772 2 3V12C2 12.5523 2.44772 13 3 13H12C12.5523 13 13 12.5523 13 12V8.5C13 8.22386 12.7761 8 12.5 8C12.2239 8 12 8.22386 12 8.5V12H3V3L6.5 3C6.77614 3 7 2.77614 7 2.5C7 2.22386 6.77614 2 6.5 2H3ZM12.8536 2.14645C12.9015 2.19439 12.9377 2.24964 12.9621 2.30861C12.9861 2.36669 12.9996 2.4303 13 2.497L13 2.5V2.50049V5.5C13 5.77614 12.7761 6 12.5 6C12.2239 6 12 5.77614 12 5.5V3.70711L6.85355 8.85355C6.65829 9.04882 6.34171 9.04882 6.14645 8.85355C5.95118 8.65829 5.95118 8.34171 6.14645 8.14645L11.2929 3H9.5C9.22386 3 9 2.77614 9 2.5C9 2.22386 9.22386 2 9.5 2H12.4999H12.5C12.5678 2 12.6324 2.01349 12.6914 2.03794C12.7504 2.06234 12.8056 2.09851 12.8536 2.14645Z"
											fill="currentColor"
											fill-rule="evenodd"
											clip-rule="evenodd"
										/>
									</svg>
								</span>
							</a>
						</AccordionContent>
					</AccordionItem>
					<AccordionItem value="item-3">
						<AccordionTrigger>Do you store my data?</AccordionTrigger>
						<AccordionContent>
							We prioritize your privacy. We understand that the information you
							enter might be sensitive and private, so we do not store any of
							your text.
						</AccordionContent>
					</AccordionItem>
				</Accordion>
			</div>
		</section>
	);
}
