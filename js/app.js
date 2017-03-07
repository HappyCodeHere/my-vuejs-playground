new Vue({
  el: '#app',
  data: {
    hello: 'hi!',
    counter: 0,
    arr: ['apple', 'pen', 'banana', 'applepen'],
  },
  methods: {
    addOne() {
      this.counter+=1;
    }
  }
})
