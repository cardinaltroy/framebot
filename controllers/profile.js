const langText = require("../bot_modules/lang_texts");
const render = require("../bot_modules/render");
const db = require("../bot_modules/db");
module.exports.execute = (msg) => { 
    return new Promise((resolve, reject) => {
        db.user_get(msg.from.id).then((tempdata)=>{
            if(tempdata==='error.sql'){
                resolve(langText.execute('error.sql'));
            }else{
                if(tempdata===false){
                    resolve(langText.execute('error.understand'));
                }else{
                    db.user_get_ref(tempdata.id).then((temp) =>{
                        if(temp != false){
                            tempdata.ref_count = temp.count;
                        }else{
                            tempdata.ref_count = 0;
                        }
                        resolve(render.execute(langText.execute('user.panel'),tempdata));
                    });
                    
                }
                
            }
            
        });
    });
} 