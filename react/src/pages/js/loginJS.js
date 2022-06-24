import $ from "./jquery";

export function login(){
    var input = "";
    var endpoint = "https://ipmedt4laravel.gerrietech.com/api/";

    var textArea = document.getElementById("js--errorText");
    textArea.style.display = "none";

    var sessionInput = document.getElementById("js--sessionInput");
    sessionInput.addEventListener("input",function(e){
        input = e.target.value;
        textArea.style.display = "none";
    });

    sessionInput.addEventListener("keydown", function(e){
        if(e.key == "Enter"){
            if(input == ""){
                input = "d";
            }
            $.get(endpoint + "get/" + input, function(data){
                console.log(data);
                if(data == "false"){
                    textArea.innerHTML = "Code entered incorrectly!";
                    textArea.style.display = "";
                } else{
                    var postRequest = $.post(endpoint, {'secretToken': input});
                    postRequest.done(function(data){
                        console.log(data);
                        localStorage.setItem("apiKey", data["Token"]);
                        localStorage.setItem("session", input);
                        console.log("test");
                        window.location.replace("/controls");
                    })   
                    postRequest.fail(function(data){
                        console.log(data['responseText']);
                    })      
                }
            });
        }
    })

    var submit = document.getElementById("js--submitButton");
    submit.addEventListener("click",function(){
        if(input == ""){
            input = "d";
        }
        $.get(endpoint + "get/" + input, function(data){
            console.log(data);
            if(data == "false"){
                textArea.innerHTML = "Code entered incorrectly!";
                textArea.style.display = "";
            } else{
                var postRequest = $.post(endpoint, {'secretToken': input});
                postRequest.done(function(data){
                    console.log(data);
                    localStorage.setItem("apiKey", data["Token"]);
                    localStorage.setItem("session", input);
                    console.log("test");
                    window.location.replace("/controls");
                })   
                postRequest.fail(function(data){
                    console.log(data['responseText']);
                })      
            }
        });
    });
}