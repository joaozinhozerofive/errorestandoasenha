import { Container } from "./style";
import   Header  from "../../components/Header";
import { Button } from "../../components/Button";
import { Form } from "./style";
import { Input } from "../../components/Input";
import { Textarea } from "../../components/TextArea";
import { Section } from '../../components/section/index.jsx'
import { NoteItem } from "../../components/NoteItem";
import { Link } from "react-router-dom";


export function New(){
    return(
        <Container>
            <Header/>

            <main>
                <Form>
                    <header>
                        <h1>Criar nota</h1>
                         <Link to = "/">Voltar</Link>
                    </header>

                    <Input placeholder = 'Título' type='text'/>
                    <Textarea placeholder ='Observações'/>

                    <Section title="Links úteis"/>
                    <NoteItem value="https://www.rocketseat.com.br/" />
                    <NoteItem placeholder="Novo Link" isNew />

                    <Section title="Marcadores"/>
                    <div className="tags">
                        <NoteItem value="React" />
                        <NoteItem placeholder="Novo marcador" isNew />
                     </div>
                        <Button title= "Salvar"/>
                </Form>
            </main>
        </Container>
    )
}