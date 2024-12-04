"use client";
import { Input } from "@/components/ui/input";
import AuthButton from "./_components/auth-button";
import { useSignUp } from "@clerk/nextjs";
import React from "react";
import { useRouter } from "next/router";

export default function Home() {
	const [expired, setExpired] = React.useState(false);
	const [verified, setVerified] = React.useState(false);
	const router = useRouter();
	const { signUp, setActive } = useSignUp();

	async function loginHandler(event: React.FormEvent<HTMLFormElement>) {
		event.preventDefault();
		const formData = new FormData(event.target as HTMLFormElement);
		const email = formData.get("email") as string;
		if (!signUp) {
			return;
		}
		const { startEmailLinkFlow } = signUp.createEmailLinkFlow();
		// Start the sign up flow, by collecting
		// the user's email address.
		await signUp.create({ emailAddress: email });

		// Start the email link flow.
		// Pass your app URL that users will be navigated
		// when they click the email link from their
		// email inbox.
		// su will hold the updated sign up object.
		const su = await startEmailLinkFlow({
			redirectUrl: `${process.env.NEXT_PUBLIC_BASE_URL}/verification`,
		});

		// Check the verification result.
		const verification = su.verifications.emailAddress;
		if (verification.verifiedFromTheSameClient()) {
			setVerified(true);
			// If you're handling the verification result from
			// another route/component, you should return here.
			// See the <EmailLinkVerification/> component as an
			// example below.
			// If you want to complete the flow on this tab,
			// don't return. Check the sign up status instead.
			return;
		}
		if (verification.status === "expired") {
			setExpired(true);
		}

		if (su.status === "complete") {
			// Sign up is complete, we have a session.
			// Navigate to the after sign up URL.
			setActive({
				session: su.createdSessionId,
				beforeEmit: () => router.push("/after-sign-up-path"),
			});
			return;
		}
	}
	if (expired) {
		return (
			<main className="flex min-h-screen flex-col items-center justify-center gap-3 p-24">
				<div>Email link has expired</div>
			</main>
		);
	}

	if (verified) {
		return (
			<main className="flex min-h-screen flex-col items-center justify-center gap-3 p-24">
				<div>Signed in on other tab</div>
			</main>
		);
	}
	return (
		<main className="flex min-h-screen flex-col items-center justify-center gap-3 p-24">
			<div className="flex w-full flex-col items-center gap-8 rounded-md border border-black/10 px-2 py-4 shadow-black/40 shadow-lg md:w-[380px] dark:border-white/50 dark:shadow-white/40">
				<div className="mt-4 flex flex-col gap-3">
					<h1 className="font-bold text-black dark:text-white">Login to Jū</h1>
					<p className="text-gray-500 text-xs dark:text-gray-300">
						Hey there! Please login to Jū to continue
					</p>
				</div>
				<form
					onSubmit={loginHandler}
					className="flex w-full flex-col items-center gap-4"
				>
					<Input
						type="email"
						placeholder="Email"
						name="email"
						className="w-full md:w-[280px]"
					/>
					<AuthButton />
				</form>
			</div>
		</main>
	);
}
