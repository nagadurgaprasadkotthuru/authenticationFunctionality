// Write your JS code here
import Cookies from 'js-cookie'

const url = 'https://apis.ccbp.in/login'
const userDetails = {
  username: 'rahul',
  password: 'rahul@2021',
}
const options = {
  method: 'POST',
  body: JSON.stringify(userDetails),
}
const Login = props => {
  const {history} = props
  const onLogin = async event => {
    event.preventDefault()
    const response = await fetch(url, options)
    if (response.ok === true) {
      const data = await response.json()
      const jwtToken = data.jwt_token
      Cookies.set('jwt_token', jwtToken)
      history.replace('/')
    }
  }
  return (
    <div className="bg-container">
      <h1 className="main-heading">Please Login</h1>
      <form onSubmit={onLogin}>
        <button className="button" type="submit">
          Login with Simple Credits
        </button>
      </form>
    </div>
  )
}

export default Login
