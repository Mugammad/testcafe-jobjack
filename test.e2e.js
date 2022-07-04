import { Selector, ClientFunction } from "testcafe";

fixture('/signup')
    .page('https://app.jobjack.co.za');

test('Should take you to sign up form', async browser => {
    await browser.click('.sign-up-in-link')
    .expect(Selector('h4').innerText).eql('Register your Account');
})

test('Should create a new job jack account', async browser => {
    await browser.click('.sign-up-in-link')

    .typeText('[formcontrolname="firstName"]', "Alexander")
    .typeText('[formcontrolname="lastName"]', "Hamilton")
    .typeText('[formcontrolname="phoneNumber"]', "0123456789")

    .click('[formcontrolname="hasWhatsapp"]')
    .click('.ng-option')

    .click('[formcontrolname="whatsappOptIn"]')
    .click('.ng-option')

    .typeText('[formcontrolname="email"]', "test1@gmail.com")

    .typeText('.location', "Lentegeur")
    await browser.expect(Selector('.ng-option-disabled').exists).notOk()
    await browser.pressKey('enter')
    await browser.typeText('[formcontrolname="password"]' ,'Abc1234!@#$%^')

    .click('[formcontrolname="jobJackHow"]')
    .click('.ng-option')

    .click('[type="submit"]')
    await browser.expect(Selector('.modal-title').innerText).contains('Welcome to');
})