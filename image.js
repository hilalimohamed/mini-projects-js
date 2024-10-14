
var first = document.querySelector(".first");
var second = document.querySelector(".second");
var firs = document.querySelector(".fa");
var searchInp = document.querySelector('.searchInp');

first.addEventListener("click" , () =>{
    second.classList.toggle("active");
    firs.classList.toggle("rotete");
});

var content =["argentina","algeria","aquabiba alkhawa",
"boroondi","banama","binin","banghladish",
"colombia","cote d'évoir","costarica","filland",
"maroc","turkey","ughanda"]

var list = document.querySelector('.list');
function activve() {
    content.forEach(chihaja => {
        li = `<li onclick="plus(this)">${chihaja}</li>`;
        list.insertAdjacentHTML("beforeend" , li);
    });
};
activve();

searchInp.addEventListener('keyup', ()=>{
    var ar = []
    var op = searchInp.value.toLowerCase()
    ar = content.filter(data =>{
        return data.startsWith(op)
    }).map(data=>(
        `<li onclick="plus(this)">${data}</li>`
        )).join('')
        list.innerHTML = ar ? ar :`<p class="lo">MMM! Country not found</p>`;
})


function plus(messa) {
    first.firstElementChild.innerText = messa.innerText;
    second.classList.remove("active");
};




var scd = document.querySelector('.scd');
var min = document.querySelector('.min');
var hr = document.querySelector('.hr');


setInterval(myFunction,1000);
function myFunction() {
    var time = new Date();
    var scds = time.getSeconds()*6;
    var mins = time.getMinutes()*6;
    var hrs = time.getHours()*30;
    scd.style.transform = `rotateZ(${scds}deg)`;
    min.style.transform = `rotateZ(${mins}deg)`;
    hr.style.transform = `rotateZ(${hrs}deg)`;
};
var span3 = document.querySelector('.span3');
var span2 = document.querySelector('.span2');
var span1 = document.querySelector('.span1');
setInterval(myFun,1000);
function myFun() {
    var time = new Date();
    var scds = time.getSeconds();
    var mins = time.getMinutes();
    var hrs = time.getHours();
   
    span3.innerHTML=scds
    span2.innerHTML=mins
    span1.innerHTML=hrs
};



