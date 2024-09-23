function updatemyName(){
    let text=document.getElementById('me');
    text.style.color = 'red';
    text.innerHTML=" Shubham Sambhaji Kadam";
}
setTimeout(updatemyName, 3000);

// function changeBackground(){
//     let body=document.getElementsByTagName('body')[0];
//     body.style.backgroundColor= "skyblue";
// }
// setTimeout(changeBackground, 3000);

document.getElementById("intr").addEventListener("mouseover", function() {
    document.getElementById("intr").style.backgroundColor = "orange";
 });
//  document.getElementById("intr").addEventListener("mouseout", function() {
//     document.getElementById("intr").style.backgroundColor = "violet";
//  });

document.getElementById("skil").addEventListener("mouseover", function() {
    document.getElementById("skil").style.backgroundColor = "orange";
});

document.getElementById("pro").addEventListener("mouseover", function() {
    document.getElementById("pro").style.backgroundColor = "orange";
});