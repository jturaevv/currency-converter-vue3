import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://www.cbr-xml-daily.ru'
})

export default instance;