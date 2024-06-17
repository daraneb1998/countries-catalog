import { describe, it, expect } from "vitest";

import { mount } from "@vue/test-utils";
import IconSearch from "../icons/IconSearch.vue";

describe("IconSearch", () => {
  it("renders properly", () => {
    const wrapper = mount(IconSearch);
    expect(wrapper.text()).toMatchSnapshot();
  });
});
