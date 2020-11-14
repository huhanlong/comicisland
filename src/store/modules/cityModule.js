// 从本地存储中取数据出来
const city = window.sessionStorage.getItem('city')
// 拆分出来 城市相关的 仓库子模块
const state = {
  curCity: city ? JSON.parse(city) : null // 当前选择的城市
}
const mutations = {
  // 设置当前城市
  // state 上面的 state  payload  this.$store.commit("SET_CURCITY", payload)
  SET_CURCITY (state, payload) {
    state.curCity = payload
    // 做一下本地的存储
    window.sessionStorage.setItem('city', JSON.stringify(state.curCity))
  }
}
// 在页面上显示当前城市名字
const getters = {
  curCityName (state) {
    return state.curCity ? state.curCity.name : ''
  }
}
export default {
  namespaced: true, // 注意在子模块中要去添加命名空间
  state,
  getters,
  mutations
}