var arrayList = ["Buy a new gaming laptop",
   " Complete a pervious task",
    "Create a vidio for YouTube",
    "Create a vidio for YouTube",
    "Create a vidio for YouTube",
    "Create a vidio for YouTube",
    "Create a vidio for YouTube",
    "Create a vidio for YouTube",
    "Create a new portfolio dite" ]
    
    // let disabled = document.getElementsByClassName("disabled");
    
    

    // disabled.onclick = ()=>{
    //     let inputbutt = document.getElementsByClassName("input1");
    //     arrayList.pop(inputbutt.innerText);
    // }
    
    
    
    var Sentences = document.querySelector('.Sentences');
    arrayList.forEach(deletFunction=>{
        var li = `<li onclick="deletSent(this)">${deletFunction}<span><i class="fa fa-trash" aria-hidden="true" ></i></span></li>`;
        Sentences.insertAdjacentHTML("beforeEnd",li)
    });

    
    function deletSent(ss) {
       Sentences.removeChild(ss)
    };
    var clearAll = document.getElementById('clearAll');
    clearAll.addEventListener("click",function Clear() {
        Sentences.remove()
    });

    // const numbe = document.querySelector('.numbe');
    // function num() {
    //     numbe.textContent = arrayList.lenght 
    // };
    // num();
    
    

    var butt2 = document.querySelector(".butt2 button");
    var theRules = document.querySelector(".someRules");
    var continuebutt = document.querySelector(".secondtbutt");
    var firstbutt = document.querySelector(".firstbutt");
    var ather = document.querySelector('.ather');


    var questionArray = [
        {
            num : 1,
            question : "What does HTML stand for ?",
            choices : [
                "Hyperb Text Preprocessor",
                "Hyperb Text Markup Language",
                "Hyperb Text Multiple Language",
                "Hyperb Tool Multi Language",
            ],
            answer : "Hyperb Text Markup Language",
        },
        {
            num : 2,
            question : "What does HTML stand for ?",
            choices : [
                "Hyperb Text Preprocessor",
                " Text Markup Language",
                "Hyperb Text Multiple Language",
                " Tool Multi Language",
            ],
            answer : "Hyperb Text Markup Language",
        },
        {
            num : 3,
            question : "What does HTML stand for ?",
            choices : [
                "Hyperb Text Preprocessor",
                "Hyperb  Markup Language",
                "Hyperb Text Multiple Language",
                "Hyperb Tool Multi Language",
            ],
            answer : "Hyperb Text Markup Language",
        },
        {
            num : 4,
            question : "What does HTML stand for ?",
            choices : [
                "Hyperb Text Preprocessor",
                "Hyperb Text Markup Language",
                "Hyperb Text Multiple Language",
                "Hyperb Tool  Language",
            ],
            answer : "Hyperb Text Markup Language",
        },
        {
            num : 5,
            question : "What does HTML stand for ?",
            choices : [
                "Hyperb Text Preprocessor",
                "Hyperb Text Markup ",
                "Hyperb Text Multiple Language",
                "Hyperb Tool Multi Language",
            ],
            answer : "Hyperb Text Markup Language",
        },
    ];

    butt2.addEventListener("click" ,  ()=> {
            theRules.classList.add('activee');
        });
    firstbutt.addEventListener("click" ,  ()=> {
            theRules.classList.remove('activee');
        });
    continuebutt.addEventListener("click", ()=> {
        theRules.classList.remove('activee');
        ather.classList.add('open');
        toShowQue(0);
        });
            var lastButton = document.querySelector(".last button");
            xx = 0; 
            lastButton.addEventListener("click", ()=>{
               if (xx < questionArray.length - 1) {
                 xx++;
                toShowQue(xx);
               }else{
                lastButton.classList.add('none')
               };
            });


            var spanOf1 = document.querySelector('.last p span');


        function toShowQue(index) {
            const htmlStand = document.querySelector('.htmlStand p');
            const sent = document.querySelector('.sent');
                var p = `<p>` +questionArray[index].num+"."+" "+questionArray[index].question+ `</p>`;
                let div = `<div>`+questionArray[index].choices[0]+`</div>`+
                          `<div>`+questionArray[index].choices[1]+`</div>`+
                          `<div>`+questionArray[index].choices[2]+`</div>`+
                          `<div>`+questionArray[index].choices[3]+`</div>`;
                htmlStand.innerHTML = p;
                sent.innerHTML = div;
                spanOf1.innerHTML = questionArray[index].num;
        };
        
var arrayImg = ["bleu.webp",
                "mov.jpg",
                "hila.png",
                "hilalio.jpg",
                "hiloo.jpg"];

        var imgg = document.querySelector(".imgg img");
        var clbut = document.querySelector(".clbut");
        var clbutT = document.querySelector(".clbutT");
        imgg.setAttribute("src","db.jpg");
        x=0; 
        clbutT.addEventListener("click",()=> {
            if (x < arrayImg.length ) {
                imgg.setAttribute("src",arrayImg[x]);
                  var h = x++;
                 h.Math.random();
            }
        })  ;
        clbut.addEventListener("click",()=> {
            x <= arrayImg.length
                imgg.setAttribute("src",arrayImg[x]);
                x--;
        })  ;
        
console.log(arrayImg.length);
var forArray = ["messi","neymar","ronaldo"];
let contt = 0;
let indx = 0;

