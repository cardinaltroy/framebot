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
    execute(msg)        - u getting msg from user,
    nxt_execute(msg)    - u getting reply to previously msg (this is just next step handler). 
                          But before add in execute,   session.execute(uid,'set','commandname');
Then u can add to lang_menu.js, panels.js
