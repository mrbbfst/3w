var vacancy_list = {
    "Designer" : '',
    "front-end web developer" : '',
    "Advertising manager" : ''
};

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
            $(this).addClass('start');
            //$(this).attr('class', $(this).attr('class')+' start');
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
        //showandhiden($(this).attr('name'));
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
    let mail = 'mailto:prog@duck.com';
    window.open(mail, '_blank') || window.location.replace(mail);
} 

function click_telegram(event) {
    let telegram = 'https://t.me/mrbbfst';
    window.open(telegram, '_blank') || window.location.replace(telegram);
}

function click_linkedin(event) {
    let linkedin = 'https://www.linkedin.com/in/%D0%BA%D0%B8%D1%80%D0%B8%D0%BB%D0%BB-%D0%BE%D1%81%D0%B8%D0%BF%D0%BA%D0%BE%D0%B2-955b96207/';
    window.open(linkedin, '_blank') || window.location.replace(linkedin);
}

function click_github(event) {
    let github = 'https://github.com/mrbbfst';
    window.open(github, '_blank') || window.location.replace(github);
}

function click_vacancy(event) {
    $('#content > #projects').find("> *").each(
        function() {
            $(this).removeClass('show');
            $(this).addClass('hide');
        }
    );
    $('#content > #vacancy-list').removeClass('hide');

}

function showlinks(event) {
    $('#content > #projects').find("> *").each(
        function() {
            $(this).removeClass('hide');
            $(this).addClass('show');
        }
    );
}

$('document').ready(function() {
    start();
    $("nav a").click(setLine)
              .click(changebackground)
              .click(showandhiden);
              
    //$('nav a[name="projects"]').click(showlinks);
    $('#content > #contacts > #mail').click(click_mailto);
    $('#content > #contacts > #telegram').click(click_telegram);
    $('#content > #contacts > #linkedin').click(click_linkedin);
    $('#content > #contacts > #github').click(click_github);
    $('#content > #projects > #vacancy').click(click_vacancy);
    $('#content > #vacancy-list').find('> *').each(function() {
        $(this).click( function() {
        $('nav a[name="contacts"]').click();//dispatchEvent(new Event('click'));
        });
    });
});

window.onresize = function(event) {
    $('nav div#line').removeClass('outresize'); 
    $('nav div#line').addClass('onresize');    
    setLine();
    $('nav div#line').removeClass('onresize');
    $('nav div#line').addClass('outresize');  
    $('#background').css('width', '100%');   
};
