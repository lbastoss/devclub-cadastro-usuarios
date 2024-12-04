
import { Title, Container, Form, ContainerInputs, Input, InputLabel } from './styles'
import { useRef } from 'react' // hook para pegar os dados do input
import api from '../../services/api'
import Button from '../../components/Button'
import TopBackground from '../../components/Backgound'
import { useNavigate } from 'react-router-dom'




function Home() {
  const inputName = useRef()
  const inputAge = useRef()
  const inputEmail = useRef()

  const navigate = useNavigate()

  async function registerNewUser() {/* função para quando clicar no botão obter dados do usuario  */

    await api.post('/usuarios', {
      email: inputEmail.current.value,
      age: parseInt(inputAge.current.value), /* parseInt corrige o erro de esperar por um numero e vir sting*/
      name: inputName.current.value,
    })
    navigate('/lista-de-usuarios')
  }

  function handleKeyPress(event) {
    if (event.key === 'Enter') {
      event.preventDefault() // vai evitar o comportamento padrão do enter de submeter o form // 
      registerNewUser() // vai chamar a função normalmente
    }
  }

  return (

    <Container>

      <TopBackground />

      <Form onKeyDown={handleKeyPress}> {/* adicionando evento de click com key */}
        <Title>Cadastrar Usuário</Title>

        <ContainerInputs>

          <div>
            <InputLabel>
              Nome <span>*</span>
            </InputLabel>
            <Input type='text' placeholder='Nome do usuário' ref={inputName} /> {/* usa-se o ref para linkar com as variaveis */}
          </div>


          <div>
            <InputLabel>
              Idade <span>*</span>
            </InputLabel>
            <Input type='number' placeholder='Idade do usuário' ref={inputAge} />{/* usa-se o ref para linkar com as variaveis */}
          </div>


        </ContainerInputs>

        <div style={{ width: '100%' }} >
          <InputLabel>
            Email <span>*</span>
          </InputLabel>
          <Input type='email' placeholder='E-mail do usuário' ref={inputEmail} /> {/* usa-se o ref para linkar com as variaveis */}
        </div>




        <Button type='button' onClick={registerNewUser} theme='primary' >Cadastrar Usuário</Button >


      </Form>

      <Button type='button' onClick={() => navigate('/lista-de-usuarios')}> Ver lista de usuários</Button >
    </Container >

  )
}

export default Home
