<template>
  <div>
    <v-simple-table>
     <thead>
        <tr>
          <th>Task name</th>
          <th>Date Due</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="task in tasklist" :key="task.id">

          <td v-if = "$store.state.editing === task.id">
            <input type="text" v-model = "name">
          </td>
          <td v-else>{{ task.name }}</td>

          <td v-if = "$store.state.editing === task.id">
            <input type="text" v-model = "date"></td>
          <td v-else>{{ task.date }}</td>
          <td v-if = "$store.state.editing === task.id">
            <button @click = "editTask({ id: task.id, name, date})">Save</button>
            <button @click = "cancelEdit(task)">Cancel</button>
          </td>
          <td v-else>
            <button @click = "deleteTask(task.id)">Delete</button>
            <button @click = "editMode(task)">Edit</button>
          </td>
        </tr>
      </tbody>
    </v-simple-table>
  </div>
</template>

<script>
  import { mapState, mapActions } from 'vuex'
export default {
  name: 'Todo',
  //data() {
   // return {
      //editing: '',
   // }
 // },
  computed: {
    ...mapState([
      'tasklist', 'editing', 'getId'
    ]),
  },
  methods: mapActions([
    'createTask', 'deleteTask', 'editMode', 'cancelEdit', 'editTask'
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
