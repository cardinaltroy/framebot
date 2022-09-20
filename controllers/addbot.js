const db = require("../bot_modules/db");
const langText = require("../bot_modules/lang_texts");
const config = require("../bot_modules/config");
/*
    
*/
module.exports.execute = (msg) => { 
    return new Promise((resolve, reject) => {
        let uid = msg.from.id;            
        db.user_get(uid).then((tempdata) => {
            if(tempdata==='error.sql'){
                resolve(langText.execute('error.sql'));
            }else{

                    
                    if(msg.from.username == null){ tempUserName = 'fn::'+msg.from.first_name;
                    }else{ tempUserName = msg.from.username; }
                    db.user_add(uid,'testbot','Bot','Bot',1).then((tempdata)=>{
                        if(tempdata==='error.sql'){
                            resolve(langText.execute('error.sql'));
                        }else{
                            db.admin_balance_add(1,config.execute('app_ref_reward'));
                            resolve(langText.execute('user.good'));
                        }
                    });  

                
            }
            
        });

    });
} 