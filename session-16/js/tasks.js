




const tasksContainer = document.querySelector(".tasks-container")



const token = Cookies.get("token")



fetch("https://api.gosorsolutions.com/api/tasks", {
    method: "GET",
    headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `bearer ${token}`
    }
}).then((res) => res.json())
    .then((data) => renderTasks(data.data))




function renderTasks(tasks) {

    tasks.forEach((task) => {
        tasksContainer.innerHTML +=

            `
             <div class="col-lg-3 col-md-6 col-sm-12">
                    <div class="task border rounded p-2">
                        <h3 class="text-primary">${task.title}</h3>
                        <p>${task.description}</p>
                        <p>Status : <span class="text-danger">${task.status}</span></p>
                        <p>priority : <span class="text-primary">${task.priority}</span></p>
                    </div>
                </div>
        
        `
    })
}