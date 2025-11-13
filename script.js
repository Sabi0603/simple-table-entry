let entry_name = document.getElementById('name');
let entry_age = document.getElementById('age');
let entry_department = document.getElementById('dept');
let entry_mail = document.getElementById('mail');
let entry_addbtn = document.getElementById('addEntry');
let entries_list = document.getElementById('entriesList');
let form = document.getElementById('form');
let count = 1;


entry_addbtn.onclick = function(){
    let name = entry_name.value.trim();
    let age = entry_age.value.trim();
    let department = entry_department.value.trim();
    let mail = entry_mail.value.trim();
    
    if (name == "" && age == "" && department == "") {
        alert("Please Fill the all Fields⚠️...Mail is Optional.");
        return;
    }
    else if (name == "" && department == ""){
        alert("Name and Department Field Is Missing⚠️...Mail is Optional.")
        return;
    }
    else if (name == "" && age == ""){
        alert("Name and Age Field Is Missing⚠️...Mail is Optional.")
        return;
    }
    else if (age == "" && department == ""){
        alert("Age and Department Field Is Missing⚠️...Mail is Optional.")
        return;
    }
    else if (department == ""){
        alert("Department Field Is Missing⚠️...Mail is Optional.");
        return;
    }
    else if (age == ""){
        alert("Age Field Is Missing⚠️...Mail is Optional.");
        return;
    }
    else if (name == ""){
        alert("Name Field Is Missing⚠️...Mail is Optional.");
        return;
    }
    else if (mail == ""){
        mail = "-";
    }
    let entites = [count,name,age,department,mail]
    let tr = document.createElement("tr");
    
    entites.forEach(function(entry){
        let td = document.createElement("td");
        td.textContent = entry;
        if (td.textContent == "-") {
            td.style.textAlign = "center";
        }
        tr.appendChild(td);
    });
    count++;

    let del_td = document.createElement("td");
    let delbtn_td = document.createElement("Button");

    delbtn_td.textContent = "Delete";
    del_td.appendChild(delbtn_td);
    tr.appendChild(del_td);
    
    entries_list.appendChild(tr);
    tr.children[0].style.textAlign = "center";
    tr.children[2].style.textAlign = "center";

    delbtn_td.onclick = function(){
        tr.remove();
        let rows = entries_list.querySelectorAll("tr");
        rows.forEach((row, index) => {row.children[0].textContent = index + 1});
    };


    alert("Entries Added");
    
    form.reset();
    entry_name.focus();
};