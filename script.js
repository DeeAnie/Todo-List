window.addEventListener('load', function () {
    const form = document.querySelector("#add-todo-list");
    const input = document.querySelector("#input-todo");
    const btn = document.querySelector("button");
    const toDoOutput = document.querySelector("#todo-output");

    form.addEventListener('submit', function (e) {
        e.preventDefault();
    })

    btn.addEventListener("click", function (e) {
        const myTodoList = document.createElement("div");
        myTodoList.classList.add("todo-item");
        toDoOutput.appendChild(myTodoList);
        myTodoList.innerText = input.value;
        input.value = "";

        myTodoList.addEventListener("click", () => {
            myTodoList.remove();
        })
    })
});
