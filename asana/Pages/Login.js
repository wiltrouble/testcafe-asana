import { Selector, t } from "../e2e/Login/node_modules/testcafe";

import environment from "../../credentials.json";

class Login {
    constructor() {
        this.loginButton = Selector('.LoginEmailPasswordForm-logInButton');
        this.emailAddressInput = Selector('.LoginEmailPasswordForm-emailInput');
        this.passwrodInput = Selector('.LoginEmailPasswordForm-passwordInput');
        this.e = environment.credentials.member1.username;
        this.p = environment.credentials.member1.password;
    }

    async submitEmail (username) {
        await t.typeText(this.emailAddressInput, username)
    }

    submitPassword = async (password) => await t.typeText(this.passwrodInput, password);

    clickLoginButton = async () => await t.click(this.loginButton);
}

export default new Login();


