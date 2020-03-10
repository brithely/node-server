<template>
  <div class="TodoList_Wrapper">
    <div class="TodoInput_Wrapper shadow">
      <input class="TodoInput_Input" type="text" v-model="item" @keypress.enter="addItems">
      <span class="TodoInput_BtnWrapper">
        <i class="TodoInput_AddBtn fas fa-plus" aria-hidden="true" @click="addItems"></i>
      </span>
    </div>
    <ul class="TodoList_ListBox">
      <li class="TodoList_List" v-for="(item,index) in todoItems" v-bind:key="item.item">
        <i class="TodoList_CheckBtn fas fa-check" @click="checkItem({item:item.item,index:index})" v-bind:class="{TodoList_CheckBtnCom: item.completed}"></i>
        <span v-bind:class="{TodoList_TextCom: item.completed}">{{item.title}}</span>
        <!-- 지울예정 -->
        <!-- ###### -->
        <!-- ###### -->
        <span class="TodoList_EditBtnBox" @click="editItem(item,index)">
          <i class="TodoList_EditBtn fas fa-pencil-alt fa-2x"></i>
        </span>
        <!-- ###### -->
        <!-- ###### -->
        <!-- ###### -->
        <span class="TodoList_RemoveBtnBox" @click="removeItem(item,index)">
          <i class="TodoList_RemoveBtn fas fa-minus fa-2x"></i>
        </span>
      </li>
    </ul>
  </div>
</template>

<script>
import Constant from '../../../constant'
import {fetchTodoList} from '../../../api/index'
import {addTodo} from '../../../api/index'
import {removeTodo} from '../../../api/index'
import {editTodo} from '../../../api/index'
export default {
  name:'TodoList',
  data() {
    return {
      item:'',
      todoItems:[]
    }
  },
  // computed: {
  //   todoItems () {
  //     return this.$store.state.todoItems;
  //   }
  // },
  methods: {
    checked (item) {
      return item ? { TodoList_CheckBtnCom: true } : { TodoList_CheckBtnCom: false };
    },
    removeItem(item) {
      // this.$store.commit(Constant.REMOVE_TODO, {
      //   item: item.todo,
      //   index: item.index 
      // });
      removeTodo()
        .then(res=> {
          console.log(res);
          this.todoItems.splice(item.index, 1);
        })
        .catch(e=> {
          console.log(e,'error');
        });
    },

    editItem() {
      editTodo()
        .then(res=>{
          console.log(res);
          this.todoItems.push(res.data)
        })
        .catch(e=> {
          console.log(e,'error');
        });
    },
  
    checkItem(item) {
        this.$store.commit(Constant.CHECK_TODO, {
        item: item.todo,
        index: item.index 
      });
    },
    addItems() {
      // this.$store.commit(Constant.ADD_TODO, { item: this.item });
      // this.item = '';
      addTodo()
        .then(res=> {
          console.log(res);
          this.todoItems.push(res.data)
        })
        .catch(e=> {
          console.log(e,'error');
        });
    },
  },
  created () {
    // this.$store.commit(Constant.SHOW_TODOITEMS);
   fetchTodoList()
    .then(res => { 
      console.log(res)
      this.todoItems = res.data;
    })
    /* eslint-disable no-undef */
    .catch(e=> {
      console.log(e)
   });

  }
}
</script>

<style>
.TodoList_Wrapper {
  margin: 30px 45px;
}

.TodoList_ListBox {
  list-style: none;
  text-align: left;
  padding: 0px;
}

.TodoList_List {
  display: flex;
  height: 50px;
  line-height: 50px;
  margin: 0.7rem 0;
  padding: 10px;
  /* padding: 0 0.9rem; */
  background: white;
  border-radius: 10px;
}

.TodoList_CheckBtn {
  /* line-height: 45px; */
  color:turquoise;
  margin-right: 10px;
  margin-top: 20px;
}

.TodoList_CheckBtnCom {
  color:lightslategray;
}

.TodoList_TextCom {
  color: #b2bec3;
  text-decoration: line-through;
}

.TodoList_EditBtnBox {
  margin-left: auto;
}

.TodoList_EditBtn {
  margin-top: 10px;
}

.TodoList_RemoveBtnBox {
  margin-left: auto;
}

.TodoList_RemoveBtn {
  color: #6a89cc;
  margin-top: 10px;
}

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