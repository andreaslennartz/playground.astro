export const SITE = {
	title: 'ETLBox',
	description: 'Your website description.',
	defaultLanguage: 'en',
};

// This is the type of the frontmatter you put in the docs markdown files.
export type Frontmatter = {
	title: string;
	description: string;
	layout: string;
	lang?: string;
};

export const KNOWN_LANGUAGES = {
	English: 'en',
	German: 'de',
} as const;

export const KNOWN_LANGUAGE_CODES = Object.values(KNOWN_LANGUAGES);

export type Sidebar = Record<
	typeof KNOWN_LANGUAGE_CODES[number],
	Record<string, { text: string; link: string }[]>
>;
export const SIDEBAR_DOCS: Sidebar = {
	en: {
		'Section Header': [
			{ text: 'Introduction', link: 'en/introduction' },
			{ text: 'Page 2', link: 'en/page-2' },
			{ text: 'Page 3', link: 'en/page-3' },
		],
		'Another Section': [{ text: 'Page 4', link: 'en/page-4' }],
	},
	de: {
		'Section Header': [
			{ text: 'Einleitung', link: 'de/introduction' },
		]
	},
};