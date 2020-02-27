const animalsStore = {
    namespaced: true,
    state: {
        animals: ['koala', 'lizard', 'monkey']
    },
    mutations: {
        addAnimal(state, animal) {
            state.animals.push(animal);
        }
    },
    actions: {
        ADD_ANIMAL({commit}, animal) {
            commit('addAnimal', animal)
        }
    },
    getters: {
        getAnimals(state) {
            return state.animals
        }
    }
}

export default animalsStore;