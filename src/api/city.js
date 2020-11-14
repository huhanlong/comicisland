import axios from 'axios'
export const getCityList = () => {
  return axios({
    url: '/maizuo/gateway?k=9646779',
    headers: {
      'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.0.4","e":"1605174562101026220736513"}',
      'X-Host': 'mall.film-ticket.city.list'
    }
  })
}
