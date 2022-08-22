export const SITE = {
	title: 'ETLBox',
	description: 'A lightweight ETL (extract, transform, load) toolbox and data integration library for .NET',
	defaultLanguage: 'en_US',
};

export const OPEN_GRAPH = {
	image: {
		src: 'https://www.etlbox.net/android-chrome-512x512.png',
		alt:
			'ETLBox'
	},
	twitter: 'etlbox',
};

export const KNOWN_LANGUAGES = {
	English: 'en',
};

// Uncomment this to add an "Edit this page" button to every page of documentation.
export const GITHUB_EDIT_URL = `https://github.com/withastro/astro/blob/main/docs/`;

// Uncomment this to add an "Join our Community" button to every page of documentation.
// export const COMMUNITY_INVITE_URL = `https://astro.build/chat`;

// Uncomment this to enable site search.
// See "Algolia" section of the README for more information.
export const ALGOLIA = {
	indexName: 'XXXXXXXXXX',
	appId: 'XXXXXXXXXX',
	apiKey: 'XXXXXXXXXX',
}

export const SIDEBAR = {
	en: [		
		{ text: 'Getting started', header: true },		
		{ text: 'Quickstart', link: 'en/getting-started/quick-start' },
		{ text: 'Simple flow', link: 'en/getting-started/simple-flow' },		
		{ text: 'Working with types', link: 'en/getting-started/types' },
		{ text: 'Linking components', link: 'en/getting-started/linking' },
		{ text: 'Network execution', link: 'en/getting-started/execution' },
		{ text: 'Component basics', link: 'en/getting-started/component-basics' },
	],
};
