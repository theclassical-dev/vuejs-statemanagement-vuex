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
    },
    async deleteTodo({ commit}, id) {
        await axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`);

        commit('removeTodo', id);
    },
    async filterTodo({ commit }, e){
        //get the selected options
        const limit = parseInt(e.target.options[e.target.options.selectedIndex].innerText);

        const res = await axios.get(`https://jsonplaceholder.typicode.com/todos?_limit=${limit}`);

        commit('setTodo', res.data);
        
    }
};

const mutations = {
    setTodo: (state, todos) => (state.todos = todos),
    newTodo: (state, todos) => state.todos.unshift(todos),
    removeTodo: (state, id) => state.todos = state.todos.filter(todo => todo.id !== id),
};

export default {
    state,
    getters,
    actions,
    mutations
};