const langText = require("../bot_modules/lang_texts");
const render = require("../bot_modules/render");
const db = require("../bot_modules/db");
const session = require("../bot_modules/session");
module.exports.execute = (msg) => { 
    return new Promise((resolve, reject) => {
        let uid = msg.from.id;
        
        db.user_get(uid).then((tempdata) => {
            if(tempdata==='error.sql'){
                resolve(langText.execute('error.sql'));
            }else if(tempdata['permissions'] != 'admin'){
                resolve(langText.execute('error.understand'));
            }else{
                session.execute(uid,'set','checkuserprofile');
                resolve(langText.execute('user.profile_check'));
            }
        });
    });
} 
module.exports.nxt_execute = (msg) => { 
    return new Promise((resolve, reject) => {
        db.admin_user_get(msg.text).then((tempdata)=>{
            if(tempdata==='error.sql'){
                resolve(langText.execute('error.sql'));
            }else{
                if(tempdata===false){
                    resolve(langText.execute('error.user_notexist'));
                }else{
                    resolve(render.execute(langText.execute('user.panel'),tempdata));
                }
                
            }
            
        });
    });
} 