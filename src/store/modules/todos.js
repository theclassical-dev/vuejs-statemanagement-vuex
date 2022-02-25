import axios from 'axios';

const state = {
    todos: []
};

const getters = {
    allTodos: (state) => state.todos
};

const actions = {
    async fetchTodo({ commit }) {
        const res = await axios.get('https://jsonplaceholder.typicode.com/todos');

        commit('setTodo', res.data);
    },
    async addTodo({ commit }, title) {
        const res = await axios.post('https://jsonplaceholder.typicode.com/todos',{ title, completed: false });

        commit('newTodo', res.data);
    }
};

const mutations = {
    setTodo: (state, todos) => (state.todos = todos),
    newTodo: (state, todos) => state.todos.unshift(todos)

};

export default {
    state,
    getters,
    actions,
    mutations
};