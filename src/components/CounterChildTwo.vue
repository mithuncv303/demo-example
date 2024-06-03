
<template>
<div class="card">
    <h3>{{title}}</h3>
    <p>Child Component 1 Data: {{ sharedData }}</p>
    <p><button class="increment-button" @click="$emit('increment')">Parent Increment</button></p>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  computed: {
    ...mapState({
      sharedData: state => state.sharedData
    })
  },
  props:{
    title: String
  }
};
</script>
<style scoped>
.increment-button {
    margin-top:20px;
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
