
import data from '$lib/data/data.json';
import type { DataTypeLang, DataTypeMultilang, Pages } from '../types/DataInput';


export const load = async ({ params }: { params: { slug?: Pages } }) => {

	const slug = params.slug  || 'home';
	const lang = 'cat';
	const content = data[lang as keyof DataTypeMultilang][slug as keyof DataTypeLang];
	

	return {
          content
	};
};