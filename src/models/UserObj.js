
class UserObj{
    constructor(parseobj){
        this.id = parseobj.id;
        this.email = parseobj.get("email");
        this.lname = parseobj.get("lname");
        this.fname = parseobj.get("fname");
    }


}

export default UserObj