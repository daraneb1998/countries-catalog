import { describe, it, expect, beforeEach } from "vitest";

import { mount } from "@vue/test-utils";
import { createPinia, setActivePinia } from "pinia";
import { mockedCountry } from "@/assets/data";
import HomeView from "../HomeView.vue";

describe("HomeView", () => {
  beforeEach(() => {
    setActivePinia(createPinia());
  });

  it("renders properly", () => {
    const wrapper = mount(HomeView, {
      props: {
        country: mockedCountry,
      },
    });
    expect(wrapper.text()).toMatchSnapshot();
  });
});
