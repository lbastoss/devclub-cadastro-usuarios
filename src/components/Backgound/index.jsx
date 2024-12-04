import { TopBackground } from './styles'
import UsersImage from '../../assets/users.png'

function DefaultBackground() {


    return (
        <TopBackground>

            <img src={UsersImage} alt="imagem-usuarios" />

        </TopBackground>
    )
}

export default DefaultBackground