import { Component, OnInit, ViewChild } from '@angular/core';
import { TeacherService } from 'src/app/service/teacher.service';
import { Observable } from 'rxjs';
import { Teacher } from 'src/app/shared/teacher';
declare let $:any;

@Component({
  selector: 'app-teacher',
  templateUrl: './teacher.component.html',
  styleUrls: ['./teacher.component.css']
})
export class TeacherComponent implements OnInit {
  @ViewChild('dataTable',{static:true}) table;
  dataTable: any;
  dtOptions: any = {};
  allTeachers:Observable<Teacher[]>
  constructor(private teacherService:TeacherService) { }
  
  ngOnInit():void {   
    this.allTeachers=this.teacherService.teacherGet();
    this.dtOptions = {
      "paging":   true,
      "ordering": true,
      "info": true,
      "scrollY": 200,
      "scrollX": true,
      "bStateSave": false,
      "columnDefs": [{ 
        "pagingType": "full_numbers",
        "searchable":true,
      }]
  };
$(()=>{  
  $('table.display').DataTable(this.dtOptions);
  });

  }  
 getTeacher(){
  
 }
}
