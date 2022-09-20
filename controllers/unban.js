const langText = require("../bot_modules/lang_texts");
const session = require("../bot_modules/session");
const msg_handler = require("../bot_modules/msg_handler.js");
const db = require("../bot_modules/db");

module.exports.execute = (msg) => { 
    return new Promise((resolve, reject) => {
        let uid = msg.from.id;
        
        db.user_get(uid).then((tempdata) => {
            if(tempdata==='error.sql'){
                resolve(langText.execute('error.sql'));
            }else if(tempdata['permissions'] != 'admin'){
                resolve(langText.execute('error.understand'));
            }else{

                session.execute(uid,'set','unban');
                resolve(langText.execute('user.ban_edit'));
            }
        });
    });
} 
module.exports.nxt_execute = (msg) => { 
    return new Promise((resolve, reject) => {
        let id = msg.text;
        db.admin_user_get(id).then((tempdata) => {
            if(tempdata==='error.sql'){
                resolve(langText.execute('error.sql'));
            }else{
                if(tempdata === false){
                    resolve(langText.execute('error.user_notexist')); 
                }else{
                    db.admin_user_update(id,'ban',0).then((tempdata) => {
                        if(tempdata==='error.sql'){
                            resolve(langText.execute('error.sql'));
                        }else{
                            db.admin_user_get(id).then((tempdata) =>{
                                msg_handler.execute(tempdata.uid,'set',langText.execute('error.unban'));
                                resolve(langText.execute('user.good'));   
                            });         
                        }
                    });
                }

            }
        });
        
    });
} 