import Vue from 'vue'
import Vuex from 'vuex'
import clone from '@/lib/clone';

Vue.use(Vuex);

const store= new Vuex.Store({
  state: {
    recordList : []as recordItem[],
  },
  mutations: {
    createRecord(state,record: recordItem) {
      const record2: recordItem = clone(record);
      record2.createAt = new Date();
      state.recordList.push(record2);
      store.commit('saveRecords');
    },
    fetchRecords(state) {
      state.recordList =JSON.parse(window.localStorage.getItem('recordList') || '[]') as recordItem[];
    },
    saveRecords(state) {
      window.localStorage.setItem('recordList',
          JSON.stringify(state.recordList));
    }
  },
});

export default store;
