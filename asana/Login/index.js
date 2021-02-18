import { Selector } from 'testcafe'
import Login from "../Pages/Login.js";

fixture `Login`
    .page `https://app.asana.com/-/login`;
    
    const loginBtn = Selector('.LoginEmailPasswordForm-logInButton')

    test('Login', async t => {
        await t
            .typeText(Login.emailAddressInput, 'ui.automation2021@gmail.com')
            .typeText(Login.passwrodInput, 'Automation1234')
            .click(loginBtn)
            .expect(Selector('.TopbarPageHeaderStructure-title').innerText).eql('Home')

    });


    test('Try login with empty values', async t => {
        await t
            .click(loginBtn)
            .expect(Selector('.MessageBanner-contents').innerText).eql('El nombre de usuario o contraseña son incorrectos.\n\n¿Olvidaste tu contraseña?')
        
    });


    // const getLoginErrorMessage = async () => {
    //     await Selector('.MessageBanner-contents').contain("El nombre de usuario o contraseña son incorrectos.")
    // }