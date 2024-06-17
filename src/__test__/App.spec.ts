import { describe, it, expect, beforeEach } from "vitest";

import { mount } from "@vue/test-utils";
import App from "@/App.vue";
import { createPinia, setActivePinia } from "pinia";

describe("App", () => {
  beforeEach(() => {
    setActivePinia(createPinia());
  });
  it("renders properly", () => {
    const wrapper = mount(App);
    expect(wrapper.text()).toMatchSnapshot();
  });
});
