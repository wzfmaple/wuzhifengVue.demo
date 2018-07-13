<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <hr />
    <div>
      <ul>
        <li v-for="user in users">
          {{user.firstname}} {{user.lastname}}
        </li>
      </ul>
    </div>
    <hr />
    <div>
      <input type="text" v-model="input_val">
    </div>
    <div>
      Input Value: <span v-text="input_val"></span>
    </div>
    <hr />
    <div>
      <button class="btn btn-primary" v-on:click="counter++">You've clicked this button {{counter}} times!</button>
    </div>
    <hr>
    <span v-bind:title="message">
      Hover your mouse over me for a few seconds
      to see my dynamically bound title!
    </span>
    </hr>
    <hr>
    <div>
      <span v-if="seen">Now you see me</span>
    </div>
    </hr>
    <hr>
    <div>
      <p>{{ message1 }}</p>
      <button v-on:click="reverseMessage">Reverse Message</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      users: [
        {firstname: 'Sebastian', lastname: 'Eschweiler'},
        {firstname: 'Bill', lastname: 'Smith'},
        {firstname: 'John', lastname: 'Porter'}
      ],
      input_val: '',
      counter: 0,
      message: 'You loaded this page on ' + new Date().toLocaleString(),
      seen: true,
      message1: 'Hello Vue.js!'
    }
  },
  methods: {
    reverseMessage: function () {
      this.message1 = this.message1.split('').reverse().join('')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
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
