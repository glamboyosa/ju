"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
const buttonCopy = {
	idle: (
		<span className="flex items-center gap-1">
			{" "}
			<Mail className="mr-2 h-4 w-4" /> Login with Email{" "}
		</span>
	),
	loading: (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="15"
			height="15"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			stroke-width="2"
			stroke-linecap="round"
			stroke-linejoin="round"
			className="animate-spin"
		>
			<title>loading svg</title>
			<path d="M21 12a9 9 0 1 1-6.219-8.56" />
		</svg>
	),
	success: "Login link sent!",
};

export default function AuthButton() {
	const [buttonState, setButtonState] = useState<
		"idle" | "loading" | "success"
	>("idle");

	return (
		<div className="outer-wrapper">
			<Button
				size={"sm"}
				variant={"default"}
				className="w-[250px] md:w-[280px]"
				disabled={buttonState === "loading"}
				onClick={() => {
					// let this be from server actions
					if (buttonState === "success") return;

					setButtonState("loading");

					setTimeout(() => {
						setButtonState("success");
					}, 1750);

					setTimeout(() => {
						setButtonState("idle");
					}, 3500);
				}}
			>
				<AnimatePresence mode="popLayout" initial={false}>
					<motion.span
						transition={{ type: "spring", duration: 0.3, bounce: 0 }}
						initial={{ opacity: 0, y: -25 }}
						animate={{ opacity: 1, y: 0 }}
						exit={{ opacity: 0, y: 25 }}
						key={buttonState}
					>
						{buttonCopy[buttonState]}
					</motion.span>
				</AnimatePresence>
			</Button>
		</div>
	);
}