function tupe() {
    
    currentText = forArray[contt].slice(0,++indx);

    document.querySelector(".cont h1").innerHTML = currentText;
    if (currentText === forArray[contt]) {
        contt++;
        indx = 0;
    }
    if (contt === forArray.length) {
        contt=0;
    }
    
};
// tupe()
setInterval(tupe,400);

// var conth1 = document.querySelector('.cont h1');
// var forArray = ["messi","neymar","ronaldo"];
// let j=0;
// var h = 0;

    
// function type() {
//     if (h < forArray[j].length) {
//         conth1.innerHTML += forArray[j].charAt(h) ;
//         h++;
//         setTimeout(type,900);
//         }else{
//             clearTimeout(type,200)
//         }
//     }
//     type()

// setInterval(type,900);


//Palndrome checker
var h1 =document.querySelector('.Checker input');
var ClickButt = document.querySelector('.Checker button');
var chePa = document.getElementById('chePa');
let keyupOrTarget;

h1.addEventListener('keyup', ()=>{
    keyupOrTarget = h1.value.replace(/[^A-Z0-9]/ig,"").toLowerCase();
    console.log(keyupOrTarget)
});
ClickButt.addEventListener('click',()=>{
    let hyu = keyupOrTarget.split("").reverse().join("");
    if (hyu!=keyupOrTarget) {
        chePa.innerText = `No, '${keyupOrTarget.toUpperCase()}' isn't a palndrome`
    } else {
        chePa.innerText = `Yeeees, '${keyupOrTarget.toUpperCase()}' is a palndrome`
    }
});


//Save As File
var textArea = document.querySelector('.saveText textarea')
var fileNameInput = document.querySelector('.fileName input')
var saveAsSelect = document.querySelector('.saveAs select')
var btnSave = document.querySelector('.btnSave')
let totalLink;
var khdmTfo = document.getElementById('khdmTfo')

btnSave.addEventListener('click',()=>{
    const blob = new Blob([textArea.value],{ type : saveAsSelect.value})
    const urlFile = URL.createObjectURL(blob) 
    var dow = fileNameInput.value;
     a = `<a href="${urlFile}" download="${dow}" >${dow}</a>`
    totalLink = btnSave.insertAdjacentHTML("afterend", a)
    console.log(a);
})

// Quote Of The Day
var contextMenu = document.querySelector(".contextMenu")
var quoteText = document.querySelector('.Quote div p')
var by = document.querySelector('.by')
var btnCli = document.querySelector('.btnCli')
var toListen = document.querySelector('.li1')
var toCopy = document.querySelector('.li2')
var toDownload = document.querySelector('.li3')
let contentQuote;
let byContext;
let doSpeach;
let speach;

function clickAdd() {
    fetch("https://api.quotable.io/random").then(res=>res.json().then(result=>{
        contentQuote = quoteText.innerText = result.content;
        byContext = by.innerText = "__" + result.author;
        console.log(result)
        btnCli.classList.remove("isActive");
        btnCli.innerText = "New Quote"
    }));
}

btnCli.addEventListener('click',()=>{
     btnCli.classList.add("isActive")
     btnCli.innerText = "Loading Quote..."
     setTimeout(clickAdd, 1000)
})

function downloadFunction() {
    toDownload.classList.remove("li3Active")
    let blob2 = new Blob([contentQuote +"____by__"+ byContext] ,{type : "text/plain"});
    let urlObje = URL.createObjectURL(blob2);
    let link = document.createElement("a");
    link.href = urlObje;
    link.download = "Quote Of The Day";
    link.click();
}

toDownload.addEventListener('click',()=>{
    toDownload.classList.add("li3Active");
     setTimeout(downloadFunction, 9000)
})

function copyFunction() {
    toCopy.classList.remove("li3Active")
    navigator.clipboard.writeText(quoteText.innerText + " BY "+ by.innerText)
}

toCopy.addEventListener('click',()=>{
    toCopy.classList.add("li3Active");
     setTimeout(copyFunction, 500)
})


