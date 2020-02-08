



let d = new Date();
console.log(d);

function repeater() {
    let repeat_output ='';
    
    for(let i = 0; i < 10; i++) {
        
        document.getElementById('repeater').innerHTML = repeat_output+=repeat_output = '<div class = grid_items>' + i +'</div>';
    }
    return repeat_output;
}
repeater();



document.getElementById('date_time').innerHTML = d;