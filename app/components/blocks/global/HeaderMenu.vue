<script setup lang="ts">
import { Icon } from '@iconify/vue';
import {
    NavigationMenuContent,
    NavigationMenuIndicator,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuRoot,
    NavigationMenuTrigger,
    NavigationMenuViewport,
} from 'reka-ui'
import { ref } from 'vue'
import NavigationMenuListItem from '~/components/blocks/global/NavigationMenuListItem.vue' // Ensure this path is correct

const currentTrigger = ref('')

</script>

<template>
    <header class="w-full flex justify-center py-4 px-4 sm:px-6 lg:px-8">
        <div class="bg-dark-bg-header rounded-full p-2 flex items-center justify-between shadow-lg max-w-7xl w-full">
            <!-- Logo Section -->
            <div class="flex items-center space-x-2 pl-4">
                <span class="text-white text-2xl font-bold">we<strong class="underline text-berry">B</strong>erry</span>
                <NuxtImg src="/cherries-icon.svg" class="w-6 h-auto" />
            </div>

            <!-- Navigation Links (using Reka UI Navigation Menu) -->
            <!-- The NavigationMenuRoot now serves as the central navigation for the header -->
            <NavigationMenuRoot
                v-model="currentTrigger"
                class="relative z-[1] flex justify-center flex-grow"
            >
                <NavigationMenuList class="center m-0 flex list-none rounded-lg bg-transparent p-1">

                    <!-- Overview Dropdown -->
                    <NavigationMenuItem>
                        <NavigationMenuTrigger
                            class="text-white hover:bg-purple-berry/20 focus:shadow-none group flex select-none items-center justify-between gap-[2px] rounded-[4px] px-3 py-2 text-sm font-medium leading-none outline-none focus:shadow-[0_0_0_2px]"
                        >
                            Services
                            <Icon
                                icon="radix-icons:caret-down"
                                class="text-white relative top-[1px] transition-transform duration-[150ms] ease-in group-data-[state=open]:-rotate-180"
                            />
                        </NavigationMenuTrigger>
                        <NavigationMenuContent
                            class="bg-dark-bg-header data-[motion=from-start]:animate-enterFromLeft data-[motion=from-end]:animate-enterFromRight data-[motion=to-start]:animate-exitToLeft data-[motion=to-end]:animate-exitToRight absolute top-0 left-0 w-full sm:w-auto rounded-xl shadow-lg"
                        >
                            <ul class="m-0 grid list-none gap-x-[10px] p-[22px] sm:w-[600px] sm:grid-flow-col sm:grid-rows-3">
                                <NavigationMenuListItem
                                    title="Introduction"
                                    href="/docs/primitives/overview/introduction"
                                    class="hover:bg-dark-hover-bg text-white"
                                >
                                    Build high-quality, accessible design systems and web apps.
                                </NavigationMenuListItem>
                                <NavigationMenuListItem
                                    title="Getting started"
                                    href="/docs/primitives/overview/getting-started"
                                    class="hover:bg-dark-hover-bg text-white"
                                >
                                    A quick tutorial to get you up and running with Reka UI.
                                </NavigationMenuListItem>
                                <NavigationMenuListItem
                                    title="Styling"
                                    href="/docs/primitives/guides/styling"
                                    class="hover:bg-dark-hover-bg text-white"
                                >
                                    Unstyled and compatible with any styling solution.
                                </NavigationMenuListItem>
                                <NavigationMenuListItem
                                    title="Animation"
                                    href="/docs/primitives/guides/animation"
                                    class="hover:bg-dark-hover-bg text-white"
                                >
                                    Use CSS keyframes or any animation library of your choice.
                                </NavigationMenuListItem>
                                <NavigationMenuListItem
                                    title="Accessibility"
                                    href="/docs/primitives/overview/accessibility"
                                    class="hover:bg-dark-hover-bg text-white"
                                >
                                    Tested in a range of browsers and assistive technologies.
                                </NavigationMenuListItem>
                                <NavigationMenuListItem
                                    title="Releases"
                                    href="/docs/primitives/overview/releases"
                                    class="hover:bg-dark-hover-bg text-white"
                                >
                                    Reka UI releases and their changelogs.
                                </NavigationMenuListItem>
                            </ul>
                        </NavigationMenuContent>
                    </NavigationMenuItem>

                    <NavigationMenuItem>
                        <NavigationMenuLink
                            class="text-white hover:bg-purple-berry/20 focus:shadow-none block select-none rounded-[4px] px-3 py-2 text-sm font-medium leading-none no-underline outline-none focus:shadow-[0_0_0_2px]"
                            href="https://github.com/unovue/reka-ui"
                            target="_blank"
                        >
                            About Us
                        </NavigationMenuLink>
                    </NavigationMenuItem>

                    <!-- Regular Nuxt Links for Services, Projects, Articles, etc. -->
                    <!-- These are outside the Reka UI NavigationMenu.List but still part of the header's main flex container -->
                    <NuxtLink to="/projects" class="text-white hover:text-purple-berry transition-colors duration-200 px-3 py-2 text-sm font-medium leading-none no-underline outline-none select-none rounded-[4px]">Projects</NuxtLink>
                    <!-- Learn Dropdown -->
                    <NavigationMenuItem>
                        <NavigationMenuTrigger
                            class="text-white hover:bg-purple-berry/20 focus:shadow-none group flex select-none items-center justify-between gap-[2px] rounded-[4px] px-3 py-2 text-sm font-medium leading-none outline-none focus:shadow-[0_0_0_2px]"
                        >
                            Contact Us
                            <Icon
                                icon="radix-icons:caret-down"
                                class="text-white relative top-[1px] transition-transform duration-[150ms] ease-in group-data-[state=open]:-rotate-180"
                            />
                        </NavigationMenuTrigger>
                        <NavigationMenuContent
                            class="bg-dark-bg-header data-[motion=from-start]:animate-enterFromLeft data-[motion=from-end]:animate-enterFromRight data-[motion=to-start]:animate-exitToLeft data-[motion=to-end]:animate-exitToRight absolute top-0 left-0 w-full sm:w-auto rounded-xl shadow-lg"
                        >
                            <ul class="one m-0 grid list-none gap-x-[10px] p-[22px] sm:w-[500px] sm:grid-cols-[0.75fr_1fr]">
                                <li class="row-span-3 grid">
                                    <NavigationMenuLink as-child>
                                        <a
                                            class="bg-gradient-to-br from-purple-9 to-indigo-9 flex h-full w-full select-none flex-col justify-end rounded-lg p-[25px] no-underline outline-none focus:shadow-[0_0_0_2px] focus:shadow-purple-berry"
                                            href="/public"
                                        >
                                            <NuxtImg
                                                class="w-50 h-50 object-cover shadow-lg"
                                                src="/maps.png"
                                                alt="weBerry Maps"
                                            />
                                            <div class="mt-4 mb-[7px] text-[18px] font-medium leading-[1.2] text-white">Our offices</div>
                                            <p class="text-mauve-4 text-[14px] leading-[1.3]">We are based in Western Sydney.</p>
                                        </a>
                                    </NavigationMenuLink>
                                </li>

                                <NavigationMenuListItem
                                    href="https://stitches.dev/"
                                    title="South West Sydney"
                                    class="hover:bg-dark-hover-bg text-white"
                                >
                                    Seedling St, Austral, 2179, NSW, Australia
                                </NavigationMenuListItem>
                                <NavigationMenuListItem
                                    href="/colors"
                                    title="Inner Western Sydney"
                                    class="hover:bg-dark-hover-bg text-white"
                                >
                                    Delit Pl, Doonside, 2767, NSW, Australia
                                </NavigationMenuListItem>
                                <NavigationMenuListItem
                                    href="https://lucide.dev/icons/"
                                    title="North West Sydney"
                                    class="hover:bg-dark-hover-bg text-white"
                                >
                                    Oban St, Schofields, 2762, NSW, Australia
                                </NavigationMenuListItem>
                            </ul>
                        </NavigationMenuContent>
                    </NavigationMenuItem>
                </NavigationMenuList>

                <div class="perspective-[2000px] absolute top-full left-0 flex w-full justify-center ">
                    <NavigationMenuViewport
                        class="data-[state=open]:animate-scaleIn data-[state=closed]:animate-scaleOut relative mt-[10px] h-[var(--reka-navigation-menu-viewport-height)] w-full origin-[top_center] overflow-hidden rounded-xl bg-white transition-[width,_height] duration-300 sm:w-[var(--reka-navigation-menu-viewport-width)] border shadow-sm"
                    />
                </div>
            </NavigationMenuRoot>

            <!-- Right Section: Theme Toggle and Buttons -->
            <div class="flex items-center space-x-4">
                <!-- Theme Toggle Icon (Sun) -->
                <button class="p-2 rounded-full hover:bg-purple-berry/20 transition-colors duration-200">
                    <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                         xmlns="http://www.w3.org/2000/svg">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                              d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.325 3.325l-.707.707M6.364 6.364l-.707-.707m12.728 0l-.707-.707M6.364 17.636l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"></path>
                    </svg>
                </button>

                <!-- Let's Talk Button -->
                <NuxtLink to="/contact"
                          class="bg-purple-berry text-white px-6 py-2 rounded-full text-base font-semibold shadow-md hover:bg-purple-berry-hover transition-colors duration-200">
                    Let's Talk
                </NuxtLink>
            </div>
        </div>
    </header>
</template>
