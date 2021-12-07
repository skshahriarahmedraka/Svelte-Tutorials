import App from './4.adding style/App.svelte';

const app = new App({
	target: document.body,
	props: {
		name: 'world'
	}
});

export default app;