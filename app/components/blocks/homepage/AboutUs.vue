<template>
	<section class="w-full flex justify-center p-8 md:p-16">
		<div class="max-w-7xl flex flex-col md:flex-row items-center md:items-start gap-8">
			<div class="w-full md:w-1/2 max-w-3xl mx-auto md:mx-0">
				<h1 class="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-purple-berry mb-6 sm:mb-8">
					OUR PASSION AND PURPOSE
				</h1>
				<p class="text-lg text-gray-700 mb-4 leading-relaxed">
					Since day one, our goal has been to deliver <i>outstanding web design solutions</i> at a fair
					price a principle that continues to drive our growth and success.
				</p>
				<p class="text-lg text-gray-700 mb-4 leading-relaxed">
					We understand the financial and time constraints faced by <strong>Australian businesses of every size</strong>. That's
					why we focus on providing efficient, fully managed professional websites tailored to your specific
					needs.
				</p>
				<p class="text-lg text-gray-700 mb-4 leading-relaxed">
					All our web design and digital marketing projects are managed locally from our Sydney office. This
					ensures we have the insight and expertise to help your Australian business thrive and keep your
					customers happy.
				</p>
				<button
					class="mt-8 px-6 py-3 bg-gray-700 text-white font-semibold rounded-full hover:bg-berry hover:text-white transition-colors duration-300 flex items-center gap-2">
					<span>Boost My Online Presence</span>
					<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
						<path fill-rule="evenodd"
							d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
							clip-rule="evenodd" />
					</svg>
				</button>
			</div>
			<div class="w-full md:w-1/2 flex justify-center">
				<NuxtImg src="/about-us.jpg" class="w-[80%] h-auto" />
			</div>
		</div>
	</section>
</template>

<script setup lang="ts">
// This is a static component and does not require any script logic.
// The `lang="ts"` is included as requested.
</script>

<style scoped>
/* Scoped styles can be added here if needed, but Tailwind CSS handles all current styling. */
</style>
