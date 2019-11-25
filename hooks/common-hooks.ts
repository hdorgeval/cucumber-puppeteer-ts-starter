import { getLogger } from '../loggers/common-logger';
import { Before, BeforeAll, setDefaultTimeout, After, AfterAll } from 'cucumber';
import { PuppeteerController } from 'puppeteer-core-controller';
setDefaultTimeout(10000);

Before({ tags: '@ignore' }, async function() {
  return 'skipped';
});

Before(async function() {
  this.pptc = new PuppeteerController();
});

Before({ tags: '@headless' }, async function() {
  this.pptc.initWith({ headless: true });
});
Before({ tags: '@headfull' }, async function() {
  this.pptc.initWith({ headless: false });
});

Before({ tags: '@withMaxSizeWindow' }, async function() {
  this.pptc.withMaxSizeWindow();
});

Before({ tags: '@withCursor' }, async function() {
  this.pptc.withCursor();
});

Before({ tags: '@debug' }, async function() {
  this.debug = true;
});

After(async function() {
  if (this.pptc) {
    await this.pptc.close();
  }
});

/**
 * Before each scenario hook
 */
Before({ tags: '@simpleLogger' }, async function() {
  this.logger = getLogger('@simpleLogger');
});

/**
 * Before each scenario hook
 */
Before({ tags: '@noOpLogger' }, async function() {
  this.logger = getLogger('@noOpLogger');
});

/**
 * Before each scenario hook
 */
Before({ tags: '@simpleLogger and @debug' }, async function() {
  this.logger = getLogger('@simpleLogger@verbose');
});

BeforeAll(async function() {
  // eslint-disable-next-line no-console
  console.log('Before All');
});

AfterAll(async function() {
  // eslint-disable-next-line no-console
  console.log('After All');
});
