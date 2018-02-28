"use strict;"

// class Item {
//     constructor(itemC, qtyC, prtyC, storeC, sectionC, priceC) {
//         this.itemC = itemC;
//         this.qtyC = qtyC;
//         this.prtyC = prtyC;
//         this.storeC = storeC;
//         this.sectionC = sectionC;
//         this.priceC = priceC;
//     }
// }

// class ShoppingList {
//     constructor(list) {
//         this.list = list;
//     }

//     list = Array.from(Item)
// }

//function search(){}

function addNew() {
    let table = document.getElementById("tableList");

    let row = table.insertRow(1);

    //let check = row.insertCell(-1);
    let item = row.insertCell(0);
    let qty = row.insertCell(1);
    let priority = row.insertCell(2);
    let store = row.insertCell(3);
    let section = row.insertCell(4);
    let price = row.insertCell(5);

    //let checkbox = document.createElement('input');
    //checkbox.type("checkbox");

    //check.appendChild(checkbox);
    item.innerHTML = document.getElementById("itemIn").value;
    qty.innerHTML = document.getElementById("qtyIn").value;
    priority.innerHTML = document.getElementById("priorityIn").value;
    store.innerHTML = document.getElementById("storeIn").value;
    section.innerHTML = document.getElementById("sectionIn").value;
    price.innerHTML = "$" + document.getElementById("priceIn").value;

}