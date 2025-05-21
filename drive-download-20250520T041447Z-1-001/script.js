// faq -----------------------------------------------------------------------------------------
$(".question").each(function() {
    $(this).click(function(){
        $(this).find("p").toggle();
        $(this).toggleClass("faq_exp");
        //$(this).css('listStyleImage', $(this).hasClass("selected")?sel:unsel);    
    })
});