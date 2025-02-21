let btn = document.querySelector("input")
let drpList = document.getElementById("colorSelect")
btn.addEventListener("click",()=>{
	drpList.remove(drpList.selectedIndex)
})