import { 
  Button,
  Icon,
  Swipe,
  SwipeItem,
  NavBar
} from 'vant'

const components = [
  Button,
  Icon,
  Swipe,
  SwipeItem,
  NavBar
]

export default function (app) {
  components.forEach(component => {
    app.use(component)
  })
}
