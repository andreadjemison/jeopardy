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
$("#choose").on('click', () => {
    $(".themes").css("display", "flex")
    $(".theme1").toggleClass("theme1-active")
    $(".theme2").toggleClass("theme2-active")
    $(".theme3").toggleClass("theme3-active")
})
let score = 0


// pranks category
let officeCat = [
    {
        'name': 'pranks',
        'questions': [{
            'value': 100,
            'question': "In what food did Jim put Dwight's stapler in?",
            "answers": [{
                "a": "Pie",
                "right": false
            }, {
                "b": "Jello",
                "right": true
            }, {
                "c": "Pudding",
                "right": false
            }, {
                "d": "Cake",
                "right": false
            }],
            get ques() {

                return this.questions
            },
        }, {
            'value': 200,
            'question': "Jim sends faxes to Dwight from who?",
            "answers": [{
                "a": "Abe Lincoln",
                "right": false
            }, {
                "b": "A high ranking official from the FBI",
                "right": false
            }, {
                "c": "Hitler",
                "right": false
            }, {
                "d": "Future Dwight",
                "right": true
            }]
        }, {
            'value': 300,
            'question': "Where does Jim relocate Dwight's desk to?",
            "answers": [{
                "a": "The men's bathroom",
                "right": true
            }, {
                "b": "The women's bathroom",
                "right": false
            }, {
                "c": "The roof",
                "right": false
            }, {
                "d": "The elevator",
                "right": false
            }]
        }, {
            'value': 400,
            'question': "Jim dresses up as who to freak Dwight out?",
            "answers": [{
                "one": "Dwight",
                "right": true
            }, {
                "b": "The Sith Lord",
                "right": false
            }, {
                "c": "Pimp",
                "right": false
            }, {
                "d": "The Devil",
                "right": false
            }]
        }, {
            'value': 500,
            'question': "Jim convinces Dwight he's being recruited by who?",
            "answers": [{
                "one": "Secret Service",
                "right": false
            }, {
                "b": "FBI",
                "right": false
            }, {
                "c": "CIA",
                "right": true
            }, {
                "d": "PETA",
                "right": false
            }]
        }
        ]
    },{
        'name': 'mikescott',
        'questions': [{
            'value': 100,
            'question': "Who's car is hit with a watermelon during the safety training episode?",
            "answers": [{
                "a": "Stanley",
                "right": true
            }, {
                "b": "Jello",
                "right": true
            }, {
                "c": "Pudding",
                "right": false
            }, {
                "d": "Cake",
                "right": false
            }]
        }, {
            'value': 200,
            'question': "Jim sends faxes to Dwight from who?",
            "answers": [{
                "a": "Abe Lincoln",
                "right": false
            }, {
                "b": "A high ranking official from the FBI",
                "right": false
            }, {
                "c": "Hitler",
                "right": false
            }, {
                "d": "Future Dwight",
                "right": true
            }]
        }, {
            'value': 300,
            'question': "Where does Jim relocate Dwight's desk to?",
            "answers": [{
                "a": "The men's bathroom",
                "right": true
            }, {
                "b": "The women's bathroom",
                "right": false
            }, {
                "c": "The roof",
                "right": false
            }, {
                "d": "The elevator",
                "right": false
            }]
        }, {
            'value': 400,
            'question': "Jim dresses up as who to freak Dwight out?",
            "answers": [{
                "one": "Dwight",
                "right": true
            }, {
                "b": "The Sith Lord",
                "right": false
            }, {
                "c": "Pimp",
                "right": false
            }, {
                "d": "The Devil",
                "right": false
            }]
        }, {
            'value': 500,
            'question': "Jim convinces Dwight he's being recruited by who?",
            "answers": [{
                "one": "Secret Service",
                "right": false
            }, {
                "b": "FBI",
                "right": false
            }, {
                "c": "CIA",
                "right": true
            }, {
                "d": "PETA",
                "right": false
            }]
        }
        ]
    }, {
        'name': 'officeromance',
        'questions': [{
            'value': 100,
            'question': "Who's car is hit with a watermelon during the safety training episode?",
            "answers": [{
                "a": "Stanley",
                "right": true
            }, {
                "b": "Jello",
                "right": true
            }, {
                "c": "Pudding",
                "right": false
            }, {
                "d": "Cake",
                "right": false
            }]
        }, {
            'value': 200,
            'question': "Jim sends faxes to Dwight from who?",
            "answers": [{
                "a": "Abe Lincoln",
                "right": false
            }, {
                "b": "A high ranking official from the FBI",
                "right": false
            }, {
                "c": "Hitler",
                "right": false
            }, {
                "d": "Future Dwight",
                "right": true
            }]
        }, {
            'value': 300,
            'question': "Where does Jim relocate Dwight's desk to?",
            "answers": [{
                "a": "The men's bathroom",
                "right": true
            }, {
                "b": "The women's bathroom",
                "right": false
            }, {
                "c": "The roof",
                "right": false
            }, {
                "d": "The elevator",
                "right": false
            }]
        }, {
            'value': 400,
            'question': "Jim dresses up as who to freak Dwight out?",
            "answers": [{
                "one": "Dwight",
                "right": true
            }, {
                "b": "The Sith Lord",
                "right": false
            }, {
                "c": "Pimp",
                "right": false
            }, {
                "d": "The Devil",
                "right": false
            }]
        }, {
            'value': 500,
            'question': "Jim convinces Dwight he's being recruited by who?",
            "answers": [{
                "one": "Secret Service",
                "right": false
            }, {
                "b": "FBI",
                "right": false
            }, {
                "c": "CIA",
                "right": true
            }, {
                "d": "PETA",
                "right": false
            }]
        }
        ]
    }, {
            'name': 'employees',
            'questions': [{
                'value': 100,
                'question': "Who's car is hit with a watermelon during the safety training episode?",
                "answers": [{
                    "a": "Stanley",
                    "right": true
                }, {
                    "b": "Jello",
                    "right": true
                }, {
                    "c": "Pudding",
                    "right": false
                }, {
                    "d": "Cake",
                    "right": false
                }]
            }, {
                'value': 200,
                'question': "Jim sends faxes to Dwight from who?",
                "answers": [{
                    "a": "Abe Lincoln",
                    "right": false
                }, {
                    "b": "A high ranking official from the FBI",
                    "right": false
                }, {
                    "c": "Hitler",
                    "right": false
                }, {
                    "d": "Future Dwight",
                    "right": true
                }]
            }, {
                'value': 300,
                'question': "Where does Jim relocate Dwight's desk to?",
                "answers": [{
                    "a": "The men's bathroom",
                    "right": true
                }, {
                    "b": "The women's bathroom",
                    "right": false
                }, {
                    "c": "The roof",
                    "right": false
                }, {
                    "d": "The elevator",
                    "right": false
                }]
            }, {
                'value': 400,
                'question': "Jim dresses up as who to freak Dwight out?",
                "answers": [{
                    "one": "Dwight",
                    "right": true
                }, {
                    "b": "The Sith Lord",
                    "right": false
                }, {
                    "c": "Pimp",
                    "right": false
                }, {
                    "d": "The Devil",
                    "right": false
                }]
            }, {
                'value': 500,
                'question': "Jim convinces Dwight he's being recruited by who?",
                "answers": [{
                    "one": "Secret Service",
                    "right": false
                }, {
                    "b": "FBI",
                    "right": false
                }, {
                    "c": "CIA",
                    "right": true
                }, {
                    "d": "PETA",
                    "right": false
                }]
            }
            ]
        }, {
            'name': 'quotes',
            'questions': [{
                'value': 100,
                'question': 'As a gay man, Im horrified. As a friend of Angelas, horrified. As a lover of elegant weddings, Im a little excited.',
                "answers": [{
                    "a": "Andy",
                    "right": true
                }, {
                    "b": "Oscar",
                    "right": true
                }, {
                    "c": "Michael",
                    "right": false
                }, {
                    "d": "Toby",
                    "right": false
                }]
            }, {
                'value': 200,
                'question': "All you need is love. False. The four basic human necessities are air, water, food, and shelter.",
                "answers": [{
                    "a": "Creed",
                    "right": false
                }, {
                    "b": "Toby",
                    "right": false
                }, {
                    "c": "Darryl",
                    "right": false
                }, {
                    "d": "Dwight",
                    "right": true
                }]
            }, {
                'value': 300,
                'question': "Every little boy fantasizes about his fairytale wedding.",
                "answers": [{
                    "a": "Andy",
                    "right": true
                }, {
                    "b": "Oscar",
                    "right": false
                }, {
                    "c": "Michael",
                    "right": false
                }, {
                    "d": "Ryan",
                    "right": false
                }]
            }, {
                'value': 400,
                'question': "In five years, I'd like to be five years sober.",
                "answers": [{
                    "one": "Meredith",
                    "right": true
                }, {
                    "b": "Toby",
                    "right": false
                }, {
                    "c": "Jim",
                    "right": false
                }, {
                    "d": "Creed",
                    "right": false
                }]
            }, {
                'value': 500,
                'question': "Thats what she said",
                "answers": [{
                    "one": "Andy",
                    "right": false
                }, {
                    "b": "Darryl",
                    "right": false
                }, {
                    "c": "Michael",
                    "right": true
                }, {
                    "d": "Jim",
                    "right": false
                }]
            }
            ]
        }, {
            'name': 'management',
            'questions': [{
                'value': 100,
                'question': "Who became manager just by taking charge and giving raises?",
                "answers": [{
                    "a": "Nellie Bertram",
                    "right": true
                }, {
                    "b": "Dwight",
                    "right": false
                }, {
                    "c": "Robert California",
                    "right": false
                }, {
                    "d": "Andy Bernard",
                    "right": false
                }]
            }, {
                'value': 200,
                'question': "In the last episode who was manager of the Scranton branch?",
                "answers": [{
                    "a": "Ed Truck",
                    "right": false
                }, {
                    "b": "Charles Miner",
                    "right": false
                }, {
                    "c": "Michael",
                    "right": false
                }, {
                    "d": "Dwight",
                    "right": true
                }]
            }, {
                'value': 300,
                'question': "Where does Jim relocate Dwight's desk to?",
                "answers": [{
                    "a": "The men's bathroom",
                    "right": true
                }, {
                    "b": "The women's bathroom",
                    "right": false
                }, {
                    "c": "The roof",
                    "right": false
                }, {
                    "d": "The elevator",
                    "right": false
                }]
            }, {
                'value': 400,
                'question': "Jim dresses up as who to freak Dwight out?",
                "answers": [{
                    "one": "Dwight",
                    "right": true
                }, {
                    "b": "The Sith Lord",
                    "right": false
                }, {
                    "c": "Pimp",
                    "right": false
                }, {
                    "d": "The Devil",
                    "right": false
                }]
            }, {
                'value': 500,
                'question': "Jim convinces Dwight he's being recruited by who?",
                "answers": [{
                    "one": "Secret Service",
                    "right": false
                }, {
                    "b": "FBI",
                    "right": false
                }, {
                    "c": "CIA",
                    "right": true
                }, {
                    "d": "PETA",
                    "right": false
                }]
            }
            ]
        }
    ]
