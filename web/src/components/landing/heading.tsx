"use client";
import { useEffect, useRef, useState } from "react";
import { Morph } from "./morph";
import { cn } from "@/lib/utils";
import { luckiestGuy } from "@/lib/font";
import { annotate } from "rough-notation";

const Heading = () => {
	const [show, setShow] = useState(true);
	const underlineRef = useRef<HTMLDivElement | null>(null);
	useEffect(() => {
		const i = setInterval(() => setShow((prev) => !prev), 2000);
		return () => clearInterval(i);
	}, []);
	useEffect(() => {
		const a1 = annotate(underlineRef.current as HTMLElement, {
			type: "underline",
			color: "rgb(186 230 253)",
			animate: false,
			animationDuration: 300,
			strokeWidth: 1,
		});

		a1.show();
	}, []);
	return (
		<div>
			<div
				className={cn(
					luckiestGuy.className,
					"h-44 w-full hyphens-auto text-pretty text-center md:h-12",
				)}
			>
				{show ? (
					<Morph>Craft Your Words with Confidence,</Morph>
				) : (
					<Morph>10x Your Communication.</Morph>
				)}
			</div>
			<div ref={underlineRef} />
		</div>
	);
};

export default Heading;
