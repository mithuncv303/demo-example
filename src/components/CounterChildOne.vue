<template>
<div class="card">
    <h3>{{title}}</h3>
    <p><input v-model="inputData" @input="updateData" placeholder="Enter some data" class="data"></p>
    <p><button class="increment-button" @click="$emit('increment')">Parent Increment</button></p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      inputData: '',
    };
  },
  props:{
    title: String
  },
  methods: {
    updateData() {
      this.$store.dispatch('updateSharedData', this.inputData);
    }
  }
};
</script>
<style>
.card {
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 10px;
  margin: 10px;
  width: 300px;
}
.card p{
  text-align:left;
}
.data{
  width:80%;
}
</style>