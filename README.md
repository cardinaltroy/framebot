[Framebot](#framebot)

# <a name="framebot">About</a> 
Just simple framework for creating telegram bot. What he can?

- simple registration
- user cabinet
    - balance
    - other users info
    - referal system with rewards
- notify
- admin panel 
    - ban/unban user
    - add/remove balance
    - add/remove admins
    - check users profile
    - add/remove notify
- multilevel menu
- multilingual interface


# install
...
# roadmap
- rework sql part, add sequelize
- replace promises to async/await because too many nested levels
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