// category 1
$('#prank1').click(() => {
    $('.gameboard').css("visibility", "hidden")
    console.log(officeCat[0].questions[0])
    $('#prank1ques').append(officeCat[0].questions[0])
    $('#prank1ques').css('display', 'flex')
    
})

$('#prank2').click(() => {
    $('.gameboard').css("visibility", "hidden")
    console.log(officeCat[0].questions[1])
})

$('#prank3').click(() => {
        $('.gameboard').css("visibility", "hidden")
    console.log(officeCat[0].questions[2])

})

$('#prank4').click(() => {
        $('.gameboard').css("visibility", "hidden")
    console.log(officeCat[0].questions[3])
})

$('#prank5').click(() => {
        $('.gameboard').css("visibility", "hidden")
    console.log(officeCat[0].questions[4])
})
// category 2
$('#ms1').click(() => {
        $('.gameboard').css("visibility", "hidden")
    console.log(officeCat[1].questions[0])
})

$('#ms2').click(() => {
        $('.gameboard').css("visibility", "hidden")
    console.log(officeCat[1].questions[1])
})

$('#ms3').click(() => {
        $('.gameboard').css("visibility", "hidden")
    console.log(officeCat[1].questions[2])
})

$('#ms4').click(() => {
        $('.gameboard').css("visibility", "hidden")
    console.log(officeCat[1].questions[3])
})

