import { Selector } from 'testcafe'

fixture `Login`
    .page `https://app.asana.com/-/login`;
    
    const loginBtn = await Selector('.LoginEmailPasswordForm-logInButton')

    test('Login', async t => {
        await t
            .typeText('.LoginEmailPasswordForm-emailInput', 'ui.automation2021@gmail.com')
            .typeText('.LoginEmailPasswordForm-passwordInput', 'Automation1234')
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