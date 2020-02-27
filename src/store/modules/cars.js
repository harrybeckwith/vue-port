const carsStore = {
    namespaced: true,
    state: {
        carCount: 9
    },
    mutations: {
        increaseCount(state, amount) {
            state.carCount = amount
        }
    },
    actions: {
        INCREASE_COUNT({commit}, amount) {
            commit('increaseCount', amount)
        }
    },
    getters: {
        getCarCount(state) {
            return state.carCount
        }
    }
}

export default carsStore;