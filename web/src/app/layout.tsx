import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import { Toaster } from "sonner";
import Nav from "@/components/nav/nav";
import { marker } from "@/lib/font";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
	title: "Jū",
	description:
		"AI Powered advanced grammar correction and style enhancements for technical and creative writing.",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" suppressHydrationWarning>
			<body
				className={cn(
					marker.className,
					"bg-white text-white dark:bg-black dark:text-white",
				)}
			>
				<ThemeProvider enableSystem attribute="class">
					<Nav />
					{children}
					<Toaster />
				</ThemeProvider>
			</body>
		</html>
	);
}
