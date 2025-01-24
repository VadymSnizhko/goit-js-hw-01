let count = 10;
count = parseInt(count);
console.log(count);

add(1);

function add(c) {
    console.log(typeof(c));
    
    console.log("ok "+c);
}

add("2");