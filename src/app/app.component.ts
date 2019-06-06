import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    title ="TO DO LIST"
    tasks=[];
    newTask:string= '';

    addTask(){
      console.log("addtask clickeds");
     this.tasks.push(this.newTask);
   

    }
       deleteTask(task){
       let index = this.tasks.indexOf(task)
       this.tasks.splice(index,1)
     }

     
   
 
  }




  

