<template>
  <div class="container mx-auto py-10 px-4">
    <h1 class="text-3xl font-bold mb-8 text-center flex items-center justify-center space-x-3 text-slate-800">
      <Icon name="mdi-calendar" class="text-sky-500" size="36" />
      <span>Stay Duration Checker for 8558 Visa Holders</span>
    </h1>

    <!-- Form -->
    <div class="max-w-4xl mx-auto">
      <form class="space-y-6 bg-white shadow-lg rounded-lg p-6 border border-slate-200">
        <!-- Entry/Exit Table Headers -->
        <div class="grid grid-cols-2 gap-4 mb-4 font-semibold text-slate-700">
          <div class="flex items-center space-x-2">
            <Icon name="mdi-login" size="20" class="text-sky-500" />
            <span>Entry Date</span>
          </div>
          <div class="flex items-center space-x-2">
            <Icon name="mdi-logout" size="20" class="text-sky-500" />
            <span>Exit Date</span>
          </div>
        </div>

        <!-- Default First Entry Date and Exit Date -->
        <div class="grid grid-cols-2 gap-4 items-start mb-4">
          <div>
            <input
              id="firstEntryDate"
              v-model="firstEntryDate"
              class="border border-slate-300 rounded-md px-3 py-2 w-full hover:border-sky-500 focus:border-sky-500 focus:ring-1 focus:ring-sky-500 focus:outline-none transition-colors"
              placeholder="Select First Entry Date"
            />
          </div>
          <div class="relative">
            <input
              id="exitDate"
              v-model="exitDate"
              class="border border-slate-300 rounded-md px-3 py-2 w-full hover:border-sky-500 focus:border-sky-500 focus:ring-1 focus:ring-sky-500 focus:outline-none transition-colors"
              :class="{ 'border-red-500': isExitDateInvalid }"
              placeholder="Select Exit Date"
            />
            <p v-if="isExitDateInvalid" class="text-red-500 text-sm mt-1 absolute">
              Exit Date cannot be earlier than Entry Date.
            </p>
          </div>
        </div>

        <!-- Add Entry/Exit Dates -->
        <div v-if="entries.length > 0" class="space-y-4">
          <div
            v-for="(entry, index) in entries"
            :key="index"
            class="grid grid-cols-2 gap-4 items-start"
          >
            <div>
              <input
                :id="`entry-${index}`"
                v-model="entry.entryDate"
                class="border border-slate-300 rounded-md px-3 py-2 w-full hover:border-sky-500 focus:border-sky-500 focus:ring-1 focus:ring-sky-500 focus:outline-none transition-colors"
                placeholder="Select Entry Date"
              />
            </div>
            <div class="relative">
              <input
                :id="`exit-${index}`"
                v-model="entry.exitDate"
                class="border border-slate-300 rounded-md px-3 py-2 w-full hover:border-sky-500 focus:border-sky-500 focus:ring-1 focus:ring-sky-500 focus:outline-none transition-colors"
                :class="{ 'border-red-500': isDynamicExitDateInvalid(index) }"
                placeholder="Select Exit Date"
              />
              <p v-if="isDynamicExitDateInvalid(index)" class="text-red-500 text-sm mt-1 absolute">
                Exit Date cannot be earlier than Entry Date.
              </p>
            </div>
          </div>
        </div>

        <!-- Add Button -->
      <!-- Add Button -->
<button
  type="button"
  class="inline-flex items-center space-x-2 px-4 py-2.5 bg-sky-500 text-white rounded-md
         hover:bg-sky-600
         shadow-sm
         transition-all duration-200
         focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500
         active:bg-sky-700 active:shadow-inner"
  @click="addEntry"
>
  <Icon
    name="mdi-plus-circle"
    size="20"
    class="transition-transform duration-200 group-hover:scale-110"
  />
  <span class="font-medium">Add Entry/Exit Dates</span>
</button>

        <!-- Results -->
        <div class="space-y-4 mt-8">
        <!-- Total Days Inside Status Card -->
