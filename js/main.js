let vetorCores =  ["AliceBlue", "AntiqueWhite", "Aqua", "Aquamarine", "Azure", "Beige", 
"Bisque", "Black", "BlanchedAlmond", "Blue", "BlueViolet", "Brown", "BurlyWood", "CadetBlue", 
"Chartreuse", "Chocolate", "Coral", "CornflowerBlue", "Cornsilk", "Crimson", "Cyan", "DarkBlue", 
"DarkCyan", "DarkGoldenRod", "DarkGray", "DarkGrey", "DarkGreen", "DarkKhaki", "DarkMagenta", "DarkOliveGreen",
"DarkOrange", "DarkOrchid", "DarkRed", "DarkSalmon", "DarkSeaGreen", "DarkSlateBlue", "DarkSlateGray", "DarkSlateGrey",
"DarkTurquoise", "DarkViolet", "DeepPink", "DeepSkyBlue", "DimGray", "DimGrey", "DodgerBlue", "FireBrick", 
"FloralWhite", "ForestGreen", "Fuchsia", "Gainsboro", "GhostWhite", "Gold", "GoldenRod", "Gray", "Grey", 
"Green", "GreenYellow", "HoneyDew", "HotPink", "IndianRed", "Indigo", "Ivory", "Khaki", "Lavender", "LavenderBlush",
"LawnGreen", "LemonChiffon", "LightBlue", "LightCoral", "LightCyan", "LightGoldenRodYellow", "LightGray", "LightGrey",
"LightGreen", "LightPink", "LightSalmon", "LightSeaGreen", "LightSkyBlue", "LightSlateGray", "LightSlateGrey", 
"LightSteelBlue", "LightYellow", "Lime", "LimeGreen", "Linen", "Magenta", "Maroon", "MediumAquaMarine", "MediumBlue", 
"MediumOrchid", "MediumPurple", "MediumSeaGreen", "MediumSlateBlue", "MediumSpringGreen", "MediumTurquoise", "MediumVioletRed", 
"MidnightBlue", "MintCream", "MistyRose", "Moccasin",  "NavajoWhite", "Navy","OldLace", "Olive", "OliveDrab", "Orange",
"OrangeRed", "Orchid", "PaleGoldenRod","PaleGreen", "PaleTurquoise", "PaleVioletRed", "PapayaWhip", "PeachPuff",
"Peru", "Pink", "Plum", "PowderBlue", "Purple", "RebeccaPurple", "Red", "RosyBrown", "RoyalBlue", "SaddleBrown", "Salmon","SandyBrown",
"SeaGreen", "SeaShell", "Sienna", "Silver", "SkyBlue", "SlateBlue", "SlateGray", "SlateGrey", "Snow", "SpringGreen", "SteelBlue", "Tan",
"Teal", "Thistle", "Tomato", "Turquoise", "Violet", "Wheat", "White", "WhiteSmoke", "Yellow",  "YellowGreen"]


let sorteada;
const seletor = [];

// Gerar 10 cores aleatorias

function aleatorio() {
    for (let i = 0; i < 10; i++) {
    seletor.push(vetorCores[Math.floor(Math.random() * vetorCores.length)]);
    console.log(seletor)
}  
    seletor.sort();
    document.getElementById("teste").innerHTML = `[${seletor}]`
    sorteada = seletor[Math.floor(Math.random() * seletor.length)]
    console.log(sorteada);
}

// pedir para o jogador advinhar
aleatorio();
let cor;

function campoAdivinha() {

    if (vidas == 3){
        cor = prompt(`Eu estou pensando em uma dessas cores: \n [${seletor}] \n\n Qual delas estou pensando?`);
       
        console.log(cor)
        resultados();

    }else{ 
        cor = prompt(`Total de vidas: [${vidas}]` +  `\nEu estou pensando em uma dessas cores: \n [${seletor}] \n\n Qual delas estou pensando?`);
       
        console.log(cor)
        resultados();
    }
}
   
// verificando resultados
var vidas = 3;
var resultado = document.getElementById('resultado');
var textoPrompt;


function resultados() {
    console.log(cor)

    if(cor.toLowerCase() === sorteada.toLowerCase()){
    document.getElementById("fundo").style.background = sorteada;
    document.getElementById("resultado").append("VOCÊ VENCEU !!")
    vidas--;
    }
    else {
        if (vidas >= 2 && cor.toLowerCase() > sorteada.toLowerCase()) {
            alert(" Ops, essa cor não está correta \n Dica: Sua cor é alfabeticamente maior que a minha \n Tente novamente");
            vidas--;
            console.log(vidas)
            
            campoAdivinha();
        
        }else if (vidas >= 2 && cor.toLowerCase() < sorteada.toLowerCase()) {
            alert(" Ops, essa cor não está correta \n Dica: Sua cor é alfabeticamente menor que a minha \n Tente novamente");
            vidas--;
            console.log(vidas)
            
            campoAdivinha();
        }else{
            document.getElementById("resultado").append("Suas vidas acabaram :(")
        }
    }
   
}

