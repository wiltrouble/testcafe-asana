import { Given, When, Then, Before, After } from 'cucumber';
import { Selector as NativeSelector } from 'testcafe';

const Selector = (input, t) => {
    return NativeSelector(input)
}

After("@logoutHook", async () => {
    console.log("Running logout hook...")
});

Given("I open Asana Login page", async t => {
    await t.navigateTo("https://app.asana.com/-/login")
});

When("I login", async t => {
    await t
    .typeText('.LoginEmailPasswordForm-emailInput', 'ui.automation2021@gmail.com')
    .typeText('.LoginEmailPasswordForm-passwordInput', 'Automation1234')
    .click('.LoginEmailPasswordForm-logInButton')
});

Then('I should be logged in', async t => {
    await t.expect(Selector('.TopbarPageHeaderStructure-title').innerText).eql('Home')
});