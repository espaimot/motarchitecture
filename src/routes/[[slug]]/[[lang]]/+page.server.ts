import { error } from '@sveltejs/kit';
import type { Languages, Pages } from '../../../types/DataInput';

export const load = async ({ params }: { params: { slug?: Pages; lang?: Languages } }) => {
	const slug = params.slug || 'home';
	const lang = params.lang || 'ca';

	try {
		const content = await import(`$lib/data/${lang}/${slug}.json`);

		return {
			content,
			lang
		};
	} catch (e) {
		if ((e as Error).message.startsWith('Unknown variable dynamic import')) {
			console.log('Could not load', slug);
			error(404, {
				message: 'Not found'
			});
		} else {
			console.log('Unknown error', e);
			throw e;
		}
	}
};
