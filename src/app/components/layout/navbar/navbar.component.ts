import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor() {
    
   }

  ngOnInit(): void {
 
  }
 @HostListener('window:scroll',[])
 onWindowScroll(){
   if(document.body.scrollTop> 0 || document.documentElement.scrollTop > 0){
     document.getElementById('nav1')?.classList.add("pos")
   }else{
     document.getElementById('nav1')?.classList.remove("pos")
   }
 }
 


}
