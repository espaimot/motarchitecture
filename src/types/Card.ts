export type ProjectCard = {
	title: string;
	subtitle: string;
	date: string;
	size: 'small' | 'medium' | 'large';
	images: { src: string; alt: string }[];
};
