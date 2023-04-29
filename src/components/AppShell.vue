<template>
  <div class="min-h-full">
    <div class="bg-gray-600 pb-32">
      <Disclosure
        as="nav"
        class="bg-gray-500 border-b border-gray-300 border-opacity-25 lg:border-none"
        v-slot="{ open }"
      >
        <div
          class="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8 fixed left-0 top-0 z-20 w-full bg-gray-300"
        >
          <div
            class="relative h-16 flex items-center justify-between lg:border-b lg:border-gray-400 lg:border-opacity-25"
          >
            <div class="px-2 flex items-center lg:px-0">
              <div class="flex-shrink-0">
                <img
                  class="block h-8 w-10"
                  src="../../public/nanvani-logo.png"
                  alt="main logo"
                />
              </div>
              <div class="hidden lg:block lg:ml-10">
                <div class="flex space-x-4">
                  <RouterLink
                    v-for="item in navigation"
                    :key="item.name"
                    :to="{ name: item.href }"
                    :class="[
                      item.current
                        ? 'bg-gray-700 text-white'
                        : 'text-white hover:bg-gray-500 hover:bg-opacity-75',
                      'rounded-md py-2 px-3 text-sm font-medium',
                    ]"
                    :aria-current="item.current ? 'page' : undefined"
                  >
                    {{ item.name }}
                  </RouterLink>
                </div>
              </div>
            </div>
            <div class="flex-1 px-2 flex justify-center lg:ml-6 lg:justify-end">
              <div class="max-w-lg w-full lg:max-w-xs">
                <label for="search" class="sr-only">Search</label>
                <div class="relative text-gray-400 focus-within:text-gray-600">
                  <div
                    class="pointer-events-none absolute inset-y-0 left-0 pl-3 flex items-center"
                  >
                    <SearchIcon class="h-5 w-5" aria-hidden="true" />
                  </div>
                  <input
                    id="search"
                    class="block w-full bg-white py-2 pl-10 pr-3 border border-transparent rounded-md leading-5 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-600 focus:ring-white focus:border-white sm:text-sm"
                    placeholder="Search"
                    type="search"
                    name="search"
                    autocomplete="off"
                  />
                </div>
              </div>
            </div>
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

        <DisclosurePanel class="lg:hidden">
          <div class="px-2 pt-2 pb-3 space-y-1">
            <DisclosureButton
              v-for="item in navigation"
              :key="item.name"
              as="a"
              :href="item.href"
              :class="[
                item.current
                  ? 'bg-gray-700 text-white'
                  : 'text-white hover:bg-gray-500 hover:bg-opacity-75',
                'block rounded-md py-2 px-3 text-base font-medium',
              ]"
              :aria-current="item.current ? 'page' : undefined"
            >
              {{ item.name }}
            </DisclosureButton>
          </div>
        </DisclosurePanel>
      </Disclosure>
      <header class="py-10 mt-10">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 class="text-3xl font-bold text-white">
            <slot name="header"> Dashboard </slot>
          </h1>
        </div>
      </header>
    </div>

    <main class="w-full h-full">
      <div class="mx-5">
        <slot> </slot>
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/vue";
import SearchIcon from "@heroicons/vue/24/solid/MagnifyingGlassIcon";
import MenuIcon from "@heroicons/vue/24/outline/Bars3Icon";
import XIcon from "@heroicons/vue/24/outline/XMarkIcon";
import { ref } from "vue";
import { RouterLink } from "vue-router";

const navigation = ref([
  { name: "Dashboard", href: "Home", current: true },
  { name: "Cards", href: "Cards", current: false },
  { name: "Settings", href: "Settings", current: false },
]);
</script>
