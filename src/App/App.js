import Example from './Example';
/*global JFCustomWidget*/ 
//JFCustomWidget object comes from the index.html document

export default class App {
    constructor () {
        this.mainEl = document.getElementById('main');
    }
    set main(html) {
        this.mainEl.innerHTML = html;
    }
    get main () {
        return this.mainEl.innerHTML;
    }
    run () {
        const ex = new Example('it works!!');
        this.main = ex.somemethod();

        /* Following lines are from https://developers.jotform.com/widgets */

        // always subscribe to ready event and implement widget related code
        // inside callback function , it is the best practice while developing widgets
        JFCustomWidget.subscribe("ready", () => {
            //subscribe to form submit event
            JFCustomWidget.subscribe("submit", () => {
                const msg = {
                    // you should valid attribute to data for JotForm
                    // to be able to use your widget as required
                    valid: true,
                    value: this.main,
                }
                // send value to JotForm
                JFCustomWidget.sendSubmit(msg);
            });
        });
    }
}