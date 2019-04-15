// on click make themes visible and flip over
$("#choose").on('click', () => {
    $(".themes").css("display", "flex")
    $(".theme1").toggleClass("theme1-active")
    $(".theme2").toggleClass("theme2-active")
    $(".theme3").toggleClass("theme3-active")
})