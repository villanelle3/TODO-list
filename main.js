$(document).ready(function(){
    $("form").on("submit", function(e){
        e.preventDefault();
        let newtask = $("#newtask").val();
        $("ul").append(`<li class="li">${newtask}</li>`);
        $('#form').trigger("reset");
    })

    $('ul').on('click', '.li', function() { //$('#staticParent').on('click', '.dynamicElement', function()
        if ($(this).hasClass("done")){
            $(this).removeClass("done");
        }else{
            $(this).addClass("done");
        }
        // var classes = $(this).attr("class");
    });

});



