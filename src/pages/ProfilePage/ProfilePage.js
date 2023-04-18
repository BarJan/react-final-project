import { useState } from "react";
import './ProfilePage.css';
import { Button, Container, Form } from "react-bootstrap";
import { Redirect } from "react-router-dom";

function ProfilePage(props){

    const {activeUser} = props;

    const [userEmail,setUserEmail] = useState(activeUser ? activeUser.getEmail() : "");
    const [userFName, setUserFName] = useState(activeUser ? activeUser.getFname() : "");
    const [userLName, setUserLName] = useState(activeUser ? activeUser.getLname() : "");
    const [userPswd, setUserPswd] = useState(activeUser ? activeUser.getPswd() : "");

        
    if (!activeUser) {
        return <Redirect to="/"/>
    }

    const userName = activeUser.getUsername();


    return(
        <div className="profile-pg">
            <Container>
                <Form>
                    <Form.Group controlId="formBasicUserName">
                        <Form.Label>שם משתמש</Form.Label>
                        <Form.Control value={userName} type="email" placeholder="Enter email" disabled/>
                        <Form.Text className="text-muted">
                        שם משתמש אינו ניתן לעדכון 
                        </Form.Text>
                    </Form.Group>

                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>אימייל</Form.Label>
                        <Form.Control value={userEmail} type="email" placeholder="Enter email" onChange={(e) => setUserEmail(e.target.value)} />
                        <Form.Text className="text-muted">
                        נא לשים לב שבעת החלפת כתובת אימייל החשבון יתנתק
                        </Form.Text>
                        <Form.Text className="text-muted">
                        *לעולם לא נחשוף כתובת זו
                        </Form.Text>
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>סיסמא</Form.Label>
                        <Form.Control value={userPswd} type="password" placeholder="Password" onChange={(e) => setUserPswd(e.target.value)}/>
                    </Form.Group>

                    <Form.Group controlId="formBasicFName">
                        <Form.Label>שם פרטי</Form.Label>
                        <Form.Control value={userFName} type="text" placeholder="Enter email" onChange={(e) => setUserFName(e.target.value)} />
                        <Form.Text className="text-muted">
                        עדכון שם פרטי
                        </Form.Text>
                    </Form.Group>

                    <Form.Group controlId="formBasicLName">
                        <Form.Label>שם משפח</Form.Label>
                        <Form.Control value={userLName} type="text" placeholder="Enter email" onChange={(e) => setUserLName(e.target.value)} />
                        <Form.Text className="text-muted">
                            עדכון שם משפחה
                        </Form.Text>
                    </Form.Group>

                    <Button variant="outline-success" type="button" onClick={()=> activeUser.UpdateUser()}>
                        עדכן פרטים
                    </Button>
                </Form>
            </Container>
        </div>
    );
}

export default ProfilePage;