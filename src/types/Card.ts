export type ProjectCard = {
	title: string;
	subtitle: string;
	date: string;
	size: 'small' | 'medium' | 'large';
	images: { src: string; alt: string }[];
	column: number;
	row: number;
};

export type TimelineCard = {
	description: string;
	date: string;
};

export type ContactCard = {
	image: {
		src: string;
		alt: string;
	};
	text: string;
	phone: string;
	email: string;
	instagram: string;
};
