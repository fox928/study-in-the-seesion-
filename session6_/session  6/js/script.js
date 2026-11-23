

const tasks = [
    {
        taskName: 'Go to gym',
        taskDate: '12-5-2025',
        taskStatus: true
    },
    {
        taskName: 'Play Piano',
        taskDate: '13-5-2025',
        taskStatus: false
    },
    {
        taskName: 'take a shower',
        taskDate: '14-5-2025',
        taskStatus: true
    }
]

function showTasks() {


    console.clear();

       tasks.forEach(function(task, index) {
        console.log('task ' + (index + 1) + ': ' + task.taskName + ', Task Date: ' + task.taskDate + ', Task Status: ' + task.taskStatus)
    })
}
function addTask(){


     let newtask = {
     taskName :prompt ("enter the task ") ,
     taskDate:prompt("enter the data of the task "),
     taskStatus:false
 
}

 tasks.push(newtask)
showTasks()
  
 
}


 
function removeTask(){
let index = +prompt(" enter the task number ")
if(index >tasks.length ){
    window.alert("enter faied number ")
} else {
    tasks.splice(index-1 , 1)
   showTasks()

}
}

function changeStatus1(){
  let tasknumer =+prompt("enter the task number you want to chanage");
   if(tasknumer > tasks.length){
        window.alert("pleas inert correct number of the task  ")
    
   } else{ 
  if(tasks[tasknumer-1].taskStatus == true ) {
   
    tasks[tasknumer - 1 ].taskStatus =false;
    showTasks();
  }   else 
  {
    tasks[tasknumer-1].taskStatus =true;
    showTasks();

  }

}
}
function changeStatus2(){
  let tasknumer =+prompt("enter the task number you want to chanage");
   if(tasknumer > tasks.length){
        window.alert("pleas inert correct number of the task  ")
    
   } else{ 
     if(tasks[tasknumer-1].taskStatus == true){
        window.alert("the task is changed ")
    
     } else {
        tasks[tasknumer - 1].taskStatus =!tasks[tasknumer-1].taskStatus
     }


    }
}
function updateTask(){
    let tasknumber = +prompt("enter the number of the task ")
    if(tasknumber > tasks.length ) {
        window.alert("the task is not found ")

    }
     else
        
        {
            if( [tasknumber-1].taskStatus == true){
                window.alert("no up data")

            } 
            else{
                 letupdateTask = {
                 taskName : prompt("enter the name of the task "),
                 taskDate : prompt("enter the task data "),
                 taskStatus: false
                           }
            tasks.splice(tasknumber-1 , 1 , updateTask )
           showTasks()
            }
       }  

}
