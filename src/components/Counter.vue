<template>
  <div>
    <p>Clicked {{ count }} times! Count is {{ parity }}.</p>
    <button @click = "increment" variant = "success">Increment</button>
    <button @click = "decrement" variant = "danger">Decrement</button>
    <button @click = "incrementIfOdd" variant = "info">Increment if Odd</button>
    <button @click = "incrementAsync" variant = "warning">Increment Async</button>
    <br>
  </div>
</template>

<script>
  import { mapState, mapGetters, mapActions } from 'vuex'
export default {
  name: 'Counter',
  computed: {
    ...mapState([
      'count'
    ]),
    ...mapGetters([
      'parity'
    ])
  },
  methods: mapActions([
    'increment',
    'decrement',
    'incrementIfOdd',
    'incrementAsync',
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
