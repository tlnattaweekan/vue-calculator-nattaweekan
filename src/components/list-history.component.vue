<template>
  <div class="history-content">
    <div class="search-grid-layout">
      <h1>Results</h1>
      <div class="search-relative">
        <input
          type="text"
          class="search-card search-input"
          placeholder="Search by result, date"
          v-model="search"
        />
      </div>
      <button class="search-relative search-card" @click="openCombobox = !openCombobox">
        <span>{{ isChecked }}</span>
        <div class="search-combobox search-combobox-icon">
          <svg style="width:24px;height:24px" viewBox="0 0 24 24">
            <path fill="currentColor" d="M7,10L12,15L17,10H7Z" />
          </svg>
        </div>
        <div :class="comboboxList()">
          <button
            :class="comboboxItem(item)"
            @click="onClickCombobox(item)"
            v-for="item in itemsList"
            :key="item"
          >{{ item }}</button>
        </div>
      </button>
    </div>
    <div class="history-card">
      <div v-if="dataHistorys.length === 0" class="history-msg">
        <h3>No data available</h3>
      </div>
      <div v-else v-for="(item, index) in dataHistorys" :key="index" class="history-item">
        <h3>Calculator {{ item.name }}</h3>
        <h3 class="time">{{ item.date }}</h3>
        <h2 class="history-item-merge">{{ item.result }}</h2>
        <hr class="dividers history-item-merge" />
        <h3 class="history-item-merge">{{ item.data }}</h3>
      </div>
    </div>
    <button class="btn-clear" @click="clear">Clear</button>
  </div>
</template>

<script>
export default {
  data: () => ({
    openCombobox: false,
    isChecked: "All",
    itemsList: ["A", "B", "All"],
    dataHistorys: [],
    search: "",
    historys: []
  }),
  mounted() {
    if (localStorage.getItem("results")) {
      this.historys = JSON.parse(localStorage.results);
    }
    window.addEventListener("results-localstorage-changed", event => {
      this.historys = JSON.parse(localStorage.getItem("results"));
    });

    this.onClickCombobox("All");
  },
  methods: {
    comboboxItem(val) {
      return [
        "combobox-item",
        {
          "combobox-checked": this.isChecked === val
        }
      ];
    },
    comboboxList() {
      return [
        "combobox",
        {
          "combobox-is-hidden": !this.openCombobox
        }
      ];
    },
    clear() {
      this.$emit("CLEAR", true);
    },
    onClickCombobox(val) {
      if (this.historys !== null) {
        this.dataHistorys = [];
        this.isChecked = val;
        for (let i = 0; i < this.historys.length; i += 1) {
          if (this.isChecked === "All")
            this.dataHistorys.push(this.historys[i]);
          else if (this.historys[i].name === this.isChecked)
            this.dataHistorys.push(this.historys[i]);
        }
      }
    },
    onSearch(val) {
      this.dataHistorys = [];
      const data = this.historys.filter(function(item) {
        const res = item.result.includes(val) || item.date.includes(val);
        return res;
      });
      this.dataHistorys = data;
    }
  },
  watch: {
    historys(val) {
      if (val) this.onClickCombobox(this.isChecked);
      else this.dataHistorys = [];
    },
    search(val) {
      if (this.historys !== null) this.onSearch(val);
    }
  }
};
</script>
