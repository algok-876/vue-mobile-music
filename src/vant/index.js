import { 
  Button,
  Icon,
  Swipe,
  SwipeItem
} from 'vant'

const components = [
  Button,
  Icon,
  Swipe,
  SwipeItem
]

export default function (app) {
  components.forEach(component => {
    app.use(component)
  })
}
