import { Button, Form, FormControl, Nav, Navbar } from "react-bootstrap";
import './AppNavbar.css';

function  AppNavbar(props) {

    const {activeUser, onLogout} = props;
    
    return(
        <Navbar>
            <Navbar.Brand href="#">ראשי</Navbar.Brand>
            <Nav className="mr-auto">
                {activeUser ? <Nav.Link href="#/profile">פרופיל</Nav.Link> : null}
                {activeUser ? <Nav.Link href="#/dates">תאריכים</Nav.Link> : null}
                {activeUser ? <Nav.Link href="#" onClick={()=>onLogout()}>יציאה</Nav.Link> : <Nav.Link href="#/login">כניסה</Nav.Link>}
            </Nav>
            <Form inline>
                <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                <Button variant="outline-info">חיפוש</Button>
            </Form>
        </Navbar>
    );
}

export default AppNavbar;