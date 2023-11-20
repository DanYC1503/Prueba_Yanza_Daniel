import { Component } from '@angular/core';
import { Tarea } from 'src/domain/tarea';
import { TareasFirebaseService } from 'src/app/services/tareas-firebase.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent {
  tarea: Tarea = { id: '0', nota: '', fecha: '', etiquetas: [] };

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    const tareaFromRoute = this.route.snapshot.paramMap.get('tarea');
    
    // Check if tareaFromRoute is not null before assigning
    if (tareaFromRoute) {
      try {
        // Parse the JSON string to a Tarea object
        this.tarea = JSON.parse(tareaFromRoute);
        console.log("editing", this.tarea);
      } catch (error) {
        console.error('Error parsing tarea:', error);
      }
    }
  }
}
