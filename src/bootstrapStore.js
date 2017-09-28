import {
  bootstrap as bootstrapAuth,
} from './redux/auth/actionCreators'

export default function bootstrapStore(store) {
  store.dispatch(bootstrapAuth())
}
