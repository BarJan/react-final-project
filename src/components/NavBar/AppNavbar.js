import { Button, Form, FormControl, Nav, Navbar } from "react-bootstrap";
import './AppNavbar.css';

function  AppNavbar(props) {

    const {activeUser} = props;
    
    return(
        <Navbar>
            <Navbar.Brand href="#">ראשי</Navbar.Brand>
            <Nav className="mr-auto">
                <Nav.Link href="#/userhome">פרופיל</Nav.Link>
                <Nav.Link href="#/dates">תאריכים</Nav.Link>
                <Nav.Link href={activeUser? "#" : "#/login"}>{activeUser? "יציאה" : "כניסה"}</Nav.Link>
            </Nav>
            <Form inline>
                <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                <Button variant="outline-info">חיפוש</Button>
            </Form>
        </Navbar>
    );
}

export default AppNavbar;