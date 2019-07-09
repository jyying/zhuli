import axios from 'axios'

const BaseUrl = 'https://api.monkey.b8app.cn/'

export default async function request(option) {
  let res
  let { url, ...ex } = option
  url = BaseUrl + url
  res = await axios({ url, ...ex })

  return res.data
}