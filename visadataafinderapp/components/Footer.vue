<template>
  <footer class="bg-slate-800 text-slate-300">
    <!-- Main Footer Content -->
    <div class="container mx-auto px-4 py-8">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <!-- Company Info -->
        <div class="col-span-1 md:col-span-2">
          <div class="flex items-center space-x-2 mb-4">
            <Icon name="mdi-calendar-check" class="text-sky-400" size="24" />
            <h2 class="text-white font-semibold text-lg">Visa Calculator</h2>
          </div>
          <p class="text-sm mb-4">
            Our visa calculator helps you track your stay duration and compliance
            with Australian visa conditions. Simple, accurate, and easy to use.
          </p>
          <div class="flex space-x-4">
            <a href="#" class="text-slate-300 hover:text-sky-400 transition-colors">
              <Icon name="mdi-facebook" size="24" />
            </a>
            <a href="#" class="text-slate-300 hover:text-sky-400 transition-colors">
              <Icon name="mdi-twitter" size="24" />
            </a>
            <a href="#" class="text-slate-300 hover:text-sky-400 transition-colors">
              <Icon name="mdi-linkedin" size="24" />
            </a>
          </div>
        </div>

        <!-- Quick Links -->
        <div>
          <h3 class="text-white font-semibold mb-4">Quick Links</h3>
          <ul class="space-y-2">
            <li>
              <NuxtLink
                to="/"
                class="text-sm hover:text-sky-400 transition-colors"
              >
                Home
              </NuxtLink>
            </li>
            <li>
              <NuxtLink
                to="/about"
                class="text-sm hover:text-sky-400 transition-colors"
              >
                About
              </NuxtLink>
            </li>
            <li>
              <NuxtLink
                to="/contact"
                class="text-sm hover:text-sky-400 transition-colors"
              >
                Contact
              </NuxtLink>
            </li>
            <li>
              <NuxtLink
                to="/privacy"
                class="text-sm hover:text-sky-400 transition-colors"
              >
                Privacy Policy
              </NuxtLink>
            </li>
            <li>
              <NuxtLink
                to="/tos"
                class="text-sm hover:text-sky-400 transition-colors"
              >
                Terms of Service
              </NuxtLink>
            </li>
            <li>
              <NuxtLink
                to="/disclaimer"
                class="text-sm hover:text-sky-400 transition-colors"
              >
                Disclaimer
              </NuxtLink>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <!-- Bottom Bar -->
    <div class="border-t border-slate-700">
      <div class="container mx-auto px-4 py-4">
        <div class="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <!-- Copyright -->
          <div class="text-sm">
            © {{ new Date().getFullYear() }} Visa Calculator. All rights reserved.
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
const config = useRuntimeConfig()
</script>
