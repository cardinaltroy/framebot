# Menu
- [About framebot](#framebot)
- [Roadmap](#roadmap)
- [Usage](#usage)
- [GetAdmin](#getadmin)
- [Multilingualism](#multilingualism)

# <a name="framebot">About</a> 
Just simple NodeJS framework for creating telegram bot. What he can?

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

# <a name="roadmap">Roadmap</a>
- rework sql part, add sequelize and models
- replace promises to async/await because too many nested levels
- relocate app_lang to user profile in database, then he can choose language
# <a name="usage">Usage</a>
Copy files, then use 
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
        session.execute(uid,'set','commandname');
    });
} 

module.exports.nxt_execute = (msg) => { 
    return new Promise((resolve, reject) => {
        //handler from second msg from user     
    });
} 
```  
Then u can add to lang_menu.js, panels.js your button
# <a name="getadmin">GetAdmin</a>

When you created database and run bot, just register and use one times command (in chat): getadmin

# <a name="multilingualism">Multilingualism</a>

Bot have a multilingual panels with buttons and texts for you. They depends on the line in the config.js:
```js
    ['app_lang', 'eng']
```
Create panel with buttons (panels.js):

example: NamePanel_language
```js
    DefaultPanel_eng: {
        reply_markup: JSON.stringify({ 
            keyboard: [
                [{text: 'Profile'},{text: 'Mail'}],
                [{text: 'Menu'}]
            ],
            resize_keyboard: true,
            one_time_keyboard: false,
            force_reply: true
        })
    },
    DefaultPanel_ru: {
        reply_markup: JSON.stringify({ 
            keyboard: [
                [{text: 'Профиль'},{text: 'Почта'}],
                [{text: 'Меню'}]
            ],
            resize_keyboard: true,
            one_time_keyboard: false,
            force_reply: true
        })
    }
```
Then you have to add them to lang_menu.js

```js
const listRU = new Map([
        ['Профиль', 'Profile'],
        ['Почта', 'Mail'],
        ['Меню', 'Menu']
    ]);

```
Done. Now you can give it to users when you want:

```js
const panel_handler = require("../bot_modules/panel_handler");

panel_handler.execute(uid,'set','DefaultPanel'); // without language!
```

Now texts. Add your text to list in lang_text.js:
```js
const list = new Map([
    //key, {eng:value, ru:value}
    ['error.understand', {eng:"🤖: I dont understand",ru:"🤖: Я не понимаю"}],
    ['error.sql', {eng:"🤖:Problems with database",ru:"🤖:Проблемы с базой данных"}],
    ['error.user_info', {eng:"🤖:Not correctly, try again.",ru:"🤖:Не правильно, попробуй ещё раз"}]
])
```
Then you can use it:
```js
const langText = require("../bot_modules/lang_texts");

console.log( langText.execute('error.sql') )
```