$('#ms5').click(() => {
        $('.gameboard').css("visibility", "hidden")
    console.log(officeCat[1].questions[4])
})
// category 3

$('#or1').click(() => {
    $('.gameboard').css("visibility", "hidden")
    console.log(officeCat[2].questions[0])
    // $('p').css('display', 'flex')
    // $('p').data(officeCat[2].questions[0])
})

$('#or2').click(() => {
        $('.gameboard').css("visibility", "hidden")
    console.log(officeCat[2].questions[1])
})

$('#or3').click(() => {
        $('.gameboard').css("visibility", "hidden")
    console.log(officeCat[2].questions[2])
})

$('#or4').click(() => {
    //     $('.gameboard').css("visibility", "hidden")
        $('.gameboard').css("visibility", "hidden")
    console.log(officeCat[2].questions[3])
})

$('#or5').click(() => {
        $('.gameboard').css("visibility", "hidden")
    console.log(officeCat[2].questions[4])
})
// category 4
$('#qu1').click(() => {
        $('.gameboard').css("visibility", "hidden")
    console.log(officeCat[3].questions[0])
})

$('#qu2').click(() => {
        $('.gameboard').css("visibility", "hidden")
    console.log(officeCat[3].questions[1])
})

$('#qu3').click(() => {
        $('.gameboard').css("visibility", "hidden")
    console.log(officeCat[3].questions[2])
})

