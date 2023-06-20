import { TasksState, RootState } from "@/interfaces/StoreInterface"
import { ActionTree,  MutationTree } from "vuex"

const tasks = JSON.parse(localStorage.getItem('tasks') || '[]')

const state = (): TasksState => ({
    tasksList: tasks
})

const actions: ActionTree<TasksState, RootState> = {
    ADD_TASK({commit}, payload) {
        commit('ADD_TASK', payload)
    },
    DELETE_TASK({commit}, item) {
        commit('DELETE_TASK', item)
    },
    DELETE_ALL_TASKS({commit}) {
        commit('DELETE_ALL_TASKS')
    }
}

const mutations: MutationTree<TasksState> = {
 
    ADD_TASK(state, payload) {
        state.tasksList.push({id: Math.floor(Math.random() * 1015412312312), name: payload}) 
        localStorage.setItem('tasks', JSON.stringify(state.tasksList))
    },
    DELETE_TASK(state, item) {
        state.tasksList.splice(item, 1)
        localStorage.setItem('tasks', JSON.stringify(state.tasksList))
    },
    DELETE_ALL_TASKS(state) {
        state.tasksList = []
        localStorage.setItem('tasks', JSON.stringify(state.tasksList))
    }
}

export default {
    state,
    actions,
    mutations
}