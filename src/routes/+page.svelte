<script lang="ts">
	import { writable } from 'svelte/store';

	export let data;

	let form = writable(data.form);

	function addTag() {
		$form.data.tags['third'] = 3;
	}
</script>

<pre>{JSON.stringify($form, null, 2)}</pre>

<button onclick={addTag}>Add a tag</button>
