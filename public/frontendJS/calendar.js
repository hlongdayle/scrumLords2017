$(document).ready(function() {

    $('#calendar').fullCalendar({
        header: {
            left: 'prev,next today',
            center: 'title',
            right: 'month,listMonth'
        },
        firstDay: 1,
        displayEventEnd: true,
        timeFormat: 'H:mm',
        eventLimit: true,
        locale: 'nb',
        timezone : 'local',
        weekNumbers:true,
        navLinks: true,
        editable: false,
        eventColor: '#7bc7ff', //default event color //can be set individually
        eventTextColor: '#000000', //default event text color
        //GETTING EVENTS FROM JSON FEED; SHORT AND EXTENDED
        eventSources: [
            {
                url: '/getPersonalShiftEvents', // use the `url` property
                color: 'green',    // an option!
                textColor: 'black'  // an option!
            },
            {
                url: '/getPossibleSiftsEvents', // use the `url` property
                color: 'yellow',    // an option!
                textColor: 'black'  // an option!
            }],
        eventClick: function(calEvent, jsEvent, view) {

            // change the border color just for fun
            $(this).css('border-color', 'red');

        }
    });



    $.get('/getNextShiftForEmp', {}, function(req, res, data){
        document.getElementById("nextShiftInfo").innerHTML = "Din neste vakt: " +data.responseJSON[0].ndate + "\nSted: " + data.responseJSON[0].department_name;
    });


    function getA() {
        return "something";
    }
});