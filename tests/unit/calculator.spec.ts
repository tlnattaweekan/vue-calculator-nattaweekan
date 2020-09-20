import {
  shallowMount,
  mount,
} from "@vue/test-utils";
import CalculatorComponent from "@/components/calculator.component.vue";
import { apiCalculator } from "@/core/utils/api.calculator"

//globalThis.fetch = jest.fn(() => Promise.resolve({ json: () => Promise.resolve(14) }))
globalThis.fetch = jest.fn().mockImplementation(() => Promise.resolve({
  json: () => 100
}))


test("Calcutor Input Data", () => {
  const wrapper = shallowMount(
    CalculatorComponent
  );
  wrapper.setData({ data: 0 });
  expect(wrapper.find("error").exists()).toBe(
    false
  );
});

describe("calcutor.component.vue", () => {
  it("props.nameCalculator when passed", () => {
    const nameCalculator = "Calculator A";
    const wrapper = shallowMount(
      CalculatorComponent,
      {
        propsData: { nameCalculator },
      }
    );
    expect(wrapper.text()).toMatch(
      nameCalculator
    );
  });
});

describe("Click event", () => {
  it('Click button plus"50+30+20"', async () => {
    const wrapper = mount(CalculatorComponent, {
      data: () => ({
        result: 0,
        data: 0,
      }),
    });
    await wrapper.find("button.item-5").trigger("click");
    await wrapper.find("button.item-zero").trigger("click");
    await wrapper.find("button.item-plus").trigger("click");
    await wrapper.find("button.item-3").trigger("click");
    await wrapper.find("button.item-zero").trigger("click");
    await wrapper.find("button.item-plus").trigger("click");
    await wrapper.find("button.item-2").trigger("click");
    await wrapper.find("button.item-zero").trigger("click");
    await wrapper.find("button.item-equal").trigger("click");

    expect(wrapper.find("h3").text()).toBe("50+30+20")
    const result = await apiCalculator("50+30+20")

    expect(result).toEqual(100)
    expect(wrapper.find("h2").text()).toBe("100")
  });

  it('Click button minus "280-180"', async () => {
    const wrapper = mount(CalculatorComponent, {
      data: () => ({
        result: 0,
        data: 0,
      }),
    });
    await wrapper.find("button.item-2").trigger("click");
    await wrapper.find("button.item-8").trigger("click");
    await wrapper.find("button.item-zero").trigger("click");
    await wrapper.find("button.item-minus").trigger("click");
    await wrapper.find("button.item-1").trigger("click");
    await wrapper.find("button.item-8").trigger("click");
    await wrapper.find("button.item-zero").trigger("click");
    await wrapper.find("button.item-equal").trigger("click");

    expect(wrapper.find("h3").text()).toBe("280-180")
    const result = await apiCalculator("280-180")

    expect(result).toEqual(100)
    expect(wrapper.find("h2").text()).toBe("100")
  });

  it('Click button multiply "20*5"', async () => {
    const wrapper = mount(CalculatorComponent, {
      data: () => ({
        result: 0,
        data: 0,
      }),
    });
    await wrapper.find("button.item-2").trigger("click");
    await wrapper.find("button.item-zero").trigger("click");
    await wrapper.find("button.item-multiply").trigger("click");
    await wrapper.find("button.item-5").trigger("click");
    await wrapper.find("button.item-equal").trigger("click");

    expect(wrapper.find("h3").text()).toBe("20*5")
    const result = await apiCalculator("20*5")

    expect(result).toEqual(100)
    expect(wrapper.find("h2").text()).toBe("100")
  });

  it('Click button plus point "54.6+45.4"', async () => {
    const wrapper = mount(CalculatorComponent, {
      data: () => ({
        result: 0,
        data: 0,
      }),
    });
    await wrapper.find("button.item-5").trigger("click");
    await wrapper.find("button.item-4").trigger("click");
    await wrapper.find("button.item-point").trigger("click");
    await wrapper.find("button.item-6").trigger("click");
    await wrapper.find("button.item-plus").trigger("click");
    await wrapper.find("button.item-4").trigger("click");
    await wrapper.find("button.item-5").trigger("click");
    await wrapper.find("button.item-point").trigger("click");
    await wrapper.find("button.item-4").trigger("click");
    await wrapper.find("button.item-equal").trigger("click");

    expect(wrapper.find("h3").text()).toBe("54.6+45.4")
    const result = await apiCalculator("54.6+45.4")

    expect(result).toEqual(100)
    expect(wrapper.find("h2").text()).toBe("100")
  });

  it('Click button plus "050+050" => "50+50"', async () => {
    const wrapper = mount(CalculatorComponent, {
      data: () => ({
        result: 0,
        data: 0,
      }),
    });
    await wrapper.find("button.item-zero").trigger("click");
    await wrapper.find("button.item-5").trigger("click");
    await wrapper.find("button.item-zero").trigger("click");
    await wrapper.find("button.item-plus").trigger("click");
    await wrapper.find("button.item-zero").trigger("click");
    await wrapper.find("button.item-5").trigger("click");
    await wrapper.find("button.item-zero").trigger("click");
    await wrapper.find("button.item-equal").trigger("click");

    expect(wrapper.find("h3").text()).toBe("50+50")
    const result = await apiCalculator("50+50")

    expect(result).toEqual(100)
    expect(wrapper.find("h2").text()).toBe("100")
  });

  it('Click button point ".....9++099.1" => "0.9+99.1"', async () => {
    const wrapper = mount(CalculatorComponent, {
      data: () => ({
        result: 0,
        data: 0,
      }),
    });

    await wrapper.find("button.item-point").trigger("click");
    await wrapper.find("button.item-point").trigger("click");
    await wrapper.find("button.item-point").trigger("click");
    await wrapper.find("button.item-point").trigger("click");
    await wrapper.find("button.item-point").trigger("click");
    await wrapper.find("button.item-9").trigger("click");
    await wrapper.find("button.item-plus").trigger("click");
    await wrapper.find("button.item-zero").trigger("click");
    await wrapper.find("button.item-9").trigger("click");
    await wrapper.find("button.item-9").trigger("click");
    await wrapper.find("button.item-point").trigger("click");
    await wrapper.find("button.item-1").trigger("click");
    await wrapper.find("button.item-equal").trigger("click");

    expect(wrapper.find("h3").text()).toBe("0.9+99.1")
    const result = await apiCalculator("0.9+99.1")

    expect(result).toEqual(100)
    expect(wrapper.find("h2").text()).toBe("100")
  });
});
