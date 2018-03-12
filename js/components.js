Vue.component('todo-item', {
  props: ['todo'],
  template: `
    <li>
      <section>
        <h1
          @id="todo.key"
          @dblclick="makeEditable(todo)">
          {{ todo.title }}
        </h1>
        <input type="text" name="title"
          v-model="todo.title"
          @blur="update(todo)"
          @keyup.enter="update(todo)">
      </section>
      <p>
        <input type="checkbox"
          @click="markCompleted(todo)"
          :checked="todo.completed">
        <button @click="destroy(todo)">Excluir</button>
      </p>
      <input type="hidden" name="key"
        v-model="todo.key"
        @keyup.enter="update(todo)">
    </li>
  `,
  methods: {
    update: function(todo){
      this.$emit('update', todo);
    },
    destroy: function(todo){
      this.$emit('destroy', todo);
    },
    markCompleted: function(todo){
      this.$emit('completed', todo);
    },
    makeEditable: function(todo){
      this.$emit('editable', todo);
    },
  }
});
