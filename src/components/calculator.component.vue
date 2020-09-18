<template>
  <div class="cal-content">
    <h1>Calculator {{ nameCalculator }}</h1>
    <div class="cal-card">
      <div class="cal-detile">
        <h2>{{ result }}</h2>
        <hr class="dividers" />
        <h3>{{ data }}</h3>
        <div class="cal-grid-layout">
          <button
            class="btn-number"
            @click="clear"
          >
            C
          </button>
          <button
            @click="onClick('*')"
            class="btn-number"
          >
            x
          </button>
          <button
            @click="onClick('-')"
            class="btn-number"
          >
            -
          </button>
          <button
            @click="onClick('+')"
            class="btn-number item-plus"
          >
            +
          </button>
          <button
            @click="onClick(7)"
            class="btn-number"
          >
            7
          </button>
          <button
            @click="onClick(8)"
            class="btn-number"
          >
            8
          </button>
          <button
            @click="onClick(9)"
            class="btn-number"
          >
            9
          </button>
          <button
            @click="onClick(4)"
            class="btn-number"
          >
            4
          </button>
          <button
            @click="onClick(5)"
            class="btn-number"
          >
            5
          </button>
          <button
            @click="onClick(6)"
            class="btn-number"
          >
            6
          </button>
          <button
            @click="onClick('=')"
            class="btn-number item-equal"
          >
            =
          </button>
          <button
            @click="onClick(1)"
            class="btn-number"
          >
            1
          </button>
          <button
            @click="onClick(2)"
            class="btn-number"
          >
            2
          </button>
          <button
            @click="onClick(3)"
            class="btn-number"
          >
            3
          </button>
          <button
            @click="onClick('.')"
            class="btn-number"
          >
            .
          </button>
          <button
            @click="onClick(0)"
            class="btn-number item-zero"
          >
            0
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    nameCalculator: String,
  },
  data: () => ({
    data: 0,
    n: "",
    e: [],
    input: "",
    result: 0,
    time: new Date().toTimeString().substr(0, 8),
    date: new Date().toLocaleDateString(),
  }),
  methods: {
    onClick(val) {
      if (this.result > 0) {
        this.clear();
      }
      if (typeof val === "string") {
        this.e.push(this.input);
        this.input = "";
        if (val === "=") {
          this.equal();
        } else {
          this.e.push(val);
          this.data += val.toString();
        }
      } else {
        console.log("val", val);
        console.log("this.data", this.data);
        console.log("____________");
        if (!val && !this.data) {
          this.data += val;
        } else if (!this.data) {
          this.data += val;
        } else {
          this.data += val.toString();
        }
        this.input += val.toString();
      }
    },
    async equal() {
      let s = "";
      for (let i = 0; i < this.e.length; i++) {
        s += this.e[i];
      }
      const data = encodeURIComponent(s);
      const res = await fetch(
        `https://api.mathjs.org/v4/?expr=${data}`
      );
      this.result = await res.json();
      this.$emit("RESULT", {
        name: this.nameCalculator,
        data: s,
        result: this.result.toString(),
        date: `${this.date} ${this.time}`,
      });
    },
    clear() {
      this.data = 0;
      this.result = 0;
      this.input = "";
      this.n = "";
      this.e = [];
    },
  },
};
</script>
