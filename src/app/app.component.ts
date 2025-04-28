import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RedditService } from './services/reddit.service';
import { type Post } from './model/post';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

  // redditServ = inject(RedditService); //si può fare l'iniezione anche su costruttore nella versione vecchia

  posts: Post[] = [];

  constructor(private redditServ: RedditService) { //versione vecchia
    this.redditServ.getData().subscribe({
      next: data => this.posts = data,
      error: err => console.error(err)
    })
    // .then(data => console.log(data)); // senza osservable then non funziona con httpclient, serve subscribe
  }

}
