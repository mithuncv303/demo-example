<template>
  <div>
    <h1> Counter: {{ counter }}</h1>
    <button class="increment-button" @click="incrementCounter">Parent Increment</button>
  </div>
  <div style="display:flex !important;" >
  <ChildOne :title="title1" @increment="incrementCounter"/>
  <ChildTwo :title="title2" @increment="incrementCounter"/>
  </div>
</template>

<script>
import ChildOne from './CounterChildOne.vue'
import ChildTwo from './CounterChildTwo.vue'
export default {
    components:{
        ChildOne,
        ChildTwo
    },
  data() {
    return {
      counter: 0,
      title1: "Child Component 1",
      title2: "Child Component 2"
    };
  },
  methods: {
    incrementCounter() {
      this.counter++;
    }
  }
};
</script>

<style scoped>
.increment-button {
  padding: 10px 20px;
  font-size: 16px;
  border: none;
  border-radius: 5px;
  background-color: #007bff;
  color: #fff;
  cursor: pointer;
}

.increment-button:hover {
  background-color: #0056b3;
}
</style>
