<script setup>
const config = useRuntimeConfig()

useHead({
  title: `Contact Us - ${config.public.siteName}`,
  meta: [
    { name: 'robots', content: 'noindex, nofollow' },
    {
      name: 'description',
      content: 'Contact us for any questions about our visa calculator tool or for assistance with tracking your stay duration.'
    }
  ]
})

// Form State
const formData = ref({
  name: '',
  email: '',
  subject: '',
  message: ''
})

const isSubmitting = ref(false)
const submitStatus = ref(null) // null, 'success', 'error'

// Form Submission
const handleSubmit = async () => {
  isSubmitting.value = true
  submitStatus.value = null

  try {
    // Add your form submission logic here
    // Example:
    // await $fetch('/api/contact', {
    //   method: 'POST',
    //   body: formData.value
    // })

    submitStatus.value = 'success'
    formData.value = { name: '', email: '', subject: '', message: '' }
  } catch (error) {
    submitStatus.value = 'error'
    console.error('Form submission error:', error)
  } finally {
    isSubmitting.value = false
  }
}
</script>

<template>
  <div class="container mx-auto px-4 py-8 max-w-4xl">
    <!-- Header Section -->
    <div class="text-center mb-12">
      <h1 class="text-3xl font-bold text-slate-800 mb-4">Contact Us</h1>
      <p class="text-lg text-slate-600">
        Have questions? We're here to help.
      </p>
    </div>

    <div class="grid md:grid-cols-3 gap-8">
      <!-- Contact Information -->
      <div class="md:col-span-1 space-y-6">
        <!-- Contact Card -->
        <div class="bg-white rounded-lg shadow-sm p-6">
          <h2 class="text-xl font-semibold text-slate-800 mb-6">Get in Touch</h2>

          <ul class="space-y-4">
            <li class="flex items-center space-x-3">
              <div class="flex-shrink-0">
                <Icon name="mdi-email" size="24" class="text-sky-500" />
              </div>
              <div>
                <p class="text-sm font-medium text-slate-700">Email</p>
                <a
                  :href="`mailto:${config.public.contactEmail}`"
                  class="text-sky-600 hover:text-sky-700"
                >
                  {{ config.public.contactEmail }}
                </a>
              </div>
            </li>

            <li class="flex items-center space-x-3">
              <div class="flex-shrink-0">
                <Icon name="mdi-phone" size="24" class="text-sky-500" />
              </div>
              <div>
                <p class="text-sm font-medium text-slate-700">Phone</p>
                <a
                  :href="`tel:${config.public.contactPhone}`"
                  class="text-sky-600 hover:text-sky-700"
                >
                  {{ config.public.contactPhoneDisplay }}
                </a>
              </div>
            </li>

            <li class="flex items-center space-x-3">
              <div class="flex-shrink-0">
                <Icon name="mdi-map-marker" size="24" class="text-sky-500" />
              </div>
              <div>
                <p class="text-sm font-medium text-slate-700">Location</p>
                <p class="text-slate-600">{{ config.public.contactAddress }}</p>
              </div>
            </li>
          </ul>
        </div>


      </div>

      <!-- Contact Form -->
      <div class="md:col-span-2">
        <div class="bg-white rounded-lg shadow-sm p-6">
          <h2 class="text-xl font-semibold text-slate-800 mb-6">Send us a Message</h2>

          <form @submit.prevent="handleSubmit" class="space-y-6">
            <!-- Status Messages -->
            <div v-if="submitStatus === 'success'" class="bg-emerald-50 text-emerald-700 p-4 rounded-md">
              Thank you for your message. We'll get back to you soon!
            </div>
            <div v-if="submitStatus === 'error'" class="bg-red-50 text-red-700 p-4 rounded-md">
              There was an error sending your message. Please try again.
            </div>

            <!-- Form Fields -->
            <div class="grid md:grid-cols-2 gap-6">
              <div>
                <label for="name" class="block text-sm font-medium text-slate-700">Name</label>
                <input
                  id="name"
                  v-model="formData.name"
                  type="text"
                  required
                  class="mt-1 block w-full rounded-md border-slate-300 shadow-sm
                        focus:border-sky-500 focus:ring-sky-500"
                />
              </div>

              <div>
                <label for="email" class="block text-sm font-medium text-slate-700">Email</label>
                <input
                  id="email"
                  v-model="formData.email"
                  type="email"
                  required
                  class="mt-1 block w-full rounded-md border-slate-300 shadow-sm
                        focus:border-sky-500 focus:ring-sky-500"
                />
              </div>
            </div>

            <div>
              <label for="subject" class="block text-sm font-medium text-slate-700">Subject</label>
              <input
                id="subject"
                v-model="formData.subject"
                type="text"
                required
                class="mt-1 block w-full rounded-md border-slate-300 shadow-sm
                      focus:border-sky-500 focus:ring-sky-500"
              />
            </div>

            <div>
              <label for="message" class="block text-sm font-medium text-slate-700">Message</label>
              <textarea
                id="message"
                v-model="formData.message"
                rows="6"
                required
                class="mt-1 block w-full rounded-md border-slate-300 shadow-sm
                      focus:border-sky-500 focus:ring-sky-500"
              ></textarea>
            </div>

            <button
              type="submit"
              :disabled="isSubmitting"
              class="w-full flex justify-center items-center px-6 py-3 border border-transparent
                    rounded-md shadow-sm text-base font-medium text-white bg-sky-500
                    hover:bg-sky-600 focus:outline-none focus:ring-2 focus:ring-offset-2
                    focus:ring-sky-500 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <Icon
                v-if="isSubmitting"
                name="mdi-loading"
                class="animate-spin mr-2"
                size="20"
              />
              {{ isSubmitting ? 'Sending...' : 'Send Message' }}
            </button>
          </form>
        </div>

        <!-- Privacy Notice -->
        <div class="mt-6 text-sm text-slate-500">
          <p>
            By submitting this form, you agree to our
            <NuxtLink to="/privacy" class="text-sky-600 hover:text-sky-700">Privacy Policy</NuxtLink>.
            We'll never share your information with third parties.
          </p>
        </div>
      </div>
    </div>

    <!-- FAQ Section -->
    <div class="mt-12">
      <div class="bg-white rounded-lg shadow-sm p-6">
        <h2 class="text-xl font-semibold text-slate-800 mb-6">Frequently Asked Questions</h2>
        <div class="grid md:grid-cols-2 gap-6">
          <div>
            <h3 class="font-medium text-slate-800 mb-2">How quickly do you respond?</h3>
            <p class="text-slate-600">We aim to respond to all inquiries within 24 business hours.</p>
          </div>
          <div>
            <h3 class="font-medium text-slate-800 mb-2">Do you offer support on weekends?</h3>
            <p class="text-slate-600">Limited support is available on Saturdays. For urgent matters, please email us.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
