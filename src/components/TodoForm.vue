<template>
  <div>
     <input id="taskName"  v-model="name" type= "text" placeholder= "task name">
     <input type = "text" id="taskDate"  v-model="date" placeholder = "task date">
     <button @click="createTask({name, date})"> add task</button>
  </div>
</template>

<script>
  import { mapState, mapActions } from 'vuex'
export default {
  name: 'TodoForm',
  //name in data as passable variable
  data () {
    return {
      name: '',
      date: ''
    };
  },
  computed: {
    ...mapState([
      'tasklist' 
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
