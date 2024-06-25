<script>
  import {state} from './store.js'
 </script>
   
   <main>
    
   <div class="wrapper">
     <h1>Well done!</h1>
     <div class="bigtext">4:00:42</div>
 
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
   </style>
   
