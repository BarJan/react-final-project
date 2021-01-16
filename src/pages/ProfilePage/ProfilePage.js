import { useState } from "react";
import './ProfilePage.css';
import { Button, Container, Form, Jumbotron } from "react-bootstrap";
import AppNavbar from "../../components/NavBar/AppNavbar";
import Parse from 'parse';
import UserObj from "../../models/UserObj";

function ProfilePage(props){

    const {activeUser} = props;

    const [userEmail,setUserEmail] = useState(activeUser.email);
    const [userFName, setUserFName] = useState(activeUser.fname);
    const [userLName, setUserLName] = useState(activeUser.lname);
    const [userPswd, setUserPswd] = useState(activeUser.pswd);

    const userName = activeUser.username;

    const User = new Parse.User();
    const query = new Parse.Query(User);

    async function UpdateUser() {
        query.get('Atuj4sdpeT').then((user) => {
            // Updates the data we want
            user.set('email', userEmail);
            user.set('password', userPswd);
            user.set('lname', userFName);
            user.set('fname', userLName);
            // Saves the user with the updated data
            user.save().then((response) => {
              if (typeof document !== 'undefined') document.write(`Updated user: ${JSON.stringify(response)}`);
              console.log('Updated user', response);
            }).catch((error) => {
              if (typeof document !== 'undefined') document.write(`Error while updating user: ${JSON.stringify(error)}`);
              console.error('Error while updating user', error);
            });
          });
    }
    
    

    return(
        <div className="profile-pg">
            <Jumbotron>
                <Container>
                    <h1>Pure</h1>
                </Container>
            </Jumbotron>
            <Container>
                <AppNavbar />
                <Form>
                    <Form.Group controlId="formBasicUserName">
                        <Form.Label>User name:</Form.Label>
                        <Form.Control value={userName} type="email" placeholder="Enter email" disabled/>
                        <Form.Text className="text-muted">
                        User name cannot be changed. 
                        </Form.Text>
                    </Form.Group>

                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control value={userEmail} type="email" placeholder="Enter email" onChange={(e) => setUserEmail(e.target.value)} />
                        <Form.Text className="text-muted">
                        Note that if you change your email address you will be logged out.
                        </Form.Text>
                        <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control value={userPswd} type="password" placeholder="Password" onChange={(e) => setUserPswd(e.target.value)}/>
                    </Form.Group>

                    <Form.Group controlId="formBasicFName">
                        <Form.Label>First name</Form.Label>
                        <Form.Control value={userFName} type="text" placeholder="Enter email" onChange={(e) => setUserFName(e.target.value)} />
                        <Form.Text className="text-muted">
                        Change your first name.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group controlId="formBasicLName">
                        <Form.Label>Last name</Form.Label>
                        <Form.Control value={userLName} type="text" placeholder="Enter email" onChange={(e) => setUserLName(e.target.value)} />
                        <Form.Text className="text-muted">
                        Change your last name.
                        </Form.Text>
                    </Form.Group>

                    <Button variant="primary" type="button" onClick={()=> UpdateUser()}>
                        Submit
                    </Button>
                </Form>
            </Container>
        </div>
    );
}

export default ProfilePage;