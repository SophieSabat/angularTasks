import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { PostsComponent } from './components/posts/posts.component';
import { PostComponent } from './components/post/post.component';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule, Routes} from '@angular/router';
import { UsersComponent } from './components/users/users.component';
import {PostResolveService} from './components/services/post-resolve.service';
import { FullPostComponent } from './components/full-post/full-post.component';

const routes: Routes = [
  {path: 'users', component: UsersComponent},
  {path: 'posts', component: PostsComponent, resolve: {postsData: PostResolveService}, children: [
      {path: ':id', component: FullPostComponent}
    ]}
];

@NgModule({
  declarations: [
    AppComponent,
    PostsComponent,
    PostComponent,
    UsersComponent,
    FullPostComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
