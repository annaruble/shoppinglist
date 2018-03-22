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
        cb.type = "checkbox";
        cb.classList.add("form-control");
        cb.onclick = function() { item.purchased = true ? !item.purchased : false ; }
        if (item.purchased) {
            cb.checked = true;
            row.classList.add("purchased");
        }
        row.appendChild(cb)

        for (let val of ['name', 'quantity', 'store', 'section', 'price']) {
            let td = document.createElement("td")
            td.innerHTML = item[val]
            row.appendChild(td)
        }
        parent.appendChild(row)
    }
}

// function redrawTable() {
//     table = document.getElementsByTagName("table")
//     tbodytag = document.getElementsByTagName("tbody")
//     table.removeChild(tbodytag)
// }


// like the add(item.priority) is how you do CSS file to change colors
// do soemthing like that to add strikethrough in row - add CSS class