function listenFunction() {
    toListen.classList.remove("li3Active")
    speach = new SpeechSynthesisUtterance(`${quoteText.innerText}+by+${by.innerText}`);
    doSpeach = speechSynthesis;
    if (!doSpeach.speaking) {
        doSpeach.speak(speach)
    };
}




toListen.addEventListener('click',()=>{
    toListen.classList.add("li3Active");
    btnCli.classList.add("isActive")
    setTimeout(listenFunction, 500);
})



document.addEventListener("contextmenu", e=>{
    e.preventDefault();
    let x=e.offsetX,y=e.offsetY,
    winWidth=window.innerWidth,
    contOffsetWidth=contextMenu.offsetWidth,
    winHeight=window.innerHeight,
    contOffsetHeight=contextMenu.offsetHeight;
    contextMenu.style.visibility = "visible";

    x= x > winWidth-contOffsetWidth?
    winWidth-contOffsetWidth:x;
   
    y= y > winHeight-contOffsetHeight?
    winHeight-contOffsetHeight:y;

    contextMenu.style.left = `${x}px`;
    contextMenu.style.top = `${y}px`;
    console.log("offsetX : "+x)
    console.log("offsetY : "+y)
    console.log("windowWidth : "+window.innerWidth)
    console.log("contextMenu.offsetWidth : "+contextMenu.offsetWidth)
});
// DARIJA : had lcod jbto ghir mn HOW TO 
document.addEventListener("click",(event)=>{
    // console.log("EventTarget:"+event.target)
    if (!contextMenu.contains(event.target)) {
        contextMenu.style.visibility = "hidden";
      }

       //{HTA HADA SHIH GHIR HOWA MKHRB9 CHWIYA}
                        //LOCK DOWN HHHH

    // if (event.target.id == "contextMen") {
    //     contextMenu.style.visibility = "visible";
    // }else{
    //     contextMenu.style.visibility = "hidden";
    // }
});


// cards game

let stion = document.querySelector(".stion")
let imagg = document.querySelector(".imagg")
let card = document.querySelectorAll(".card")

card.forEach(s=>{
    s.addEventListener('click',(e)=>{
         il = e.target
         il.classList.add("actik")
        console.log(il)
        
    })
    
})



// WEATHER APP


let weatherInput = document.querySelector(".weatherInput");
let weatherBtn = document.querySelector('.weatherBtn');
let apikey = "125f581f39e7054d748581646a95806e"
// let apikey = Math.floor(Math.random()*1000)






