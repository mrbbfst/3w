function changebackground(event) {
        $('#background').attr('class',$(this).attr('name'));
}


function showandhiden(event) {
    if(event != 'about')
    var name = $(this).attr('name');
    else
    var name = 'about';
    //changebackground(name);
    $('#content').find("> *").each(
        function() {
        if($(this).attr('name')==('C'+name)) {
            $(this).removeClass('hide');
            $(this).addClass('show');//css('visibility', 'visible');
            $(this).attr('class', $(this).attr('class')+' start');
        }
        else {
            $(this).removeClass('show');
            $(this).addClass('hide');//css('visibility', 'hidden');  
        }
    })
}
function setLine(ev) {
    //var prev = $('nav a#active').attr('name');
    if(ev!=undefined) {   
        $('nav a#active').attr('id', '');
        $(this).attr('id', "active");
        showandhiden($(this).attr('name'));
    }
    var line = $('nav div#line');
    line.css($('nav a#active').offset());
    line.css('width', $('nav a#active').css('width'));
};

function start() {
    $('nav div#line').css('width', '15rem');
    showandhiden('about');
    setLine();
}

function click_mailto(event) {
    let mail = 'mailto:rollingstone0protonmail.ch';
    window.open(mail, '_blank') || window.location.replace(mail);
} 

function click_telegram(event) {
    let telegram = 'https://t.me/mrbbfst';
    window.open(telegram, '_blank') || window.location.replace(telegram);
}

function click_linkedin() {
    let linkedin = 'https://www.linkedin.com/in/%D0%BA%D0%B8%D1%80%D0%B8%D0%BB%D0%BB-%D0%BE%D1%81%D0%B8%D0%BF%D0%BA%D0%BE%D0%B2-955b96207/';
    window.open(linkedin, '_blank') || window.location.replace(linkedin);
}


$('document').ready(function() {
    start();
    $("nav a").click(setLine)
              .click(changebackground)
              .click(showandhiden);

    $('#content > #contacts > #mail').click(click_mailto);
    $('#content > #contacts > #telegram').click(click_telegram);
    $('#content > #contacts > #linkedin').click(click_linkedin);
    
});

