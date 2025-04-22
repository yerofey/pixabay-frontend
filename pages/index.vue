<template>
	<div class="p-6 max-w-3xl mx-auto space-y-6">
		<UCard>
			<template #header>
				<h1 class="text-2xl font-bold">Pixabay Image Feed</h1>
			</template>

			<UForm @submit.prevent="createFeed(query)" class="space-y-4">
				<UInput
					v-model="query"
					placeholder="Type a keyword (e.g. Dog, Space)"
					size="lg"
				/>
				<UButton type="submit" color="primary" :loading="loading">
					Generate
				</UButton>
			</UForm>
		</UCard>

		<div v-if="feedData.length">
			<h2 class="text-xl font-semibold mt-6 mb-2">Images</h2>

			<div class="grid md:grid-cols-2 gap-4">
				<UCard v-for="(pair, i) in feedData" :key="i">
					<template #header>
						<div class="flex justify-between font-medium text-sm text-gray-500">
							<span>Pair {{ i + 1 }}</span>
						</div>
					</template>

					<div class="space-y-2">
						<div>
							<div class="text-sm font-medium text-gray-700 mb-1">Regular</div>
							<img
								v-if="pair.regular?.image"
								:src="pair.regular.image"
								class="rounded shadow w-full"
							/>
							<div v-else class="text-gray-400 italic">
								⏳ {{ pair.regular?.state }}
							</div>
							<div v-if="pair.regular?.tags" class="text-xs text-gray-500 mt-1">
								{{ pair.regular.tags }}
							</div>
						</div>

						<div>
							<div class="text-sm font-medium text-gray-700 mb-1">Graffiti</div>
							<img
								v-if="pair.graffiti?.image"
								:src="pair.graffiti.image"
								class="rounded shadow w-full"
							/>
							<div v-else class="text-gray-400 italic">
								⏳ {{ pair.graffiti?.state }}
							</div>
							<div
								v-if="pair.graffiti?.tags"
								class="text-xs text-gray-500 mt-1"
							>
								{{ pair.graffiti.tags }}
							</div>
						</div>
					</div>
				</UCard>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
const query = ref("");
const { createFeed, feedData, loading } = useFeed();
</script>
