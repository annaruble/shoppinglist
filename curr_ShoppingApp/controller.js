"use strict";

var shoppingModel = new ShoppingList()
var myView = new ShoppingView(shoppingModel)
var myDB = new LocalStorageSaver(shoppingModel, "annalist")

shoppingModel.subscribe(redrawTable)

var stores = ['Fareway', 'Ace Hardware', 'Caseys', 'The Hatchery', 'Amundsens']
var sections = ['Produce', 'Meats', 'Cereal', 'Canned Goods', 'Frozen Foods', 'Dairy', 'Liquor', 'Tools', 'Clothing']

function clickedon() {
    let rowcolids = ['itemname', 'qty', 'store', 'category', 'price']
    let vals = []
    for (let cid of rowcolids) {
        vals.push(document.getElementById(cid).value)
    }
    makeRow(vals, document.getElementById('shoppinglist'))
}

function makeRow(valueList, parent) {
    let row = document.createElement("tr")
    row.classList.add(document.getElementById("priority").value)
    let cb = document.createElement("input")
    cb.type = "checkbox"
    cb.classList.add("form-control")
    row.appendChild(cb)
    
    for (let val of valueList) {
        let td = document.createElement("td")
        td.innerHTML = val
        row.appendChild(td)
    }
    parent.appendChild(row)
}

function populateSelect(selectId, sList) {
    let sel = document.getElementById(selectId, sList)
    for (let s of sList) {
        let opt = document.createElement("option")
        opt.value = s
        opt.innerHTML = s
        sel.appendChild(opt)
    }
}

$(document).ready(function () {
    populateSelect('store', stores)
    populateSelect('category', sections)
})

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
