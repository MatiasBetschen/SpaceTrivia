<script>
  import {state,result,penaltycount} from './store.js'

  function formatTime(count) {
        const minutes = Math.floor(count / 60);
        const seconds = count % 60;
        return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  }

  function message(time){
    if(time<60){return "That was speedy!"}
    else if(time<90){return "Well done."}
    else if(time<120){return "Not bad :)"}
    else {return "My grandpa was faster..."}
  }
 </script>
   
   <main>
    
   <div class="wrapper">
     <h1>{message($result)}</h1>
     <div class="bigtext">{formatTime($result)}</div>
     <div class="errortext">{$penaltycount}</div>
     <div on:click={()=>$state=0} class="button">
       Exit
     </div>
    </div>
    
   
     
   </main>
   
   <style>
     .wrapper{
      display: flex;
      align-items: center;
      flex-direction: column;
     }
     .bigtext {
      font-size: 40pt;
      font-family: monospace;
      color:coral;
      background-color: white;
      padding: 1rem;
      border-radius: 8px;
     }
     .errortext {
      font-size: 20pt;
      color:red;
      background-color: white;
      padding: 1rem;
      border-radius: 8px;
      transform: translate(0, -10%); 
     }
   </style>
   
