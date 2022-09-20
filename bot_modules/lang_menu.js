const config = require("../bot_modules/config.js");
const listRU = new Map([
        ['Профиль', 'Profile'],
        ['Старт', 'Start'],
        ['Почта', 'Mail'],
        ['Новое Письмо', 'Add Mail'],
        ['Удалить Письмо', 'Remove Mail'],
        ['Просмотреть Профиль Юзера', 'Check User Profile'],
        ['Прибавить Баланс', 'Add Balance'],
        ['Убавить Баланс', 'Remove Balance'],
        ['Добавить Админа', 'Add Admin'],
        ['Убрать Админа', 'Remove Admin'],
        ['Забанить', 'Ban'],
        ['Разбанить', 'Unban'],
        ['Меню', 'Menu'],
        ['Назад', 'Back']
    ]);
      
module.exports.execute = (command) => { 
    const lang = config.execute('app_lang');
    
    switch(lang){
        case 'ru':
            if(listRU.has(command)){
                return listRU.get(command);
            }else{
                return command;
            }
        default:
            return command;
    }
    
} 