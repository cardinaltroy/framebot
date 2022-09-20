const config = require("../bot_modules/config.js");
const list = new Map([
        //key, {eng:value, ru:value}
        ['error.understand', {eng:"🤖: I dont understand",ru:"🤖: Я не понимаю"}],
        ['error.msg_type', {eng:"🤖...",ru:"🤖..."}],
        ['error.sql', {eng:"🤖:Problems with database",ru:"🤖:Проблемы с базой данных"}],
        ['error.user_info', {eng:"🤖:Not correctly, try again.",ru:"🤖:Не правильно, попробуй ещё раз"}],
        ['error.user_exist', {eng:"🤖:Welcome back!",ru:"🤖:С возвращением!"}],
        ['error.user_notexist', {eng:"🤖:User does not exist",ru:"🤖:Юзер не существует"}],
        ['error.user_permissions', {eng:"🤖:You have no permissions",ru:"🤖:У вас нет прав"}],
        ['error.mail_empty', {eng:"🤖:Mail is empty",ru:"🤖:Почта пустая"}],
        ['error.ban', {eng:"🤖:You are banned",ru:"🤖:Вы забаненны"}],
        ['error.unban', {eng:"🤖:You are unbanned",ru:"🤖:Вы разбаненны"}],
        ['user.nickname', {eng:"Profile is updated",ru:"Профиль обновлён"}],
        ['user.new', {eng:"Enter profile name, example Dredd Lutter",ru:"Введите имя профиля, например Dredd Lutter"}],
        ['user.mail_new', {eng:"Enter: Title of mail @@ Text of mail",ru:"Введите: Тема Письма @@ Текст письма "}],
        ['user.mail_del', {eng:"Enter ID of mail",ru:"Введите ID письма"}],
        ['user.mail_add', {eng:"Mail added",ru:"Письмо добавлено"}],
        ['user.mail_remove', {eng:"Mail removed",ru:"Письмо удалено"}],
        ['user.profile_check', {eng:"Enter ID of user",ru:"Введите ID юзера"}],
        ['user.good', {eng:"🤖:Completed successfully",ru:"🤖:Выполненно успешно"}],
        ['user.bad', {eng:"🤖:Is there something wrong",ru:"🤖:Что-то не так"}],
        ['user.balance_edit', {eng:"Enter user ID and count",ru:"Введите ID юзера и количество"}],
        ['user.admin_edit', {eng:"Enter user ID",ru:"Введите ID юзера"}],
        ['user.ban_edit', {eng:"Enter user ID",ru:"Введите ID юзера"}],
        //------------------------------------------------------------//
        ['user.panel', {
            eng:`
👤 {first_name} {last_name}
_________________________________

💰 Balance: {balance}

🗓 Date registration: {date_reg}

🆔 Your ID: {id}    

👥 You invited: {ref_count} users
_________________________________

👥 Invite and get rewards:
https://t.me/${config.execute('app_name')}?start={id}  
_________________________________`,
            ru:`
👤 {first_name} {last_name}
_________________________________

💰 Баланс: {balance}

🗓 Дата регистрации: {date_reg}

🆔 ID: {id}  

👥 Вы пригласили: {ref_count} пользователей
_________________________________

👥 Invite and get rewards:
https://t.me/${config.execute('app_name')}?start={id}  
_________________________________`}],
        //------------------------------------------------------------//
        ['user.mail', {
            eng:`
_________________________________
[✉️#{sys_id}, {date}]: {title}

{text}`,
            ru:`
_________________________________
[✉️#{sys_id}, {date}]: {title}
      
{text}
        `}]
        //------------------------------------------------------------//
]);

module.exports.execute = (command) => { 
    const lang = config.execute('app_lang');
    switch(lang){
        case 'eng':
            if(list.has(command)){ 
                return list.get(command).eng;
            }else{
                return command;
            }
        case 'ru':
            if(list.has(command)){ 
                return list.get(command).ru;
            }else{
                return command;
            }
        default:
            return command;
    }
} 