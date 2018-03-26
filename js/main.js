const main = new Vue({
  el: '#main',
  data: {
    selectedTask: undefined,
    completedTask: undefined,
    tasks: list(),
  },

  methods: {
      create: function(){
        var key = create('titulo');
        this.tasks.unshift({key: key, title: 'titulo'})
      },
      update: function(todo){
        update(todo);
        this.selectedTask = undefined
      },
      markCompleted: function(todo){
        console.log(123);
        completed = !todo.completed;
        Vue.set(todo, 'completed', !todo.completed);
        update(todo, completed)
      },
      makeEditable: function(todo){
        this.selectedTask = todo.key
      },
      destroy: function(todo) {
        if (destroy(todo) != false){
          this.tasks.splice(todo.key, 1);
        }
      }
  }
})
