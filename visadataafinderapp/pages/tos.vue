<script setup>
const config = useRuntimeConfig()
const lastUpdated = "January 6, 2024"

useHead({
 title: `Disclaimer - ${config.public.siteName}`,
 meta: [
   { name: 'robots', content: 'noindex, nofollow' },
   {
     name: 'description',
     content: 'Legal disclaimer for Visa Stay Calculator. Important information about using our service.'
   }
 ]
})
</script>

<template>
 <div class="container mx-auto px-4 py-8 max-w-4xl">
   <div class="text-center mb-12">
     <h1 class="text-3xl font-bold text-slate-800 mb-4">Disclaimer</h1>
     <p class="text-slate-600">Last Updated: {{ lastUpdated }}</p>
   </div>

   <div class="bg-white rounded-lg shadow-sm p-8 space-y-8">
     <!-- Important Notice -->
     <div class="bg-amber-50 border border-amber-200 rounded-lg p-6">
       <h2 class="text-xl font-semibold text-amber-800 mb-4">Important Notice</h2>
       <p class="text-amber-700">
         The information provided by our Visa Stay Calculator is for general informational
         purposes only. It should not be considered as legal advice or official immigration guidance.
       </p>
     </div>

     <!-- General Disclaimer -->
     <section>
       <h2 class="text-2xl font-semibold text-slate-800 mb-4">General Disclaimer</h2>
       <p class="text-slate-600">
         While we make every effort to keep the information up-to-date and correct, we make no
         representations or warranties of any kind, express or implied, about the completeness,
         accuracy, reliability, suitability or availability of the calculator or the information
         it provides.
       </p>
     </section>

     <!-- No Professional Advice -->
     <section>
       <h2 class="text-2xl font-semibold text-slate-800 mb-4">Not Professional Advice</h2>
       <div class="space-y-4">
         <p class="text-slate-600">
           The calculator and its results should not be interpreted as:
         </p>
         <ul class="list-disc ml-6 text-slate-600 space-y-2">
           <li>Legal or immigration advice</li>
           <li>Official government guidance</li>
           <li>A substitute for professional consultation</li>
           <li>A guarantee of visa compliance</li>
         </ul>
         <p class="text-slate-600">
           For official guidance, please consult with a registered migration agent or the
           Department of Home Affairs.
         </p>
       </div>
     </section>

     <!-- Use at Own Risk -->
     <section>
       <h2 class="text-2xl font-semibold text-slate-800 mb-4">Use at Your Own Risk</h2>
       <p class="text-slate-600">
         Any reliance you place on the calculator and its results is strictly at your own risk.
         It is your responsibility to verify all information and calculations with official sources.
       </p>
     </section>

     <!-- Limitation of Liability -->
     <section>
       <h2 class="text-2xl font-semibold text-slate-800 mb-4">Limitation of Liability</h2>
       <p class="text-slate-600">
         In no event will we be liable for any loss or damage including without limitation,
         indirect or consequential loss or damage, arising from loss of data or profits
         arising out of, or in connection with, the use of this calculator.
       </p>
     </section>

     <!-- Accuracy of Information -->
     <section>
       <h2 class="text-2xl font-semibold text-slate-800 mb-4">Accuracy of Information</h2>
       <div class="space-y-4">
         <p class="text-slate-600">
           Please note that:
         </p>
         <ul class="list-disc ml-6 text-slate-600 space-y-2">
           <li>Visa rules and regulations may change without notice</li>
           <li>Individual circumstances may affect visa conditions</li>
           <li>Special conditions may apply to your specific visa</li>
           <li>Official sources should be consulted for current information</li>
         </ul>
       </div>
     </section>

     <!-- Contact Information -->
     <section>
       <h2 class="text-2xl font-semibold text-slate-800 mb-4">Contact Us</h2>
       <p class="text-slate-600 mb-4">
         If you have any questions about this disclaimer, please contact us:
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
