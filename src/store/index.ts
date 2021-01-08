
import { createStore } from 'vuex'

// https://webpack.js.org/guides/dependency-management/#requirecontext
const modules: any = {}

function importAll (files: any) {
  files.keys().forEach((key: string) => {
    // './user.ts' => 'user'
    modules[key.replace(/(\.\/|\.ts)/g, '')] = {
      ...files(key).default,
      namespaced: true
    }
  })
}
importAll(require.context('./modules', false, /\.ts$/))
console.log('modules', modules)
export default createStore({ modules })
