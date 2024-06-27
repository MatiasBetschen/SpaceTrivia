<script>
    import {state,result,time,penaltycount,error} from './store.js'
    import Counter from './Counter.svelte';
    import { onMount } from 'svelte';   
    let penaly=0
    let pcount=0

    let currentquestions=[]
    let selectedQuestion=["none"]
    let questions=[
        //Planets -10
        ["https://images-assets.nasa.gov/image/GSFC_20171208_Archive_e001982/GSFC_20171208_Archive_e001982~orig.jpg?w=1536&h=864&fit=clip&crop=faces%2Cfocalpoint",
        "Moon","Planets",false,"NASA"],
        ["https://science.nasa.gov/wp-content/uploads/2016/05/venus2-jpg.webp?w=4096&format=png&crop=1",
        "Venus","Planets",false,"NASA"],
        ["https://science.nasa.gov/wp-content/uploads/2023/04/hubble-mars-litho-image-jpg.webp?w=4096&format=png&crop=1",
        "Mars","Planets",false,"NASA"],
        ["data:image/jpeg;base64,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",
        "Mercury","Planets",false,"NASA"],
        ["https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fblogs.nasa.gov%2Fdscovr%2Fwp-content%2Fuploads%2Fsites%2F244%2F2015%2F02%2Fearth-fulldisc.jpg&f=1&nofb=1&ipt=ee44b16213b62ff1adb83421834cf1b221478d2146cea6a9b4c90d9cf0393ea2&ipo=images",
        "Earth","Planets",false,"NASA"], 
        ["https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fnasa3d.arc.nasa.gov%2Fshared_assets%2Fmodels%2Fjupiter-model%2Fimage1.jpg&f=1&nofb=1&ipt=3a98ad03e408e14e7bb7cdbb9217fe8b1efd3c5926bc4e8c1bae89faa3f2f828&ipo=images",
        "Jupiter","Planets",false,"NASA"], 
        ["https://nssdc.gsfc.nasa.gov/planetary/image/saturn.jpg",
        "Saturn","Planets",false,"NASA"], 
        ["https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fsolarsystem.nasa.gov%2Fsystem%2Fdownloadable_items%2F786_PIA18182.jpg&f=1&nofb=1&ipt=6cdc4f4be9777a51fe43e4d7d133c3bd1a35ce540f5c5017c02dd8ebf2bc2622&ipo=images",
        "Uranus","Planets",false,"NASA"],
        ["https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fsolarsystem.nasa.gov%2Fsystem%2Fresources%2Fdetail_files%2F611_PIA01492.jpg&f=1&nofb=1&ipt=18754b0334945907a37001125f00007fda3c2914ecc2ed38b37986eb4479b36c&ipo=images",
        "Neptune","Planets",false,"NASA"],
        ["https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fblogs.nasa.gov%2Fpluto%2Fwp-content%2Fuploads%2Fsites%2F253%2F2015%2F10%2Fpluto-heart.png&f=1&nofb=1&ipt=a1af5724c26d1e03c28c250e3eb2cc1038e71a690cc601942e778d061f38846b&ipo=images",
        "Pluto","Planets",false,"NASA"],

        //Rockets -10
        ["https://www.spacex.com/static/images/falcon-9/F9_8.jpg",
        "Falcon 9","Rockets",false,"SpaceX"],
        ["https://www.spacex.com/static/images/falcon-heavy/FH_9.jpg",
        "Falcon Heavy","Rockets",false,"SpaceX"],
        ["https://www.spacex.com/vehicles/starship/assets/images/Starhip_website-crop20230126_dji_0199_01.jpg",
        "Starship","Rockets",false,"SpaceX"],
        ["https://www.spacex.com/static/images/dragon/parachute.webp",
        "Dragon","Rockets",false,"SpaceX"],
        ['https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Frayotek.com%2Fwpnews%2Fwp-content%2Fuploads%2F2014%2F12%2FOrion-Lift-Off.jpg&f=1&nofb=1&ipt=d08af698da51af91c8180f6d65cb5720819068f7c777ceb48c0d6940a5ac3b10&ipo=images',
        "Delta 4 Heavy","Rockets",false,"NASA"],
        ['https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.nasaspaceflight.com%2Fwp-content%2Fuploads%2F2023%2F11%2FTenacity1-1170x878.png&f=1&nofb=1&ipt=83a6292945f77555a4c9ea21fa25fc9d10a0841e4791ec4764d7f5c656f5f236&ipo=images',
        "Dream chaser","Rockets",false,"Nasaspaceflight"],
        ['https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.riqmSUgWX6xAze7qFG1PswHaJc%26pid%3DApi&f=1&ipt=f2b7209e5cbee871e6d227b531e073971af9f5a853476cd1c6d0fe8741e3327f&ipo=images',
        "Saturn 5","Rockets",false,"NASA"],
        ['https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.uiGA00q9hx6jwa1BVP7R9QHaKc%26pid%3DApi&f=1&ipt=2a15b9ca34c23672e0dcd06ac1314798976bf3a465a91b4d8a7382018799d42b&ipo=images',
        "Ariane 5","Rockets",false,"ESA"],
        ['https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.jDZ-H4GjD_PpzjETcM19TgHaEK%26pid%3DApi&f=1&ipt=9f6a82b55ad79b946191a04b963002e823ca2f17f7a9418e779df88c9ca5eac4&ipo=images',
        "Ariane 6","Rockets",false,"Ariane Group"],
        ['https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.ijlLhR4zwDr3gg3gah80GgHaF7%26pid%3DApi&f=1&ipt=00bb9f78094b95bccf05612cd892779c94ab699bc3a2ef9ca9d4d5efb03c825f&ipo=images',
        "Space Shuttle","Rockets",false,"ESA"],

        // Astronauts -10
        ["https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.k0XklZL8S7VcGHe36JuPkAHaHi%26pid%3DApi&f=1&ipt=fb22b3b0093f1dc12579c8217ae5f0dec13ff4f5c4fabb8c7d5550b7a5ac37a8&ipo=images",
        "Claude Nicollier","Astronauts",false,"NASA"],
        ["https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.s-EYonDtiWC87S-r55rRNAHaLH%26pid%3DApi&f=1&ipt=51f8dab10592643e7eb936f7922b2c95c338c6456dcaf24caa9a66fe6a19d93e&ipo=images",
        "Thomas Pesquet","Astronauts",false,"starcity-tours"],
        ["https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.EZgTVtFaKvxrP8HJ-LClKQHaJQ%26pid%3DApi&f=1&ipt=cde30c18b6cd294483ec9a674c26dda71cd2063af4595ffff731b881cd32137b&ipo=images",
        "Samantha Cristoferetti","Astronauts",false,"NASA"],
        ["https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.pvU_HGLLPkuT_j6C7Bx5PwHaJW%26pid%3DApi&f=1&ipt=05ebaa294306fc98e7450895706f102352a121e2ec937ed910584b94aace6a79&ipo=images",
        "Urlich Walter","Astronauts",false,"ESA"],
        ["https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.Jlqef2df2Tb-R2YG3sLRwgHaJb%26pid%3DApi&f=1&ipt=4594496f0124969edf0f9bee774413b5ba71d23ab9d0572b5867c1153b59d58a&ipo=images",
        "Niel Armstrong","Astronauts",false,"NASA"],
        ["https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.drkc1k3mOz_bNjj0BAv3FwHaIa%26pid%3DApi&f=1&ipt=90859277bb342e6108354f350b8e43c8cb9d6569d676f1aa85e83e67cc42cb31&ipo=imagess",
        "Sally Ride","Astronauts",false,"NASA"],
        ["https://www.esa.int/var/esa/storage/images/esa_multimedia/images/2021/02/esa_astronaut_matthias_maurer7/23168622-1-eng-GB/ESA_astronaut_Matthias_Maurer_pillars.jpg",
        "Matthias Mauer","Astronauts",false,"ESA"],
        ["https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.esa.int%2Fvar%2Fesa%2Fstorage%2Fimages%2Fesa_multimedia%2Fimages%2F2022%2F11%2Fesa_astronaut_class_of_2022_marco_sieber%2F24604164-5-eng-GB%2FESA_Astronaut_Class_of_2022_Marco_Sieber_pillars.jpg&f=1&nofb=1&ipt=326c19c2a3821c00a5ed96417c99e11bab5ed1ac3153164dad59300cf75c20f8&ipo=images",
        "Marco Sieber","Astronauts",false,"ESA"],
        ["https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.d2bM112CENHePdHhNmzkBAHaEo%26pid%3DApi&f=1&ipt=fae9ef0ea8cc1170edf6a9fd837a8232513795efe24e25042bc13b8a809aa138&ipo=images",
        "Yuri Gagarin","Astronauts",false,"topwar.ru"],
        ["https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.explicit.bing.net%2Fth%3Fid%3DOIP.UrjUfq4qluVZDL1BdYUN_QHaHO%26pid%3DApi&f=1&ipt=d9da95450d810b953a71b10618b580c4dbd0a6aecb56011a2c0d477ec4b85bb6&ipo=images",
        "Chris Hadfield","Astronauts",false,"NASA"],

        // Launch site -4
        ["https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.mos.cms.futurecdn.net%2FVKA2XKU2B73ak27PmEaGVo.jpg&f=1&nofb=1&ipt=8871105bb33957bdb4571fa16d8ee5db06b9dffe96dd7ee3812d76867716c043&ipo=images",
        "Cape Canavral","Site",false,"NASA"],
        ["https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.rocketlabusa.com%2Fassets%2FUploads%2F_resampled%2FScaleHeightWyIxMDUwIl0%2FPadB-Aerial-Low-019.jpg&f=1&nofb=1&ipt=df4b734a72b8ffd8bcb70f23215e16cad8a8c4c869ab1c02c943e4794f297c72&ipo=images",
        "Māhia Peninsula","Site",false,"Rocket Lab"],
        ["https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.wfY_5trAAjF2P6FcE-jScAHaEK%26pid%3DApi&f=1&ipt=9dd5c688cb27e2d26eae5c3a1b313e1787e18d7b4872adf73543287eb822e5f1&ipo=images",
        "Guiana Space center","Site",false,"ESA"],
        ["https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.9VfadX3ymTS4zp7OPOthywHaEm%26pid%3DApi&f=1&ipt=4eca0624a4be11cc6f295f1db73991afba407702f894e3486b2b13f5927934ae&ipo=images",
        "Starbase","Site",false,"SpaceX"],

        //Orbital dynamics -6
        ["prograde.png",
        "Prograde","Orbital",false,"t-neumann"],
        ["retrograde.png",
        "Retrograde","Orbital",false,"t-neumann"],
        ["normal.png",
        "Normal","Orbital",false,"t-neumann"],
        ["antinormal.png",
        "Anti-normal","Orbital",false,"t-neumann"],
        ["radialin.png",
        "Radial (in)","Orbital",false,"t-neumann"],
        ["antiradial.png",
        "Radial (out)","Orbital",false,"t-neumann"],
        
        
        
    ]

    function setquestions(){
        //pick a random question for which the state (4th entry) is not false
        let availableQuestions = questions.filter(q => !q[3]);
        //if there are no more questions, call end()
        if (availableQuestions.length === 0) {end(); return} 

        let randomIndex = Math.floor(Math.random() * availableQuestions.length);
        selectedQuestion = availableQuestions[randomIndex];  
        //set the question (index) to a random position (1-4) in currentquestions
        selectedQuestion[3] = true;
        //add 3 other questions of the same category to the remaing slots in currentquestions
        let category = selectedQuestion[2];
        let sameCategoryQuestions = questions.filter(q => q[2] === category && q !== selectedQuestion );
        
        // Shuffle the same category questions to ensure random selection
        sameCategoryQuestions.sort(() => Math.random() - 0.5);

        // Initialize currentquestions array with null values
        currentquestions = [null, null, null, null];

        // Set the selected question to a random position (1-4) in currentquestions
        let randomPosition = Math.floor(Math.random() * 4);
        currentquestions[randomPosition] = [selectedQuestion,true];

        // Fill remaining slots with other questions of the same category
        let index = 0;
        for (let i = 0; i < 4; i++) {
            if (currentquestions[i] === null && index < sameCategoryQuestions.length) {
                currentquestions[i] = [sameCategoryQuestions[index],false];
                index++;
            }
        }

        if(currentquestions.length<4){
            console.log("ran out of questions for " +{category})
        }
    }
    onMount(() => {
        setquestions();
        $error=[]
    });


    function isflase(){
        // the selected input was false
        // set the question to completed and add penalty
        penaly+=10
        pcount+=1
        $error.push(selectedQuestion)
        setquestions()
    }
    function istrue(){
        // the seleted input was true
        // set the question to completed
        setquestions()
    }
    function end(){
        // the last question was answered show end screen and pass result
        $result+=penaly+$time
        $time=0
        $state=2
        $penaltycount=pcount
    }
   </script>
     
     <main class="wrapper">
    <div class="header">
        <div class="button" on:click={()=>{$state=0}}>Back</div> 
        <div class= "counter"> <Counter/></div> 
    </div>
    <div class="prompt">
        <div>Select:</div>
        <div class="bigtext">{selectedQuestion[1]}</div>
    </div>

    <div class="grid">
        {#each currentquestions as answer}
        <div class="container">
        <img src={answer[0][0]} on:click={answer[1]?istrue:isflase} class="image">
        <div class="src">
            {answer[0][4]}
        </div>
        </div>
        {/each}
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
         .grid {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            grid-template-rows: repeat(2, 1fr);
            gap: 5px; /* Adjust the gap between cards as needed */
            margin: 0.5rem;
            align-self: center;
        }
        .image{
            border: 1px solid #ccc;
            text-align: center;
            border-radius: 8px;
            object-fit: cover;
            width: 10rem;
            height: 10rem;
        }
        .counter{
            font-family: monospace;
            font-size: 20pt;
            background-color: white;
            color: coral;
            padding: 0.5rem;
            border-radius: 8px;
            border: 0px white;
            margin: 1rem;
        }
        .header {
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin: 0%;
        }   
       .prompt{
            background-color: white;
            color:#242424;
            margin: 0rem 1rem;
            padding: 0.5rem;
            border-radius: 8px;
       }
       .bigtext{
            font-size: 30pt;
       }
       .button {
            padding: 0.5rem;
            font-size: 20pt;
        }
        .wrapper{
            display: flex;
            min-height:100vh;
            align-items: stretch;
            justify-content:flex-start ;
            flex-direction: column;
        }
     </style>
     