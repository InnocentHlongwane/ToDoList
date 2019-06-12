import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    title ="TO DO LIST"
    tasks=[]
    newTask:string= " ";
    newPriority:string =" "; 
    empty = true
    
    addTask(){  
      this.tasks.push({taskName:this.newTask, priority:this.newPriority}) 
      this.empty=false
     this.newTask =" ";
     this.newPriority=" "; 
     if(this.tasks.length >0){
      this.empty =false
     }
     
    }
       deleteTask(task){
       let index = this.tasks.indexOf(task)
       this.tasks.splice(index,1)
       if(this.tasks.length <=0){
        this.empty =true
     }
    }

     editTask(task){
     let index = this.tasks.indexOf(task)
     let newTask = prompt("editTask")
     let newPri = prompt("edit your priority")
     if((newTask != null) &&(newPri !=null)){
       this.tasks[index].taskName = newTask;
       this.tasks[index].priority=newPri;
     }
     
      
      }
      
     
    

    
     
   
 
  }




  

