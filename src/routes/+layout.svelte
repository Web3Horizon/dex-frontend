<script lang="ts">
	import { Header, Background } from '$lib/components';

	// Applies styles to the whole app
	import '../app.css';

	let { children } = $props();
</script>

<Header></Header>
<Background></Background>
<!-- Render all the children, i.e. nested routes -->
{@render children()}
