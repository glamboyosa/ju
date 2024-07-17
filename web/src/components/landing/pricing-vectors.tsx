import type { PropsWithChildren } from "react";

const PricingVectors = ({ children }: PropsWithChildren) => {
	return (
		<span className="flex size-5 items-center justify-center rounded-full border border-black/20 dark:border-white/90">
			{children}
		</span>
	);
};

export default PricingVectors;