<div class="border rounded-lg overflow-hidden">
  <!-- Status Header -->
  <div class="bg-emerald-500 px-4 py-2 text-white font-semibold">
    Time Spent in Australia
  </div>

  <!-- Status Content -->
  <div class="bg-emerald-50 p-4">
    <div class="flex items-start space-x-4">
      <Icon
        name="mdi-check-circle"
        class="text-emerald-500 flex-shrink-0 mt-1"
        size="24"
      />

      <div class="flex-1">
        <p class="text-lg font-semibold text-emerald-800 mb-3">
          Total Days Inside Australia:
        </p>
        <div class="text-center p-3 bg-emerald-100 rounded-lg">
          <div class="text-2xl font-bold text-emerald-600">
            {{ totalDaysInside }} days
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

          <!-- Days Left or Overstay -->
             <!-- Stay Duration Status Card -->
<div class="border rounded-lg overflow-hidden">
  <!-- Status Header -->
  <div
    :class="{
      'bg-emerald-500': totalDaysLeft > 0,
      'bg-red-500': totalDaysLeft <= 0,
    }"
    class="px-4 py-2 text-white font-semibold"
  >
    <span v-if="totalDaysLeft > 0">Valid Stay Period</span>
    <span v-else>Stay Period Exceeded</span>
  </div>

  <!-- Status Content -->
  <div
    :class="{
      'bg-emerald-50 border-emerald-200': totalDaysLeft > 0,
      'bg-red-50 border-red-200': totalDaysLeft <= 0,
    }"
    class="p-4"
  >
    <div class="flex items-start space-x-4">
      <Icon
        :name="totalDaysLeft > 0 ? 'mdi-check-circle' : 'mdi-alert-circle'"
        :class="{
          'text-emerald-500': totalDaysLeft > 0,
          'text-red-500': totalDaysLeft <= 0,
        }"
        class="flex-shrink-0 mt-1"
        size="24"
      />

      <div class="flex-1">
        <!-- Stay Status -->
        <div v-if="totalDaysLeft > 0" class="space-y-4">
          <p class="text-lg font-semibold text-emerald-800">
            Remaining Stay Duration:
          </p>
          <div class="space-y-2">
            <!-- Total Days -->
            <div class="text-center p-3 bg-emerald-100 rounded-lg">
              <div class="text-2xl font-bold text-emerald-600">
                {{ totalDaysLeft }} days
              </div>
            </div>

            <!-- OR Divider -->
            <div class="flex items-center">
              <div class="flex-1 border-t border-emerald-200"></div>
              <div class="px-4 text-emerald-600 font-medium">OR</div>
              <div class="flex-1 border-t border-emerald-200"></div>
            </div>

            <!-- Months and Days -->
            <div v-if="totalDaysLeftBreakdown" class="text-center p-3 bg-emerald-100 rounded-lg">
              <div class="text-2xl font-bold text-emerald-600">
                {{ totalDaysLeftBreakdown.months }} months and {{ totalDaysLeftBreakdown.days }} days
              </div>
            </div>
          </div>
        </div>

        <!-- Overstay Warning -->
        <div v-else class="space-y-2">
          <p class="text-lg font-semibold text-red-800">
            Overstay Alert:
          </p>
          <div class="text-center p-3 bg-red-100 rounded-lg">
            <div class="text-2xl font-bold text-red-600">
              {{ overstayedDays }} days exceeded
            </div>
          </div>
          <p class="text-sm text-red-700 mt-2">
            Please note that overstaying may have serious implications for your visa status.
            Contact immigration authorities or a migration agent immediately.
          </p>
        </div>
      </div>
    </div>
  </div>
</div>
          <!-- Reset Date -->
          <div class="bg-slate-50 border border-slate-200 rounded-lg p-4 flex items-center space-x-4">
            <Icon name="mdi-calendar-refresh" class="text-slate-500 flex-shrink-0" size="24" />
            <div>
              <p class="text-lg text-slate-800 font-semibold">
                18-Month Rolling Period Reset Date:
                <strong>{{ resetDate }}</strong>
              </p>
              <p v-if="formatRollingPeriod" class="text-sm mt-1">
                <template v-if="!exitDate">
                  Please select an exit date to calculate remaining period
                </template>
                <template v-else>
                  <span v-if="formatRollingPeriod.isExpired" class="text-red-600">
                    Period expired {{ formatRollingPeriod.formattedPeriod }} ago
                  </span>
                  <span v-else class="text-emerald-600">
                    Period ends in {{ formatRollingPeriod.formattedPeriod }}
                  </span>
                  <span class="text-slate-500 ml-2">
                    ({{ formatRollingPeriod.totalDays }} days {{ formatRollingPeriod.isExpired ? 'ago' : 'remaining' }})
                  </span>
                </template>
              </p>
            </div>
          </div>

          <!-- Disclaimer -->
          <div class="bg-amber-50 border border-amber-200 rounded-lg p-4 flex items-center space-x-4">
            <Icon name="mdi-information" class="text-amber-500 flex-shrink-0" size="24" />
            <p class="text-sm text-amber-800">
              Disclaimer: This is not legal advice nor immigration advice. For your visa
              matter, you may contact us for assistance.
            </p>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, watch, nextTick } from "vue";
