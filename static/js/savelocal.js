"use strict";

class LocalStorageSaver {
    constructor(model, lsname) {
        this.lsname = lsname;
        let self = this
        model.subscribe(function(slist, msg) {
            self.saveAll(slist)
        })
        if (localStorage.length != 0) {
        //now restore from local storage
            let restore_list = JSON.parse(localStorage.getItem(lsname))
            for(let vals of restore_list) {
                let it = new Item (vals.name, vals.quantity, vals.priority, vals.store, vals.section, vals.price)
                model.addItem(it)
            }
        }
    }

    saveAll(slist) {
        let ls_list = JSON.stringify(slist.newItems)
        localStorage.setItem(this.lsname, ls_list)
    }
}