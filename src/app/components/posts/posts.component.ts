import {Component, Input, OnInit} from '@angular/core';
import {Post} from '../../models/Post';
import {PostsService} from '../../services/posts.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  posts: Post[];

  chosenOne: Post;

  constructor(private postsService: PostsService) { }

  ngOnInit(): void {
    this.postsService.getAllPosts().subscribe(value => this.posts = value);
  }

  getBubblePost(post: Post): void {
    console.log(post);
    this.chosenOne = post;
  }

}
