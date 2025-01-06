<script setup>
const config = useRuntimeConfig()
const lastUpdated = "January 6, 2024"

useHead({
  title: `Terms of Service - ${config.public.siteName}`,
  meta: [
    { name: 'robots', content: 'noindex, nofollow' },
    {
      name: 'description',
      content: 'Terms of Service for Visa Stay Calculator. Learn about the terms and conditions for using our service.'
    }
  ]
})
</script>

<template>
  <div class="container mx-auto px-4 py-8 max-w-4xl">
    <!-- Header Section -->
    <div class="text-center mb-12">
      <h1 class="text-3xl font-bold text-slate-800 mb-4">Terms of Service</h1>
      <p class="text-slate-600">Last Updated: {{ lastUpdated }}</p>
    </div>

    <!-- Main Content -->
    <div class="bg-white rounded-lg shadow-sm p-8 space-y-8">
      <!-- Introduction -->
      <section>
        <h2 class="text-2xl font-semibold text-slate-800 mb-4">Introduction</h2>
        <p class="text-slate-600">
          Please read these Terms of Service carefully before using the {{ config.public.siteName }}
          ("the Service"). By using the Service, you agree to be bound by these terms.
        </p>
      </section>

      <!-- Acceptance of Terms -->
      <section>
        <h2 class="text-2xl font-semibold text-slate-800 mb-4">Acceptance of Terms</h2>
        <p class="text-slate-600">
          By accessing or using our Service, you acknowledge that you have read, understood,
          and agree to be bound by these Terms. If you disagree with any part of the terms,
          you may not access the Service.
        </p>
      </section>

      <!-- Description of Service -->
      <section>
        <h2 class="text-2xl font-semibold text-slate-800 mb-4">Description of Service</h2>
        <p class="text-slate-600 mb-4">
          {{ config.public.siteName }} provides a calculator tool to help users track their visa stay duration.
          The Service is provided for informational purposes only and should not be considered as:
        </p>
        <ul class="list-disc ml-6 text-slate-600 space-y-2">
          <li>Legal or immigration advice</li>
          <li>A substitute for professional consultation</li>
          <li>An official government service</li>
          <li>A guarantee of visa compliance</li>
        </ul>
      </section>

      <!-- User Responsibilities -->
      <section>
        <h2 class="text-2xl font-semibold text-slate-800 mb-4">User Responsibilities</h2>
        <p class="text-slate-600 mb-4">Users of the Service agree to:</p>
        <ul class="list-disc ml-6 text-slate-600 space-y-2">
          <li>Provide accurate information when using the calculator</li>
          <li>Use the Service for personal, non-commercial purposes</li>
          <li>Not attempt to manipulate or bypass any security features</li>
          <li>Take responsibility for verifying calculations with official sources</li>
          <li>Not rely solely on the Service for visa compliance</li>
        </ul>
      </section>

      <!-- Disclaimer of Warranties -->
      <section>
        <h2 class="text-2xl font-semibold text-slate-800 mb-4">Disclaimer of Warranties</h2>
        <div class="bg-slate-50 border border-slate-200 rounded-lg p-4">
          <p class="text-slate-600">
            The Service is provided "as is" and "as available" without any warranties of any kind.
            We do not guarantee the accuracy, completeness, or timeliness of the calculations
            provided by the Service.
          </p>
        </div>
      </section>

      <!-- Limitation of Liability -->
      <section>
        <h2 class="text-2xl font-semibold text-slate-800 mb-4">Limitation of Liability</h2>
        <p class="text-slate-600">
          In no event shall {{ config.public.siteName }} be liable for any indirect, incidental,
          special, consequential, or punitive damages arising out of or relating to your use
          of the Service.
        </p>
      </section>

      <!-- Intellectual Property -->
      <section>
        <h2 class="text-2xl font-semibold text-slate-800 mb-4">Intellectual Property</h2>
        <p class="text-slate-600">
          The Service and its original content, features, and functionality are owned by
          {{ config.public.siteName }} and are protected by international copyright, trademark,
          patent, trade secret, and other intellectual property laws.
        </p>
      </section>

      <!-- Changes to Terms -->
      <section>
        <h2 class="text-2xl font-semibold text-slate-800 mb-4">Changes to Terms</h2>
        <p class="text-slate-600">
          We reserve the right to modify these terms at any time. We will notify users of any
          changes by updating the "Last Updated" date of these terms and providing notice on
          our main page.
        </p>
      </section>

      <!-- Governing Law -->
      <section>
        <h2 class="text-2xl font-semibold text-slate-800 mb-4">Governing Law</h2>
        <p class="text-slate-600">
          These terms shall be governed by and construed in accordance with the laws of Australia,
          without regard to its conflict of law provisions.
        </p>
      </section>

      <!-- Contact Information -->
      <section>
        <h2 class="text-2xl font-semibold text-slate-800 mb-4">Contact Us</h2>
        <p class="text-slate-600 mb-4">
          If you have any questions about these Terms of Service, please contact us:
        </p>
        <ul class="space-y-2 text-slate-600">
          <li class="flex items-center space-x-2">
            <Icon name="mdi-email" size="20" class="text-sky-500" />
            <a
              :href="`mailto:${config.public.contactEmail}`"
              class="text-sky-600 hover:text-sky-700"
            >
              {{ config.public.contactEmail }}
            </a>
          </li>
          <li class="flex items-center space-x-2">
            <Icon name="mdi-phone" size="20" class="text-sky-500" />
            <a
              :href="`tel:${config.public.contactPhone}`"
              class="text-sky-600 hover:text-sky-700"
            >
              {{ config.public.contactPhoneDisplay }}
            </a>
          </li>
          <li class="flex items-center space-x-2">
            <Icon name="mdi-map-marker" size="20" class="text-sky-500" />
            <span>{{ config.public.contactAddress }}</span>
          </li>
        </ul>
      </section>
    </div>

    <!-- Bottom Navigation -->
    <div class="mt-8 flex justify-center space-x-4 text-sm">
      <NuxtLink
        to="/privacy"
        class="text-sky-600 hover:text-sky-700"
      >
        Privacy Policy
      </NuxtLink>
      <span class="text-slate-300">|</span>
      <NuxtLink
        to="/disclaimer"
        class="text-sky-600 hover:text-sky-700"
      >
        Disclaimer
      </NuxtLink>
      <span class="text-slate-300">|</span>
      <NuxtLink
        to="/contact"
        class="text-sky-600 hover:text-sky-700"
      >
        Contact Us
      </NuxtLink>
    </div>
  </div>
</template>
