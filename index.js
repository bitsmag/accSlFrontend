// API REQUESTS

let apiBaseUrl;

$.ajax({url: 'https://s3-us-west-2.amazonaws.com/acc.frontend/apiBaseUrl.json', success: function(result){
    apiBaseUrl = JSON.parse(result).url;
}, error: function(a, b ,c) {
    printResult("Couldn't retreive backend URL")
}});

$('#pinButton').click(
    function(){
        var url = apiBaseUrl + 'pin/' + $('#pinAmount')[0].value;
        $('#pinDate')[0].value != '' ? url += '/' + $('#pinDate')[0].value : url = url;
        $('#pinCategory')[0].value != '' ? url += '/' + $('#pinCategory')[0].value : url = url;
        callServiceAndPrintResult(url);
    }
)

$('#poutButton').click(
    function(){
        var url = apiBaseUrl + 'pout/' + $('#poutAmount')[0].value;
        $('#poutDate')[0].value != '' ? url += '/' + $('#poutDate')[0].value : url = url;
        $('#poutCategory')[0].value != '' ? url += '/' + $('#poutCategory')[0].value : url = url;
        callServiceAndPrintResult(url);
    }
)

$('#logButton').click(
    function(){
        var url = apiBaseUrl + 'log/';
        //$('select[name=logOrder]')
        $('select[name=logOrder]')[0].value != '' ? url += $('select[name=logOrder]')[0].value : url = url;
        $('#logDate')[0].value != '' ? url += '/' + $('#logDate')[0].value : url = url;
        $('#logCategory')[0].value != '' ? url += '/' + $('#logCategory')[0].value : url = url;
        callServiceAndPrintResult(url);
    }
)

$('#balanceButton').click(
    function(){
        var url = apiBaseUrl + 'balance';
        callServiceAndPrintResult(url);
    }
)

function callServiceAndPrintResult(url) {
    $.ajax({url: url, success: function(result){
        printResult(result);
    }, error: function(a, b ,c) {
        console.log('err');
    }});
}

function printResult(result) {
        $("#outputArea")[0].value = result;
        $("#outputArea")[0].scrollTop = $("#outputArea")[0].scrollHeight
}

// TAB MANGEMENT

function openTab(evt, tabname) {
    // Declare all variables
    var i, tabcontent, tablinks;

    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(tabname).style.display = "block";
    evt.currentTarget.className += " active";
}

document.getElementById("defaultTab").click();