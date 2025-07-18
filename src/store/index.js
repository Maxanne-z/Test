import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'// 作用？？？
import app from './modules/app'
import settings from './modules/settings'
import user from './modules/user'
import authority from './modules/authority'
import ocr from '@/store/modules/ocr'
import projectEdit from '@/store/modules/projectEdit'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    app,
    settings,
    user,
    authority,
    ocr,
    projectEdit
  },
  getters
})

export default store
