import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/services/service.service';
import {NgwWowService} from 'ngx-wow'
@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {

  constructor(private wowService: NgwWowService,private ServiceService:ServiceService) {
    this.wowService.init();
    this.getData()

  }

  ngOnInit(): void {
    this.getData()

  }
  allCourses:any
  nextPage:any
  getData(){
    this.ServiceService.getData().subscribe((res)=>{
      this.nextPage=res.next
     this.allCourses=res.results
     console.log("res",res)
    })
  }

}
