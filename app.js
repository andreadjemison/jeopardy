// ==============theme song plays on index page load==========
// $(document).ready(()=>{
// let song = $("#themesong")
// song.autoplay = true 
// song.volume = .8
// song.play()
// song.preload()

// //     $('#themesong').on('load', ()=>{
// //         $(this).play()
// // })
// })



// new Audio('audio/themesong.mp3').play()
// song.trigger('load')


// on click make themes visible and flip over
$("#choose").on('click',() => {
    $(".themes").css("display", "flex")
    $(".theme1").toggleClass("theme1-active")
    $(".theme2").toggleClass("theme2-active")
    $(".theme3").toggleClass("theme3-active")
})

// $('#one').click( ()=>{
//     swal({
//         title: "Name of Player 1",
//         text: "",
//         conyent: "input",
//         // closeOnConfirm: false,
//         inputPlaceholder: "Player 1"
//       }
    //   (input)=> {
    //     if (input === false) return false;
        // if (input === "") {
        //   swal.showInputError("You need to write something!");
        //   return false
        // }
        // swal("Nice!", "You wrote: " + input, "success")
    // )
    // })

    // $('.#one').on('click', ()=>{
    //     event.preventDefault();
    //     $('.officemodal').toggleClass('is-visible');
    //   });
    // $('#officemodal').on()

// $(() => {
//     for (let i = 0; i < 6; i++) {
//         $('.cat').append('<div class="categories"></div>')
//     }
// })

// $(() => {
//     for (let i = 0; i < 6; i++) {
//         $('.row').append('<div class="questions"></div>')
//         for (let i = 0; i < 5; i++) {
//             $('.ques').append('<div class="questions"></div>')
//         }
//     }
// })

let officeCat = [
    {
        'name': 'pranks',
        'questions': [{
            'value': 100,
            'question': "In what food did Jim put Dwight's stapler in?",
            "answers": [{
                "one": "Pie",
                "right": false
            }, {
                "two": "Jello",
                "right": true
            }, {
                "three": "Pudding",
                "right": false
            }, {
                "four": "Cake",
                "right": false
            }]
        },{
            'value': 200,
            'question': "Jim sends faxes to Dwight from who?",
            "answers": [{
                "one": "Abe Lincoln",
                "right": false
            }, {
                "two": "A high ranking official from the FBI",
                "right": false
            }, {
                "three": "Hitler",
                "right": false
            }, {
                "four": "Future Dwight",
                "right": true
            }]
        },{
            'value': 300,
            'question': "Where does Jim relocate Dwight's desk to?",
            "answers": [{
                "one": "The men's bathroom",
                "right": true
            }, {
                "two": "The women's bathroom",
                "right": false
            }, {
                "three": "The roof",
                "right": false
            }, {
                "four": "The elevator",
                "right": false
            }]
        },{
            'value': 400,
            'question': "Jim dresses up as who to freak Dwight out?",
            "answers": [{
                "one": "Dwight",
                "right": true
            }, {
                "two": "The Sith Lord",
                "right": false
            }, {
                "three": "Pimp",
                "right": false
            }, {
                "four": "The Devil",
                "right": false
            }]
        },{
            'value': 500,
            'question': "Jim convinces Dwight he's being recruited by who?",
            "answers": [{
                "one": "Secret Service",
                "right": false
            }, {
                "two": "FBI",
                "right": false
            }, {
                "three": "CIA",
                "right": true
            }, {
                "four": "PETA",
                "right": false
            }]
        }
        ]
    }
]

