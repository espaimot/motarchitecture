import data from '$lib/data/data.json';
import type { DataTypeMultilang, Languages, Pages } from "../../../types/DataInput";

export const load = async ({ params }: { params: { slug?: Pages, lang?: Languages } }) => {

	const defaultLang = 'cat';

	const slug = params.slug  || 'home';
	const lang = params.lang || defaultLang;
	const menu = data[lang as keyof DataTypeMultilang]['menu'];

	return {
		slug,
		lang,
		defaultLang,
        menu
	};
};