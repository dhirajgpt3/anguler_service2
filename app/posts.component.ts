import { Component } from '@angular/core';
import {PostService} from './post.service';

@Component({
    selector: 'posts',
    templateUrl: './post.component.html',


})
export class PostsComponent  {
    //name = 'Angular';
    private posts;
    constructor(private _postService:PostService){
        this.posts=_postService.getPosts();

    }
}
