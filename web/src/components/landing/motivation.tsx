"use client";
import { useEffect, useRef } from "react";
import { annotate, annotationGroup } from "rough-notation";

const Motivation = () => {
	const motivation = useRef<HTMLHeadingElement | null>(null);
	const s1 = useRef<HTMLSpanElement | null>(null);
	const s2 = useRef<HTMLSpanElement | null>(null);
	const s3 = useRef<HTMLSpanElement | null>(null);
	const s4 = useRef<HTMLSpanElement | null>(null);

	useEffect(() => {
		const a1 = annotate(motivation.current as HTMLElement, {
			type: "box",
			color: "rgb(186 230 253)",
		});
		const a2 = annotate(s1.current as HTMLSpanElement, {
			type: "strike-through",
		});
		const a3 = annotate(s2.current as HTMLElement, {
			type: "crossed-off",
		});
		const a4 = annotate(s3.current as HTMLElement, {
			type: "crossed-off",
		});
		const a5 = annotate(s4.current as HTMLElement, {
			type: "highlight",
			color: "rgb(186 230 253)",
		});
		const ag = annotationGroup([a1, a2, a3, a4, a5]);

		ag.show();
	}, []);
	//if (!mounted) return null;

	return (
		<section className="flex flex-col items-center">
			<h2 ref={motivation} id="motivation" className="text-2xl md:text-3xl">
				Motivation
			</h2>
			<p className="w-full text-pretty p-4 text-base italic leading-relaxed md:w-3/4 md:p-6 md:text-lg">
				While writing technical deep dives, I{" "}
				<span ref={s1} id="s1">
					struggled
				</span>{" "}
				with{" "}
				<span ref={s2} id="s2">
					grammar
				</span>{" "}
				and{" "}
				<span ref={s3} id="s3">
					clarity
				</span>
				. Peer reviews{" "}
				<span ref={s4} className="s4 text-xs lg:text-base">
					highlighted these issues
				</span>
				, and as a non-copywriter, I found it challenging to improve. Using AI
				to refine my writing was a game-changer, and I wanted to make this
				accessible to everyone. That's why I created this product— to help
				anyone enhance their writing effortlessly.
			</p>
		</section>
	);
};

export default Motivation;
