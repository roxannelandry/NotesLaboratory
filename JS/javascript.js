/**
 * Created by Maxime on 2015-10-01.
 */
function createPostIt(id,tache){
    var html = "";


};
$(document).ready (function(){

var baseUrl = "http://localhost:5000";

var boutonAdd = $("#boutonAdd");

var maTache = {"task":"je suis ma premiere tache"};

boutonAdd.click(function(){
    $.ajax({
        url: baseUrl + "/tasks/2",
        type: "POST",
        data: JSON.stringify(maTache),
        contentType:"application/json"
    })
        .done(function(data){
            data.tasks.forEach(function(task){
                createPostIt(1,1);
            })
        })
        .fail(function(){
            alert("cacapost");
        });
});

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