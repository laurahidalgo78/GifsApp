import { GifService } from './../../services/gifs.service';
import {Component, computed, inject } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { map } from 'rxjs';
import { GifsList } from "../../components/gifs-list/gifs-list";

@Component({
  selector: 'gif-history',
  imports: [GifsList],
  templateUrl: './gif-history.html'
})

export default class GifHistory { 
    GifService = inject(GifService)

    query = toSignal(inject(ActivatedRoute).params.pipe(map(( params ) => params['query'])));

    gifsByKey = computed(() =>  this.GifService.getHistoryGifs(this.query()))
}



