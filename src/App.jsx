import { BrowserRouter, Route, Routes } from "react-router"
import { Provider } from "react-redux"
import appStore from "./utils/appStore"
import Body from "./components/Body"
import Login from "./components/pages/Login"
import Profile from "./components/pages/Profile"
import Feed from './components/pages/Feed'
import Connections from './components/pages/Connections'
import Request from './components/pages/Request'

function App() {
  return (
    <>
      <Provider store={appStore}>
        <BrowserRouter >
          <Routes>
            <Route path="/" element={<Body />}>
              <Route path="/" element={<Feed />} />
              <Route path="/login" element={<Login />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/connections" element={<Connections />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </Provider>
    </>
  )
}

export default App
