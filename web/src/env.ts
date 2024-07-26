import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const env = createEnv({
	client: {
		NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY: z.string().min(1),
		NEXT_PUBLIC_BASE_URL: z.string().url(),
	},
	server: {
		CLERK_SECRET_KEY: z.string().min(10),
	},
	// For Next.js >= 13.4.4, you only need to destructure client variables:
	experimental__runtimeEnv: {
		NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY:
			process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY,
		NEXT_PUBLIC_BASE_URL: process.env.NEXT_PUBLIC_BASE_URL,
	},
});
