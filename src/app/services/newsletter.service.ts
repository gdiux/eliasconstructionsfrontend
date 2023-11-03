import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { environment } from '../../environments/environment';
const base_url = environment.base_url;

@Injectable({
  providedIn: 'root'
})
export class NewsletterService {

  constructor(  private http: HttpClient) { }

  /** ================================================================
   *  CREATE NEWSLETTER
  ==================================================================== */
  createNewsletter( formaData: any ){
    return this.http.post<{cotizacion: any, ok: boolean}>(`${base_url}/newsletter`, formaData);
  }

}
