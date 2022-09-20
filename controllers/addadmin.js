const langText = require("../bot_modules/lang_texts");
const session = require("../bot_modules/session");
const db = require("../bot_modules/db");
const panel_handler = require("../bot_modules/panel_handler");

module.exports.execute = (msg) => { 
    return new Promise((resolve, reject) => {
        let uid = msg.from.id;
        
        db.user_get(uid).then((tempdata) => {
            if(tempdata==='error.sql'){
                resolve(langText.execute('error.sql'));
            }else if(tempdata['permissions'] != 'admin'){
                resolve(langText.execute('error.understand'));
            }else{

                session.execute(uid,'set','addadmin');
                resolve(langText.execute('user.admin_edit'));
            }
        });
    });
} 
module.exports.nxt_execute = (msg) => { 
    return new Promise((resolve, reject) => {
        db.admin_user_update(msg.text,'permissions','admin').then((tempdata) => {
            if(tempdata==='error.sql'){
                resolve(langText.execute('error.sql'));
            }else{
                db.admin_user_get(msg.text).then((tempdata)=> {
                    panel_handler.execute(tempdata.uid,'set','AdminPanel');
                    resolve(langText.execute('user.good')); 
                });            
            }
            
        });
    });
} 