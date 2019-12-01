import { getLogger } from '../loggers/common-logger';
import { Before, BeforeAll, setDefaultTimeout, After, AfterAll, Status } from 'cucumber';
import { PuppeteerController, cast } from 'puppeteer-core-controller';
// eslint-disable-next-line @typescript-eslint/no-var-requires
const isCI = require('is-ci');

setDefaultTimeout(10000);

Before(async function() {
  this.pptc = new PuppeteerController();
});

Before({ tags: '@ignore' }, async function() {
  return 'skipped';
});

Before({ tags: '@headless and not @live and not @debug' }, async function() {
  // eslint-disable-next-line no-console
  console.log('headless mode');
  this.pptc.initWith({ headless: true });
});

Before({ tags: '@headfull or @live or @debug' }, async function() {
  // eslint-disable-next-line no-console
  console.log('headfull mode');
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

Before({ tags: '@live' }, async function() {
  this.live = true;
});

After(async function(testCase) {
  if (testCase.result.status === Status.FAILED && this.pptc) {
    const screenshot: string = await cast(this.pptc).takeFullPageScreenshotAsBase64();
    this.attach(screenshot, 'image/png');
  }

  if (this.pptc && isCI) {
    await this.pptc.close();
    return;
  }

  if (this.pptc && this.live) {
    // do not close the browser
    return;
  }

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
  // eslint-disable-next-line no-console
  isCI ? console.log('running in CI ...') : console.log('running on local machine ...');
});

AfterAll(async function() {
  // eslint-disable-next-line no-console
  console.log('After All');
});
