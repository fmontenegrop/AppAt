import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms'
import { getAllRouteGuards } from '@angular/router/src/utils/preactivation';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.scss']
})
export class DataComponent implements OnInit {

  usuario: object={    
    nombre_completo:{
      nombre:'',
      apellido:''
    },
    correo:''
  }
  
  forma:FormGroup;

  constructor() {    
    
    this.forma=new FormGroup({                  
        'nombre_completo':new FormGroup({
        'nombre':new FormControl('', [Validators.required, Validators.minLength(5)]),
        'apellido':new FormControl('', Validators.required),
      }),
      'correo':new FormControl('',[Validators.required, Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$")])
    });
   }
  
  ngOnInit() {
    console.log(this.usuario);
  }

  guardar(){    
    this.usuario=this.forma.value;
    console.log(this.forma);
    
  }

}
