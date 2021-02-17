import { Selector } from "testcafe";

import environment from "../../environment.json";

class Login {
    constructor() {
        this.loginButton = Selector('.LoginEmailPasswordForm-logInButton');
        this.emailAddressInput = Selector('.LoginEmailPasswordForm-emailInput');
        this.passwrodInput = Selector('.LoginEmailPasswordForm-passwordInput');
        this.email = environment.credentials.member1.username;
        this.password = environment.credentials.member1.password;
    }
}

export default new Login();


