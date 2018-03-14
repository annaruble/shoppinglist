"use strict";

var shoppingModel = new ShoppingList()
var myView = new ShoppingView(shoppingModel)
var myDB = new LocalStorageSaver(shoppingModel, "annalist")

shoppingModel.subscribe(redrawTable)

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

    /////////////////////
    // itemVal = document.getElementById("itemIn").value;
    // qtyVal = document.getElementById("qtyIn").value;
    // priorityVal = document.getElementById("priorityIn").value;
    // storeVal = document.getElementById("storeIn").value;
    // sectionVal = document.getElementById("sectionIn").value;
    // priceVal = "$" + document.getElementById("priceIn").value;

    check.appendChild(checkbox);
    //check.innerHTML = "Hello"
    name.innerHTML = document.getElementById("itemIn").value;
    qty.innerHTML = document.getElementById("qtyIn").value;
    priority.innerHTML = document.getElementById("priorityIn").value;
    store.innerHTML = document.getElementById("storeIn").value;
    section.innerHTML = document.getElementById("sectionIn").value;
    price.innerHTML = "$" + document.getElementById("priceIn").value;
}

function clickedon() {
    let rowcolids = ['itemname', 'qty', 'store', 'category', 'price', 'priority']
    let vals = {}
    for (let cid of rowcolids) {
        vals[cid] = document.getElementById(cid).value;
    }
    let it = new Item(self, vals.itemname, vals.qty, vals.priority, vals.store, vals.category, vals.price)
    shoppingModel.addItem(it)
}

function sortTable(n) {
    var table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
    table = document.getElementById("tableList")
    switching = true;
    // set sorting direction
    dir = "asc";
    // loop to continue until switching is done
    while (switching) {
        switching = false;
        rows = table.getElementsByTagName("tr");
        //loop through all rows except 0 (th)
        for (i = 1; i < (rows.length - 1); i++) {
            shouldSwitch = false;
            //get elements to compare
            x = rows[i].getElementsByTagName("td")[n];
            y = rows[i].getElementsByTagName("td")[n];
            //check if rows should switch
            if (dir == "asc") {
                if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
                    shouldSwitch = true;
                    break;
                }
            } else if (dir == "desc") {
                if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
                    shouldSwitch = true;
                    break;
                }
            }
        }
    } if (shouldSwitch) {
        //make the switch and mark that it's been done
        rows[i].parentNode.insertBefore(rows[i+1], rows[i]);
        switching = true;
        switchcount++;
    } else {
        //if no switching done, set dir = "desc", run loop again
        if (switchcount == 0 && dir == "asc") {
            dir = "desc";
            switching = true;
        }
    }
}

function storage() {
    //store
    localStorage.setItem(name, itemVal)
    localStorage.setItem(quantity, qtyVal)
    localStorage.setItem(priority, priorityVal)
    localStorage.setItem(store, storeVal)
    localStorage.setItem(section, sectionVal)
    localStorage.setItem(price, priceVal)
    //retrieve
    document.getElementById
}