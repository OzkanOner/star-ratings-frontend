$(document).ready(function(){
    /* Bootstrap's tooltip trigger */
    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
    var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl)
    });
    /* Bootstrap's tooltip trigger */

    /* Review stars logic */
    $(".stars.input i").click(function() {
        if($(this).hasClass("checked")){
            $(".stars.input i").removeClass("checked");
        }else{
            $(".stars.input i").removeClass("checked");
            $(this).addClass("checked");
        }
    });
    /* Review stars logic */
});