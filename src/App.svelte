<script>
  import svelteLogo from './assets/svelte.svg'
  import viteLogo from '/vite.svg'
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
<div class="versiontext">v0.1</div>
  <div>Made with 🤍 by Matias</div>
  <div>Images taken from NASA | </div>

<style>
  .versiontext{
    font-family: monospace;
  }
  .main{
    
    min-height:100vh;

  }
</style>
