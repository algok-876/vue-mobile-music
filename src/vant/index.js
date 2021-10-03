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
  CountDown,
  Popup,
  Tabbar,
  TabbarItem
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
  CountDown,
  Popup,
  Tabbar,
  TabbarItem
]

export default function (app) {
  components.forEach(component => {
    app.use(component)
  })
}
