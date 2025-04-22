// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	runtimeConfig: {
		public: {
			apiBase: process.env.API_BASE || 'http://localhost:3030/feed'
		}
	},
	modules: ['@nuxt/ui'], // '@nuxtjs/tailwindcss',
	compatibilityDate: '2024-11-01',
	devtools: { enabled: true }
})
