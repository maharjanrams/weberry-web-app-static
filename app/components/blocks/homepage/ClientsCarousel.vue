<template>
    <section class="py-16 bg-white">
        <div class="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 class="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-berry mb-0 text-center tracking-tight">
                OUR RECENT CLIENTS
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
                            <h3 class="text-center mt-4 text-3xl font-bold text-gray-900 my-3">{{ client.name }}</h3>
                            <p class="text-center max-w-[650px] text-xl">{{ client.text }}</p>
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
        text: string;
        logo: string;
    }

    // Dummy data for client logos
    const clients = ref<Client[]>([
        {
            name: 'SewaCare',
            text: 'SewaCare is a leading provider of home care services in Australia, dedicated to enhancing the quality of life for our clients.',
            logo: '/sewa-care.png'
        },
        { 
            name: 'OzProCleaning',
            text: 'OzProCleaning is a professional cleaning service in Australia, offering top-notch cleaning solutions for homes and businesses.',
            logo: '/oz-professional.png'
        },
        { 
            name: 'BagsOfJoy',
            text: 'Bags of Joy is an ecommerce shopify based online shop that specializes in providing fun and interesting fidget toys for all occasions for your kids.',
            logo: '/bags-of-joy.png'
        },
        { 
            name: 'HappyHeartSydney',
            text: 'Happy Heart Sydney offers a vibrant array of entertainment services tailored for children and families. Their offerings include face painting, balloon twisting, interactive games, and creative workshops, all designed to engage and delight guests of all ages',
            logo: '/happy-heart-sydney.png'
        }
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
        border: 2px solid white;
        width: 86px;
        height: 86px;
        font-size: 2rem;
        font-weight: 200;
        display: flex;
        align-items: center;
        justify-content: center;
    }
</style>
