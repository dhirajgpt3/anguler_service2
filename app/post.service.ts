import { Injectable } from '@angular/core';

@Injectable()
 export class PostService
{

 private posts;
 //private collectables: Collectable[]=[];
 constructor(){
  this.posts=[
   {
    title:'Post one',
    body :'This is the body for posty one'
   },
   {
    title:'Post two',
    body :'This is the body for posty two'
   },

   {
    title:'Post three',
    body :'This is the body for posty three'
   }
  ];
 }
 getPosts(){
  return this.posts;

 }
}
