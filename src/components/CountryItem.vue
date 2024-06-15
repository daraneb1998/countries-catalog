<script setup lang="ts">
import type { CountryInfoType } from "@/types";
import { getCountryCurrencies } from "@/utilities/country";

const props = defineProps<{
  country: CountryInfoType;
}>();
const currencies = getCountryCurrencies(props.country.currencies);
const countryData = props.country;
const countryInfo = `${countryData.name.common}, officially known as the ${countryData.name.official}, is located in ${countryData.region}. It covers approximately ${countryData.area} square kilometers with ${props.country.population} populations and uses the ${currencies?.name} (${currencies?.symbol}) as its currency. The capital city is ${countryData.capital?.[0]}. The official languages spoken are ${Object.values(
  countryData.languages || {}
).join(" and ")}.`;
</script>

<template>
  <button
    class="relative flex w-full max-w-[26rem] flex-col rounded-xl bg-clip-border text-gray-700 shadow-lg hover:scale-105 transition-all bg-slate-200 h-full"
  >
    <div
      class="relative mx-4 mt-4 overflow-hidden text-white shadow-lg rounded-xl bg-blue-gray-500 bg-clip-border shadow-blue-gray-500/40 w-full-16px bg-red-500"
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
    <div class="p-6">
      <div class="flex items-center justify-between mb-3">
        <h5
          class="block font-sans text-xl antialiased font-bold leading-snug tracking-normal text-blue-gray-900 text-left"
        >
          {{ props.country.name.official }}
        </h5>
      </div>
      <p
        class="block font-sans text-base antialiased font-light leading-relaxed text-gray-700"
      >
        {{ countryInfo }}
      </p>
    </div>
  </button>
</template>
