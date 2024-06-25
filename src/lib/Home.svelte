<script>
 import Counter from './Counter.svelte';
  import {state,time,result} from './store.js'
  import { startCounter } from './store';

  function start(){
    $state=1; 
    startCounter.set(true)
    $time=0
    $result=0
  }
   
</script>
  
  <main class="wrapper">
   
  
    <div class="title">Space Trivia</div>

    <div on:click={start} class="button">
      Start
    </div>
  
   
  
    
  </main>
  
  <style>
    .wrapper{
      display: flex;
      flex-direction: column;
      min-height:100vh;
      align-items: center;
      justify-content: center;
    }
    .title {
      font-size: 60pt;
    }
  </style>
  