import { describe, it, expect, beforeEach } from "vitest";

import { mount } from "@vue/test-utils";
import { createPinia, setActivePinia } from "pinia";
import Modal from "../Modal.vue";
import { mockedCountry } from "@/assets/data";

describe("Modal", () => {
  beforeEach(() => {
    setActivePinia(createPinia());
  });

  it("renders properly", () => {
    const wrapper = mount(Modal, {
      props: {
        isOpened: true,
        closeModal: () => null,
        country: mockedCountry,
      },
    });
    expect(wrapper.text()).toMatchSnapshot();
  });
});
