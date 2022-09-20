require('dotenv').config()

module.exports.execute = (key) => { 
    const list = new Map([
        ['app_lang', 'ru'],
        ['app_ref_reward', 10],
        ['app_name', 'troyHomeBot'],
        ['app_token', process.env.app_token]
    ]);
    return list.get(key);
}