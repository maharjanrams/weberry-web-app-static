<template>
    <section class="py-16 bg-white">
        <div class="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 class="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-purple-berry mb-12 text-center tracking-tight">
                OUR RECENT CLIENTS
            </h2>
            <p class="max-w-3xl mx-auto text-gray-600 text-lg text-center leading-relaxed">
                Our mission is to help your business thrive. With our Sydney-based team of skilled web designers and content creators, we'll help you attract new leads, engage wider audiences, and boost customer loyalty. Discover why our clients choose us time and time again!
            </p>
            <div class="relative overflow-hidden py-8">
                <Carousel
                    :items-to-show="5"
                    :wrap-around="true"
                    :autoplay="2000"
                    :transition="500"
                    class="clients-carousel"
                >
                    <Slide v-for="(client, index) in clients" :key="index">
                        <div class="carousel__item flex flex-col justify-center items-center p-4">
                            <img :src="client.logo" :alt="client.name" class="w-auto px-4" />
                            <!-- <span class="mt-4 text-lg font-bold text-gray-700">{{ client.name }}</span> -->
                        </div>
                    </Slide>

                    <template #addons>
                        <Navigation />
                        <Pagination />
                    </template>
                </Carousel>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
    import { ref } from 'vue';
    import 'vue3-carousel/dist/carousel.css';
    import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel';

    // Define the type for a client logo
    interface Client {
        name: string;
        logo: string;
    }

    // Dummy data for client logos
    const clients = ref<Client[]>([
        { name: 'SewaCare', logo: '/sewa-care.png' },
        { name: 'OzProCleaning', logo: '/oz-professional.png' },
        { name: 'BagsOfJoy', logo: '/bags-of-joy.png' }

    ]);
</script>

<style scoped>
    /* Custom styles for the carousel, if needed */
    .clients-carousel :deep(.carousel__slide) {
        padding: 10px;
    }

    .clients-carousel :deep(.carousel__prev),
    .clients-carousel :deep(.carousel__next) {
        box-sizing: content-box;
        border: 5px solid white;
    }
</style>
