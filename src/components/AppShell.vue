<template>
  <div class="min-h-full">
    <div class=" dark:bg-gray-800">
      <Disclosure
        as="nav"
        class="bg-gray-500 dark:bg-gray-800 border-b border-gray-300 border-opacity-25 lg:border-none"
        v-slot="{ open }"
      >
        <div
          class="w-full mx-auto px-2 sm:px-4 lg:px-8 fixed left-0 top-0 z-20 bg-gray-300 dark:bg-gray-700"
        >
          <div
            class="relative h-16 flex items-center justify-between lg:border-b lg:border-gray-400 lg:border-opacity-25"
          >
            <div class="px-2 flex items-center lg:px-0">
              <RouterLink :to="{name: 'Home'}" class="flex-shrink-0">
                <img
                  class="block h-8 w-10"
                  src="../../public/nanvani-logo.png"
                  alt="main logo"
                />
              </RouterLink>
              <div class="hidden lg:block lg:ml-10">
                <div class="flex space-x-4">
                  <RouterLink
                    v-for="item in navigation"
                    :key="item.name"
                    :to="{ name: item.href }"
                    :class="[
                      currentRouteName === item.href
                        ? 'bg-gray-700 dark:bg-gray-400 text-white'
                        : 'text-white hover:bg-gray-500 hover:bg-opacity-75',
                      'rounded-md py-2 px-3 text-sm font-medium',
                    ]"
                    :aria-current="currentRouteName === item.name ? 'page' : undefined"
                  >
                    {{ item.name }}
                  </RouterLink>
                </div>
              </div>
            </div>
            <SearchHeader />
            <div class="flex lg:hidden">
              <!-- Mobile menu button -->
              <DisclosureButton
                class="bg-gray-600 p-2 rounded-md inline-flex items-center justify-center text-gray-200 hover:text-white hover:bg-gray-500 hover:bg-opacity-75 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-600 focus:ring-white"
              >
                <span class="sr-only">Open main menu</span>
                <MenuIcon
                  v-if="!open"
                  class="block h-6 w-6"
                  aria-hidden="true"
                />
                <XIcon v-else class="block h-6 w-6" aria-hidden="true" />
              </DisclosureButton>
            </div>
          </div>
        </div>

        <DisclosurePanel class="lg:hidden mt-16">
          <div class="px-2 pt-2 pb-3 space-y-1 ">
            <DisclosureButton
              v-for="item in navigation"
              :key="item.name"
              as="a"
              :href="item.href"
              :class="[
                currentRouteName === item.href
                  ? 'bg-gray-700 text-white'
                  : 'text-white hover:bg-gray-500 hover:bg-opacity-75',
                'block rounded-md py-2 px-3 text-base font-medium',
              ]"
              :aria-current="currentRouteName === item.href ? 'page' : undefined"
            >
              {{ item.name }}
            </DisclosureButton>
          </div>
        </DisclosurePanel>
      </Disclosure>
    </div>

    <main class="min-w-screen min-h-screen bg-white dark:bg-gray-900 pt-16">
      <div class="mx-5">
        <slot> </slot>
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/vue";
import MenuIcon from "@heroicons/vue/24/outline/Bars3Icon";
import XIcon from "@heroicons/vue/24/outline/XMarkIcon";
import SearchHeader from "@/components/SearchHeader.vue"
import { computed, ref } from "vue";
import { RouterLink, useRoute } from "vue-router";

const navigation = ref([
  { name: "Dashboard", href: "Home" },
  { name: "Cards", href: "Cards"},
  { name: "Settings", href: "Settings" },
]);

const currentRouteName = computed(() => useRoute().name);
</script>
