import type { AstroIntegration } from 'astro';
import type { Root } from 'mdast';
import type { Plugin, Transformer } from 'unified';
import { visit } from 'unist-util-visit';

const ExternalLinkTagName = 'ExternalLink';

export function remarkExternalLink(): Plugin<[], Root> {
	/*const visitor: BuildVisitor<Root, 'code'> = (code, index, parent) => {
		;
	};*/

	const transformer: Transformer<Root> = (tree) => {
		visit(tree, (node) => {
			if (node.type !== 'link') return;
			
			if (node.url.startsWith('EXT:') && node.children.length === 1 && node.children[0].type === 'text') {
				const extUrl = node.url.replace('EXT:','');
				const extText = node.children[0].value;
				node.type='text';
				delete node.children;
				delete node.url;
				delete node.title;
				node.value='<'+ExternalLinkTagName + ' url="'+extUrl+'" text="'+extText+'" />';
			}
		});
	};


	return function attacher() {
		return transformer;
	};
}

/**
 * Own integration that converts hugo syntax into custom html
 */
 export function externalLink(): AstroIntegration {
	return {
		name: '@etlbox/externallink',
		hooks: {
			'astro:config:setup': ({ injectScript, updateConfig }) => {
				updateConfig({
					markdown: {
						remarkPlugins: [remarkExternalLink()],
					},
				});

				// Auto-import the Aside component and attach it to the global scope
				injectScript('page-ssr', `import ${ExternalLinkTagName} from "~/components/ExternalLink/ExternalLink.astro"; global.${ExternalLinkTagName} = ${ExternalLinkTagName};`);
			},
		},
	};
}

