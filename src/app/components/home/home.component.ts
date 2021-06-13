import { Component, OnInit } from '@angular/core';
import { NgwWowService } from 'ngx-wow';
import { ServiceService } from 'src/app/services/service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private wowService: NgwWowService,private ServiceService:ServiceService) {
    this.wowService.init();
  }
  ngOnInit(): void {}

  info:any[]=[
    {id:1,title:"Basics of UX/UI web design",
    content:"set your personal goals, get a boost of motivation, learn to work with information and how to organize your work, how to plan work and rest.",list:["System installation for website creation","Basic site setup. Header and footer","Creation of the first pages of the site","30 lessons on creating your own website"],img:"assets/images/25.png"},
     {id:2,title:"Introduction to website creation and remote work",
     content:"you will receive fundamental knowledge and put it into practice by creating your first website. You will be provided .",list:["Setting goals for the course","Remote work rules. Personal motivation and its development","Web developer tools. Services to help you work","Basic concepts. Types of sites"],img:"assets/images/21.png"},
     {id:3,title:"Set up and customization of your design",
     content:"you will learn how to set up statistics and analytics for the site, start the process of its indexing",list:["Contact form customization","Setting up analytics systems","Adding a site to search engines","We create service pages on the site"],img:"assets/images/22.png"},
     {id:4,title:"We create your new amazing portfolio",
     content:"you will create a portfolio that will not be ashamed to show your clients, making them want to order your services. It will be an attractive and effective portfolio.",list:["We create our own portfolio","Choosing a good UI design","Preparing a list of services","Copywriting. Thematic content"],img:"assets/images/23.png"},
     {id:5,title:"Work with clients. How not to break the deadline?",
     content:"you will find the first paying customer and will create a website for him. How to build on success and continue the relationship with the client further. Let’s go!",list:["Client search methods and locations","How to communicate with customers?","Dead lines and number of edits","We prepare a commercial offer"],img:"assets/images/26.png"},
  ]
  id:any=1
 getData(id:any){
  this.id=id
 }
 oldId:any=1
 changeStyle(id:any){
  this.ServiceService.id=id
  if(this.oldId != this.ServiceService.id){
    document.getElementById(this.oldId)?.classList.remove('tabStyle')
  }
}
 ngAfterViewChecked(){
  this.oldId=this.ServiceService.id
  document.getElementById(this.ServiceService.id)?.classList.add('tabStyle')
  
 }


}
