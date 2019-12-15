import { Before, Given } from 'cucumber';
import { cast } from 'puppeteer-core-controller';

Before({ tags: '@foo' }, async function() {
  this.foo = true;
});

Given('I open the web site {string}', async function(url: string) {
  await cast(this.pptc).navigateTo(url);
});

Given('I set the field {string} to {string}', async function(
  fieldLabel: string,
  fieldValue: string,
) {
  await cast(this.pptc)
    .find('label')
    .withExactText(fieldLabel)
    .click()
    .typeText(fieldValue);
});

Given('I open the {string} page', async function(pageName: string) {
  await cast(this.pptc)
    .find('a.btn')
    .withExactText(pageName)
    .click();
});

Given('I select the {string} component', async function(componentName: string) {
  await cast(this.pptc)
    .find('a.nav-link')
    .withExactText(componentName)
    .click();
});

Given('I select {string} in the {string} list', async function(
  _option: string,
  fieldLabel: string,
) {
  await cast(this.pptc)
    .find('label')
    .withExactText(fieldLabel)
    .click();
});
