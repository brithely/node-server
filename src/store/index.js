import Vue from 'vue'
import Vuex from 'vuex'
import Constant from '../constant'


Vue.use(Vuex);

export const store = new Vuex.Store({
  state : {
    todoItems: []
  },
  mutations : {
    [Constant.ADD_TODO]: (state, payload) => {
      if (payload.item !== '') {
        localStorage.setItem(payload.item, JSON.stringify({
          item: payload.item,
          completed: false
        }));

        state.todoItems.push({
          item: payload.item,
          completed: false
        });
      } else {
        alert('텍스트를 입력해주세요.');
      }
    },
    [Constant.REMOVE_TODO]: (state, payload) => {
      localStorage.removeItem(payload.item);
      state.todoItems.splice(payload.index, 1);
    },
    [Constant.CHECK_TODO]: (state, payload) => {
      state.todoItems[payload.index].completed = !state.todoItems[payload.index].completed;
      localStorage[payload.item] = JSON.stringify({
        todo: payload.item,
        completed: state.todoItems[payload.index].completed
      });
    },
    [Constant.ALL_CLEAR]: (state) => {
      localStorage.clear();
      state.todoItems = [];
    },
    /* eslint-disable no-unused-vars */
    [Constant.SHOW_TODOITEMS]: (state, payload) => {
      for (let i = 0; i < localStorage.length; i++) {
        let localKey = localStorage.key(i);
        if (localKey === 'loglevel:webpack-dev-server') continue;

        state.todoItems.push({
          item: localKey,
          completed: JSON.parse(localStorage[localKey]).completed
        });
      }
    }
  } 
}); 

