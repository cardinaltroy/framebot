const langText = require("../bot_modules/lang_texts");
const session = require("../bot_modules/session");
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
                session.execute(uid,'set','addmail');
                resolve(langText.execute('user.mail_new'));
            }
        });
    });
} 
module.exports.nxt_execute = (msg) => { 
    return new Promise((resolve, reject) => {
        db.user_get(msg.from.id).then((tempdata)=>{
            if(tempdata==='error.sql'){
                resolve(langText.execute('error.sql'));
            }else{
                let mail = msg.text.split('@@');
                db.admin_mail_add('all',mail[0],mail[1]).then((tempdata) => {
                    if(tempdata==='error.sql'){
                        resolve(langText.execute('error.sql'));
                    }else{
                        resolve(langText.execute('user.mail_add'));
                    }
                });
            }
        });
    });
} 