function gettingData(city) {
    // let apii = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=125f581f39e7054d748581646a95806e`;
    // lfr9 mabin hadi li lfo9 oli ltht hiya had l3iba {&units=metric} ohad l3iba khlat dik daraja matb9ach t3tihana b (290 aw 300 lmohim bhal haka) owlat t3tihana b (25 aw 10 aw -3 )
    let apii = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=125f581f39e7054d748581646a95806e`;
    fetch(apii).then(resp=>resp.json().then(det=>{
        
            let na=   document.querySelector('.location span').innerText = `${det.name}, ${det.sys.country}`;
            let lwla=   document.querySelector('.temp .numb').innerText = Math.floor(det.main.temp);
            let bhalha=   document.querySelector('.temp2 .numb2').innerText = Math.floor(det.main.feels_like);
            let lktaba=   document.querySelector('.weather').innerText = det.weather[0].description;
            let flmya=   document.querySelector('.details2 span').innerText = `${det.main.humidity}%`;
              console.log(det)
              console.log(na)
              console.log(lwla)
              console.log(bhalha)
              console.log(lktaba)
              console.log(flmya)
        }))
    console.log(city)
}


weatherBtn.addEventListener("click", ()=>{
        gettingData(weatherInput.value)
    })



    // Word Scramble Game

    let wordH1 = document.querySelector(".WordScrambleGame .dataWord h2");
    let hintSpan = document.querySelector(".WordScrambleGame .dataWord span");
    let wordInput = document.querySelector(".wordInput");
    let btns1 = document.querySelector(".btns1")
    let btns2 = document.querySelector(".btns2")
    let timeWord = document.querySelector(".timeWord span")

    const words = [
        {
            word: "addition",
            hint: "The process of adding numbers"
        },
        {
            word: "meeting",
            hint: "Event in which people come together"
        },
        {
            word: "number",
            hint: "Math symbol used for counting"
        },
        {
            word: "exchange",
            hint: "The act of trading"
        },
        {
            word: "canvas",
            hint: "piece of fabric oil painting"
        },
        {
            word: "garden",
            hint: "space for planting flower and plant"
        },
        {
            word: "group",
            hint: "A number of objects or persons"
        },
        {
            word: "taste",
            hint: "Large shop where goods are traded"
        },
        {
            word: "field",
            hint: "Area of land for farming activities"
        },
        {
            word: "friend",
            hint: "Person other than a family member"
        },
        {
            word: "pocket",
            hint: "A bag for carrying small items"
        },
        {
            word: "needle",
            hint: "A thin and sharp metal pin"
        },
        {
            word: "expert",
            hint: "Person with extensive knowledge"
        },
        {
            word: "statement",
            hint: "A declaration of something"
        },
        {
            word: "second",
            hint: "One-sixtieth of a minute"
        },
        {
            word: "library",
            hint: "Place containing collection of books"
        }
    ];
    
    let wordsRandom ;
    let timeOUt = 60;
    function timeLef() {
        if (timeOUt !== -1) {
            timeWord.innerText = timeOUt--;
        }else{
            alert('sala lw9t');
            btns1.click();
            timeOUt = 60
        }
    }
    // setInterval(timeLef,1000)
    
    btns1.addEventListener('click', ()=>{
        wordsRandom = Math.floor(Math.random() * words.length-1);
        hintSpan.innerText = words[wordsRandom].hint;
        let RandWor = words[wordsRandom].word.split('');
        for (let l = RandWor.length-1; l > 0; l--) {
            let f = Math.floor(Math.random()*(l+1))
            let newWord = RandWor[l];
            RandWor[l]=RandWor[f];
                  RandWor[f]=newWord;
                }
                // console.log(words[wordsRandom].word)
                timeOUt = 15;
                wordH1.innerText = RandWor.join("").toUpperCase();
            });

    btns2.addEventListener('click',()=>{
        // console.log(wordInput.value)
        // console.log(words[wordsRandom].word)
    
        if (wordInput.value === '') {
            alert("ktb chi l3ba asahbi")
        } else  if (wordInput.value.toLowerCase() === words[wordsRandom].word) {
            alert("Well Done");
            btns1.click();
            wordInput.value = "";
        } else {
            alert(`Sorry it's wrong, the word is ${words[wordsRandom].word}`);
            btns1.click();
            wordInput.value = "";
        }
    });

    
// Image Editor
const choseImg = document.querySelector('.choseImg');
const chose = document.getElementById('im');
const saveImg  = document.querySelector('.saveImg');
const imgEdit = document.querySelector('.imgEdit img');
const canvasUse = document.querySelector('.canvasUse');
const numbre200 = document.querySelector('.flexMinMax p')
const points = document.getElementById('points');
const Brightness = document.querySelector(".Brightness");
const Saturation = document.querySelector(".Saturation");
const Inversion = document.querySelector(".Inversion");
const Grayscale = document.querySelector(".Grayscale");
const ofCss = document.querySelectorAll(".ofCss button");
let brightnessValue=100,saturationValue=100,inversionValue=0,grayscalValue=0;

function filtrit() {
    imgEdit.style.filter = `brightness(${points.value}%) saturate(${points.value}%) invert(${points.value}%) grayscale(${points.value}%)`
}


