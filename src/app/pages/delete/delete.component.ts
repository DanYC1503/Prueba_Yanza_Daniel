import { Component } from '@angular/core';
import { TareasFirebaseService } from 'src/app/services/tareas-firebase.service';
import { Tarea } from 'src/domain/tarea';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent {
  tareas: Tarea[] = [];
  listaTareas: any

  constructor(private router: Router, private tareasFirebaseService: TareasFirebaseService){
    this.listaTareas = this.tareasFirebaseService.getAll();
  }
  
}
