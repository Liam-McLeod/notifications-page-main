const unread_notifications = document.querySelectorAll('.unread');
const dot_list = document.querySelectorAll('.dot');
const mark_read_btn = document.querySelector('header button')
const notification_number_element = document.querySelector('.notification-number');

mark_read_btn.addEventListener('click', e => {
    unread_notifications.forEach(element => {
        element.classList.remove('unread');
    })

    dot_list.forEach(element => {
        element.classList.remove('dot');
    })
    notification_number_element.innerText = '0';
})