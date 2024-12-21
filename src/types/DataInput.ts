export type Languages = 'ca' | 'en' | 'es';
export type Pages = 'home' | 'projectes' | 'contacte' | 'menu';

export type PageData = {
	title: string;
	metadescription: string;
	background: {
		src: string;
		alt: string;
		code: null;
		isP5enabled: boolean;
	};
	contact: {
		src: string;
		alt: string;
		text: string;
	};
	projects: {
		title: string;
		subtitle: string;
		size: string;
		date: string;
		images: {
			src: string;
			alt: string;
		}[];
	}[];
	timelineProjects: {
		description: string;
		date: string;
	}[];
};
