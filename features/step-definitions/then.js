module.exports = function then() {
  this.Then(/^I wait on element "([^"]*)?"( for (\d+)ms)*( to( not)* (be checked|be enabled|be selected|be visible|contain a text|contain a value|exist))*$/,
    (elem, obsolete, ms, isWaitingOnSpecificState, falseState, state, done) => {
      /**
       * Maximum number of milliseconds to wait, default 3000
       * @type {Int}
       */
      const intMs = parseInt(ms, 10) || 3000;
  
      /**
       * Command to perform on the browser object
       * @type {String}
       */
      let command = 'waitForExist';
  
      /**
       * Boolean interpretation of the false state
       * @type {Boolean}
       */
      let boolFalseState = !!falseState;
  
      /**
       * Parsed interpretation of the state
       * @type {String}
       */
      let parsedState = '';
  
      if (isWaitingOnSpecificState) {
          parsedState = state.indexOf(' ') > -1
                      ? state.split(/\s/)[state.split(/\s/).length - 1]
                      : state;
  
          // Check box checked state translates to selected state
          if (parsedState === 'checked') {
              parsedState = 'selected';
          }
  
          command = `waitFor${parsedState[0].toUpperCase()}` +
                      `${parsedState.slice(1)}`;
      }
  
      if (typeof falseState === 'undefined') {
          boolFalseState = false;
      }
  
      browser[command](elem, intMs, boolFalseState);
  
      done();
  });
  this.Then( /^I take picture of current page$/, (done) => {
    browser.checkDocument()
    done()
  });
}