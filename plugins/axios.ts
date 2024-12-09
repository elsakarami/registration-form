import { defineNuxtPlugin } from 'nuxt/app';
import axios from 'axios'

export default defineNuxtPlugin(nuxtApp => {
  const api = axios.create({
    baseURL: 'http://192.168.2.107:5000'
  })

  nuxtApp.provide('api', api)
})
