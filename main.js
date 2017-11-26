var loopInterval = 500;

// Initial variables

var cash = 0;
var cookies = 0;
var totalCookies = 0;
var cookieCost = 1;

// Production variables

var totalProduction = 0;
var cookiemachines = 0;
var smallFactories = 0;
var mediumFactories = 0;
var largeFactories = 0;

var baseCookieMachineCost = 100;
var baseSmallFactoryCost = 1000;
var baseMediumFactoryCost = 3000;
var baseLargeFactoryCost = 15000

// Sales variables

var totalSales = 0;
var girlScouts = 0;
var cookiePacks = 0;
var cookieCrates = 0;

var baseGirlScoutCost = 20;
var baseCookiePackCost = 20;
var baseCookieCrateCost = 50;

// Modifier variables

// Marketing variables

var markInterns = 0;
var markExecs = 0;

function cookieClick(number){
	cookies = cookies + number;
	totalCookies = totalCookies + number;
	document.getElementById("cookies").innerHTML = cookies;
//	document.getElementById("totalCookies").innerHTML = totalCookies;
};

function sellCookie(number){
	if(number>cookies){
		cash = cash + (cookieCost);
		cookies = cookies - number;
		document.getElementById('cash').innerHTML = cash;
		document.getElementById('cookies').innerHTML = cookies;
	} else {
	};
};

function autoSellCookie(number){
	if(cookies > 1){
		cash = cash + (number * cookieCost);
		cookies = cookies - number;
	        document.getElementById('cash').innerHTML = cash;
        	document.getElementById('cookies').innerHTML = cookies;
	} else {
	};
};

function buyGirlScout(){
        var girlScoutCost = Math.floor(baseGirlScoutCost * Math.pow(1.1,girlScouts));
        if(cookies >= girlScoutCost){
                girlScouts = girlScouts + 1;
                cookies = cookies - girlScoutCost;
                document.getElementById('girlScouts').innerHTML = girlScouts;
                document.getElementById('cookies').innerHTML = cookies;
        };
        var nextCost = Math.floor(baseGirlScoutCost * Math.pow(1.1,cookiemachines));
        document.getElementById('girlScoutCost').innerHTML = nextCost;
};

function buyCookiePack(){
        var cookiePackCost = Math.floor(baseCookiePackCost * Math.pow(1.1,cookiePacks));
        if(cash >= cookiePackCost){
                cookiePacks = cookiePacks + 1;
                cash = cash - cookiePackCost;
                document.getElementById('cookiePacks').innerHTML = cookiePacks;
                document.getElementById('cash').innerHTML = cash;
        };
        var nextCost = Math.floor(baseCookiePackCost * Math.pow(1.1,cookiePacks));
        document.getElementById('cookiePackCost').innerHTML = nextCost;
};

function buyCookieCrate(){
        var cookieCrateCost = Math.floor(baseCookieCrateCost * Math.pow(1.1,cookieCrates));
        if(cash >= cookieCrateCost){
                cookieCrates = cookieCrates + 1;
                cash = cash - cookieCrateCost;
                document.getElementById('cookieCrates').innerHTML = cookieCrates;
                document.getElementById('cash').innerHTML = cash;
        };
        var nextCost = Math.floor(baseCookieCrateCost * Math.pow(1.1,cookieCrates));
        document.getElementById('cookieCrateCost').innerHTML = nextCost;
};

function buyCookieMachine(){
	var cookieMachineCost = Math.floor(baseCookieMachineCost * Math.pow(1.1,cookiemachines));
	if(cash >= cookieMachineCost){
		cookiemachines = cookiemachines + 1;
		cash = cash - cookieMachineCost;
		document.getElementById('cookiemachines').innerHTML = cookiemachines;
		document.getElementById('cash').innerHTML = cash;
	};
	var nextCost = Math.floor(baseCookieMachineCost * Math.pow(1.1,cookiemachines));
	document.getElementById('cookieMachineCost').innerHTML = nextCost;
};

function buySmallFactory(){
        var smallFactoryCost = Math.floor(baseSmallFactoryCost * Math.pow(1.1,smallFactories));
        if(cash >= smallFactoryCost){
                smallFactories = smallFactories + 1;
                cash = cash - smallFactoryCost;
                document.getElementById('smallFactories').innerHTML = smallFactories;
                document.getElementById('cash').innerHTML = cash;
        };
        var nextCost = Math.floor(baseSmallFactoryCost * Math.pow(1.1,smallFactories));
        document.getElementById('smallFactoryCost').innerHTML = nextCost;
};

function buyMediumFactory(){
        var mediumFactoryCost = Math.floor(baseMediumFactoryCost * Math.pow(1.1,mediumFactories));
        if(cash >= mediumFactoryCost){
                mediumFactories = mediumFactories + 1;
                cash = cash - mediumFactoryCost;
                document.getElementById('mediumFactories').innerHTML = mediumFactories;
                document.getElementById('cash').innerHTML = cash;
        };
        var nextCost = Math.floor(baseMediumFactoryCost * Math.pow(1.1,mediumFactories));
        document.getElementById('mediumFactoryCost').innerHTML = nextCost;
};

function calcProduction(){
	totalProduction =
	(cookiemachines * 1)
	+ (smallFactories * 6)
	+ (mediumFactories * 22);
	+ (largeFactories * 45);

	document.getElementById('totalProduction').innerHTML = totalProduction;
	
	return totalProduction;
};

function calcSales(){
        totalSales = 
        (girlScouts * 1)
        + (cookiePacks * 3)
        + (cookieCrates * 10);

        document.getElementById('totalSales').innerHTML = totalSales;

        return totalSales;
};


function saveGame(){
	save = {
		cookies: cookies,
		cash: cash,
		girlScouts: girlScouts,
		cookiePacks: cookiePacks,
		cookieCrates: cookieCrates,
		cookiemachines: cookiemachines,
		smallFactories: smallFactories,
		mediumFactories: mediumFactories
	};

	localStorage.setItem("save",JSON.stringify(save));
};

function loadGame(){
	var savegame = JSON.parse(localStorage.getItem("save"));
	
	if (typeof savegame.cookies !== "undefined") cookies = savegame.cookies;
	if (typeof savegame.cash !== "undefined") cash = savegame.cash;
	if (typeof savegame.girlScouts !== "undefined") girlScouts = savegame.girlScouts;
	if (typeof savegame.cookiePacks !== "undefined") cookiePacks = savegame.cookiePacks;
	if (typeof savegame.cookieCrates !== "undefined") cookieCrates = savegame.cookieCrates;
	if (typeof savegame.cookieMachines !== "undefined") cookieMachines = savegame.cookieMachines;
	if (typeof savegame.cookieSmallFactories !== "undefined") smallFactories = savegame.smallFactories;

	localStorage.removeItem("save");
};

window.setInterval(function(){
	calcProduction();
	calcSales();
	cookieClick(totalProduction);
	autoSellCookie(totalSales);
}, loopInterval);
