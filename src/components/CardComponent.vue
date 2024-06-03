<template>
  <div class="card">
    <h3>{{ userData.name }}</h3>
    <p>Username:  &nbsp;{{ userData.username }}</p>
    <p>Email:  &nbsp;{{ userData.email }}</p>
    <p>Address:  &nbsp;{{ userData.address.street }}, {{ userData.address.suite }}, {{ userData.address.city }}, {{ userData.address.zipcode }}</p>
    <p>Phone:  &nbsp;{{ userData.phone }}</p>
    <p>Website:  &nbsp;{{ userData.website }}</p>
    <p>Company:  &nbsp;{{ userData.company.name }}</p>
    <p>Catch Phrase:  &nbsp;{{ userData.company.catchPhrase }}</p>
    <p>BS:  {{ userData.company.bs }}</p>
  </div>
</template>

<script>
export default {
  props: {
    userData: Object
  }
};
</script>

<style scoped>
.card {
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 10px;
  margin: 10px;
  width: 260px;
  height:400px;
}
.card p{
  text-align:left;
}
</style>
