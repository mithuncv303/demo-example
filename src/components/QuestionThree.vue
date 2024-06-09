<template>
  <div>
    <div class="form-container" v-for="blocks in data" v-bind:key="blocks.id">
      <form @submit.prevent="handleSubmit" class="form-group">
        <div
          v-for="block in blocks"
          v-bind:key="block.token"
          class="form-group"
        >
          <label v-if="block.type != 'checkbox'" :for="block.token">{{
            block.props.title
          }}</label>
          <input
            v-if="block.type === 'text'"
            :type="block.type"
            :id="block.token"
            :placeholder="block.props.placeholder"
            :required="block.props.required"
          />
          <Datepicker
            v-if="block.type === 'date'"
            v-model="date"
            :enableTimePicker="false"
            :clearable="false"
            :monthChangeOnScroll="false"
            :id="block.token"
            :placeholder="block.props.placeholder"
            :required="block.props.required"
            autoApply
          ></Datepicker>
          <div style="display: flex !important">
            <label v-if="block.type === 'checkbox'" :for="block.token">{{
              block.props.title
            }}</label>
            <input
              v-if="block.type === 'checkbox'"
              type="checkbox"
              :id="block.token"
            />
          </div>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  </div>
</template>
<script>
import Datepicker from "vue3-datepicker";
export default {
  components: {
    Datepicker,
  },
  data() {
    return {
      date: "",
      data: {
        block1: [
          {
            token: "PERSON_NAME",
            type: "text",
            props: {
              title: "Enter your name",
              required: true,
              placeholder: "e.g. John Doe",
            },
          },
          {
            token: "IS_PERSON_MINOR",
            type: "checkbox",
            props: {
              title: "Is the current person minor",
              default: false,
            },
          },
          {
            token: "PERSON_DOB",
            type: "date",
            props: {
              title: "Enter your Date of Birth",
              required: "IS_PERSON_MINOR",
              placeholder: "e.g. 01/01/2000",
            },
          },
        ],
      },
    };
  },
  computed: {
    isRequired() {
      return !this.agree;
    },
  },
  async created() {},
  methods: {
    check(input) {
      console.log(input);
      if (input === true || input === false) {
        return input;
      } else {
        console.log(this.date);
      }
    },
  },
};
</script>
<style>
.form-container {
  max-width: 600px;
  margin: 0 auto !important;
  margin-top: 3rem !important;
}

.form-group {
  margin-bottom: 20px;
}

label {
  display: block;
  font-weight: bold;
  margin-bottom: 0.5rem;
}

input {
  width: 100%;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 5px;
}
input[type="checkbox"] {
  margin-right: 10px;
  width: 10% !important;
  height: 20px;
}

button {
  padding: 10px 20px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
}
</style>
