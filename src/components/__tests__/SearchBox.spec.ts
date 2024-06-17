import { describe, it, expect, beforeEach } from "vitest";

import { mount } from "@vue/test-utils";
import { createPinia, setActivePinia } from "pinia";
import SearchBox from "../SearchBox.vue";

describe("SearchBox", () => {
  beforeEach(() => {
    setActivePinia(createPinia());
  });

  it("renders properly", () => {
    const wrapper = mount(SearchBox);
    expect(wrapper.text()).toMatchSnapshot();
  });
});
