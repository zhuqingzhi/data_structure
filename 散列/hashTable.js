class HashTable {
    constructor() {
        this.table = new Array(137);
    }
    put(data) {
        var pos = this.simpleHash(data);
        this.table[pos].push(data)
    }
    get() { }
    simpleHash(data) {
        var total = 0;
        for (var i = 0; i < data.length; i++) {
            total += data.charCodeAt(i);
        }
        return total % this.table.length;
    }
    showDistro() {
        this.table.forEach((item, index) => {
            if (item && item.length) {
                item.forEach((subItem, ) => {
                    console.log(index + '->' + subItem);
                })
            }
        })
    }
    buildChains() {
        for (var i = 0; i < this.table.length; i++) {
            this.table[i] = new Array();
        }
    }
}

const hashTable = new HashTable();
hashTable.buildChains();
var someNames = ["David", "Jennifer", "Donnie", "Raymond",
    "Cynthia", "Mike", "Clayton", "Danny",'Danny'];
for (var i = 0; i < someNames.length; i++) {
    hashTable.put(someNames[i])
}
hashTable.showDistro();