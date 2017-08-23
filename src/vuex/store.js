
import Vue from 'vue'
import Vuex from 'vuex'

// 引入 axios
import axios from 'axios'

Vue.use(Vuex)

const store = new Vuex.Store({
  // 定义状态
  state: {
    test01: {
      name: 'canye'
    },
    test02: {
      tell: '12312345678'
    }
  },
  actions: {
    // 封装一个 ajax 方法
    ajax (context) {
      axios({
        method: 'get',
        url: 'http://192.168.1.115:8084/cases/viewCaseAgreement?caseId=345cb44dda7542498f569870dc8b8a19',
        data: context.state.test02
      })
    }
  }
})

export default store
