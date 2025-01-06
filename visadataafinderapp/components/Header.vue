<template>
  <header class="bg-slate-800 text-white">
    <div class="container mx-auto">
      <!-- Main Header -->
      <div class="flex h-16 items-center justify-between px-4">
        <!-- Logo Section -->
        <div class="flex items-center space-x-3">
          <Icon
            name="mdi-calendar-check"
            class="text-sky-400"
            size="28"
          />
          <div class="flex flex-col">
            <h1 class="text-lg font-semibold text-white">
              Visa Rolling Period
            </h1>
            <span class="text-xs text-slate-300">Calculator</span>
          </div>
        </div>

        <!-- Desktop Navigation -->
        <nav class="hidden md:flex items-center space-x-8">
          <NuxtLink
            to="/"
            class="inline-flex items-center px-1 pt-1 text-sm font-medium text-slate-300 hover:text-sky-400 transition-colors"
            active-class="text-sky-400 border-b-2 border-sky-400"
          >
            <Icon name="mdi-home" size="18" class="mr-1" />
            Home
          </NuxtLink>
          <NuxtLink
            to="/about"
            class="inline-flex items-center px-1 pt-1 text-sm font-medium text-slate-300 hover:text-sky-400 transition-colors"
            active-class="text-sky-400 border-b-2 border-sky-400"
          >
            <Icon name="mdi-information" size="18" class="mr-1" />
            About
          </NuxtLink>
          <NuxtLink
            to="/contact"
            class="inline-flex items-center px-1 pt-1 text-sm font-medium text-slate-300 hover:text-sky-400 transition-colors"
            active-class="text-sky-400 border-b-2 border-sky-400"
          >
            <Icon name="mdi-email" size="18" class="mr-1" />
            Contact
          </NuxtLink>
        </nav>

        <!-- Mobile Menu Button -->
        <div class="flex md:hidden">
          <button
            @click="isOpen = !isOpen"
            class="inline-flex items-center justify-center p-2 rounded-md text-slate-300 hover:text-white hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-sky-400"
          >
            <span class="sr-only">Open main menu</span>
            <Icon
              :name="isOpen ? 'mdi-close' : 'mdi-menu'"
              size="24"
            />
          </button>
        </div>
      </div>

      <!-- Mobile Navigation -->
      <div
        v-show="isOpen"
        class="md:hidden"
      >
        <div class="space-y-1 pb-3 pt-2 bg-slate-800">
          <NuxtLink
            to="/"
            class="block py-2 px-4 text-base font-medium text-slate-300 hover:bg-slate-700 hover:text-white"
            active-class="bg-slate-900 text-sky-400"
            @click="isOpen = false"
          >
            <div class="flex items-center">
              <Icon name="mdi-home" size="18" class="mr-2" />
              Home
            </div>
          </NuxtLink>
          <NuxtLink
            to="/about"
            class="block py-2 px-4 text-base font-medium text-slate-300 hover:bg-slate-700 hover:text-white"
            active-class="bg-slate-900 text-sky-400"
            @click="isOpen = false"
          >
            <div class="flex items-center">
              <Icon name="mdi-information" size="18" class="mr-2" />
              About
            </div>
          </NuxtLink>
          <NuxtLink
            to="/contact"
            class="block py-2 px-4 text-base font-medium text-slate-300 hover:bg-slate-700 hover:text-white"
            active-class="bg-slate-900 text-sky-400"
            @click="isOpen = false"
          >
            <div class="flex items-center">
              <Icon name="mdi-email" size="18" class="mr-2" />
              Contact
            </div>
          </NuxtLink>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup>
const isOpen = ref(false)

// Close mobile menu when route changes
watch(useRoute(), () => {
  isOpen.value = false
})

// Close mobile menu when screen size changes to desktop
const handleResize = () => {
  if (window.innerWidth >= 768) { // md breakpoint
    isOpen.value = false
  }
}

onMounted(() => {
  window.addEventListener('resize', handleResize)
})

onUnmounted(() => {
  window.removeEventListener('resize', handleResize)
})
</script>
