import { auth } from '@/services/fireinit.js'

export default (context) => {

  const {store} = context

  return new Promise((resolve, reject) => {
    auth.onAuthStateChanged(user => {
      store.dispatch('setUSER', user)
      resolve()
    })
  })
}
