/**
 * Created by Maxime on 2015-10-01.
 */
function createPostIt(id,tache){
    var html = "";


};
$(document).ready (function(){

var baseUrl = "http://localhost:5000";
var i = 1;


$("#boutonAdd").click(function(){
var text = $('textarea#note').val();
    if(text != ""){
        var maTache = {"task": text};
    }


$.ajax({
    url: baseUrl + "/tasks/" + i,
    type: "POST",
    data: JSON.stringify(maTache),
    contentType:"application/json"
})
    .done(function(data){
        data.tasks.forEach(function(task){
            createPostIt("#listeID",1);
        })
    })
    .fail(function(){
        alert();
        $('#errorBox').style.display = 'block';
    });
    $('textarea#note').val('');
});
    i++;


$("#boutonModify").click(function(){
    $.ajax({
        url: baseUrl + "/tasks",
        type: "post",
        contentType:"application/json"
    })
        .done(function(data){
            alert()
        })
        .fail(function(){
            alert("caca");
        });
});
});