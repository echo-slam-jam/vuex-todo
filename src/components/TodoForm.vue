<template>
  <div>
      <!--<button @click = "createTask" variant = "warning">add task</button> -->
      <input id="taskName" @keyup.enter="createTask()" v-model= "name" type= "text" placeholder= "task name">


      </div>
</template>

<script>
  import { mapState, mapActions } from 'vuex'
export default {
  name: 'TodoForm',
  computed: {
    ...mapState([
      'tasklist', 'name', 'date', 
    ]),
  },
    methods: mapActions([
  'createTask'
  ])
}
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
