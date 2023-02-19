let min_count = 0 ;

let hr_count = 0 ;

let sec_count = 0 ;

let count = 1; 

let mill_stop;

let sec_stop;

let start_stop;

let state = "none";

document.querySelector('.btn_pause').style.display = "none"

document.querySelector('.btn_resume').style.display = "none"

document.querySelector('.btn_reset').style.display = "none"


function call_mill(){
    
      mill_stop = setInterval(() => {
      let mill = new Date();
      let get_mill = mill.getMilliseconds();
      document.querySelector(".mill-view").innerText = get_mill;

    },); 
  
}


function call_sec(){

    sec_stop = setInterval(function() {
    if (count >= 10){
      document.querySelector(".sec-view").innerText = count;

    }else{
      document.querySelector(".sec-view").innerText = "0"+count;
    }
    count++;      
    if (count == 60){
      count = 0
    }},1000); 
}

function call_start(){


    start_stop = setInterval(() => {
      
      let get_min = count;
      if (get_min == 0){
        min_count += 1
      }
      if (min_count == 60){
        min_count = 0
        hr_count +=1
      }
      if (min_count >= 10){
        document.querySelector(".min-view").innerText = min_count;

      }else{
        document.querySelector(".min-view").innerText = "0"+min_count;
      }
      if (hr_count >= 10){
        document.querySelector(".hr-view").innerText = hr_count;

      }else{
        document.querySelector(".hr-view").innerText = "0"+hr_count;
      }
    }, 1000);


};

let start_click = document.querySelector(".btn_start");

start_click.addEventListener("click",start_clicked);

function start_clicked(){
  if(state == "none"){
    call_mill();
    call_start();
    call_sec();
  };
  state = "running";
  document.querySelector('.btn_start').style.display = "none"
  document.querySelector('.btn_pause').style.display = "block"
  document.querySelector('.btn_reset').style.display = "block"

};




let pause_click = document.querySelector(".btn_pause");

pause_click.addEventListener('click',pause_clicked);




function pause_clicked(){
  if (state == "running"){
    clearInterval(mill_stop);
    clearInterval(sec_stop);
    clearInterval(start_stop);
  };
  document.querySelector('.btn_pause').style.display = "none"
  document.querySelector('.btn_resume').style.display = "block"

};

let resume_click = document.querySelector(".btn_resume");

resume_click.addEventListener('click', resume_clicked);

  function resume_clicked(){
    call_mill();
    call_start();
    call_sec();
    document.querySelector('.btn_resume').style.display = "none"
    document.querySelector('.btn_pause').style.display = "block"
}


let reset_click = document.querySelector(".btn_reset");

reset_click.addEventListener('click', reset_clicked);

function reset_clicked(){
  location.reload()
}