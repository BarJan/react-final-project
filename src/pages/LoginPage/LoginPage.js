import { useState } from "react";
import './LoginPage.css';
import { Button, Container, Form } from "react-bootstrap";
import UserObj from "../../models/UserObj";
import Parse from 'parse';
import { Redirect } from "react-router-dom";


function LoginPage(props) {

    const {onLogin} = props;
    const [userEmail, setUserEmail] = useState("");
    const [userPswd, setUserPswd] = useState("");
    const [redirecTo, setRedirecTo] = useState(false);

    // login query to DB
    async function UserLogin(){

        try {
            const parseUser = await Parse.User.logIn(userEmail, userPswd);
            // Trigger onLogin event prop + update redirect state so we will redirect to recipes page
            onLogin(new UserObj(parseUser));
            setRedirecTo(true);
        } catch(error) {
            // show an error alert
            alert('Error while logging in user', error);
        }

    }

    if (redirecTo)
        return <Redirect to="/"/>

    return(
        <div className="login-pg">
            <Container>
                <Form>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control value={userEmail} type="email" placeholder="Enter email" onChange={(e) => setUserEmail(e.target.value)} />
                        <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control value={userPswd} type="password" placeholder="Password" onChange={(e) => setUserPswd(e.target.value)}/>
                    </Form.Group>
                    <Form.Group controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Check me out" />
                    </Form.Group>
                    <Button variant="primary" type="button" onClick={()=> UserLogin()}>
                        Submit
                    </Button>
                </Form>
            </Container>
        </div>
    );
}

export default LoginPage;