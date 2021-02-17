import { Selector } from 'testcafe';

fixture `Starting with testcafe`
.page `https://www.google.com`;

test('Busqueda en google', async t => {
    const searchField = Selector("input.gLFyf")

    await t

    .typeText(searchField, 'test')
    .pressKey('enter')
    
});