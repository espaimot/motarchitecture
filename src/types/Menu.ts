import type { Languages } from "./DataInput";

export type MenuEntry = {
	title: string;
	slug: string;
	order: number;
};

export type Menu = MenuEntry[];

export type MenuMultiLang = {
	[lang in Languages]: {
		entries: Menu
	}
};
