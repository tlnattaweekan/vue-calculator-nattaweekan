<template>
  <div class="alert">
    <div class="alert-card">
      <svg
        style="width:64px;height:64px"
        viewBox="0 0 24 24"
      >
        <path
          fill="currentColor"
          d="M13 14H11V9H13M13 18H11V16H13M1 21H23L12 2L1 21Z"
        />
      </svg>
      <h3>{{ msg }}</h3>
      <div class="alert-btn">
        <button
          class="btn btn-outline"
          @click="onClickYes()"
        >
          Yes
        </button>
        <button class="btn" @click="onClickNo()">
          No
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    msg: String,
    onClickYes: Function,
    onClickNo: Function,
  },
};
</script>

<style lang="scss">
.alert {
  height: 100vh;
  width: 100vw;
  background-color: rgba(196, 196, 196, 0.534);
  position: fixed;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  &-card {
    width: 30rem;
    height: 20rem;
    border-radius: 2rem;
    background-color: white;
    box-shadow: 1px 1px 7px #e0e0e0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
    color: #ffd54f;
    h3 {
      margin-top: 1.5rem;
      margin-bottom: 2.5rem;
      align-self: center;
    }
  }
  &-btn {
    display: flex;
    flex-direction: row;
    position: absolute;
    bottom: 0;
    right: 0;
    margin-right: 2rem;
    margin-bottom: 2rem;
  }
}
.btn {
  padding: 0.5rem 1.5rem;
  border-radius: 0.7rem;
  border: 0;
  cursor: pointer;
  background-color: #faa7a7;
  color: white;
  box-shadow: 1px 1px 7px #e0e0e0;
  margin: 0 0.3rem;
  outline: none !important;
  &-outline {
    background-color: white;
    color: #faa7a7;
    border: 1px solid #faa7a7;
  }
}
</style>
