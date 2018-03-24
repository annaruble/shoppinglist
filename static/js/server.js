"use strict";

class serverSaver {
    constructor(model, ssname) {
        this.ssname = ssname;
        let self = this
        model.subscribe(function(saveList, msg) {
            self.saveAll(saveList)
        });

        fetch(`http://localhost:5001/getlist`)
        .then(function(response) {
            console.log(response)
            return response.json()
        })

        .then(function(response) {
            if(restore_list != null) {
                for(let vals of restore_list) {
                    let it = new Item (vals.name, vals.quantity, vals.priority, vals.store, vals.section, vals.price)
                    model.addItem(it)
                }
            }
        })

        .catch(error => console.error("Error: ", error))

    }

    saveAll(sslist) {
        let config = {};
        config.method = 'POST'
        config.body = JSON.stringify(sslist);
        config.headers = {'Content-type': 'application/json',
        'Accept': 'application/json' };

        fetch(`http://localhost:5001/savelist`, config)
        .then(function(response) {
            console.log(response)
            return response.json()
        })

        .catch(error => console.error("Error: ", error))

    }

}