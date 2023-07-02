const Swal = require('sweetalert2');

export function SwalFunction(title:string, text:string, icon:string, confirmButtonText:string, showConfirmButton:boolean) {
    Swal.fire({
        title: title,
        text: text,
        icon: icon,
        confirmButtonText: confirmButtonText,
        showConfirmButton: showConfirmButton,
        confirmButtonColor: '#81d6ec'
    });
}
