import { describe, it, expect } from "vitest";

import { mount } from "@vue/test-utils";
import router from "..";

describe("router", () => {
  it("renders properly", () => {
    const wrapper = mount(router);
    expect(wrapper.text()).toMatchSnapshot();
  });
});
