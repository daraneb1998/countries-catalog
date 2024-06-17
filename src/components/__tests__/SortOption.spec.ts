import { describe, it, expect, beforeEach } from "vitest";

import { mount } from "@vue/test-utils";
import { createPinia, setActivePinia } from "pinia";
import SortOption from "../SortOption.vue";

describe("SortOption", () => {
  beforeEach(() => {
    setActivePinia(createPinia());
  });

  it("renders properly", () => {
    const wrapper = mount(SortOption);
    expect(wrapper.text()).toMatchSnapshot();
  });
});
