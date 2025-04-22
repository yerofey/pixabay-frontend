<template>
	<NuxtPage />
</template>

<script setup>
useHead({
	title: "Pixabay App",
	meta: [
		{
			name: "description",
			content: "Generate beautiful image feeds from Pixabay",
		},
	],
	link: [{ rel: "icon", type: "image/png", href: "/icon.png" }],
});
</script>
