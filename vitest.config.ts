import { defineProject } from "vitest/config";

export default defineProject({
	test: {
		name: "base",
		environment: "node",
		include: ["src/**/*.test.{ts,js}"],
		exclude: ["node_modules/**", "dist/**"],
		testTimeout: 10000,
		hookTimeout: 10000,
	},
});
