import Parse from "parse";

class UserObj{

    User = new Parse.User();
    query = new Parse.Query(this.User);
    #id;
    #username;
    #pswd;
    #email;
    #lname;
    #fname;

    constructor(parseobj){
        this.#id = parseobj.id;
        this.#username = parseobj.get("username");
        this.#pswd = parseobj.get("password");
        this.#email = parseobj.get("email");
        this.#lname = parseobj.get("lname");
        this.#fname = parseobj.get("fname");
    }

    getId(){
        return this.#id;
    }

    getUsername(){
        return this.#username;
    }

    getPswd(){
        return this.#pswd;
    }

    getEmail(){
        return this.#email;
    }

    getLname(){
        return this.#lname;
    }

    getFname(){
        return this.#fname;
    }

    //updpating DB with new user details
    async UpdateUser() {
        this.query.get(this.#id).then((user) => {
            // Updates the data we want
            user.set('email', this.#email);
            user.set('password', this.#pswd);
            user.set('lname', this.#lname);
            user.set('fname', this.#fname);
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

}

export default UserObj