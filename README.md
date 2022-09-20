# framebot
Just simple framework for creating telegram bot
# install
...
# roadmap
...
# usage
For add new command, create in dir "controllers" new file *.js with name your command, 

Example: Profile = profile.js, New user = newuser.js

Inside file:

```js
module.exports.execute = (msg) => { 
    return new Promise((resolve, reject) => {
        //handler for first msg from user
    });
} 
```
If u need next step handler using this:
```js
const session = require("../bot_modules/session");

module.exports.execute = (msg) => { 
    return new Promise((resolve, reject) => {
        //handler for first msg from user
        session.execute(uid,'set','ban');
    });
} 

module.exports.nxt_execute = (msg) => { 
    return new Promise((resolve, reject) => {
        //handler from second msg from user     
    });
} 
```  
Then u can add to lang_menu.js, panels.js your button
