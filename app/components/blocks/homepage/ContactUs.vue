<template>
    <section class="py-16 px-4 sm:px-6 lg:px-8 bg-purple-berry rounded-xl shadow-md m-4">
        <div class="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
            <!-- Left Section: Heading and Contact Info -->
            <div>
                <h2 class="text-7xl font-bold mb-2">
                    READY TO CONNECT<span>?</span>
                </h2>
                <h2 class="text-5xl font-bold mb-8 leading-tight">
                    LET'S CHAT!
                </h2>
                <div class="space-y-1 mb-8">
                    <p class="text-lg font-semibold">PHONE</p>
                    <p class="text-2xl font-bold">044 900 6591</p>
                </div>
                <div class="space-y-1 mb-8">
                    <p class="text-lg font-semibold mt-6">EMAIL</p>
                    <p class="text-2xl font-bold">hello@weberry.com.au</p>
                </div>
            </div>

            <!-- Right Section: Contact Form -->
            <div>
                <form
                    action="https://docs.google.com/forms/d/e/1FAIpQLSeE4pYkbs5WGILmOyz8qu_A3HaB86Vd7EQw97gAbGVqJOJpNA/formResponse"
                    method="POST" class="space-y-6" @submit.prevent="handleFormSubmission">
                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <input type="text" name="entry.83887215" v-model="form.fullName" placeholder="Full Name"
                            class="w-full p-4 bg-transparent border-2 border-white rounded-lg placeholder-white text-white focus:outline-none focus:border-berry-200"
                            required />
                        <input type="text" name="entry.1597131838" v-model="form.businessName"
                            placeholder="Business Name"
                            class="w-full p-4 bg-transparent border-2 border-white rounded-lg placeholder-white text-white focus:outline-none focus:border-berry-200" />
                    </div>
                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <input type="email" name="entry.1489088299" v-model="form.email" placeholder="Email"
                            class="w-full p-4 bg-transparent border-2 border-white rounded-lg placeholder-white text-white focus:outline-none focus:border-berry-200"
                            required />
                        <input type="tel" name="entry.666084382" v-model="form.mobile" placeholder="Mobile"
                            class="w-full p-4 bg-transparent border-2 border-white rounded-lg placeholder-white text-white focus:outline-none focus:border-berry-200" />
                    </div>
                    <div>
                        <textarea name="entry.2081758880" v-model="form.projectDetails"
                            placeholder="Tell us about your project" rows="5"
                            class="w-full p-4 bg-transparent border-2 border-white rounded-lg placeholder-white text-white focus:outline-none focus:border-berry-200 resize-y"
                            required></textarea>
                    </div>
                    <div class="text-right">
                        <button type="submit"
                            class="px-10 py-4 bg-gray-700 text-white font-semibold rounded-full shadow-lg hover:bg-berry transition-colors duration-300 focus:outline-none focus:ring-4 focus:ring-white/50">
                            Submit
                        </button>
                    </div>
                    <!-- Message Display -->
                    <div v-if="message.text"
                        :class="['mt-4 p-3 rounded-lg text-center', message.type === 'success' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800']">
                        {{ message.text }}
                    </div>
                </form>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
    import { ref } from 'vue';

    const form = ref({
        fullName: '',
        businessName: '',
        email: '',
        mobile: '',
        projectDetails: '',
    });

    const message = ref({
        text: '',
        type: '', // 'success' or 'error'
    });

    const handleFormSubmission = async (event: Event) => {
        const target = event.target as HTMLFormElement;
        const formData = new FormData(target);

        const params = new URLSearchParams();
        for (const pair of formData.entries()) {
            params.append(pair[0], pair[1] as string);
        }

        // Clear previous message
        message.value = { text: '', type: '' };

        try {
            await fetch(target.action, {
                method: target.method,
                body: params,
                mode: 'no-cors',
            });

            // Assume success if no network error occurred (due to 'no-cors')
            message.value = {
                text: 'Your message has been sent! We will get back to you soon.',
                type: 'success',
            };

            // Clear the form fields after successful submission
            form.value = {
                fullName: '',
                businessName: '',
                email: '',
                mobile: '',
                projectDetails: '',
            };

            // Hide message after 1 minute (60000 milliseconds)
            setTimeout(() => {
                message.value = { text: '', type: '' };
            }, 60000);

        } catch (error) {
            console.error('Error submitting form:', error);
            message.value = {
                text: 'An error occurred while sending your message. Please try again.',
                type: 'error',
            };
            // Also hide error message after 1 minute
            setTimeout(() => {
                message.value = { text: '', type: '' };
            }, 60000);
        }
    };
</script>

<style scoped>

</style>
