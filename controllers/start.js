const db = require("../bot_modules/db");
const langText = require("../bot_modules/lang_texts");
const session = require("../bot_modules/session");
const config = require("../bot_modules/config");
const panel_handler = require("../bot_modules/panel_handler");
/*
    
*/
module.exports.execute = (msg) => { 
    return new Promise((resolve, reject) => {
        let uid = msg.from.id;       
        let ref = msg.text.split(' ');
        let reffer;
        if(ref[1]===null){ reffer = '';
        }else{ reffer = ref[1]; }

        
        db.user_get(uid).then((tempdata) => {
            if(tempdata==='error.sql'){
                resolve(langText.execute('error.sql'));
            }else{
                if(tempdata === false){
                    
                    if(msg.from.username == null){ tempUserName = 'fn::'+msg.from.first_name;
                    }else{ tempUserName = msg.from.username; }
                    db.user_add(uid,tempUserName,'','',reffer).then((tempdata)=>{
                        if(reffer!='') db.admin_balance_add(reffer,config.execute('app_ref_reward'));

                        if(tempdata==='error.sql'){
                            resolve(langText.execute('error.sql'));
                        }else{
                            session.execute(uid,'set','start');
                            resolve(langText.execute('user.new')); 
                        }
                    });  
                    
                }else{
                    let perm;
                    switch(tempdata.permissions){
                        case "admin":
                            perm = 'AdminPanel';
                        break;
                        default:
                            perm = 'DefaultPanel';
                    }
                    panel_handler.execute(uid,'set',perm);
                    resolve(langText.execute('error.user_exist'));
                }
                
            }
            
        });

    });
} 

module.exports.nxt_execute = (msg) => { 
    return new Promise((resolve, reject) => {
        let uid = msg.from.id;
        let commands = msg.text.split(' ');
        if(commands.length != 2){ //add some validation
            session.execute(uid,'set','start');
            resolve(langText.execute('user.new'));
        }else{
            db.user_update(uid,'first_name',commands[0]).then((tempdata) => {
                if(tempdata != 'error.sql'){
                    db.user_update(uid,'last_name',commands[1]).then((tempdata) =>{
                        if(tempdata != 'error.sql'){
                            panel_handler.execute(uid,'set','DefaultPanel');
                            resolve(langText.execute('user.nickname'));
                        }else{
                            resolve(langText.execute('error.sql'));
                        }
                    });
                }else{
                    resolve(langText.execute('error.sql'));
                }
            });
        } 

        
    });
} 