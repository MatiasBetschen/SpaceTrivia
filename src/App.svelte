<script>
  import Home from './lib/Home.svelte'
  import Game from './lib/Game.svelte'
  import End from './lib/End.svelte'
  import {state} from './lib/store.js'
  // state 0:home page, 1:playing, 2:end screen

</script>

<main class="main">
  {#if $state==0}
    <Home/>
  {:else if $state==1}
    <Game/>
  {:else}
    <End/>
  {/if}
</main>
<div class="versiontext">v0.5</div>
  <div>Made with 🤍 by Matias</div>
  <div>If images are slow to load, run through game once to preload</div>

<style>
  .versiontext{
    font-family: monospace;
  }
  .main{
    
    min-height:100vh;

  }
</style>