$('#qu4').click(() => {
        $('.gameboard').css("visibility", "hidden")
    console.log(officeCat[3].questions[3])
})

$('#qu5').click(() => {
        $('.gameboard').css("visibility", "hidden")
    console.log(officeCat[3].questions[4])
})
// category 5

$('#man1').click(() => {
    $('.gameboard').css("visibility", "hidden")
    console.log(officeCat[4].questions[0])
    // $('p').css('display', 'flex')
    // $('p').data(officeCat[4].questions[0])
})

$('#man2').click(() => {
        $('.gameboard').css("visibility", "hidden")
    console.log(officeCat[4].questions[1])
})

$('#man3').click(() => {
        $('.gameboard').css("visibility", "hidden")
    console.log(officeCat[4].questions[2])
})

$('#man4').click(() => {
        $('.gameboard').css("visibility", "hidden")
    console.log(officeCat[4].questions[3])
})

$('#man5').click(() => {
        $('.gameboard').css("visibility", "hidden")
    console.log(officeCat[4].questions[4])
})
// category 6
$('#emp1').click(() => {
        $('.gameboard').css("visibility", "hidden")
    console.log(officeCat[5].questions[0])
})

$('#emp2').click(() => {
        $('.gameboard').css("visibility", "hidden")
    console.log(officeCat[5].questions[1])
})

$('#emp3').click(() => {
        $('.gameboard').css("visibility", "hidden")
    console.log(officeCat[5].questions[2])
})

$('#emp4').click(() => {
        $('.gameboard').css("visibility", "hidden")
        // console.log()
    console.log(officeCat[5].questions[3])
})

$('#emp5').click(() => {
        $('.gameboard').css("visibility", "hidden")
    console.log(officeCat[5].questions[4])
})

// =====append value to score