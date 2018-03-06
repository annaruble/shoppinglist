"use strict";

class Item {
    constructor(item, quantity, priority, store, section, price) {
        this.item = name;
        this.quantity = quantity;
        this.priority = priority;
        this.store = store;
        this.section = section;
        this.price = price;

        this._purchased = false;
    }
}

class ShoppingList {
    constructor() {
        this.newItems = [];
        this.oldItems = [];
    }
    addItem(it) {
        this.newItems.push(it)
    }
}

class Subject {
    constructor() {
        this.handlers = []
    }

    subscribe(fn) {
        this.handlers.push(fn)
    }

    unsubscribe(fn) {
        this.handlers = this.handlers.filter(
            function(item) {
                if (item !== fn) {
                    return item;
                }
            }
        );
    }

    publish(msg, someobj) {
        var scope = someobj || window;
        for (let fn of this.handlers) {
            fn(scope, msg)
        }
    }

}