let data =[
    {id: 1, name: "joshua", email: "joshua@gm.com"},
    {id: 2, name: "ezra", email: "ezra@gm.com"},
]


function readAll() {
    var tbdata = document.querySelector(".table_data");
    var elements ="";
    data.map(d => (
        elements += `<tr>
            <td>${d.name}</td>
            <td>${d.email}</td>
            <td>
                <button onclick={edit(${d.id})}>Update</button>
                <button onclick={delet(${d.id})}>delete</button>
            </td>
        </tr>`
    ))
    tbdata.innerHTML = elements;
}

function createform() {
    document.querySelector(".create_form").style.display = "block";
    document.querySelector(".addbtn").style.display = "none";
}

function add() {
    var name = document.querySelector(".name").Value;
    var email = document.querySelector(".email").Value;

    var newobj = {id: 3, name, email};
    data.push(newobj);

    document.querySelector(".create_form").style.display = "none";
    document.querySelector(".addbtn").style.display = "block";
    readAll();
}

function edit(id) {
    document.querySelector(".update_form").style.display = "block";
    document.querySelector(".addbtn").style.display = "none";

    var updateobj = data.find(f => f.id === id);
    document.querySelector(".update_id").Value = updateobj.id;
    document.querySelector('.uname').Value = updateobj.name;
    document.querySelector('.uemail').Value = updateobj.email;
}

function update() {
    var id = parseIntdocument.querySelector(".update_id").Value;
    var name = document.querySelector('.uname').Value;
    var email = document.querySelector('.uemail').Value;
    var updateobj = {id, name, email};

    var index = data.findIndex(f => f.id === id);
    data[index] = updateobj;
    document.querySelector(".update_form").style.display = "none";
    document.querySelector(".addbtn").style.display = "block";

    readAll();
}
function delet(id) {
    var newdata = data.filter(f => f.id !==id);
    data = newdata;
    readAll();
}