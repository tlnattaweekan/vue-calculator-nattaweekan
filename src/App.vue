<template>
  <div id="app">
    <div class="app-bar">Double Calculator</div>
    <div class="layout-content">
      <calculator-component
        @RESULT="getResultHistory"
        :nameCalculator="'A'"
      />
      <calculator-component
        @RESULT="getResultHistory"
        :nameCalculator="'B'"
      />
      <list-history-component
        @RESULT="getResultHistory"
        :historys="history"
      />
    </div>
  </div>
</template>

<script>
import calculatorComponent from "@/components/calculator.component.vue";
import listHistoryComponent from "@/components/list-history.component.vue";

export default {
  data: () => ({
    history: [],
  }),
  methods: {
    getResultHistory(val) {
      if (!val) {
        this.history = [];
      } else {
        console.log("vald", val);
        console.log(this.history.length);
        this.history.push(val);
        console.log("val", this.history);
      }
    },
  },
  components: {
    calculatorComponent,
    listHistoryComponent,
  },
};
</script>

<style lang="scss">
.app-bar {
  height: 3.5rem;
  background-color: white;
  font-size: 1.4rem;
  color: gray;
  box-shadow: 0 8px 10px -7px #e0e0e0;
  display: flex;
  padding: 0 1rem;
  align-items: center;
}

.layout-content {
  display: grid;
  grid-template-columns: 28% 28% 44%;
  justify-items: center;
  margin-top: 3rem;
  @media only screen and (min-width: 1500px) {
    padding: 0 6rem;
  }
  @media only screen and (min-width: 1600px) {
    padding: 0 10rem;
  }
  @media only screen and (min-width: 1800px) {
    padding: 0 16rem;
  }
}
#app {
  background-color: #f7f7f7;
  height: 100vh;
}

@import "./core/styles/main.scss";
</style>
