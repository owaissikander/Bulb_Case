





var main_box1 = document.getElementById('main_box')
var image1 = document.getElementById('image')


// main_box1.addEventListener('mouseover', function () {
//     image.src='https://toppng.com/uploads/preview/light-bulb-on-off-png-11553940319kdxsp3rf0i.png'
//     image1.style.height = '100%'
//     image1.style.width = '100%'
// })
// main_box1.addEventListener('mouseout', function () {
//     image.src='https://toppng.com/uploads/preview/light-bulb-on-off-png-115539402943y50vxr5yi.png'
//     image1.style.height = '100%'
//     image1.style.width = '100%'
// })


function ON_1() {
    image1.src = 'https://toppng.com/uploads/preview/light-bulb-on-off-png-11553940319kdxsp3rf0i.png'
    image1.style.height = '100%'
    image1.style.width = '100%'
    ON_btn.disabled = true
    OFF_btn.disabled = false
}

function OFF_1() {
    image1.src = 'https://toppng.com/uploads/preview/light-bulb-on-off-png-115539402943y50vxr5yi.png'
    image1.style.height = '100%'
    image1.style.width = '100%'
    ON_btn.disabled = false
    OFF_btn.disabled = true
}