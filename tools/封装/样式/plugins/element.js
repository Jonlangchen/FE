import Vue from 'vue'
import { 
   Button
} from 'element-ui'

 const components = { Button };
 Object.values(components).forEach(component => {
    Vue.use(component)
 })