// import {allElements} from '../periodic-table'

// window.alert(allElements[0])


let d = new Date();
console.log(d);

function repeater() {
    let repeat_output ='';
    
    for(let i = 0; i < 10; i++) {
        document.getElementById('repeater').innerHTML =repeat_output+=repeat_output = '<div class = grid_items><h1>' + i +'</h1>' 
        +'<button action="https://www.google.com"/>Range</button>'+
        '</div>';

    }
    return repeat_output;
}
repeater();

document.getElementById('date_time').innerHTML = d;