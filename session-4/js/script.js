 window.alert( "  في التاسك دا انا عندي مشكله اني لما بسسبب الخليفه المتحركة احيانيا المو س  بسبب الخليفليه الي بتتحرك وتجي علي علي الزرر تمنع الاكشن لو في حل ممكن تبقي تعرفني ")
                const student = [ ]
                const studentcontainner = document.querySelector(".student-contaier")
                function addnewsudent (){
                    const studentinpu = document.querySelector("#studentname")
                   
                    student.push(studentinpu.value)
                    console.log(student)
                    studentcontainner.innerHTML = ""
                           for(i = 0; i <student.length ; i++ )
                    {
                        let studentname  =  student[i]
                   
                
                        studentcontainner.innerHTML += `

  <div class="col-lg-3">
            <div class="card p-3 my-5">
               <p class="text-center fs-4 my-2">name:${studentname} </p>
            </div>
        


`
                    }
                    

                } 
               
                const but = document.querySelector("#button")
                 but.onclick =  addnewsudent
         