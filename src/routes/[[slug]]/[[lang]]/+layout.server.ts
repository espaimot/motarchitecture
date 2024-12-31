import menu from '$lib/data/menu.json';
import type { Languages, Pages } from '../../../types/DataInput';

export const load = async ({ params }: { params: { slug?: Pages; lang?: Languages } }) => {
	const defaultLang = 'ca';

	const slug = params.slug || 'home';
	const lang = params.lang || defaultLang;
	const menuEntries = menu

	return {
		slug,
		lang,
		defaultLang,
		menu: menuEntries
	};
};
