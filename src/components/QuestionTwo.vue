<template>
  <div class="home">
    <div class="search">
      <input
      class="searchbox"
        type="text"
        v-model="search"
        placeholder="Search..."
        @input="searchh()"
      />
      <div v-if="data.length === 0">No results found...</div>
    </div>
    <div :key="compKey">
      <div class="cardd" v-for="item in data" v-bind:key="item.id">
        <CardComponent :userData="item" />
      </div>
    </div>
  </div>
</template>

<script>
import Store from ".././store/index.js";
import CardComponent from "./CardComponent";
export default {
  data() {
    return {
      data: [],
      searchData: [],
      compKey: 0,
      search: "",
      items: [],
      selectedCategory: "",
    };
  },
  components: {
    CardComponent,
  },
  async created() {
    await Store.dispatch("fetchData");
    console.log(Store.getters.getData);
    this.data = Store.getters.getData;
    this.searchData = this.data;
  },
  methods: {
    searchh() {
      this.data = this.searchData;
      console.log(this.search);
      this.data = this.data.filter((item) => {
        console.log(
          item.name.toLowerCase().includes(this.search.toLowerCase())
        );
        return item.name.toLowerCase().includes(this.search.toLowerCase()) ||
        item.email.toLowerCase().includes(this.search.toLowerCase()) ||
        item.address.street.toLowerCase().includes(this.search.toLowerCase()) ||
        item.address.suite.toLowerCase().includes(this.search.toLowerCase()) ||
        item.address.city.toLowerCase().includes(this.search.toLowerCase()) ||
        item.address.zipcode.toLowerCase().includes(this.search.toLowerCase()) ||
        item.phone.toLowerCase().includes(this.search.toLowerCase()) ||
        item.website.toLowerCase().includes(this.search.toLowerCase()) ||
        item.company.name.toLowerCase().includes(this.search.toLowerCase()) ||
        item.company.catchPhrase.toLowerCase().includes(this.search.toLowerCase()) ||
        item.company.bs.toLowerCase().includes(this.search.toLowerCase());
      });
      console.log(this.data);
      this.compKey++;
    },
  },
};
</script>

<style scoped>
.home {
  text-align: center;
}
.search{
    margin-top: 2rem;
    margin-bottom:2rem;
    justify-content:center;
}
.cardd {
  display: inline-block;
  margin-right: 10px;
}
.searchbox{
  width:50% !important;
    justify-content:center;
}
</style>
