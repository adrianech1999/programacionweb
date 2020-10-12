$(document).ready(init);

function init(){
    
    $("#book").booklet({
        width: 800,
        height: 600,
        closed: true,
        covers: true
    });

    $("#buscar").click(function(){
        $("#book").booklet("gotopage", $("#nPagina").val());
    }); 
    
}
