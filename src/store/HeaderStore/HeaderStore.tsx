import { atom } from "recoil";

export const headerTitleState = atom({
	key: "headerTitleState",
	default: "Test"
});

export const dynamicTitleState = atom({
	key: "dynamicTitleState",
	default: false
});
