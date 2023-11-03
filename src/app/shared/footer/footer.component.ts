import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { NewsletterService } from 'src/app/services/newsletter.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {

  constructor(  private fb: FormBuilder,
                private newsletterService: NewsletterService){}

  /** ======================================================================
   * CREATE COTIZACION
  ====================================================================== */
  public newFormSubmitted: boolean = false;
  public newForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
  });

  create(){    
    
    this.newFormSubmitted = true;
    
    if (this.newForm.invalid) {
      return;
    }
    

    this.newsletterService.createNewsletter(this.newForm.value)
    .subscribe( ({ ok }) => {
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
