<template>
  <div class="cal-content">
    <div class="search-grid-layout">
      <h1>Results</h1>
      <div class="search-relative">
        <input
          type="text"
          class="search-card search-input"
          placeholder="Search by result, date"
        />
      </div>
      <button
        class="search-relative search-card "
      >
        <span>All</span>
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
      </button>
    </div>
    <div class="card-history">
      <div class="history-item">
        <h3>Calculator A</h3>
        <h3 class="time">
          09/09/2030 - 23:33.23
        </h3>
        <h2 class="history-item-merge">124</h2>
        <hr class="dividers history-item-merge" />
        <h3 class="history-item-merge">2 x 62</h3>
      </div>
      <div class="history-item">
        <h3>Calculator A</h3>
        <h3 class="time">
          09/09/2030 - 23:33.23
        </h3>
        <h2 class="history-item-merge">124</h2>
        <hr class="dividers history-item-merge" />
        <h3 class="history-item-merge">2 x 62</h3>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.cal-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 85%;
  margin-right: 1.5rem;
}
.card-history {
  height: 40rem;
  width: 100%;
  border-radius: 2rem;
  background-color: white;
  box-shadow: 1px 1px 7px #e0e0e0;
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
</style>
