import Swal from 'sweetalert2'

export function succes(title, text, icon, confirmBtn) {
    Swal.fire({
        title: title,
        text: text,
        icon: icon,
        confirmButtonText: confirmBtn
    })
}

export function fail(title, text, icon, confirmBtn) {
    Swal.fire({
        title: title,
        text: text,
        icon: icon,
        confirmButtonText: confirmBtn
    })
}

export function info(title, text, icon, confirmBtn) {
    Swal.fire({
        title: title,
        text: text,
        icon: icon,
        confirmButtonText: confirmBtn
    })
}

export function question(title, text, icon, confirmBtn, cancelBtn) {
    Swal.fire({
        title: title,
        text: text,
        icon: icon,
        confirmButtonText: confirmBtn,
        cancelButtonText: cancelBtn
    })
}