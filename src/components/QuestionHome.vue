<template>
  <div class="buttons">
    <button class="button button1" @click="redirect('one')">Question 1</button>
    <button class="button button2" @click="redirect('two')">Question 2</button>
    <button class="button button3" @click="redirect('three')">Question 3</button>
    <QuesOne v-if="quesOne" />
    <QuesTwo v-if="quesTwo" />
    <QuesThree v-if="quesThree" />
  </div>
</template>

<script>
import QuesOne from './QuestionOne.vue'
import QuesTwo from './QuestionTwo.vue'
import QuesThree from './QuestionThree.vue'
export default {
  components: {
    QuesOne,
    QuesTwo,
    QuesThree
  },
  data() {
    return {
      quesOne: false,
      quesTwo: false,
      quesThree: false
    };
  },
  methods: {
    redirect(input) {
        if(input === 'one'){
            this.quesTwo = false;
            this.quesThree = false;
            this.quesOne = true;
        }
        else if(input === 'two'){
            this.quesThree = false;
            this.quesOne = false;
            this.quesTwo = true;
        }
        else{
            this.quesOne = false;
            this.quesTwo = false;
            this.quesThree = true;
        }
    }
  }
};
</script>

<style scoped>
.buttons {
  align-items: center;
  height: 100vh;
}

.button {
  padding: 10px 20px;
  font-size: 16px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.button1 {
  background-color: #007bff;
  color: #fff;
  margin: 2rem;
}

.button2 {
  background-color: #28a745;
  color: #fff;
  margin: 2rem;
}

.button3 {
  background-color: #dc3545;
  color: #fff;
  margin: 2rem;
}

.button:hover {
  opacity: 0.8;
}
</style>
