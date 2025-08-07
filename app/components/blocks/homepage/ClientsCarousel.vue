<template>
    <section class="py-16 bg-white">
        <div class="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 class="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-berry mb-0 text-center tracking-tight">
                WHAT OUR CLIENTS SAY
            </h2>
            <div class="relative overflow-hidden py-0">
                <Carousel
                    :items-to-show="1"
                    :wrap-around="true"
                    :autoplay="10000"
                    :transition="500"
                    class="clients-carousel"
                >
                    <Slide v-for="(client, index) in clients" :key="index">
                        <div class="carousel__item flex flex-col justify-center items-center p-4 max-w-px-[50px] mb-10">
                            <img :src="client.logo" :alt="client.name" class="h-[150px] w-[150px] object-contain px-4 m-0 rounded-full shadow-md" />
                            <h3 class="text-center mt-4 text-4xl font-bold text-gray-700 my-3">{{ client.name }}</h3>
                            <p class="text-center">Our mission is to help your business thrive. With our Sydney-based team of skilled web designers and content creators,<br>we'll help you attract new leads, engage wider audiences, and boost customer loyalty.<br>Discover why our clients choose us time and time again!</p>
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
        { name: 'BagsOfJoy', logo: '/bags-of-joy.png' },
        { name: 'HappyHeartSydney', logo: '/bags-of-joy.png' }

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
