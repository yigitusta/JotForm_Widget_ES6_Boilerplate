//see https://developers.jotform.com/widgets
/*global JFCustomWidget*/

import $ from 'jquery'; // if you do not intend to use jquery, remove it by running 'npm remove jquery'
import Example from './example';

$(document).ready(() => {
  const ex = new Example('Hello');
  $('#main').html(ex.somemethod());
});

// always subscribe to ready event and implement widget related code
// inside callback function , it is the best practice while developing widgets
JFCustomWidget.subscribe("ready", () => {
    //subscribe to form submit event
    JFCustomWidget.subscribe("submit", () => {
        const msg = {
            // you should valid attribute to data for JotForm
            // to be able to use your widget as required
            valid: true,
            value: $('#main').html(),
        }
        // send value to JotForm
        JFCustomWidget.sendSubmit(msg);
    });
});