import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.css";


 const config = useRuntimeConfig()

useHead({
  title: `${config.public.siteName} - Track Your 8558 Visa Duration`,
  meta: [
    {
      name: 'description',
      content: config.public.siteDescription
    },

    // Open Graph / Facebook
    { property: 'og:type', content: 'website' },
    {
      property: 'og:url',
      content: config.public.siteUrl
    },
    {
      property: 'og:title',
      content: `${config.public.siteName} - Track Your 8558 Visa Duration`
    },
    {
      property: 'og:description',
      content: config.public.siteDescription
    },
    {
      property: 'og:image',
      content: `${config.public.siteImageUrl}/og-image.jpg`
    },

    // Twitter
    { name: 'twitter:card', content: 'summary_large_image' },
    {
      name: 'twitter:url',
      content: config.public.siteUrl
    },
    {
      name: 'twitter:title',
      content: `${config.public.siteName} - Track Your 8558 Visa Duration`
    },
    {
      name: 'twitter:description',
      content: config.public.siteDescription
    },
    {
      name: 'twitter:image',
      content: `${config.public.siteImageUrl}/twitter-image.jpg`
    }
  ],
  link: [
    {
      rel: 'canonical',
      href: config.public.siteUrl
    }
  ],
  script: [
    {
      type: 'application/ld+json',
      children: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'WebApplication',
        name: config.public.siteName,
        applicationCategory: 'UtilityApplication',
        description: config.public.siteDescription,
        url: config.public.siteUrl,
        image: `${config.public.siteImageUrl}/app-thumbnail.jpg`,
        offers: {
          '@type': 'Offer',
          price: '0',
          priceCurrency: 'AUD'
        }
      })
    }
  ]
})



interface Entry {
  entryDate: string;
  exitDate: string;
}

// State
const firstEntryDate = ref("");
const exitDate = ref("");
const entries = ref<Entry[]>([]);

// Initialize dates on mount
onMounted(() => {
  // Calculate and set date from 2 years ago
  const today = new Date()
  const twoYearsAgo = new Date(today)
  twoYearsAgo.setFullYear(today.getFullYear() - 2)

  firstEntryDate.value = twoYearsAgo.toISOString().split('T')[0]
})


// Flatpickr initialization
const initializeDatePicker = (
  element: HTMLElement,
  modelValue: any,
  onChange: (dates: Date[]) => void
) => {
  return flatpickr(element, {
    dateFormat: "Y-m-d",
    allowInput: true,
    defaultDate: modelValue.value || "",
    onChange: (selectedDates) => {
      onChange(selectedDates);
    },
  });
};

// Initialize Flatpickr instances
onMounted(() => {
  const entryDateInput = document.querySelector("#firstEntryDate") as HTMLElement;
  const exitDateInput = document.querySelector("#exitDate") as HTMLElement;

  if (entryDateInput && exitDateInput) {
    initializeDatePicker(entryDateInput, firstEntryDate, (dates) => {
      firstEntryDate.value = dates[0]?.toISOString().split("T")[0] || "";
      setDefaultExitDate();
    });

    initializeDatePicker(exitDateInput, exitDate, (dates) => {
      exitDate.value = dates[0]?.toISOString().split("T")[0] || "";
    });
  }
});

