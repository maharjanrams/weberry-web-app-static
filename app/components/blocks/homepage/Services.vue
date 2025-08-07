<template>
    <section class="py-16 bg-gray-100 m-4">
        <div class="container mx-auto px-4 sm:px-6 lg:px-8">
            <!-- Section Header -->
            <div class="text-center mb-12">
                <h2 class="text-6xl font-extrabold text-berry mb-2 tracking-tight">
                    OUR EXPERTISE
                </h2>
                <p class="text-xl font-semibold text-gray-700 mb-8">
                    TAILORED SOLUTIONS FOR YOU
                </p>
                <p class="max-w-3xl mx-auto text-gray-600 text-lg leading-relaxed">
                    Whether your goal is to boost sales, expand your customer base, or establish a strong digital
                    footprint for your brand, we're here to help you achieve tangible outcomes.
                </p>
            </div>

            <!-- Service Cards Grid -->
            <div class="grid grid-cols-1 md:grid-cols-3 gap-10 mt-12">
                <!-- Web Design Card -->
                <div
                    class="flex flex-col items-center text-center p-8 bg-white rounded-xl shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
                    <div class="mb-6">
                        <!-- Icon for Web Design - Replaced with nuxt-icon -->
                        <Icon name="heroicons:computer-desktop" class="w-16 h-16 text-purple-berry" />
                    </div>
                    <h3 class="text-2xl font-bold text-gray-900 mb-4 uppercase">Web Design & Development</h3>
                    <p class="text-gray-600 mb-6 leading-relaxed">
                        We craft intuitive, high-performing websites designed to deliver measurable results. Each site
                        is custom-built to align perfectly with your unique business objectives and help you reach your
                        aspirations.
                    </p>
                    <a href="#" class="text-gray-800 hover:text-berry-600 transition-colors duration-300">
                        <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                        </svg>
                    </a>
                </div>

                <!-- Web Management Card -->
                <div
                    class="flex flex-col items-center text-center p-8 bg-white rounded-xl shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
                    <div class="mb-6">
                        <!-- Icon for Web Management - Replaced with nuxt-icon -->
                        <Icon name="heroicons:cog-8-tooth" class="w-16 h-16 text-purple-berry" />
                    </div>
                    <h3 class="text-2xl font-bold text-gray-900 mb-4 uppercase">Website Maintenance & Growth</h3>
                    <p class="text-gray-600 mb-6 leading-relaxed">
                        Ensure your website runs smoothly with our comprehensive management services, including routine
                        software updates, vigilant security monitoring, and fresh content integration. We handle the
                        technical details so you can concentrate on your core business.
                    </p>
                    <a href="#" class="text-gray-800 hover:text-berry-600 transition-colors duration-300">
                        <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                        </svg>
                    </a>
                </div>

                <!-- Digital Marketing Card -->
                <div
                    class="flex flex-col items-center text-center p-8 bg-white rounded-xl shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
                    <div class="mb-6">
                        <!-- Icon for Digital Marketing - Replaced with nuxt-icon -->
                        <Icon name="heroicons:chart-bar" class="w-16 h-16 text-purple-berry" />
                    </div>
                    <h3 class="text-2xl font-bold text-gray-900 mb-4 uppercase">Results-Driven Digital Marketing</h3>
                    <p class="text-gray-600 mb-6 leading-relaxed">
                        Leverage our expertise in crafting captivating digital content across diverse industries,
                        designed to captivate your audience and inspire meaningful action.
                    </p>
                    <a href="#" class="text-gray-800 hover:text-berry-600 transition-colors duration-300">
                        <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                        </svg>
                    </a>
                </div>
            </div>

            <!-- Discover More Button -->
            <div class="flex justify-center text-center mt-16">
                <button
                    class="mt-8 px-6 py-5 bg-gray-700 text-white font-semibold rounded-full hover:bg-berry hover:text-white transition-colors duration-300 flex items-center gap-2">
                    Explore Our Full Range of Services
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
						<path fill-rule="evenodd"
							d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
							clip-rule="evenodd" />
					</svg>
                </button>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
// No specific script logic needed for this static component
</script>

<style scoped>
/*
  You can add any component-specific styles here if needed,
  but Tailwind CSS handles most of the styling.
*/
</style>
