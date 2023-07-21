import { Container, Form, Avatar} from "./style";
import { FiArrowLeft, FiUser, FiLock, FiMail, FiCamera } from "react-icons/fi";
import { Link } from "react-router-dom";
import { useState } from "react";

import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { useAuth } from "../../hooks/auth";




export function Profile(){
    const { user, updateProfile } = useAuth();
    const [name, setName] = useState(user.name);
    const [email, setEamail] = useState(user.email);
    const [passwordOld, setpasswordOld] = useState();
    const [passwordNew, setPasswordNew] = useState();

    async function handleUpdate(){
        const user = {
            name,
            email, 
            password : passwordNew,
            oldPassword : passwordOld
        }

        await updateProfile({user});
    }
     return(
        <Container>
            <header>
                <Link to ="/">
                <FiArrowLeft/>
                </Link >
            </header>

            <Form>
                <Avatar>
                    <img src="https://github.com/rodrigorgtic.png" alt="foto do usuário" />

                    <label htmlFor="avatar">
                        <input 
                        id="avatar"
                        type="file"/>
                        <FiCamera/>
                    </label>
                </Avatar>
            <Input
            placeholder = "Nome"
            type ="text"
            icon={FiUser}
            value = {name}
            onChange = {e => setName(e.target.value)}
            />
            <Input
            placeholder = "E-mail"
            type ="text"
            icon={FiMail} 
            value ={email}
            onChange = {e => setEamail(e.target.value)}
            />
            <Input
            placeholder = "Senha atual"
            type ="password"
            icon={FiLock}
            onChange = {e => setpasswordOld(e.target.value)}
            />
            <Input
            placeholder = "Nova senha"
            type ="password"
            icon={FiLock}
            onChange = {e => setPasswordNew(e.target.value)}
            />
            <Button title =" Salvar " onClick ={handleUpdate}  />
            </Form>


        </Container>
     )
}