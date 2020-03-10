<template>
  <div class="TodoScreen_Layout">
    <div class="TodoScreen_Wrapper">
      <main-navigation></main-navigation>
      <todo-app></todo-app>
    </div>
  </div>
</template>

<script>
import MainNavigation from './components/navigation/MainNavigaion'
import TodoApp from './components/todo/TodoApp'

export default {
  name:'TodoScreen',
  components:{TodoApp,MainNavigation}
}
</script>

<style>
.TodoScreen_Layout {
  display: flex;
  justify-content: center;
  background-color: #b2bec3;
  /* background-color: #d0fe4ea; */
  /* background-color: lightslategray; */
}
.TodoScreen_Wrapper {
  width: 800px;
  /* height: 1200px; */
  margin: 80px 0;
  background-color: #f5f6fa;
  border-radius: 10px;
}
body {
  text-align: center;
}
</style>