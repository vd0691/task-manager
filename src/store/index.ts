import { RootState } from '@/interfaces/StoreInterface';
import Vuex from 'vuex'
import tasks from './modules/tasks'
import Vue from 'vue';
Vue.use(Vuex)

const store = new Vuex.Store<RootState>({
  modules: {
    tasks
  }
})

export default store;
export const useStore = () => store
