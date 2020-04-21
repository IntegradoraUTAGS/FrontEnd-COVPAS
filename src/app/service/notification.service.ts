import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';


@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor(private toastr: ToastrService) { }

  // Funcion para mostrar un alert message de que todo salio correctamente
  showSuccess(message, title) {
    this.toastr.success(message, title);
}
// Funcion para mostrar un alert message como error
showError(message, title) {
    this.toastr.error(message, title);
}
// Funcion para mostrar un alert message de informacion
showInfo(message, title) {
    this.toastr.info(message, title);
}

// Funcion para mostrar una advertencia como alert message
showWarning(message, title) {
    this.toastr.warning(message, title);
}
}
