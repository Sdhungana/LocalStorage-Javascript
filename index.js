const ipkey = document.querySelector("#ipkey");
const ipvalue = document.querySelector("#ipvalue");
const btn = document.querySelector("#btn");
const output = document.querySelector("#output");

    btn.addEventListener("click", function(){
        if (ipkey.value && ipvalue.value){
            localStorage.setItem(ipkey.value, ipvalue.value);
            location.reload();
            // output.innerHTML += localStorage.getItem(ipkey.value);
        }     
});
    for(let i = 0 ; i < localStorage.length ; i++){
        const key = localStorage.key(i);
        const value = localStorage.getItem(key);
        output.innerHTML += `${key} : ${value}`+"<br>";
    }

