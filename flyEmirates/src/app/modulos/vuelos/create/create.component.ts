import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { VueloModelo } from 'src/app/modelos/vuelo.model';
import { VuelosService } from 'src/app/servicios/vuelos.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  constructor(private fb: FormBuilder, private vueloService: VuelosService, private router: Router) { }

  fgValidacion = this.fb.group({
    fechaInicio: ['', [Validators.required]],
    horaInicio: ['', [Validators.required]],
    fechaFin: ['', [Validators.required]],
    horaFin: ['', [Validators.required]],
    asientosVendidos: ['', [Validators.required]],
    nombrePiloto: ['', [Validators.required]],
    ruta: ['', [Validators.required]],
  });

  ngOnInit(): void {
  }

  store(){
    let vuelo = new VueloModelo();
    vuelo.fechaInicio = this.fgValidacion.controls["fechaInicio"].value;
    vuelo.horaInicio = this.fgValidacion.controls["horaInicio"].value;
    vuelo.fechaFin = this.fgValidacion.controls["fechaFin"].value;
    vuelo.horaFin = this.fgValidacion.controls["horaFin"].value;
    vuelo.asientosVendidos = this.fgValidacion.controls["asientosVendidos"].value;
    vuelo.nombrePiloto = this.fgValidacion.controls["nombrePiloto"].value;
    vuelo.ruta = this.fgValidacion.controls["ruta"].value;
 
    this.vueloService.store(vuelo).subscribe((data: VueloModelo)=> {
      Swal.fire('Creado correctamente!', '', 'success')
      this.router.navigate(['/vuelos/get']);
    },
    (error: any) => {
      console.log(error)
      alert("Error en el envio");
    })
  }


}
