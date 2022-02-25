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
    }
};

const mutations = {
    setTodo: (state, todos) => (state.todos = todos)
};

export default {
    state,
    getters,
    actions,
    mutations
};