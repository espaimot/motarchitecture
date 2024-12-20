export const load = async () => {
	const slug = 'home';
	const lang = 'cat';
       
	const menu = {
		home: 'Espai.MOT',
		projects: 'Projectes',
		contact: 'Contacte'
	};

	return {
		slug,
		lang,
        menu
	};
};