"use strict";

class ShoppingView {
    constructor(model) {
        model.subscribe(this.redrawList.bind(this));
        }

    redrawList(shoppingList, msg) {
        let tbl = document.getElementById("shoppingList");
        tbl.innerHTML = ""
        for (let item of shoppingList.newItems) {
            this.addRow(item, tbl);
        }
    }

    addRow(item, parent) {
        let row = document.createElement("tr");
        row.classList.add(item.priority)
        let cb = document.createElement("input");
        cb.type = "checkbox"
        cb.classList.add("form-control")
        row.appendChild(cb)

        for (let val of ['name', 'quantity', 'store', 'section', 'price']) {
            let td = document.createElement("td")
            td.innerHTML = item[va]
            row.appendChild(td)
        }
        parent.appendChild(row)
    }
}

function redrawTable() {
    table = document.getElementsByTagName("table")
    tbodytag = document.getElementsByTagName("tbody")
    table.removeChild(tbodytag)
}

function sortTable() {
    var table, rows, switching, i, x, y, shouldSwitch;
    table = document.getElementById("tableList")
    switching = true;
    while (switching) {
        switching = false;
        rows = table.getElementsByTagName("tr")
        for (i = 1; i < (rows.length -1); i++) {
            shouldSwitch = false;
            x = rows[i].getElementsByTagName("td")[0];
            y = rows[i + 1].getElementsByTagName("td")[0];
            if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
                shouldSwitch = true;
            }
        } if (shouldSwitch) {
            rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
            switching = true;
        }
    }
}

