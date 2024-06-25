<script>
    import {state} from './store.js'
   </script>
     
     <main>
    <div class="header">
    <div class="button">Back</div> 
    <div class= "counter"> 0:00</div> 
    <div></div>  
    </div>

    <div class="prompt">
        <div>Select:</div>
        <div class="bigtext">Starship</div>
    </div>

    <div class="grid">
        <div class="imagecard">image1</div>
        <div class="imagecard">image2</div>
        <div class="imagecard">image3</div>
        <div class="imagecard">image4</div>
    </div>
     
       
   


    <div on:click={()=>$state=2} class="">
        end
    </div>
     
      
     
       
     </main>
     
     <style>
         .grid {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            grid-template-rows: repeat(2, 1fr);
            gap: 10px; /* Adjust the gap between cards as needed */
            margin: 1rem;
        }
        .imagecard {
            border: 1px solid #ccc;
            padding: 20px;
            text-align: center;
            font-size: 1.2em;
            border-radius: 8px;
           
        }
        .counter{
            font-family: monospace;
            font-size: 20pt;
            background-color: white;
            color: coral;
            height: fit-content;
            padding: 0.6em 1.2em;
            border-radius: 8px;
        }
        .header {
            display: flex;
            flex-direction: row;
            height: 100px;
            background-color: aqua;
            margin-bottom: 2rem;
            align-items: center;
            justify-content: space-between;
            padding: 0 1rem;
        }   
       .prompt{
            background-color: white;
            color:#242424;
            margin: 1rem;
            padding: 1rem;
            border-radius: 8px;
       }
       .bigtext{
        font-size: 40pt;
       }
      
       .button {
        margin-left: 1rem;
        }
        .counter {
            margin-right: 1rem;
        }
     </style>
     