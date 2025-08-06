<template>
    <footer class="text-gray-900 py-8 px-4 sm:px-6 lg:px-8 rounded-xl m-4 shadow-md">
        <div class="container mx-auto text-center">
            <p class="text-sm">
                &copy; {{ currentYear }} weBerry. All rights reserved.
            </p>
        </div>
    </footer>
</template>

<script setup lang="ts">
    import { ref } from 'vue';

    const currentYear = ref(new Date().getFullYear());
</script>

<style scoped>

</style>
