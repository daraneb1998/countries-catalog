import { describe, it, expect, beforeEach } from "vitest";

import { mount } from "@vue/test-utils";
import { createPinia, setActivePinia } from "pinia";
import CountryItem from "../CountryItem.vue";
import { mockedCountry } from "@/assets/data";

describe("CountryItem", () => {
  beforeEach(() => {
    setActivePinia(createPinia());
  });

  it("renders properly", () => {
    const wrapper = mount(CountryItem, {
      props: {
        country: mockedCountry,
      },
    });
    expect(wrapper.text()).toMatchSnapshot();
  });
});
