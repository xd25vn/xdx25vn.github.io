function init() {
   var html_btn = document.getElementById("btn");
   html_btn.onclick = convertMoney;
}

function loadData() {
	var giatri = document.getElementById("giatri").value;
	sessionStorage.giatri = giatri;
}


function convertMoney() {
	 loadData();
	 vnd = sessionStorage.giatri / 24;
	 var html_money = document.getElementById("money");
	 html_money.textContent = "Sang USD" + " = " + vnd;    
}

window.onload = init;