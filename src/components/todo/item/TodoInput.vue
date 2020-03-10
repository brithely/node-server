<template>
  <div class="TodoInput_Wrapper shadow">
    <input class="TodoInput_Input" type="text" v-model="item" @keypress.enter="addItems">
    <span class="TodoInput_BtnWrapper">
      <i class="TodoInput_AddBtn fas fa-plus" aria-hidden="true" @click="addItems"></i>
    </span>
  </div>
</template>

<script>
// import Constant from '@/constant'
import {addTodo} from '../../../api/index'
export default {
  name:'TodoInput',
  data() {
    return {
      item:''
    }
  },
  methods: {
    addItems() {
      // this.$store.commit(Constant.ADD_TODO, { item: this.item });
      // this.item = '';
      addTodo()
        .then(res=> {
          console.log(res);
        })
        .catch(e=> {
          console.log(e,'error');
        });
    },
  }
}
</script>

<style>
.TodoInput_Wrapper {
  margin: 15px 50px;
  background-color: white;
  height: 50px;
  line-height: 50px;
  border-radius: 5px;
}

.TodoInput_Input {
  border: none;
  font-size: 0.9rem;
  width: 400px;
  outline: none;
}

.TodoInput_BtnWrapper {
  float: right;
  background: linear-gradient(to right, #82ccdd, #60a3bc);
  display: block;
  width: 50px;
  height: 50px;
  border-radius: 0 5px 5px 0;
}

.TodoInput_AddBtn {
  color: white;
  margin-top: 15px;
  margin-right: 15px;
}

.shadow {
  box-shadow: 5px 10px 10px rgba(0, 0, 0, 0.1);
}
</style>