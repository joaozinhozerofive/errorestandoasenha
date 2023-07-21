import { Container, Brand, Menu, Search, Content, NewNote} from './style.js'
import { FiPlus, FiSearch } from 'react-icons/fi'
import Header from '../../components/Header/index.jsx'
import { ButtonText } from '../../components/Button Text/index.jsx'
import { Input } from '../../components/Input/index.jsx'
import { Section } from '../../components/section/index.jsx'
import { Note } from '../../components/Note/index.jsx'

export function Home(){
    return(
        <Container>
            <Brand>
            <h1>RocketNotes</h1>
            </Brand>

            <Header/>

            <Menu>
            <li><ButtonText title = 'Todos' isActive/></li>
            <li><ButtonText title = 'FrontEnd'/></li>
            <li><ButtonText title = 'React'/></li>
            <li><ButtonText title = 'Nodejs'/></li>
            </Menu>

            <Search>
                 <Input placeholder = ' Pesquise pelo título' icon={FiSearch}/>
            </Search>

            <Content>
                <Section title="Minhas notas ">
                    <Note data={{
                    title : "React ", 
                    tags: [
                        { id: '1', name :'React'},
                        { id: '2', name :'Rocketseat'}
                    ]
                    }}
                    />
                    
                </Section>
                <Section >
                    <Note data={{
                    title : "Exemplo de Middleware  ", 
                    tags: [
                        { id: '1', name :'Express'},
                        { id: '2', name :'Nodejs'}
                    ]
                    }}
                    />
                    
                </Section>
            </Content>

            <NewNote to="/new">
                <FiPlus/>
                Criar nota
            </NewNote>

        </Container>
    )
}


