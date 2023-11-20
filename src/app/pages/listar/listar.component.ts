import { Component } from '@angular/core';
import { TareasFirebaseService } from 'src/app/services/tareas-firebase.service';
import { Tarea } from 'src/domain/tarea';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent {
  tareas: Tarea[] = [];
  listaTareas: any

  constructor(private router: Router, private tareasFirebaseService: TareasFirebaseService){
    this.listaTareas = this.tareasFirebaseService.getAll();
  }
  goEditar(tarea: Tarea): void {
    console.log("editando", tarea);

    this.router.navigate(['/pages/editar'], { state: { tarea } });
  }
}
