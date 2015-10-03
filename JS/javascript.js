/**
 * Created by Maxime on 2015-10-01.
 */
function createPostIt(id,tache){
    var html = ""
    html += "<div class='noteDeLaListe' id= '" + id + "'" + ">" + tache + "</div>";
    $("#listeID").append(html);
};


$(document).ready (function(){
    var i =1;
    var baseUrl = "http://localhost:5000";

    var boutonAdd = $("#boutonAdd");

    $("#listeID").on('click', "div", function () {
        window.clicked = this.id;
    });



    boutonAdd.click(function(){
        var texte = $("#note").val();
        var tache = {"task":texte};
        $.ajax({
            url: baseUrl + "/tasks/"+i,
            type: "POST",
            data: JSON.stringify(tache),
            contentType:"application/json"
        })
            .done(function(data){
                $("#note").val("");
                $("#listeID").empty();
                data.tasks.forEach(function(task){
                    createPostIt(task.id,task.task);
                })
            })
            .fail(function(jqXHR, textStatus){
                console.log(textStatus);
                $('#errorBox').show();
                $('#errorBox');
            });
        i +=1;
    });

    $("#boutonModify").click(function(){
        var texte = $("#note").val();
        var tache = {"task":texte};
        $.ajax({
            url: baseUrl + "/tasks/"+ clicked,
            type: "put",
            data: JSON.stringify(tache),
            contentType:"application/json"
        })
            .done(function(data){
                $("#listeID").empty();
                data.tasks.forEach(function(task){
                    createPostIt(task.id,task.task);
                })
            })
            .fail(function(jqXHR, textStatus){
                console.log(textStatus);
                $('#errorBox').text("Something wrong happened.");
            });
    });

    $("#boutonDelete").click(function(){
        $.ajax({
            url: baseUrl + "/tasks/" + clicked,
            type: "DELETE",
            contentType:"application/json"
        })
            .done(function(data){
                $("#listeID").empty();
                data.tasks.forEach(function(task){
                    createPostIt(task.id,task.task);
                })
            })
            .fail(function(jqXHR, textStatus){
                console.log(textStatus);
                $('#errorBox').text("Something wrong happened.");
            });
    })

    $("#listeID").on('click', '.noteDeLaListe', function(){
        $(".noteDeLaListe").css("background-color","white");
        $(this).css("background-color","yellow");
    });
});