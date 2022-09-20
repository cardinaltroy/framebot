const langText = require("../bot_modules/lang_texts");
const panel_handler = require("../bot_modules/panel_handler");

module.exports.execute = (msg) => { 
    return new Promise((resolve, reject) => {
        panel_handler.execute(msg.from.id,'set','Menu');
        resolve(langText.execute('user.good')); 
    });
} 