import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { GiphyResponse } from '../interfaces/giphy.interfaces';

@Injectable({providedIn: 'root'})
export class GifService {
    private http = inject(HttpClient);
    loadTrendingGrifs(){
        this.http.get<GiphyResponse>(`${environment.giphyUrl}/gifs/trending`,{
            params: {
                api_key: environment.giphyApiKey,
                limit:20
            }
        })
        
    }
    
}