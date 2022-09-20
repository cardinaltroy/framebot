const langText = require("../bot_modules/lang_texts");
const db = require("../bot_modules/db");
const panel_handler = require("../bot_modules/panel_handler");

module.exports.execute = (msg) => { 
    return new Promise((resolve, reject) => {
        db.user_get(msg.from.id).then((tempdata) => {
            if(tempdata==='error.sql'){
                resolve(langText.execute('error.sql'));
            }else{
                let perm;
                switch(tempdata.permissions){
                    case "admin":
                        perm = 'AdminPanel';
                    break;
                    default:
                        perm = 'DefaultPanel';
                }
                panel_handler.execute(msg.from.id,'set',perm);
                resolve(langText.execute('user.good')); 
            }
        });
        
    });
} 