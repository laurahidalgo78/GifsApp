import {Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'gif-history',
  imports: [],
  templateUrl: './gif-history.html'
})
export default class GifHistory { 
   query = inject(ActivatedRoute).params.subscribe(
    
   )
   

}
