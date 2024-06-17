<script setup lang="ts">
import type { CountryInfoType } from "@/types";
import { getNativeCountryNames } from "@/utilities/country";
import {
  TransitionRoot,
  TransitionChild,
  Dialog,
  DialogPanel,
} from "@headlessui/vue";

const props = defineProps<{
  isOpened: boolean;
  closeModal: () => void;
  country: CountryInfoType;
}>();
if (props.country.name.official === "Antarctica") {
  console.log("props.country.name.nativeName", props.country.name.nativeName);
}
const nativeNames = getNativeCountryNames(props.country.name.nativeName);
</script>

<template>
  <TransitionRoot appear :show="props.isOpened" as="template">
    <Dialog as="div" @close="closeModal" class="relative z-10">
      <TransitionChild
        as="template"
        enter="duration-300 ease-out"
        enter-from="opacity-0"
        enter-to="opacity-100"
        leave="duration-200 ease-in"
        leave-from="opacity-100"
        leave-to="opacity-0"
      >
        <div class="fixed inset-0 bg-black/25" />
      </TransitionChild>

      <div class="fixed inset-0 overflow-y-auto">
        <div class="flex min-h-full items-center justify-center text-center">
          <TransitionChild
            as="template"
            enter="duration-300 ease-out"
            enter-from="opacity-0 scale-95"
            enter-to="opacity-100 scale-100"
            leave="duration-200 ease-in"
            leave-from="opacity-100 scale-100"
            leave-to="opacity-0 scale-95"
          >
            <DialogPanel
              class="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all"
            >
              <div
                class="relative overflow-hidden text-white shadow-lg rounded-xl bg-blue-gray-500 bg-clip-border shadow-blue-gray-500/40 w-full"
              >
                <img
                  class="w-full h-52"
                  :src="props.country.flags.png"
                  :alt="props.country.name.official"
                />
                <div
                  class="absolute inset-0 w-full h-full to-bg-black-10 bg-gradient-to-tr from-transparent via-transparent to-black/60"
                ></div>
                <span
                  class="!absolute top-4 right-4 h-8 max-h-[32px] select-none rounded-full text-center align-middle font-sans text-xs font-bold uppercase text-white transition-all hover:bg-red-500/10 active:bg-red-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                >
                  {{ props.country.capital?.[0] }}
                </span>
              </div>
              <div class="flex items-center justify-between my-3">
                <h5
                  class="block font-sans text-xl antialiased font-bold leading-snug tracking-normal text-blue-gray-900 text-left"
                >
                  {{ props.country.name.official }}
                </h5>
              </div>

              <div>
                <div>
                  <span class="font-medium">CCA2:</span>
                  {{ props.country.cca2 }}
                </div>
                <div>
                  <span class="font-medium">CCA3:</span>
                  {{ props.country.cca3 }}
                </div>
                <div>
                  <span class="font-medium">Native Country Name:</span>
                  {{ nativeNames }}
                </div>
                <div>
                  <span class="font-medium">Alternative Country Name:</span>
                  {{ props.country.altSpellings.join(", ") }}
                </div>
                <div>
                  <span class="font-medium">Country Calling Codes:</span>
                  Suffixes
                  {{ (props.country.idd.suffixes || ["N/A"]).join(", ") }} and
                  Root
                  {{ props.country.idd.root || "N/A" }}
                </div>
              </div>

              <div class="mt-4">
                <button
                  type="button"
                  class="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                  @click="props.closeModal"
                >
                  Got it, thanks!
                </button>
              </div>
            </DialogPanel>
          </TransitionChild>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
</template>
