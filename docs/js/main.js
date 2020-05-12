Vue.component('todo-item', {
    props: {
        todo: {
            type: Object,
            required: true
        }
    },
    template: '<div>' + 
        '<input type="checkbox"' + 'v-model="todo.completed" v-on:changed="onChange">' +
        '<span v-bind:class="{ done: todo.completed }">{{ todo.text }}</span>' +
        '<strong class="red" v-show="todo.completed">Done!</strong>'+
        '<button type="button" v-on:click="onClickRemove" class="button remove">削除</button>'+
        '</div>',
    methods: {
        onChange: function(event) {
            this.$emit('todo-change', this.todo.completed)
        },
        onClickRemove: function(event){
            this.$emit('remove')
        }
    }
})

var vm = new Vue ({
    el: '#app',
    data: {
        input: '',
        todos: [
            {completed: true, text: '段ボールの片づけ'},
            {completed: false, text: 'なにかコード書く'},
            {completed: false, text: 'マイナンバーカードの手続き'}
        ]
    },
    methods: {
        addTodo: function(){
            this.todos.push({
                completed: false,
                text: this.input
            })
            this.input = '' //追加した後入力欄を空にする
        }
    }
});