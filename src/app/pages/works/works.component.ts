import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import Swal from 'sweetalert2';

import { CotizacionesService } from 'src/app/services/cotizaciones.service';

@Component({
  selector: 'app-works',
  templateUrl: './works.component.html',
  styleUrls: ['./works.component.css']
})
export class WorksComponent {

  constructor(  private cotizacionesService: CotizacionesService,
                private fb: FormBuilder){}

  /** ======================================================================
  * CREATE COTIZACION
  ====================================================================== */
  public newFormSubmitted: boolean = false;
  public newForm = this.fb.group({
    name: ['', [Validators.required]],
    phone: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.email]],
    address: ['', [Validators.required]],
    description: '',
  });

  create(){

    this.newFormSubmitted = true;

    if (this.newForm.invalid) {
    return;
    }

    this.cotizacionesService.createCotizacion(this.newForm.value)
    .subscribe( ({ ok, cotizacion }) => {
    Swal.fire('Great', 'it has been saved successfully!', 'success');
    this.newFormSubmitted = false;
    this.newForm.reset();
    }, (err) => {
    console.log(err);
    Swal.fire('Error', err.error.msg, 'error');          
    })

  }

  /** ======================================================================
  * VALIDATE
  ====================================================================== */
  validate(campos: string): boolean{    
    if (this.newFormSubmitted && this.newForm.get(campos)?.invalid) {
    return true;      
    }else{
    return false;
    }    
  }

}
