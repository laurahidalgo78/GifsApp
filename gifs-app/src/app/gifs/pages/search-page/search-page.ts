import { Component, inject, signal } from '@angular/core';
//import { GifListComponent } from '../../components/gif-list/gif-list.component';
import { GifService } from '../../services/gifs.service';
import { Gif } from '../../interfaces/gif.interfaces';
import { GifsList } from "../../components/gifs-list/gifs-list";


@Component({
  selector: 'app-search-page',
  imports: [GifsList],
  templateUrl: './search-page.html',
})
export default class SearchPageComponent {
  gifService = inject(GifService);
  gifs = signal<Gif[]>([]);

  onSearch(query: string) {
    this.gifService.searchGifs(query).subscribe((resp) => {
      this.gifs.set(resp);
    });
  }
}