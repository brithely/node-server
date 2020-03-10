<template>
  <div>
    <!-- <todo-input></todo-input> -->
    <todo-list></todo-list>
    <todo-footer></todo-footer>
  </div>
</template>

<script>
// import TodoInput from '@/components/todo/item/TodoInput'
import TodoList from '@/components/todo/item/TodoList'
import TodoFooter from '@/components/todo/item/TodoFooter'

export default {
  name:'TodoApp',
  components:{TodoList,TodoFooter}
}
</script>

<style>

</style>