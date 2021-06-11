import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/services/service.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {

  constructor(private service:ServiceService) { 
    this.getData()

  }

  ngOnInit(): void {
    this.getData()

  }
  allCourses:any
  nextPage:any
  getData(){
    this.service.getData().subscribe((res)=>{
      this.nextPage=res.next
     this.allCourses=res.results
     console.log("res",res)
    })
  }

}
