import { shallowMount } from "@vue/test-utils";
import Calcutor from "@/components/calculator.component.vue";

test("Calcutor Input Data", () => {
  const wrapper = shallowMount(Calcutor);
  wrapper.setData({ data: 0 });
  expect(wrapper.find("error").exists()).toBe(
    false
  );
});

describe("calcutor.component.vue", () => {
  it("props.nameCalculator when passed", () => {
    const nameCalculator = "Calculator A";
    const wrapper = shallowMount(Calcutor, {
      propsData: { nameCalculator },
    });
    expect(wrapper.text()).toMatch(
      nameCalculator
    );
  });
});
