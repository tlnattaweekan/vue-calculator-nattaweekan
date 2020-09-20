<template>
  <div class="cal-content">
    <h1>Calculator {{ nameCalculator }}</h1>
    <div class="cal-card">
      <div class="cal-detile">
        <h2>{{ result }}</h2>
        <hr class="dividers" />
        <h3>{{ data }}</h3>
        <div class="cal-grid-layout">
          <button class="btn-number" @click="clear">C</button>
          <button @click="onClick('*')" class="btn-number item-multiply">x</button>
          <button @click="onClick('-')" class="btn-number item-minus">-</button>
          <button @click="onClick('+')" class="btn-number item-plus">+</button>
          <button @click="onClick(7)" class="btn-number item-7">7</button>
          <button @click="onClick(8)" class="btn-number item-8">8</button>
          <button @click="onClick(9)" class="btn-number item-9">9</button>
          <button @click="onClick(4)" class="btn-number item-4">4</button>
          <button @click="onClick(5)" class="btn-number item-5">5</button>
          <button @click="onClick(6)" class="btn-number item-6">6</button>
          <button @click="onClick('=')" class="btn-number item-equal">=</button>
          <button @click="onClick(1)" class="btn-number item-1">1</button>
          <button @click="onClick(2)" class="btn-number item-2">2</button>
          <button @click="onClick(3)" class="btn-number item-3">3</button>
          <button @click="onClick('.')" class="btn-number item-point">.</button>
          <button @click="onClick(0)" class="btn-number item-zero">0</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { apiCalculator } from "@/core/utils/api.calculator";
export default {
  name: "CalculatorComponent",
  props: {
    nameCalculator: String
  },
  data: () => ({
    data: 0,
    keepData: [],
    input: "",
    result: 0,
    time: new Date().toTimeString().substr(0, 8),
    date: new Date().toLocaleDateString()
  }),
  methods: {
    onClick(val) {
      if (this.result > 0) this.clear();
      if (typeof val === "string") {
        const old = this.data.toString().charAt(this.data.length - 1);
        if (
          old !== "+" &&
          old !== "-" &&
          old !== "*" &&
          old !== "=" &&
          old !== "."
        ) {
          if (typeof +old === "number") {
            this.keepData.push(+this.input);
            this.input = 0;
            if (val === "=") {
              if (this.data !== 0) this.equal();
            } else {
              this.keepData.push(val);
              this.data += val.toString();
            }
          }
        }
      } else {
        if (!val && !this.data) {
          this.data += val;
          this.input += val;
        } else if (!this.data) {
          this.data += val;
          this.input += val;
        } else if (+this.input === 0) {
          const old = this.data.toString().charAt(this.data.length - 1);
          if (
            old !== "+" &&
            old !== "-" &&
            old !== "*" &&
            old !== "=" &&
            old !== "."
          ) {
            this.data = this.data.replace(/.$/, val);
            this.input += val.toString();
          } else {
            this.data += val.toString();
            this.input += val.toString();
          }
        } else {
          this.data += val.toString();
          this.input += val.toString();
        }
      }
    },
    async equal() {
      let formatDate = "";
      for (let i = 0; i < this.keepData.length; i++) {
        if (this.keepData[i] === "") this.keepData[i] = 0;
        formatDate += this.keepData[i];
      }

      try {
        this.result = await apiCalculator(formatDate);
        const results = {
          name: this.nameCalculator,
          data: formatDate,
          result: this.result.toString(),
          date: `${this.date} ${this.time}`
        };
        this.$emit("RESULT", results);
        this.keepData = [];
      } catch (e) {
        console.log(("error", e));
      }
    },
    clear() {
      this.data = 0;
      this.result = 0;
      this.input = 0;
      this.keepData = [];
    }
  }
};
</script>
