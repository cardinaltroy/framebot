const db = require("../bot_modules/db");
const langText = require("../bot_modules/lang_texts");
const panel_handler = require("../bot_modules/panel_handler");
module.exports.execute = (msg) => { 
    return new Promise((resolve, reject) => {
        //this  one time command, just use 'getadmin' in chat
        db.admins_exist().then((temp)=>{
            if(temp===false){
                db.user_update(msg.from.id,'permissions','admin').then((tempdata)=>{
                    if(tempdata != 'error.sql'){
                        panel_handler.execute(msg.from.id,'set','AdminPanel');
                        resolve('admin set');
                    }else{
                        resolve(langText.execute('error.sql'));
                    }
                    
                });
                
            }else{
                resolve(langText.execute('error.understand'));
            }
        });
        
    });
} 