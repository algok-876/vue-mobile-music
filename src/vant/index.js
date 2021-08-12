import { Button } from 'vant'

const components = [
  Button
]

export default function (app) {
  components.forEach(component => {
    app.use(component)
  })
}