// Watch for dynamic entries and initialize their date pickers
watch(
  entries,
  () => {
    nextTick(() => {
      entries.value.forEach((_, index) => {
        const entryInput = document.querySelector(`#entry-${index}`) as HTMLElement;
        const exitInput = document.querySelector(`#exit-${index}`) as HTMLElement;

        if (entryInput) {
          initializeDatePicker(
            entryInput,
            ref(entries.value[index].entryDate),
            (dates) => {
              entries.value[index].entryDate =
                dates[0]?.toISOString().split("T")[0] || "";
              setDefaultExitDateForRow(index);
            }
          );
        }

        if (exitInput) {
          initializeDatePicker(exitInput, ref(entries.value[index].exitDate), (dates) => {
            entries.value[index].exitDate = dates[0]?.toISOString().split("T")[0] || "";
          });
        }
      });
    });
  },
  { deep: true }
);

// Functions
const addEntry = () => {
  entries.value.push({ entryDate: "", exitDate: "" });
};

const setDefaultExitDate = () => {
  if (firstEntryDate.value) {
    const entry = new Date(firstEntryDate.value);
    const nextDay = new Date(entry.setDate(entry.getDate() + 1));
    exitDate.value = nextDay.toISOString().split("T")[0];
  }
};

const setDefaultExitDateForRow = (index: number) => {
  const entry = entries.value[index].entryDate;
  if (entry) {
    const entryDate = new Date(entry);
    const nextDay = new Date(entryDate.setDate(entryDate.getDate() + 1));
    entries.value[index].exitDate = nextDay.toISOString().split("T")[0];
  }
};

// Update the computed property
const formatRollingPeriod = computed(() => {
  // If no entry date or exit date, return default message
  if (!firstEntryDate.value) return null

  const today = new Date()
  const reset = new Date(resetDate.value)
  if (isNaN(reset)) return null

  const diffTime = reset - today
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))
  const isExpired = diffDays < 0

  // Calculate absolute values for display
  const absDays = Math.abs(diffDays)
  const months = Math.floor(absDays / 30)
  const days = absDays % 30

  return {
    isExpired,
    months,
    days,
    totalDays: Math.abs(diffDays),
    formattedPeriod: `${months} month${months !== 1 ? 's' : ''} and ${days} day${days !== 1 ? 's' : ''}`
  }
})

// Computed properties
const totalDaysInside = computed(() => {
  let total = 0;
  if (firstEntryDate.value && exitDate.value) {
    const entryDate = new Date(firstEntryDate.value);
    const exit = new Date(exitDate.value);
    if (exit > entryDate) {
      total += Math.ceil((exit - entryDate) / (1000 * 60 * 60 * 24));
    }
  }
  entries.value.forEach(({ entryDate, exitDate }) => {
    if (entryDate && exitDate) {
      const entry = new Date(entryDate);
      const exit = new Date(exitDate);
      if (exit > entry) {
        total += Math.ceil((exit - entry) / (1000 * 60 * 60 * 24));
      }
    }
  });
  return total;
});

const isExitDateInvalid = computed(() => {
  if (!firstEntryDate.value || !exitDate.value) return false;
  return new Date(exitDate.value) < new Date(firstEntryDate.value);
});

const isDynamicExitDateInvalid = (index: number) => {
  const entry = entries.value[index]?.entryDate;
  const exit = entries.value[index]?.exitDate;
  if (!entry || !exit) return false;
  return new Date(exit) < new Date(entry);
};

const totalDaysLeft = computed(() => Math.max(365 - totalDaysInside.value, 0));

const totalDaysLeftBreakdown = computed(() => {
  const daysLeft = totalDaysLeft.value;
  const months = Math.floor(daysLeft / 30);
  const days = daysLeft % 30;
  return { months, days };
});

const overstayedDays = computed(() =>
  totalDaysInside.value > 365 ? totalDaysInside.value - 365 : 0
);

const resetDate = computed(() => {
  if (!firstEntryDate.value) return "N/A";
  const rollingPeriodEnd = new Date(
    new Date(firstEntryDate.value).setMonth(
      new Date(firstEntryDate.value).getMonth() + 18
    )
  );
  return rollingPeriodEnd.toISOString().split("T")[0];
});

const rollingBackInfo = computed(() => {
  const today = new Date();
  const reset = new Date(resetDate.value);
  if (isNaN(reset)) return null;

  const diffTime = reset - today;
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

  const months = Math.floor(diffDays / 30);
  const days = diffDays % 30;

  return { months, days, totalDays: diffDays };
});
</script>

<style scoped>
.relative {
  min-height: 60px;
}
</style>
