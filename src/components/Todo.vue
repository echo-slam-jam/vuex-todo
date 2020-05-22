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
        <tr v-for="task in tasklist" :key="task.id">          <td>{{ task.name }}</td>
                  <td>{{ task.date }}</td>
        </tr>
      </tbody>
    </v-simple-table>
  </div>
</template>

<script>
  import { mapState, mapActions } from 'vuex'
export default {
  name: 'Todo',
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
