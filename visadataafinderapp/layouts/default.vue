<template>
  <div class="min-h-screen flex flex-col bg-gray-100 text-gray-800">
    <!-- Header Component -->
    <Header />

    <!-- Main Content -->
    <main class="flex-grow container mx-auto py-6 px-4">
      <slot />
    </main>

    <!-- Footer Component -->
    <Footer />
  </div>
</template>

<script setup>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
</script>
