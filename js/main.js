const ok_button = document.getElementById('modal_ok')
const cancel_button = document.getElementById('modal_cancel')
const modal = document.getElementById('modal')
const client_name = document.getElementById('name')
const email = document.getElementById('email')
const phone = document.getElementById('phone')
const apeare_modal_buttons = document.querySelectorAll('.request_button')

function hide_modal() {
    modal.classList.add('hide')
}

function fetch_data() {
    data={
        name: client_name.value,
        email: email.value,
        phone: phone.value,

    }
    console.log(data)
}

function apeare_modal_window(){
    modal.classList.remove('hide')
}

cancel_button.addEventListener('click', hide_modal)
ok_button.addEventListener('click', fetch_data)
apeare_modal_buttons.forEach(element=>{element.addEventListener('click', apeare_modal_window)})