choseImg.addEventListener('click', ()=>{
    chose.click()
});

saveImg.addEventListener('click', ()=>{
    
    // make <canvas> of the same size
    let canvas = document.createElement('canvas');
    let context = canvas.getContext('2d');
    canvas.width = imgEdit.naturalWidth ;
    canvas.height = imgEdit.naturalHeight;
    
    
    // copy image to it (this method allows to cut image)
    context.drawImage(imgEdit, 0, 0, canvas.width, canvas.height);
    // canvasUse.appendChild(canvas)
    console.log(context)
    console.log(imgEdit.naturalWidth)
    console.log(canvas.height)
    // we can context.rotate(), and do many other things on canvas
    
    let imgBlob = new Blob([canvas] ,{type : "image/png"})
    let saveit = URL.createObjectURL(imgBlob)
    let link = document.createElement('a');
    link.download = 'SAVE IMAGE';
    link.href = saveit;
    // link.href = canvas.toDataURL();
    link.click();
    
    // delete the internal blob reference, to let the browser clear memory from it
    //   URL.revokeObjectURL(link.href);
    
})

function changeNum() {
   numbre200.innerText = points.value
console.log(points.value)
}
points.addEventListener('input', changeNum)



// randomColor
var clrName = document.querySelector('.clrName')
var chngClr = document.querySelector('.chngClr')
var color = document.querySelectorAll('.color')


chngClr.addEventListener('click',()=>{
    let randName ="#" + Math.floor(Math.random()*0xffffff).toString(16)
    clrName.innerText = randName
    color.style.backgroundColor = `${randName}`
})

































// filter: grayscale(100%)
// Brightness.addEventListener('click', ()=>{
//     points.value = brightnessValue;
//     points.max = 200;
//     numbre200.innerText = points.value;
//     imgEdit.style.filter = `brightness(${points.value}%)`
//     points.addEventListener('input', ()=>{
//         filtrit()
//         // imgEdit.style.filter = `brightness(${points.value}%)`
//     })
// })
// Saturation.addEventListener('click', ()=>{
//     points.value = saturationValue;
//     points.max = 200;
//     numbre200.innerText = points.value;
//     imgEdit.style.filter = `saturate(${points.value}%)`
//     points.addEventListener('input', ()=>{
//         filtrit()
//         // imgEdit.style.filter = `saturate(${points.value}%)`
//     })
// })
// Inversion.addEventListener('click', ()=>{
//     points.value = inversionValue;
//     points.max = 100;
//     numbre200.innerText = points.value;
//     imgEdit.style.filter = `invert(${points.value}%)`
//     points.addEventListener('input', ()=>{
//         filtrit()
//         // imgEdit.style.filter = `invert(${points.value}%)`
//     })
// })
// Grayscale.addEventListener('click', ()=>{
//     console.log(ofCss)
//     points.value = grayscalValue;
//     points.max = 100;
//     numbre200.innerText = points.value;
//     imgEdit.style.filter = `grayscal(${points.value}%)`
//     points.addEventListener('input', ()=>{
//         filtrit()
//         // imgEdit.style.filter = `grayscale(${points.value}%)`;
//     })
// })


// ofCss.forEach(all=>{
//     console.log(all);
//     all.addEventListener('click',()=>{
//         if (all.class==="Brightness" ) {
//             points.value = brightnessValue;
//             points.max = 200;
//             numbre200.innerText = points.value;
//         } else if (all.class==="Saturation") {
//             points.value = saturationValue;
//             points.max = 200;
//             numbre200.innerText = points.value;
//         } else if (all.class==="Inversion") {
//             points.value = inversionValue;
//             points.max = 100;
//             numbre200.innerText = points.value;
//         } else if (all.class==="Grayscale") {
//             points.value = grayscalValue;
//         points.max = 100;
//         numbre200.innerText = points.value;
//     }
//    })
// // console.log(ofCss.)'
// })
