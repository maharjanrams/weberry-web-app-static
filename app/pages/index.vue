<template #head>
      <title>Website development near me - WeBerry</title>
      <meta name="keywords" content="digital marketing, wordpress web development, SEO, online marketing, social media, email marketing, analytics, conversion rate optimization, e-commerce solutions, mobile app development, software development, cloud services, IT consulting, web design, graphic design">
      <meta name="description" content="Weberry is your digital growth partner, offering a wide range of services including digital marketing, web development, SEO, branding, and more. Let us help you grow your online presence and achieve your business goals.">
      <meta property="og:title" content="Weberry - Your Digital Growth Partner">
      <meta property="og:description" content="Weberry is your digital growth partner, offering a wide range of services including digital marketing, web development, SEO, branding, and more. Let us help you grow your online presence and achieve your business goals.">
      <meta property="og:image" content="https://weberry.com.au/images/og-image.jpg">
      <meta property="og:url" content="https://weberry.com.au">
      <meta name="twitter:card" content="summary_large_image">
      <meta name="twitter:title" content="Weberry - Your Digital Growth Partner">
      <meta name="twitter:description" content="Weberry is your digital growth partner, offering a wide range of services including digital marketing, web development, SEO, branding, and more. Let us help you grow your online presence and achieve your business goals.">
      <meta name="twitter:image" content="https://weberry.com.au/images/twitter-image.jpg">
      <div>
            <HeaderMenu />
            <HeroBanner />
            <AboutUs />
            <Services />
            <ClientsCarousel />
            <ContactUs />
            <Footer />
      </div>
</template>

<script setup>
    import HeaderMenu from '~/components/blocks/global/HeaderMenu.vue';
    import HeroBanner from "~/components/blocks/homepage/HeroBanner.vue";
    import AboutUs from "~/components/blocks/homepage/AboutUs.vue";
    import Services from "~/components/blocks/homepage/Services.vue";
    import ClientsCarousel from '~/components/blocks/homepage/ClientsCarousel.vue';
    import ContactUs from '~/components/blocks/homepage/ContactUs.vue';
    import Footer from '~/components/blocks/global/Footer.vue';
</script>