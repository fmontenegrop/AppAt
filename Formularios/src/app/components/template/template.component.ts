import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { pairs } from 'rxjs';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.scss'],
  styles: [
    `.ng-invalid.ng-touched:not(form){ 
      border: 1px solid red;
    }`
  ]
})
export class TemplateComponent implements OnInit {

  usuario: object = {
    nombre: null,
    apellido: null,
    correo: null,
    pais: "",
    sexo: "hombre",
    aceptar: false
  };
  paises = [
    { codigo: "CRI", nombre: "Costa Rica" },
    { codigo: "COl", nombre: "Colombia" }
  ];
  constructor() {

  }
  val(dato: String) {
    if (dato == "") return false;            
    else return true;    
  }
  ngOnInit() {
  }

  guardar(forma: NgForm) {
    console.log("formulario posteado");
    console.log(forma);
  }



}
