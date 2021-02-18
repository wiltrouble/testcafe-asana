const { Selector, t } = require("testcafe");

class Login {
    constructor () {
        this.emailInput = Selector('.LoginEmailPasswordForm-emailInput');
        this.passwordInput = Selector('.LoginEmailPasswordForm-passwordInput');
        this.loginButton = Selector('.LoginEmailPasswordForm-logInButton');
    }

    submitLogin = async (username, password) => 
    await t.typeText(this.emailInput, username)
        .typeText(this.passwordInput, password)

    clickLoginButton = async () => await t.click(this.loginButton);
}

export default new Login;