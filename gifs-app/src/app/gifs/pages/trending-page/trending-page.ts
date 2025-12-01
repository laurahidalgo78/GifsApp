import { GifService } from './../../services/gifs.service';
import { AfterViewInit, ChangeDetectionStrategy, Component, computed, ElementRef, inject, signal, viewChild } from '@angular/core';
import { GifsList } from "../../components/gifs-list/gifs-list";
import { ScrollStateService } from 'src/app/shared/services/scroll-state.service';




@Component({
  selector: 'app-trending-page',
 // imports: [GifsList],
  templateUrl: './trending-page.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})


export default class TrendingPage implements AfterViewInit{ 

  gifService = inject(GifService);
  scrollStateService = inject(ScrollStateService)

  scrollDivRef = viewChild<ElementRef<HTMLDivElement>>('groupDiv')

  ngAfterViewInit():void{
    const scrollDiv = this.scrollDivRef()?.nativeElement;
    if(!scrollDiv) return;

    scrollDiv.scrollTop = this.scrollStateService.trendingScrollState();
  }

  onScroll(event: Event){
    const scrollDiv = this.scrollDivRef()?.nativeElement;
    if(!scrollDiv) return;

    const scrollTop = scrollDiv.scrollTop;
    const clientHeight = scrollDiv.clientHeight;
    const scrollHeight = scrollDiv.scrollHeight;
    //console.log({ scrollTotal: scrollTop + clientHeight, scrollHeight});
    const isAtBottom = scrollTop + clientHeight + 300 >= scrollHeight;
    this.scrollStateService.trendingScrollState.set(scrollTop);
    if(isAtBottom){
      this.gifService.loadTrendingGifs();
    }
    console.log({isAtBottom});
  }
}
