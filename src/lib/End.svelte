<script>
  import {state,result,penaltycount,error} from './store.js'

  function formatTime(count) {
        const minutes = Math.floor(count / 60);
        const seconds = count % 60;
        return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  }

  function message(time){
    let numquestions=40
    time=time/numquestions
    if(time<2){return "That was speedy!"}
    else if(time<4){return "Well done."}
    else if(time<8){return "Not bad :)"}
    else {return "My grandpa was faster..."}
  }
 </script>
   
   <main>
    
   <div class="wrapper">
     <h1>{message($result)}</h1>
     <div class="bigtext">{formatTime($result)}</div>
     <div class="errortext">{$penaltycount}</div>
      <div>
        {#each $error as error}
        <div class="card">
          <div class="text">{error[1]}</div>
          <div class="container">
            <img src={error[0]} class="image">
            <div class="src">
                {error[4]}
            </div>
            </div>
        </div>
        
        {/each}


      </div>

     <div on:click={()=>$state=0} class="button">
       Exit
     </div>
    </div>
    
   
     
   </main>
   
   <style>
     .container{
            position: relative;
            display: inherit;
        }
        .src{
            font-size: 4pt;
            border-radius: 4px;
            position: absolute;
            bottom: 4px;
            right: 4px;
            color: white;
            background-color: rgba(0, 0, 0, 0.4); /* optional for better text visibility */
            padding: 4px;
        }
    .text{
      padding-right: 8px;
    }
    .card{
      display: flex;
      flex-direction: row;
      background-color: red;
      border-radius: 8px;
      align-items: center;
      justify-content: space-between;
      padding: 0.5rem;
      margin-bottom: 0.5rem;
    }
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
     .image{
            border: 1px solid #ccc;
            text-align: center;
            border-radius: 8px;
            object-fit: cover;
            width: 10rem;
            height: 10rem;
        }
   </style>
   
