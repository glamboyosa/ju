import { Input } from "@/components/ui/input";
import AuthButton from "./_components/auth-button";

export default function Home() {
	return (
		<main className="flex min-h-screen flex-col items-center justify-center gap-3 p-24">
			<div className="flex w-full flex-col items-center gap-8 rounded-md border border-black/10 px-2 py-4 shadow-black/40 shadow-lg md:w-[380px] dark:border-white/50 dark:shadow-white/40">
				<div className="mt-4 flex flex-col gap-3">
					<h1 className="font-bold text-black dark:text-white">Login to Jū</h1>
					<p className="text-gray-500 text-xs dark:text-gray-300">
						Hey there! Please login to Jū to continue
					</p>
				</div>
				<div className="flex w-full flex-col items-center gap-4">
					<Input
						type="email"
						placeholder="Email"
						className="w-full md:w-[280px]"
					/>
					<AuthButton />
				</div>
			</div>
		</main>
	);
}
