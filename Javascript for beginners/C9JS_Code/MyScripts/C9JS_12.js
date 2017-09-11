// Static Object
var Car = {

    // Properties
    doors: 5,
    brand: "Renault",
    model: "Megane",
    cruisingSpeed: 90,
    // Object as property
    motor: {
        brand: "MotorFactory",
        size: 1500,
        power: 140,
        Launch: function() {
            document.write("Lancement du moteur ...")
        }
    },
    // Array of Objects as property
    passengers: [{
            firstName: "Adrian",
            lastName: "Pothuaud",
            capacityToDrive: true,
            seatBeltAttached: false
        },
        {
            firstname: "Alvin",
            lastName: "Pothuaud",
            capacityToDrive: false,
            seatBeltAttached: true
        }
    ],

    // Methods
    Allumer: function() {
        document.write("<p>Démarrage de la Voiture ...</p>")
        this.motor.Launch()
        document.write("<p>Fermeture automatique des " + this.doors + " portes</p>")
    },
    Rouler: function() {
        document.write("<p>Roulage tranquile ...</p>")
        document.write("<p>Vitesse de croisière atteinte : " + this.cruisingSpeed + " kmh</p>")
    }
}

// // Manipulation of Object properties
// Car.doors = 7
// Car.cruisingSpeed = 75

// // Usage of Object Methods
// Car.Allumer()
// Car.Rouler()

// // Iterating over Object's properties
// for (item in Car) {
//     document.write("<br/>" + Car[item])
// }

// Object by constructor
function Cube(size) {
    this.size = size
    this.volume = size * size * size
    this.faces = [{ description: "top" },
        { description: "bottom" },
        { description: "left" },
        { description: "right" },
        { description: "front" },
        { description: "back" }
    ]
    for (iter = 0; iter < this.faces.length; iter++) {
        this.faces[iter].size = size
        this.faces[iter].surface = size * size
    }
}

var cube1 = new Cube(12)
console.log(cube1)