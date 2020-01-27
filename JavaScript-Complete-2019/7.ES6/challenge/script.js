/*
    Both park and street has name and year of construction

    --> create a common class and 2 subclass 
*/
class Element {
    constructor(name, yearOfConstruction) {
        this.name = name;
        this.yearOfConstruction = yearOfConstruction;
    }
}

class Park extends Element {
    constructor(name, yearOfConstruction, totalTree, area) {
        super(name, yearOfConstruction);
        this.totalTree = totalTree;
        this.area = area;
    }
}

class Street extends Element {
    constructor(name, yearOfConstruction, length, size) {
        super(name, yearOfConstruction);
        this.length = length;
    }
}

const parks = [
    new Park('Gia Dinh', 1978, 700, 32),
    new Park('Le Van Tam', 1983, 900, 40),
    new Park('Tao Dan', 1975, 1150, 45)
];

const streets = [
    new Street('Nam Ky Khoi Nghia', 2002, 9.6, 'normal'),
    new Street('Pasteur', 1998, 8.3, 'small'),
    new Street('Hai Ba Trung', 1985, 12.8, 'big'),
    new Street('Cong Hoa', 1996, 17.4, 'huge')
];

function parkReport (parks) {
    console.log('\n------ PARKS REPORT ------');
    // 1. average age of parks
    let averageAge = parks.reduce((sum, cur) => {
        return sum + (new Date().getFullYear() - cur.yearOfConstruction);
    }, 0) / parks.length;
    console.log(`Our ${parks.length} parks have an average age of ${averageAge.toFixed(2)} years.`);

    // 2. tree density of each park
    parks.forEach(cur => {
        let density = (cur.totalTree / cur.area).toFixed(2);
        console.log(`${cur.name} park has a tree density of ${density} trees per hectare.`);
    });

    // 3. parks which have more than 1000 trees

    parks.forEach(cur => {
        if (cur.totalTree > 1000) {
            console.log(`${cur.name} park has more than 1000 trees.`);
        }
    });
}

function streetReport (streets) {
    console.log('\n------ STREETS REPORT ------');
    // 1. total length
    let totalLength = streets.reduce((sum, cur) => {
        return sum + cur.length;
    }, 0);
    // 2. average length
    let averageLength = totalLength / streets.length;
    console.log(`Our ${streets.length} have a total length of ${totalLength} km, with an average of ${averageLength.toFixed(2)} km.`);
}

parkReport(parks);
streetReport(streets);