module.exports = {
	moduleNameMapper: {
		"\\.(jpg|ico|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$":
			"<rootDir>/__mocks__/fileMock.js",
		"\\.(css|less|scss|sass)$": "<rootDir>/__mocks__/styleMock.js"
	},
	collectCoverageFrom: ["src/**/*test.{tsx}"],
	transformIgnorePatterns: ["/node_modules/", "/cypress/", "/dist"],
	coveragePathIgnorePatterns: ["/node_modules/", "/cypress/", "/dist"],
	testPathIgnorePatterns: ["/node_modules/", "/cypress/", "/dist"],
	coverageThreshold: {
		global: {
			statements: 98,
			branches: 91,
			functions: 98,
			lines: 98
		}
	},
	setupFiles: ["./setupTests.js"]
};
