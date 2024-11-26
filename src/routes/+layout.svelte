<script lang="ts">
	import '../app.css';
	let { children } = $props();

	import { MeshSdkState } from '$lib/index.js';
	import { onMount } from 'svelte';

	const { loadMeshSdk } = MeshSdkState;

	onMount(() => {
		loadMeshSdk()
			.then()
			.catch((e) => console.error('error loading mesh:', e));
	});
</script>

{@render children()}
