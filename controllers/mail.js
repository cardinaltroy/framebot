const langText = require("../bot_modules/lang_texts");
const render = require("../bot_modules/render");
const db = require("../bot_modules/db");

module.exports.execute = (msg) => { 
    return new Promise((resolve, reject) => {
        db.user_get(msg.from.id).then((tempdata)=>{
            if(tempdata==='error.sql'){
                resolve(langText.execute('error.sql'));
            }else{
                db.user_mail_get('all').then((tempdatas)=>{ 
                    if(tempdatas==='error.sql'){
                        resolve(langText.execute('error.sql'));
                    }else{
                        if(tempdatas.length != 0){
                            let text ='';
                            for(var i=0;i<tempdatas.length;i++){
                                text = text + render.execute(langText.execute('user.mail'),tempdatas[i])
                            }
                            resolve(text);
                        }else{
                            resolve(langText.execute('error.mail_empty'));
                        }
                        
                    }
                });
            }
            
        });
    });
} 