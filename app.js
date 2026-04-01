// let button = document.getElementById("btn");

// button.addEventListener("mouseout", function() {
//     let para = document.createElement("p");
//     para.innerText = "Done";

//     document.body.appendChild(para);
// });
let button = document.getElementById("btn");

button.addEventListener("click", function() {
    if (!document.getElementById("msg")) {
        let para = document.createElement("p");
        para.id = "msg";
        para.innerText = "Done (Hover)";

        document.body.appendChild(para);
    }
});