import { Selector } from "testcafe";

class Login {
    constructor() {
        this.loginButton = Selector('.LoginEmailPasswordForm-logInButton');
        this.emailAddressInput = Selector('.LoginEmailPasswordForm-emailInput');
        this.passwrodInput = Selector('.LoginEmailPasswordForm-passwordInput');

    }
}

export default new Login();


