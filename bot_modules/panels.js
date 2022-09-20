module.exports = { 
    DefaultPanel_eng: {
        reply_markup: JSON.stringify({ 
            keyboard: [
                [{text: 'Profile'},{text: 'Mail'}],
                [{text: 'Menu'}]
            ],
            resize_keyboard: true,
            one_time_keyboard: false,
            force_reply: true
        })
    },
    DefaultPanel_ru: {
        reply_markup: JSON.stringify({ 
            keyboard: [
                [{text: 'Профиль'},{text: 'Почта'}],
                [{text: 'Меню'}]
            ],
            resize_keyboard: true,
            one_time_keyboard: false,
            force_reply: true
        })
    },
    Menu_eng: {
        reply_markup: JSON.stringify({ 
            keyboard: [
                [{text: 'Item1'},{text: 'Item2'}],
                [{text: 'Back'}]
            ],
            resize_keyboard: true,
            one_time_keyboard: false,
            force_reply: true
        })
    },
    Menu_ru: {
        reply_markup: JSON.stringify({ 
            keyboard: [
                [{text: 'Пункт1'},{text: 'Пункт2'}],
                [{text: 'Назад'}]
            ],
            resize_keyboard: true,
            one_time_keyboard: false,
            force_reply: true
        })
    },
    
    AdminPanel_eng: {
        reply_markup: JSON.stringify({ 
            keyboard: [
                [{text: 'Profile'},{text: 'Mail'}],
                [{text: 'Add Mail'},{text: 'Remove Mail'}],
                [{text: 'Check User Profile'}],
                [{text: 'Add Balance'},{text: 'Remove Balance'}],
                [{text: 'Add Admin'},{text: 'Remove Admin'}],
                [{text: 'Ban'},{text: 'Unban'}]
            ],
            resize_keyboard: true,
            one_time_keyboard: false,
            force_reply: true
        })
    },
    AdminPanel_ru: {
        reply_markup: JSON.stringify({ 
            keyboard: [
                [{text: 'Профиль'},{text: 'Почта'}],
                [{text: 'Новое Письмо'},{text: 'Удалить Письмо'}],
                [{text: 'Просмотреть Профиль Юзера'}],
                [{text: 'Прибавить Баланс'},{text: 'Убавить Баланс'}],
                [{text: 'Добавить Админа'},{text: 'Убрать Админа'}],
                [{text: 'Забанить'},{text: 'Разбанить'}]
            ],
            resize_keyboard: true,
            one_time_keyboard: false,
            force_reply: true
        })
    }
}