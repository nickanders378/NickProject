import { useEffect } from 'react'
import './style.css'
import Trash from '../../assets/lixeira.png'
import api from '../../services/api'


function Home() {

let users = []

  async function getUsers() {
    users = await api.get('/users')
  }
  useEffect(() => {
    getUsers()
  }, [])
  
  return (
    <div className='container'>
      <form action="">
        <h1>Cadastro Usuário</h1>  
        <input type="text" name='' id='' placeholder='Entre com seu nome'/>
        <input type="text" name='' id='' placeholder='Entre com seu e-mail'/>
        <input type="number" name='age'/>
        <button type='button'> Cadastrar</button>
      </form>

      {users.map((user) => (
        <div key={user.id} className='card'>
          <div>
            <p>Nome: <span>{user.name}</span></p>
            <p>Email: <span>{user.email}</span></p>
            <p>Age: <span>{user.age}</span></p>
          </div>
          
          <button>
            <img src={Trash} alt="Trash" />
          </button>
        </div>

      ))}
    </div>
  )
}

export default Home