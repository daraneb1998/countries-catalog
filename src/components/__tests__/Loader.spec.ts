import { describe, it, expect, beforeEach } from "vitest";

import { mount } from "@vue/test-utils";
import Loader from "../Loader.vue";
import { createPinia, setActivePinia } from "pinia";

describe("Loader", () => {
  beforeEach(() => {
    setActivePinia(createPinia());
  });

  it("renders properly", () => {
    const wrapper = mount(Loader);
    expect(wrapper.text()).toMatchSnapshot();
  });
});
