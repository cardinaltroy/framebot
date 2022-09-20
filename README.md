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
execute(msg) - u getting msg from user,
```js
module.exports.nxt_execute = (msg) => { 
    return new Promise((resolve, reject) => {
        //handler from second msg from user     
    });
} 
```
nxt_execute(msg) - u getting reply to previously msg (this is just next step handler). 
But before add in execute,   session.execute(uid,'set','commandname');    
Then u can add to lang_menu.js, panels.js your button
