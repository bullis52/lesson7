//Зробити свій розпорядок дня.

//    У вас має бути більше 10 асинхронних дій з рандомними затримками.
//    Вам необхідно синхронізувати всі свої дії за допомогою промісів та async await (Код має бути написаний окремо)
//Затримка має бути НЕ в порядку зростання, а будь яка. При тому ваші дії мають бути синхронізовані.

//    Напиклад.
//    Прикнутись - 0.3с
//Поснідати - 1с
//Піти в душ - 0.5с
//Дочекатись автобус - 3с
//Пообідати - 1с
//І так далі


////////////////////////////////////////callback
// function wakeUp(cb){
//     setTimeout(()=>{
//         cb('я прокинувся')
//         //breakFest()
//     },300)
// }
// function breakFest(cb){
//     setTimeout(()=>{
//         cb('я поснідав')
//         //goToWash()
//     },1000)
// }
// function goToWash(cb){
//     setTimeout(()=>{
//       cb('я пішов в душ')
//         //waitBus()
//     },500)
// }
// function waitBus(cb){
//     setTimeout(()=>{
//         cb('я почекав автобус')
//         //eat()
//     },3000)
// }
// function eat(cb){
//     setTimeout(()=>{
//         cb('Я поїв')
//     },1000)
// }
// wakeUp((data) => {
//     console.log(data)
//     breakFest((data) => {
//         console.log(data)
//         goToWash((data) => {
//             console.log(data);
//             waitBus((data)=>{
//                 console.log(data)
//                 eat((data)=>{
//                     console.log(data)
//                 })
//             })
//         })
//     })
// })

////////////////////Promise



function wakeUp (){
    return new Promise(resolve => setTimeout(()=>{
        resolve('я проснулся')
    },300))
}
function breakFest (){
    return new Promise(resolve => setTimeout(()=>{
        resolve('я поснідав')
    },1000))
}
function goToWash(){
    return new Promise(resolve => setTimeout(()=>{
        resolve('я помився')
    },500))
}
function waitBus(){
    return new Promise(resolve => setTimeout(()=>{
        resolve('почекав автобус')
    },3000))
}
function eat (){
    return new Promise(resolve => setTimeout(()=>{
        resolve('поїв')
    },1000))
}
// wakeUp().then(value => {
//     console.log(value)
//     breakFest().then(value=>{
//         console.log(value)
//         goToWash().then(value=>{
//             console.log(value)
//             waitBus().then(value=>{
//                 console.log(value)
//                 eat().then(value=>{
//                     console.log(value)
//                 })
//             })
//         })
//     })
// })


////////////////////////////////////////////////////async

const start = async function(){
    console.log(await wakeUp())
    console.log(await breakFest())
    console.log(await goToWash())
    console.log(await waitBus())
    console.log(await eat())
}
start()
