import { describe, it, expect, beforeEach } from "vitest";

import { mount } from "@vue/test-utils";
import { createPinia, setActivePinia } from "pinia";
import Pagination from "../Pagination.vue";

describe("Pagination", () => {
  beforeEach(() => {
    setActivePinia(createPinia());
  });

  it("renders properly", () => {
    const wrapper = mount(Pagination);
    expect(wrapper.text()).toMatchSnapshot();
  });
});
