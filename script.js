// async function store() {
//     const respnce = await fetch('https://fakestoreapi.com/products/1')
//     const data = await respnce.json()
//     console.log(data)
// }

// store()

// async function store1() {
//     const responce = await fetch('https://fakestoreapi.com/products/1')
//         .then(res => res.json())
//         .then(data => console.log(data))

// }

// store1()

// class Car {

//     constructor(name, model) {
//         this.name = name
//         this.model = model
//         this.isEnginOn = false
//     }

//     startEngin() {
//         if(!this.isEnginOn) {
//             this.isEnginOn = !this.isEnginOn
//             console.log('Engin started')
//         } else {
//             console.log('Engin is alredy Runnig')
//         }
//     }

//     stopEngin() {
//         if (this.isEnginOn) {
//             this.isEnginOn = !this.isEnginOn
//             console.log('Engin .Stoped')
//         } else {
//             console.log('Engin is running')
//         }
//     }
// }

// const myCar = new Car('toyota', 'supra')
// myCar.startEngin()
// myCar.startEngin()
// myCar.stopEngin()

for(let i = 0; i < 5; i++) {
    for (let j = 0; j < 5; j++) {
        console.log('*')
    }
}