/* NOOMO — forms.js
   Web3Forms settings for both forms on the site ("Start a project" and "Book a call").
   To change the receiving inbox, create a new access key at https://web3forms.com
   and paste it below. The form logic (validation, payload, success/error states)
   is in main.js: search for "sendW3" and "WEB3FORMS_KEY". */
const WEB3FORMS_KEY = '8dd61fb7-8391-4ce4-a21e-7da70940c406';

window.NOOMO_FORMS = {
  KEY: WEB3FORMS_KEY,
  ENDPOINT: 'https://api.web3forms.com/submit'
};
