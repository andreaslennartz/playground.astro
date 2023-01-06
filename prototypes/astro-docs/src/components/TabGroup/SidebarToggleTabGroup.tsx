import { useState } from 'preact/hooks';
import './TabGroup.css';

interface Props {
	defaultActiveTab: 'learn' | 'recipe' | 'api' | 'pricing';
	labels: {
		learn: string;
		recipe: string;
		api: string;
		pricing: string;
	};
}

const SidebarToggleTabGroup = ({ defaultActiveTab, labels }: Props) => {
	const [activeTab, setActiveTab] = useState(defaultActiveTab);
	function toggleType(type: 'learn' | 'recipe' | 'api' | 'pricing') {
		document.querySelectorAll(`li.nav-group`).forEach((el) => el.classList.remove('active'));
		document.querySelectorAll(`li.nav-group.${type}`).forEach((el) => el.classList.add('active'));
		setActiveTab(type);
	}
	return (
		<div class="TabGroup">
			<button class={activeTab === 'learn' ? 'active' : ''} onClick={() => toggleType('learn')}>
				{labels.learn}
			</button>
			<button class={activeTab === 'recipe' ? 'active' : ''} onClick={() => toggleType('recipe')}>
				{labels.recipe}
			</button>
			<button class={activeTab === 'api' ? 'active' : ''} onClick={() => toggleType('api')}>
				{labels.api}
			</button>
			<button class={activeTab === 'pricing' ? 'active' : ''} onClick={() => toggleType('pricing')}>
				{labels.pricing}
			</button>
		</div>
	);
};

export default SidebarToggleTabGroup;