<script lang="ts">
	import { goto } from '$app/navigation';
	let { children, ...props } = $props();

	async function onclick() {
		try {
			const response = await fetch('/api/checkout', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				}
			});
			const { url } = await response.json();
			if (url) {
				window.location.href = url;
			}
		} catch (error) {
			goto('/checkout/failure');
		}
	}
</script>

<button {...props} {onclick}>{@render children()}</button>

<style>
	button {
		background-color: black;
		color: white;
		padding: 20px 24px;
		font-weight: normal;
		font-size: 22px;
		text-transform: uppercase;
		transition: all 0.3s;
		border: 1px solid white;
	}

	button:hover {
		background-color: white;
		color: black;
		cursor: pointer;
	}
</style>
