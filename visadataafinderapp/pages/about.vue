<script setup>
const config = useRuntimeConfig()

useHead({
  title: `About Us - ${config.public.siteName}`,
  meta: [
    { name: 'robots', content: 'noindex, nofollow' },
    {
      name: 'description',
      content: 'Learn more about our visa calculator tool and how we help visa holders track their stay duration in Australia.'
    }
  ]
})
</script>

<template>
  <div class="container mx-auto px-4 py-8 max-w-4xl">
    <!-- Header Section -->
    <div class="text-center mb-12">
      <h1 class="text-3xl font-bold text-slate-800 mb-4">About Us</h1>
      <p class="text-lg text-slate-600">
        Helping visa holders track their stay duration with precision and ease
      </p>
    </div>

    <!-- Main Content -->
    <div class="space-y-8">
      <!-- Our Mission Section -->
      <section class="bg-white rounded-lg shadow-sm p-6">
        <div class="flex items-start space-x-4">
          <div class="flex-shrink-0">
            <Icon name="mdi-target" class="text-sky-500" size="32" />
          </div>
          <div>
            <h2 class="text-2xl font-semibold text-slate-800 mb-4">Our Mission</h2>
            <p class="text-slate-600">
              Our mission is to provide visa holders with a reliable and easy-to-use tool
              for tracking their stay duration in Australia. We understand the importance
              of maintaining visa compliance and aim to help you stay informed about your
              visa status.
            </p>
          </div>
        </div>
      </section>

      <!-- What We Offer Section -->
      <section class="bg-white rounded-lg shadow-sm p-6">
        <div class="flex items-start space-x-4">
          <div class="flex-shrink-0">
            <Icon name="mdi-check-circle" class="text-sky-500" size="32" />
          </div>
          <div>
            <h2 class="text-2xl font-semibold text-slate-800 mb-4">What We Offer</h2>
            <div class="grid md:grid-cols-2 gap-6">
              <div class="space-y-2">
                <h3 class="text-lg font-medium text-slate-700">Stay Duration Calculator</h3>
                <p class="text-slate-600">
                  Accurately track your stay duration and remaining days in Australia.
                </p>
              </div>
              <div class="space-y-2">
                <h3 class="text-lg font-medium text-slate-700">Rolling Period Tracking</h3>
                <p class="text-slate-600">
                  Monitor your 18-month rolling period and plan your stays accordingly.
                </p>
              </div>
              <div class="space-y-2">
                <h3 class="text-lg font-medium text-slate-700">Compliance Alerts</h3>
                <p class="text-slate-600">
                  Get clear warnings when approaching or exceeding stay limits.
                </p>
              </div>
              <div class="space-y-2">
                <h3 class="text-lg font-medium text-slate-700">User-Friendly Interface</h3>
                <p class="text-slate-600">
                  Simple and intuitive design for easy tracking of multiple entries and exits.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Why Choose Us Section -->
      <section class="bg-white rounded-lg shadow-sm p-6">
        <div class="flex items-start space-x-4">
          <div class="flex-shrink-0">
            <Icon name="mdi-star" class="text-sky-500" size="32" />
          </div>
          <div>
            <h2 class="text-2xl font-semibold text-slate-800 mb-4">Why Choose Us</h2>
            <ul class="space-y-4">
              <li class="flex items-center space-x-3">
                <Icon name="mdi-check" class="text-emerald-500" size="24" />
                <span class="text-slate-600">Free to use with no hidden costs</span>
              </li>
              <li class="flex items-center space-x-3">
                <Icon name="mdi-check" class="text-emerald-500" size="24" />
                <span class="text-slate-600">Simple and accurate calculations</span>
              </li>
              <li class="flex items-center space-x-3">
                <Icon name="mdi-check" class="text-emerald-500" size="24" />
                <span class="text-slate-600">Regular updates to maintain accuracy</span>
              </li>
              <li class="flex items-center space-x-3">
                <Icon name="mdi-check" class="text-emerald-500" size="24" />
                <span class="text-slate-600">Privacy-focused with no data storage</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <!-- Contact Section -->
      <section class="bg-slate-50 rounded-lg p-6">
        <div class="text-center">
          <h2 class="text-2xl font-semibold text-slate-800 mb-4">Need Assistance?</h2>
          <p class="text-slate-600 mb-6">
            We're here to help with any questions about our visa calculator.
          </p>
          <NuxtLink
            to="/contact"
            class="inline-flex items-center space-x-2 px-6 py-3 bg-sky-500 text-white rounded-lg hover:bg-sky-600 transition-colors"
          >
            <Icon name="mdi-email" size="20" />
            <span>Contact Us</span>
          </NuxtLink>
        </div>
      </section>

      <!-- Disclaimer -->
      <div class="bg-amber-50 border border-amber-200 rounded-lg p-4">
        <p class="text-sm text-amber-800">
          This calculator is provided for informational purposes only and should not be
          considered as legal or immigration advice. For specific visa inquiries, please
          consult with a registered migration agent or the Department of Home Affairs.
        </p>
      </div>
    </div>
  </div>
</template>
