import { Selector, t } from "testcafe";

import environment from "../../credentials.json";

class Login {
    constructor() {
        this.loginButton = Selector('.LoginEmailPasswordForm-logInButton');
        this.emailAddressInput = Selector('.LoginEmailPasswordForm-emailInput');
        this.passwrodInput = Selector('.LoginEmailPasswordForm-passwordInput');
        this.email = environment.credentials.member1.username;
        this.password = environment.credentials.member1.password;
    }

    async submitEmail (username) {
        await t.typeText(this.emailAddressInput, username)
    }

    submitPassword = async (password) => await t.typeText(this.passwrodInput, password);
}

export default new Login();


