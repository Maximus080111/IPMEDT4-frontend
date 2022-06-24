import $ from "./jquery";
import {Component, useCallback, useContext} from 'react';
import {NavContext} from '@ionic/react';

export function controls(){
    var apiKey = localStorage.getItem("apiKey");
    var session = localStorage.getItem("session");
    var endpoint = "https://ipmedt4laravel.gerrietech.com/api/";
    console.log(apiKey);
    if(apiKey == null || session == null){
        window.location.replace("/login");
    }
    
    $.get(endpoint + "get/" + session, function(data){
        if(data == "true"){
            $.get(endpoint + session + "?api_token="+apiKey, function(data){
                document.getElementById("js--sessionID").innerHTML = "Session code: "+data['name'];
                document.getElementById("js--scenario").innerHTML = "Scenario: "+data['scenario'];
                if(data['scenario'] == null){
                    document.getElementById("js--scenario").innerHTML = 'No scenario active!';
                }
            })     
        }
    });

    var scenarios = document.getElementsByClassName("js--changeScenario")
    for(var i = 0; i < scenarios.length; i++){
        scenarios[i].addEventListener("click", function(data){
            var postRequest = $.post(endpoint + "/update?api_token="+apiKey, {'secretToken': session, 'scenario': data.target.dataset.scenario});
            postRequest.fail(function(xhr, textStatus, errorThrown){console.log(xhr.responseText)})
        })
    }
    
    setInterval(function(){ 
        $.get(endpoint + "get/" + session, function(data){
            if(data == "true"){
                $.get(endpoint + session + "?api_token="+apiKey, function(data){
                    document.getElementById("js--sessionID").innerHTML = "Session code: "+data['name'];
                    document.getElementById("js--scenario").innerHTML = "Scenario: "+data['scenario'];
                    var scenarioCards = document.getElementsByClassName("js--scenarioCard");
                    var scenarioSelected = document.getElementById("js--scenarioStarted");
                    var scenarioKill = document.getElementById("js--scenarioKill");
                    if(data['scenario'] == "Kill"){
                        for(var i = 0; i < scenarioCards.length; i++){
                            scenarioCards[i].style.display = "none";
                            scenarioSelected.style.display = "none";
                            scenarioKill.style.display = "";
                        }
                    } else if(data['scenario'] == "Inactive"){
                        for(var i = 0; i < scenarioCards.length; i++){
                            scenarioCards[i].style.display = "";
                            scenarioSelected.style.display = "none";
                            scenarioKill.style.display = "none";
                        }
                    } else{
                        for(var i = 0; i < scenarioCards.length; i++){
                            scenarioCards[i].style.display = "none";
                            scenarioSelected.style.display = "";
                            scenarioSelected.style.display = "none";
                        }
                    }   
                })     
            }
        });
    }, 500);
}