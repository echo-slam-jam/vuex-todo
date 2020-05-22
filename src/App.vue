<template>
  <div id="app">
    <h1>Vuex Counter</h1>
    <Counter/>
    <Todo/>
    <TodoForm/>
  </div>
</template>

<script>
import Counter from './components/Counter.vue'
import Todo from './components/Todo.vue'
import TodoForm from './components/TodoForm.vue'


export default {
  name: 'app',
  components: {
    Counter,
    Todo,
    TodoForm
  }
}
</script>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
