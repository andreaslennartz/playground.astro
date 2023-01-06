/**
 * This configures the navigation sidebar.
 * All other languages follow this ordering/structure and will fall back to
 * English for any entries they haven’t translated.
 *
 * - All entries MUST include `text` and `key`
 * - Heading entries MUST include `header: true` and `type`
 * - Link entries MUST include `slug` (which excludes the language code)
 * 
 * 	{ text: 'Reference', header: true, type: 'api', key: 'reference' },
	{ text: 'Test1', slug: 'recipe/test1', key: 'recipe/test1' },
 */
export default [
	{ text: 'Start Here', header: true, type: 'learn', key: 'startHere' },
	{ text: 'Getting Started', slug: 'docs/getting-started/quick-start', key: 'docs/getting-started/quick-start' },


] as const;
