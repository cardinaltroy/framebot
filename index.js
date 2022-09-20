const config = require("./bot_modules/config.js");
const msg_handler = require("./bot_modules/msg_handler.js");
const panel_handler = require("./bot_modules/panel_handler.js");
const panels = require("./bot_modules/panels.js");
const langText = require("./bot_modules/lang_texts.js");
const session = require("./bot_modules/session.js");
const db = require("./bot_modules/db.js");
const router = require("./router.js");
 
const TelegramAPI = require('node-telegram-bot-api');
const bot = new TelegramAPI(config.execute('app_token'), {polling: true});
const tgApp_lang = config.execute('app_lang');

const tgApp_start = () => {
    bot.on('message',async msg => {
        const u_id = msg.from.id.toString();  
        // [DEBAG]
        //console.log(msg_handler.execute(u_id,'getall'));
        //console.log(panel_handler.execute(u_id,'getall'));
        //console.log(session.execute(u_id,'getall'));
        let u_text,current_panel,u_nxt; 

        /* bot waiting user answer */
        if(session.execute(u_id,'has')){ 
            u_text = session.execute(u_id,'get');  
            u_nxt = true; // true - bot waiting user answer, false - bot waiting new command
            
            session.execute(u_id,'delete');
        }else{
            u_text = msg.text; 
            u_nxt = false; 
        }
        
        db.user_get(u_id).then((temp)=>{
            if(temp['ban'] === 1 ){
                return bot.sendMessage(u_id,langText.execute('error.ban'),current_panel);
            }
            router.execute(u_text,msg,u_nxt).then((tempdata)=>{
                if(panel_handler.execute(u_id,'has')){ 
                    current_panel = panels[panel_handler.execute(u_id,'get') + '_' + tgApp_lang]
                    panel_handler.execute(u_id,'delete');
                }
                if(msg_handler.execute(u_id,'size') > 0){
                    msg_handler.execute(u_id,'getall').forEach((value,key) => {
                        bot.sendMessage(key,value);
                    });
                    msg_handler.execute(u_id,'delete');
                } 

                return bot.sendMessage(u_id,tempdata,current_panel);
            });
       });
    });
}

tgApp_start();