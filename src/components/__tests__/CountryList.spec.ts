import { describe, it, expect, beforeEach } from "vitest";

import { mount } from "@vue/test-utils";
import { createPinia, setActivePinia } from "pinia";
import CountryList from "../CountryList.vue";

describe("CountryList", () => {
  beforeEach(() => {
    setActivePinia(createPinia());
  });

  it("renders properly", () => {
    const wrapper = mount(CountryList);
    expect(wrapper.text()).toMatchSnapshot();
  });
});
