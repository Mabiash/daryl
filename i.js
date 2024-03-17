let btn = document.querySelectorAll('.btn');
let con =  document.querySelector('.con');
let bodyColor = document.body.style;
let c = 0
btn.forEach(b => {
    
    b.addEventListener('click', (e) =>{
        // e.target.remove();
        
        if(b.innerHTML == 'btn1'){
            bodyColor.background = 'green';
            con.style.background = 'green';
        }
        else if(b.innerHTML == 'btn2'){
            bodyColor.background = 'yellow';
            con.style.background = 'yellow';
        }
        else{
            bodyColor.background = 'red';
            con.style.background = 'red';
        }
    })
})


let ar = [6, 3, 8, 9, 0]
ar.forEach(multwo => {
   console.log(multwo * 2);
 })

 let muls = ar.map(mul => {
  return mul * 2
 })

let fill = ar.filter(filt => {
   return filt >= 0
 })
 console.log(fill[ar.length - ar[0] + ar[1] -1 ])

