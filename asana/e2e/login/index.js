import { Selector } from 'testcafe'
import Login from "../../Pages/Login.js";


import credentials from "../../environment.json";



fixture `Login`
    .page `https://app.asana.com/-/login`;
    
    const loginBtn = Selector('.LoginEmailPasswordForm-logInButton')

    test('Login', async t => {
        await t
            .typeText(Login.emailAddressInput, Login.email)
            .typeText(Login.passwrodInput, Login.password)
            .click(loginBtn)
            .expect(Selector('.TopbarPageHeaderStructure-title').innerText).eql('Home')

    });


    test('Try login with empty values', async t => {
        await t
            .click(loginBtn)
            .expect(Selector('.MessageBanner-contents').innerText).eql('El nombre de usuario o contraseña son incorrectos.\n\n¿Olvidaste tu contraseña?')
        
    });