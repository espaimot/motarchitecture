export type Languages = 'cat' | 'en' | 'es';
export type Pages = 'home' | 'projectes' | 'contacte' | 'menu';

export type DataTypeMultilang = {
  [key in Languages]: DataType
};

export type DataTypeLang = {
	[key in Pages]: DataType;
};

export type DataType = {
	background: {
		isP5enabled: boolean;
		alt: string;
		code: null;
		src: string;
	};
	projectList: {
		title: string;
		subtitle: string;
		date: string;
		size: string;
		images: {
		  src: string;
		  alt: string;
		}[];
	}[];
}