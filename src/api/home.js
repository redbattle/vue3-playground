import request from '@/api/request'

export function getWeather(params) {
  return request.$get('/api/weather/weatherInfo', params)
}
