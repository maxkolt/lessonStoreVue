import Vue from 'vue';

const usersStore = {
    namespaced: true,
    state: {
        list: {
            1: {
                name: 'Max',
                age: 30
            }
        }
    },
    getters: {
        usersList: ({ list }) => Object.values(list)
    },
    mutations: {
        ADD_USER(state, user) {
            Vue.set(state.list, user.id, user);
            console.log(state);
        }
    },
    action: {
        addNewUser({ commit }, user) {
            const newUser = {...user, id: String(Math.random())};
            commit('ADD_USER', newUser);
        }
    }
};
export default usersStore;