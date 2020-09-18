<template>
  <div id="app">
    <div class="app-bar">Double Calculator</div>
    <div class="layout-content">
      <calculator-component :nameCalculator="'A'" @RESULT="saveResult" />
      <calculator-component :nameCalculator="'B'" @RESULT="saveResult" />
      <list-history-component class="display-history" @CLEAR="getDialog" />
    </div>
    <alert-component
      v-show="dialog"
      :msg="'Do you want to clear the value?'"
      :onClickNo="closeAlert"
      :onClickYes="getClear"
    />
  </div>
</template>

<script>
import calculatorComponent from "@/components/calculator.component.vue";
import listHistoryComponent from "@/components/list-history.component.vue";
import alertComponent from "@/components/alert.component.vue";

export default {
  components: {
    calculatorComponent,
    listHistoryComponent,
    alertComponent
  },
  data: () => ({
    dialog: false,
    dataResult: []
  }),
  mounted() {
    if (localStorage.getItem("results")) {
      try {
        this.dataResult = JSON.parse(localStorage.getItem("results"));
      } catch (e) {
        localStorage.removeItem("results");
      }
    }
  },
  methods: {
    getClear() {
      localStorage.removeItem("results");
      this.dataResult = [];
      window.dispatchEvent(
        new CustomEvent("results-localstorage-changed", {
          detail: {
            storage: localStorage.getItem("results")
          }
        })
      );
      this.dialog = false;
    },
    getDialog(val) {
      this.dialog = val;
    },
    closeAlert() {
      this.dialog = false;
    },
    saveResult(val) {
      this.dataResult.push(val);
      const parsed = JSON.stringify(this.dataResult);
      localStorage.setItem("results", parsed);

      window.dispatchEvent(
        new CustomEvent("results-localstorage-changed", {
          detail: {
            storage: localStorage.getItem("results")
          }
        })
      );
    }
  }
};
</script>

<style lang="scss">
@import "./core/styles/main.scss";
</style>
