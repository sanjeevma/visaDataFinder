import { defineNuxtPlugin } from 'nuxt/app';
import Flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

export default defineNuxtPlugin((nuxtApp) => {
  console.log('Flatpickr directive registered'); // Debugging log
  nuxtApp.vueApp.directive('flatpickr', {
    mounted(el, binding) {
      console.log('Flatpickr initialized on element:', el);
      Flatpickr(el, binding.value || {});
    },
  });
});
