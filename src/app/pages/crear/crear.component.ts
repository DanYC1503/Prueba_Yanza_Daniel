import { Component } from '@angular/core';
import { Tarea } from 'src/domain/tarea';
import { TareasFirebaseService } from 'src/app/services/tareas-firebase.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-crear',
  templateUrl: './crear.component.html',
  styleUrls: ['./crear.component.css']
})
export class CrearComponent {
  tarea: Tarea = { id: '0', nota: '', fecha: '', etiquetas: [] };

  constructor(private router: Router, private tareaFirebaseService: TareasFirebaseService) {
    const params = this.router.getCurrentNavigation()?.extras.queryParams;
    if (params ) {
      console.log(params);
      this.tarea = params['tarea']
    };
    }
  

  saveTarea() {
    try {
      this.tareaFirebaseService.save(this.tarea);
      this.tarea = { id: '0', nota: '', fecha: '', etiquetas: [] }; // Reset the form after saving
      // You might want to navigate to the list of tasks or another page after saving
      this.router.navigate(['/pages/listar']);
    } catch (error) {
      console.error('Error saving tarea:', error);
      // Handle the error appropriately (e.g., display an error message to the user)
    }
  }
}
