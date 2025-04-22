export const useFeed = () => {
	const config = useRuntimeConfig()
	const feedId = ref('')
	const feedData = ref<any[]>([])
	const loading = ref(false)

	const createFeed = async (query: string) => {
		const res = await $fetch<{ id: string }>(config.public.apiBase as string, {
			method: 'POST',
			body: { query }
		})
		feedId.value = res.id
		pollFeed()
	}

	const pollFeed = async () => {
		loading.value = true
		const interval = setInterval(async () => {
			const data = await $fetch<{ status: string; data: any[] }>(
				`${config.public.apiBase as string}/${feedId.value}`
			)

			feedData.value = data.data
			if (data.status === 'ready' || data.status === 'error') {
				clearInterval(interval)
				loading.value = false
			}
		}, 2000)
	}

	return {
		feedId,
		feedData,
		loading,
		createFeed
	}
}
