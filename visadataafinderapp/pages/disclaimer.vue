<script setup>
const config = useRuntimeConfig()
const lastUpdated = "January 6, 2024"

useHead({
  title: `Disclaimer - ${config.public.siteName}`,
  meta: [
    { name: 'robots', content: 'noindex, nofollow' },
    {
      name: 'description',
      content: 'Important disclaimer about using the Visa Stay Calculator service.'
    }
  ]
})
</script>

<template>
  <div class="container mx-auto px-4 py-8 max-w-4xl">
    <!-- Header Section -->
    <div class="text-center mb-12">
      <h1 class="text-3xl font-bold text-slate-800 mb-4">Legal Disclaimer</h1>
      <p class="text-slate-600">Last Updated: {{ lastUpdated }}</p>
    </div>

    <div class="bg-white rounded-lg shadow-sm p-8 space-y-8">
      <!-- Notice Banner -->
      <div class="bg-amber-50 border border-amber-200 rounded-lg p-6">
        <div class="flex items-start space-x-3">
          <Icon name="mdi-alert" class="text-amber-600 flex-shrink-0 mt-1" size="24" />
          <div>
            <h2 class="text-lg font-semibold text-amber-800">Important Notice</h2>
            <p class="mt-2 text-amber-700">
              This calculator is a supplementary tool only and should not be used as a substitute
              for official immigration advice or guidance from the Department of Home Affairs.
            </p>
          </div>
        </div>
      </div>

      <!-- Key Points -->
      <section>
        <h2 class="text-2xl font-semibold text-slate-800 mb-4">Key Information</h2>
        <div class="grid gap-4">
          <div class="border border-slate-200 rounded-lg p-4">
            <div class="flex items-start space-x-3">
              <Icon name="mdi-calculator" class="text-sky-500 flex-shrink-0 mt-1" size="24" />
              <div>
                <h3 class="font-medium text-slate-800">Calculator Accuracy</h3>
                <p class="mt-1 text-slate-600">
                  While we strive for accuracy, the calculator results are estimates and should be verified with official sources.
                </p>
              </div>
            </div>
          </div>

          <div class="border border-slate-200 rounded-lg p-4">
            <div class="flex items-start space-x-3">
              <Icon name="mdi-gavel" class="text-sky-500 flex-shrink-0 mt-1" size="24" />
              <div>
                <h3 class="font-medium text-slate-800">Not Legal Advice</h3>
                <p class="mt-1 text-slate-600">
                  The information provided does not constitute legal or immigration advice.
                </p>
              </div>
            </div>
          </div>

          <div class="border border-slate-200 rounded-lg p-4">
            <div class="flex items-start space-x-3">
              <Icon name="mdi-shield" class="text-sky-500 flex-shrink-0 mt-1" size="24" />
              <div>
                <h3 class="font-medium text-slate-800">User Responsibility</h3>
                <p class="mt-1 text-slate-600">
                  Users are responsible for verifying their visa compliance through official channels.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Detailed Disclaimer -->
      <section>
        <h2 class="text-2xl font-semibold text-slate-800 mb-4">Detailed Disclaimer</h2>
        <div class="prose prose-slate max-w-none">
          <p>By using this calculator, you acknowledge and agree that:</p>
          <ul class="list-disc ml-6 space-y-2 text-slate-600">
            <li>The calculator is for general guidance purposes only</li>
            <li>Results should be verified with official sources</li>
            <li>Immigration rules and regulations may change</li>
            <li>Individual circumstances may affect visa conditions</li>
            <li>We are not responsible for any errors or omissions</li>
            <li>No guarantee of accuracy or completeness is provided</li>
          </ul>
        </div>
      </section>

      <!-- Official Resources -->
      <section>
        <h2 class="text-2xl font-semibold text-slate-800 mb-4">Official Resources</h2>
        <p class="text-slate-600 mb-4">
          For official information and guidance, please consult:
        </p>
        <ul class="space-y-3">
          <li class="flex items-center space-x-3">
            <Icon name="mdi-link" class="text-sky-500" size="20" />
            <a
              href="https://immi.homeaffairs.gov.au"
              target="_blank"
              rel="noopener noreferrer"
              class="text-sky-600 hover:text-sky-700"
            >
              Department of Home Affairs
            </a>
          </li>
          <li class="flex items-center space-x-3">
            <Icon name="mdi-link" class="text-sky-500" size="20" />
            <a
              href="https://www.mara.gov.au"
              target="_blank"
              rel="noopener noreferrer"
              class="text-sky-600 hover:text-sky-700"
            >
              Migration Agents Registration Authority
            </a>
          </li>
        </ul>
      </section>

      <!-- Contact Section -->
      <section>
        <h2 class="text-2xl font-semibold text-slate-800 mb-4">Contact Us</h2>
        <p class="text-slate-600 mb-4">
          For questions regarding this disclaimer, please contact us:
        </p>
        <ul class="space-y-2">
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
        to="/tos"
        class="text-sky-600 hover:text-sky-700"
      >
        Terms of Service
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
