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
        usersList: ({list}) => Object.values(list)
    },
    mutations: {},
    action: {}
};
export default usersStore