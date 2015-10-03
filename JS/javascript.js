/**
 * Created by Maxime on 2015-10-01.
 */
function createPostIt(id,tache){
    var html = ""
    html += "<div id= '" + id + "'" + ">" + tache + "</div>";
    $("#ulList").append(
            $('<li>').append(html));
};



$(document).ready (function(){
    var i =1;
    var baseUrl = "http://localhost:5000";

    var boutonAdd = $("#boutonAdd");


    boutonAdd.click(function(){


        if($("#note").val() != ''){
            var texte = $("#note").val();
            var tache = {"task":texte};
        }

        $.ajax({
            url: baseUrl + "/tasks/"+i,
            type: "POST",
            data: JSON.stringify(tache),
            contentType:"application/json"
        })
            .done(function(data){
                data.tasks.forEach(function(task){
                    createPostIt(task.id,task.task);
                })
            })
            .fail(function(jqXHR, textStatus){
                console.log(textStatus);
                $('#errorBox').show();
                $('#errorBox')
            });
        i +=1;
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
            .fail(function(jqXHR, textStatus){
                console.log(textStatus);
                $('#errorBox').text("Something wrong happened.");
            });
    });
});