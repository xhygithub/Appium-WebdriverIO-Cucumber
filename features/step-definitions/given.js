const expect = require('chai').expect;
const {Given, Then, When} = require('cucumber');
/**
 * Open the given URL
 * @param  {String}   type Type of navigation (url or site)
 * @param  {String}   page The URL to navigate to
 * @param  {Function} done Function to execute when finished
 */
// module.exports = function given() {
Given(
  /^I open the (url|site) "([^"]*)?"$/, (type, page) => {
  /**
   * The URL to navigate to
   * @type {String}
   */
  console.log('.........type', type)
  const url = (type !== 'url') ? page : browser.options.baseUrl + page;

  browser.url(url);

  // done();
});      
// }
