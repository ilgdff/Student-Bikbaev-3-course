<template>
  <div class="counter">
    <h1>{{ count }}</h1>
    <button @click="count--">-1</button>
    <button @click="count++">+1</button>
    <button @mouseover="count = 0" class="reset">Reset</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      count: 0
    }
  }
}
</script>

<style>
.counter {
  text-align: center;
  margin-top: 100px;
}
button {
  margin: 0 10px;
  padding: 8px 16px;
  font-size: 16px;
}
.reset:hover {
  background-color: #ff0000;
  color: white;
}
</style>