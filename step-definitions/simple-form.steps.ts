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
  // Write code here that turns the phrase above into concrete actions
  // eslint-disable-next-line no-console
  console.log({ fieldLabel, fieldValue });
});

Given('I click on the {string} button', async function(buttonName: string) {
  await cast(this.pptc)
    .find('a.btn')
    .withExactText(buttonName)
    .click();
});
