const start_btn = document.querySelector(".start button");
const info_box = document.querySelector(".ibox");
const exit_btn = document.querySelector(".button_rule .quit");
const conitnue_btn = document.querySelector(".button_rule .restart");

start_btn.onclick = ()=>{
    info_box.classList.add("activeInfo")
}

// exit_btn.onclick = ()=>{
//     info_box.classList.add("activeInfo")
// }