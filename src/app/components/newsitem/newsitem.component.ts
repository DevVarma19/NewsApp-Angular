import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-newsitem',
  templateUrl: './newsitem.component.html',
  styleUrls: ['./newsitem.component.css']
})
export class NewsitemComponent {
  @Input()
  newsList: any;

  imgURL = "https://thumbs.dreamstime.com/z/news-newspapers-folded-stacked-word-wooden-block-puzzle-dice-concept-newspaper-media-press-release-42301371.jpg";
}
