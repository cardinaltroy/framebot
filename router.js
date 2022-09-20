const langMenu = require("./bot_modules/lang_menu.js");
const langText = require("./bot_modules/lang_texts.js");
const fs = require('fs')

module.exports.execute = (u_text,msg,mode) => {
    return new Promise((resolve, reject) => {
        if(msg.photo !=null || msg.document !=null || msg.audio !=null || msg.video !=null || msg.sticker !=null){
            //just disable img,doc,audio and other trash
            resolve(langText.execute('error.msg_type'));
        }    
        // ------- for referal system ---------
        if(u_text.includes('/start') === true && u_text !='/start' ) u_text = 'start';
        //-------------------------------------
        path = "./controllers/"+langMenu.execute(u_text).toLowerCase().replace(/\s/g,'').replace('/','');

        if( fs.existsSync(path+'.js') ){
            let command = require(path);
            if(mode){
                command.nxt_execute(msg).then((tempdata)=>{
                    resolve(tempdata);
                })
            }else{
                command.execute(msg).then((tempdata)=>{
                    resolve(tempdata);
                })
            }
            ;
        }else{ 
            resolve(langText.execute('error.understand'));
        }
    });
}  