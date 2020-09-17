<template>
  <div id="app">
    <div class="app-bar">Double Calculator</div>
    <div class="layout-content">
      <calculator-component />
      <calculator-component />
      <list-history-component />
    </div>
  </div>
</template>

<script lang="ts">
import {
  Component,
  Vue,
} from "vue-property-decorator";
import calculatorComponent from "@/components/calculator.component.vue";
import listHistoryComponent from "@/components/list-history.component.vue";

@Component({
  components: {
    calculatorComponent,
    listHistoryComponent,
  },
})
export default class App extends Vue {}
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
