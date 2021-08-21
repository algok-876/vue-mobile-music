import { 
  Button,
  Icon,
  Swipe,
  SwipeItem,
  NavBar,
  Skeleton,
  Loading
} from 'vant'

const components = [
  Button,
  Icon,
  Swipe,
  SwipeItem,
  NavBar,
  Skeleton,
  Loading
]

export default function (app) {
  components.forEach(component => {
    app.use(component)
  })
}
