import { luckiestGuy } from "@/lib/font";
import { cn } from "@/lib/utils";
import PricingCards from "./pricing-cards";

const PricingSection = () => {
	return (
		<section className="flex flex-col items-center gap-1">
			<h2
				className={cn(
					"text-balance text-2xl md:text-3xl",
					luckiestGuy.className,
				)}
			>
				Level Up Your Writing, Without Breaking the Bank
			</h2>
			<p className="w-full text-pretty p-4 text-base leading-relaxed md:w-3/4 md:p-6 md:text-lg">
				Enhance your writing experience with our flexible pricing plans designed
				to suit your needs. Whether you're just starting or need unlimited
				access, we have the perfect plan for you.
			</p>
			<PricingCards />
		</section>
	);
};

export default PricingSection;
