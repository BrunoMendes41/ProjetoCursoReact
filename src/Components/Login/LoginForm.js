import React from 'react'
import { Link } from 'react-router-dom'
import { TOKEN_POST, USER_GET } from '../../api'
import useForm from '../../Hooks/useForm'
import Button from '../Forms/Button'
import Input from '../Forms/Input'

async function getUser(token){
  const {url, options} = USER_GET(token)
  const response = await fetch(url, options)
  const json = await response.json()
  console.log(json)
}

const LoginForm = () => {
  const username = useForm()
  const password = useForm()
  
  React.useEffect(() => {
    const token = window.localStorage.getItem('token')
    if(token) {
      getUser(token)
    }
  },[])

  async function handleSubmit(event){
    event.preventDefault()
    
    const {url, options} = TOKEN_POST({
      username: username.value, 
      password: password.value
    })

    const response = await fetch(url, options)    
    const json = await response.json()
    console.log(json)
    window.localStorage.setItem('token', json.token)
    getUser(json.token)
  }

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>

        <Input
          label="Usuario"
          type="text"
          name="username"
          {...username}
        />        

        <Input
          label="Senha"
          type="password"
          name="password"
          {...password}
        />

        <Button >Logar</Button>
      </form>
      <Link to='/login/criar'>Cadastro</Link>
    </div>
  )
}

export default LoginForm