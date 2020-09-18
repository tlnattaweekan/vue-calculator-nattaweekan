<template>
  <div class="cal-content">
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
      <button
        class="search-relative search-card"
        @click="openCombobox = !openCombobox"
      >
        <span>{{ isChecked }}</span>
        <div
          class="search-combobox search-combobox-icon"
        >
          <svg
            style="width:24px;height:24px"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M7,10L12,15L17,10H7Z"
            />
          </svg>
        </div>
        <div :class="comboboxList()">
          <button
            :class="comboboxItem(item)"
            @click="onClickCombobox(item)"
            v-for="item in itemsList"
            :key="item"
          >
            {{ item }}
          </button>
        </div>
      </button>
    </div>
    <div class="card-history">
      <div
        v-if="dataHistorys.length === 0"
        class="msg"
      >
        <h3>No data available</h3>
      </div>
      <div
        v-else
        v-for="(item, index) in dataHistorys"
        :key="index"
        class="history-item"
      >
        <h3>Calculator {{ item.name }}</h3>
        <h3 class="time">
          {{ item.date }}
        </h3>
        <h2 class="history-item-merge">
          {{ item.result }}
        </h2>
        <hr class="dividers history-item-merge" />
        <h3 class="history-item-merge">
          {{ item.data }}
        </h3>
      </div>
    </div>
    <button class="btn-clear" @click="clear">
      Clear
    </button>
  </div>
</template>

<script>
export default {
  props: {
    historys: Array,
  },
  data: () => ({
    openCombobox: false,
    isChecked: "All",
    itemsList: ["A", "B", "All"],
    dataHistorys: [],
    search: "",
  }),
  mounted() {
    this.onClickCombobox("All");
  },
  methods: {
    comboboxItem(val) {
      return [
        "combobox-item",
        {
          "combobox-checked":
            this.isChecked === val,
        },
      ];
    },
    comboboxList() {
      return [
        "combobox",
        {
          "combobox-is-hidden": !this
            .openCombobox,
        },
      ];
    },
    clear() {
      this.$emit("RESULT", false);
    },
    onClickCombobox(val) {
      this.dataHistorys = [];
      this.isChecked = val;
      for (
        let i = 0;
        i < this.historys.length;
        i += 1
      ) {
        if (this.isChecked === "All") {
          this.dataHistorys.push(
            this.historys[i]
          );
        } else if (
          this.historys[i].name === this.isChecked
        ) {
          this.dataHistorys.push(
            this.historys[i]
          );
        }
      }
    },
    onSearch(val) {
      this.dataHistorys = [];
      const data = this.historys.filter(function(
        item
      ) {
        const res =
          item.result.includes(val) ||
          item.date.includes(val);
        return res;
      });
      this.dataHistorys = data;
    },
  },
  watch: {
    historys() {
      this.onClickCombobox(this.isChecked);
    },
    search(val) {
      this.onSearch(val);
    },
  },
};
</script>

<style lang="scss" scoped>
.cal-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 85%;
  margin-right: 1.5rem;
  position: relative;
}
.card-history {
  height: 40rem;
  width: 100%;
  border-radius: 2rem;
  background-color: white;
  box-shadow: 1px 1px 7px #e0e0e0;
  overflow: scroll;
}

.card-history::-webkit-scrollbar {
  display: none;
}

.search {
  &-grid-layout {
    display: grid;
    width: 90%;
    grid-template-columns: 20% 50% 30%;
    grid-gap: 0.7rem;
    justify-content: center;
    align-items: center;
  }
  &-card {
    border: 1px solid #bdbdbd;
    background-color: white;
    border-radius: 0.8rem;
    height: 90%;
    justify-content: center;
    align-items: center;
    outline: none !important;
    width: 100%;
    box-shadow: 1px 1px 7px #e0e0e0;
  }
  &-combobox {
    cursor: pointer;
  }
  &-combobox-icon {
    height: 100%;
    position: absolute;
    color: #757575;
    top: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    right: 0;
  }
  &-input {
    padding-left: 1rem;
    width: 90%;
  }
  &-relative {
    position: relative;
    height: 2.3rem;
  }
}

span,
.search-input {
  color: #757575;
  font-size: 1rem;
}

.history-item {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  width: 90%;
  margin: 2rem;
  &-merge {
    grid-column: 1/3;
  }
}
.time {
  color: #a7d4fa;
}

.btn-clear {
  outline: none !important;
  position: absolute;
  right: 2rem;
  bottom: 1.5rem;
  font-size: 1.5rem;
  padding: 0.5rem 1rem;
  border-radius: 0.7rem;
  border: 0;
  cursor: pointer;
  background-color: #faa7a7;
  color: white;
  box-shadow: 1px 1px 7px #e0e0e0;

  &:active {
    background-color: #e0e0e0;
    color: gray;
    transition-duration: 0.2s;
    transform: translateY(3px);
  }
}

.combobox {
  position: absolute;
  top: 0;
  left: 0;
  margin-top: 2.5rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  border-radius: 0.8rem;
  overflow: hidden;
  border: 1px solid #bdbdbd;
  box-shadow: 1px 1px 7px #e0e0e0;
  &-item {
    padding: 0, 2rem;
    text-align: start;
    background-color: white;
    height: 2rem;
    border: 0;
    outline: none !important;
    color: gray;
    cursor: pointer;
    &:hover {
      background-color: #a7d4fa;
      transition-duration: 0.2s;
      font-size: 1rem;
      transform: translateY(2px);
    }
  }
  &-checked {
    background-color: #bdbdbd;
  }
  &-is-hidden {
    display: none;
  }
}

.msg {
  display: flex;
  height: 100%;
  width: 100%;
  justify-content: center;
  h3 {
    align-self: center;
  }
}
</style>
