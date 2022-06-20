$(document).ready(function () {
     $("#open-side").click(function(){
          $(".side-nav").animate({left:"0px"},1000)
     })
     $("#close-side").click(function(){
          $(".side-nav").animate({left:"-100%"},1000)
     });
     
     let btn_plus=$(".plus");
     let count_num=$(".count-num");
     let refresh=$(".refresh");
     let option=$(".button-option");
     let box_end=$(".trans");
     
     for(let x =0;x<btn_plus.length;x++)
     {
         
          btn_plus[x].addEventListener("click",function(){

            let numAdd =  document.getElementsByClassName("count-num")[x].getAttribute("count-num");
             let count_target=  document.getElementsByClassName("count-num")[x].getAttribute("count-target");
           
             if(numAdd==--count_target)
                    {
                         count_num[x].innerHTML=++numAdd;;
                         document.getElementsByClassName("count-num")[x].setAttribute("count-num",numAdd);
                         document.getElementsByClassName("button-option")[x].style.visibility="hidden";
                         box_end[x].style.top="0px";
                         }else{
                              
                              count_num[x].innerHTML=++numAdd;
                         document.getElementsByClassName("count-num")[x].setAttribute("count-num",numAdd);
                    }
          })
          refresh[x].addEventListener("click",function(){
               count_num[x].innerHTML=0;
               countAll=0;
          })
     }
});

