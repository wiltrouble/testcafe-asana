import { Given, When, Then } from "cucumber";
import { Selector as NativeSelector } from "testcafe";

import Login from "../../pages/Login";

const Selector = (input, t) => {
    return NativeSelector(input).with({boundTestRun: t});
};

Given('I open Assana Login page', async t => {
    await t.navigateTo('https://app.asana.com/-/login')
})

When('I login with member1', async () => {
    Login.submitEmail(Login.e);
    Login.submitPassword(Login.p)
    Login.clickLoginButton();
})

Then('I should see the home page', async (t) => {
    await t.expect(Selector('.TopbarPageHeaderStructure-title').innerText).eql('Home')
})


/**
 * 
 * 
 * 
 *     test('Login', async t => {
        await t
            .typeText(Login.emailAddressInput, Login.email)
            .typeText(Login.passwrodInput, Login.password)
            .click(loginBtn)
            .expect(Selector('.TopbarPageHeaderStructure-title').innerText).eql('Home')

    });
 */

