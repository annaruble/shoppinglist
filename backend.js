"use strict";


//function search(){}

function addNew() {
    let table = document.getElementById("tableList");
    //let row = document.createElement("tr")
    let row = table.insertRow(1);

    let check = row.insertCell(0);
    let item = row.insertCell(1);
    let qty = row.insertCell(2);
    let priority = row.insertCell(3);
    let store = row.insertCell(4);
    let section = row.insertCell(5);
    let price = row.insertCell(6);

    let checkbox = document.createElement('input');
    checkbox.type = "checkbox";

    check.appendChild(checkbox);
    //check.innerHTML = "Hello"
    item.innerHTML = document.getElementById("itemIn").value;
    qty.innerHTML = document.getElementById("qtyIn").value;
    priority.innerHTML = document.getElementById("priorityIn").value;
    store.innerHTML = document.getElementById("storeIn").value;
    section.innerHTML = document.getElementById("sectionIn").value;
    price.innerHTML = "$" + document.getElementById("priceIn").value;
}

/*
function clickedOn() {
    let.lrow = document.createElement("tr")
}
*/