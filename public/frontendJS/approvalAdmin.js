function leaveFunction(){
    document.getElementById('leaveApproval').style.display = "block";
    document.getElementById('switchApproval').style.display = "none";
    document.getElementById('overtimeApproval').style.display = "none";
}
function overtimeFunction(){
    document.getElementById('leaveApproval').style.display = "none";
    document.getElementById('switchApproval').style.display = "none";
    document.getElementById('overtimeApproval').style.display = "block";
}
function switchFunction(){
    document.getElementById('leaveApproval').style.display = "none";
    document.getElementById('switchApproval').style.display = "block";
    document.getElementById('overtimeApproval').style.display = "none";
}
var myList = [];
$.get('/getAbsenceView', {}, function(req, res, data){
    console.log(data);
    console.log(data.responseJSON[0]);
    myList = data.responseJSON;
    buildHtmlTable('#leaveTable');
});
$.get('/getOvertimeView',{},function (req,res,data) {
    myList = data.responseJSON;
    buildHtmlTable('#overtimeTable');
});
$.get('/getRequestView',{},function (req,res,data) {
    myList = data.responseJSON;
    buildHtmlTable('#switchTable');
});
function buildHtmlTable(selector,list) {
    list = myList;
    var columns = addAllColumnHeaders(list, selector);
    var tbody = $('<tbody/>');
    for (var i = 0; i < myList.length; i++) {
        var row$ = $('<tr id=' + i + '/>');
        var check$ = $('<div class="checkbox radio-margin"><label><input type="checkbox" id='+ i +' value=""><span class="cr"><i class="cr-icon glyphicon glyphicon-ok"></i></span></label></div>');
        for (var colIndex = 0; colIndex < columns.length; colIndex++) {
            var cellValue = myList[i][columns[colIndex]];
            if (cellValue == null) cellValue = "";
            row$.append($('<td/>').html(cellValue));
        }
        row$.append($('<td/>').html(check$));
        // $(row$).setAttribute('id',"surprise maddafakka");
        $(selector).append(row$);
        $(tbody).append(row$);
    }
    $(selector).append(tbody);
}
function addAllColumnHeaders(myList, selector) {
    var columnSet = [];
    var headerThead$ = $('<thead/>');
    var headerTr$ = $('<tr/>');
    for (var i = 0; i < myList.length+1; i++) {
        var rowHash = myList[i];
        for (var key in rowHash) {
            if ($.inArray(key, columnSet) == -1) {
                columnSet.push(key);
                headerTr$.append($('<th/>').html(key));
            }
        }

    }
    headerTr$.append($('<th/>'));
    $(selector).append(headerThead$);
    $(headerThead$).append(headerTr$);
    return columnSet;
}


//When pressing 'Lagre'-button any row that is checked will get checked_by_admin=1
$(document).on('click','#Lagre',function (e) {
    e.preventDefault();
    var data = $("#leaveTable").find("input:checkbox:checked").map(function(){
        return $(this).closest("tr").find('td:eq(0)').text();
    }).toArray(); // <----
    var data2 = $("#overtimeTable").find("input:checkbox:checked").map(function(){
        return $(this).closest("tr").find('td:eq(0)').text();
    }).toArray(); // <----
    var data3 = $("#switchTable").find("input:checkbox:checked").map(function(){
        return $(this).closest("tr").find('td:eq(0)').text();
    }).toArray(); // <----
  //  console.log(data);
    for(i=0; i<data.length; i++){
        console.log(data[i]);
        $.ajax({
            url: '/updateAbsence2',
            type:'POST',
            data:{'absence_id':data[i],'checked_by_admin':1},
            success:function (data) {
                alert("success!");
            }
        });
    }
    for(i=0; i<data2.length; i++){
        console.log(data2[i]);
        $.ajax({
            url: '/updateOvertime2',
            type:'POST',
            data:{'overtime_id':data2[i],'checked_by_admin':1},
            success:function (data) {
                alert("success!");
            }
        });
    }
    for(i=0; i<data3.length; i++){
        console.log(data3[i]);
        $.ajax({
            url: '/updateRequest2',
            type:'POST',
            data:{'request_id':data3[i],'checked_by_admin':1},
            success:function (data) {
                alert("success!");
            }
        });
    }

});
