import { 
  Button,
  Icon,
  Swipe,
  SwipeItem,
  NavBar,
  Skeleton,
  Loading,
  Field,
  CellGroup,
  Form,
  PasswordInput,
  NumberKeyboard,
  Overlay,
  CountDown
} from 'vant'

const components = [
  Button,
  Icon,
  Swipe,
  SwipeItem,
  NavBar,
  Skeleton,
  Loading,
  Field,
  CellGroup,
  Form,
  PasswordInput,
  NumberKeyboard,
  Overlay,
  CountDown
]

export default function (app) {
  components.forEach(component => {
    app.use(component)
  })
}
