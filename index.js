function LaneClick(lane){
    ChossenLane = lane;
}

function RollClicked(){
    
    let RandomNum;
    
    if(ChossenLane === "Top"){
        RandomNum = Math.floor(Math.random() * TopChamps.length);
        BoxText.innerHTML = `<img src="Images/Champions/${TopChamps[RandomNum]}.png">`; 

        console.log("Champ displayed : "+TopChamps[RandomNum]);
    }
    else if(ChossenLane === "Jung"){
        RandomNum = Math.floor(Math.random() * JungChamps.length);
        BoxText.innerHTML = `<img src="Images/Champions/${JungChamps[RandomNum]}.png">`; 

        console.log("Champ displayed : "+JungChamps[RandomNum]); 
    }
    else if(ChossenLane === "Mid"){
        RandomNum = Math.floor(Math.random() * MidChamps.length);
        BoxText.innerHTML = `<img src="Images/Champions/${MidChamps[RandomNum]}.png">`; 

        console.log("Champ displayed : "+MidChamps[RandomNum]);
    }
    else if(ChossenLane === "Bot"){
        RandomNum = Math.floor(Math.random() * BotChamps.length);
        BoxText.innerHTML = `<img src="Images/Champions/${BotChamps[RandomNum]}.png">`; 

        console.log("Champ displayed : "+BotChamps[RandomNum]);
    }
    else if(ChossenLane === "Sup"){
        RandomNum = Math.floor(Math.random() * SupChamps.length);
        BoxText.innerHTML = `<img src="Images/Champions/${SupChamps[RandomNum]}.png">`; 

        console.log("Champ displayed : "+SupChamps[RandomNum]);
    }
    else{
        BoxText.innerHTML = "<h1>Choose a lane and roll</h1>";
    }

}


const TopBtn = document.getElementById("Top-Button");
const JungBtn = document.getElementById("Jungle-Button");
const MidBtn = document.getElementById("Mid-Button");
const BotBtn = document.getElementById("Bot-Button");
const SupBtn = document.getElementById("Sup-Button");

let BoxText = document.getElementById("Champion-Box");

let ChossenLane;

const TopChamps = ["Aatrox","Akali","Akshan","Aurora","Camille",
        "Chogath","Darius","DrMundo","Fiora","Gangplank","Garen",
        "Gnar","Gwen","Heimerdinger","Illaoi","Irelia","Jax",
        "Jayce","Kayle","Kennen","Kled","KSante","Malphite",
        "Mordekaiser","Nasus","Olaf","Ornn","Pantheon","Poppy",
        "Quinn","Renekton","Riven","Rumble","Sett","Shen","Singed",
        "Sion","TahmKench","Teemo","Trundle","Tryndamere","Urgot",
        "Vladimir","Volibear","Yasuo","Yone","Yorick"
];

const JungChamps= ["Amumu","Belveth","Brand","Briar","Diana",
        "Ekko","Elise","Evelynn","Fiddlesticks","Gragas","Graves",
        "Hecarim","Ivern","JarvanIV","Jax","Karthus","Kayn","Khazix",
        "Kindred","LeeSin","Lillia","MasterYi","MonkeyKing","Nidalee",
        "Nocturne","Nunu","Poppy","Rammus","RekSai","Rengar","Sejuani",
        "Shaco","Shyvana","Skarner","Taliyah","Udyr","Vi","Viego","Volibear",
        "Warwick","XinZhao","Zac"
];

const MidChamps = ["Akali","Ahri","Akshan","Anivia","Annie",
        "AurelionSol","Aurora","Azir","Cassiopeia","Corki",
        "Diana","Ekko","Fizz","Galio","Heimerdinger","Hwei",
        "Irelia","Karma","Kassadin","Katarina","Leblanc","Lissandra",
        "Lux","Malzahar","Naafiri","Neeko","Orianna","Qiyana","Ryze",
        "Sylas","Syndra","Talon","TwistedFate","Veigar","Vex","Viktor",
        "Vladimir","Xerath","Yasuo","Yone","Zed","Zoe"

];

const BotChamps = ["Aphelios","Ashe","Caitlyn","Draven",
        "Ezreal","Jhin","Jinx","Kaisa","Kalista","KogMaw",
        "Lucian","MissFortune","Nilah","Samira","Sivir",
        "Tristana","Twitch","Varus","Vayne","Xayah","Yasuo",
        "Zeri","Ziggs"

];

const SupChamps = ["Alistar","Bard","Blitzcrank","Brand","Braum",
        "Heimerdinger","Hwei","Janna","Karma","Leona","Lulu","Lux",
        "Maokai","Milio","Morgana","Nami","Nautilus","Neeko","Pantheon",
        "Pyke","Rakan","Rell","Renata","Senna","Seraphine","Sona","Soraka",
        "Swain","Taric","thresh","Velkoz","Yuumi","Zilean","Zyra"
];

TopBtn.addEventListener('click', function(){
    TopBtn.classList.add("Lane-Buttons-Clicked");

    JungBtn.classList.replace("Lane-Buttons-Clicked","Lane-Buttons");
    MidBtn.classList.replace("Lane-Buttons-Clicked","Lane-Buttons");
    BotBtn.classList.replace("Lane-Buttons-Clicked","Lane-Buttons");
    SupBtn.classList.replace("Lane-Buttons-Clicked","Lane-Buttons");
});

JungBtn.addEventListener('click', function(){
    JungBtn.classList.add("Lane-Buttons-Clicked");

    TopBtn.classList.replace("Lane-Buttons-Clicked","Lane-Buttons");
    MidBtn.classList.replace("Lane-Buttons-Clicked","Lane-Buttons");
    BotBtn.classList.replace("Lane-Buttons-Clicked","Lane-Buttons");
    SupBtn.classList.replace("Lane-Buttons-Clicked","Lane-Buttons");
});

MidBtn.addEventListener('click', function(){
    MidBtn.classList.add("Lane-Buttons-Clicked");

    TopBtn.classList.replace("Lane-Buttons-Clicked","Lane-Buttons");
    JungBtn.classList.replace("Lane-Buttons-Clicked","Lane-Buttons");
    BotBtn.classList.replace("Lane-Buttons-Clicked","Lane-Buttons");
    SupBtn.classList.replace("Lane-Buttons-Clicked","Lane-Buttons");
});

BotBtn.addEventListener('click', function(){
    BotBtn.classList.add("Lane-Buttons-Clicked");

    TopBtn.classList.replace("Lane-Buttons-Clicked","Lane-Buttons");
    JungBtn.classList.replace("Lane-Buttons-Clicked","Lane-Buttons");
    MidBtn.classList.replace("Lane-Buttons-Clicked","Lane-Buttons");
    SupBtn.classList.replace("Lane-Buttons-Clicked","Lane-Buttons");
});

SupBtn.addEventListener('click', function(){
    SupBtn.classList.add("Lane-Buttons-Clicked");

    TopBtn.classList.replace("Lane-Buttons-Clicked","Lane-Buttons");
    JungBtn.classList.replace("Lane-Buttons-Clicked","Lane-Buttons");
    MidBtn.classList.replace("Lane-Buttons-Clicked","Lane-Buttons");
    BotBtn.classList.replace("Lane-Buttons-Clicked","Lane-Buttons");
});
