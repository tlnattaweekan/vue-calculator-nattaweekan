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
        class="display-history"
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
      if (!val) this.history = [];
      else this.history.push(val);
    },
  },
  components: {
    calculatorComponent,
    listHistoryComponent,
  },
};
</script>

<style lang="scss">
@import "./core/styles/main.scss";
</style>
