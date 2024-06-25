<!-- src/Counter.svelte -->
<script>
    import { startCounter, time } from './store';
    import { onDestroy } from 'svelte';

    let interval;
    
    // Subscribe to the store
    $: $startCounter, $startCounter ? start() : stop();

    function start() {
        if (!interval) {
            interval = setInterval(() => {
                $time += 1;
            }, 1000);
        }
    }

    function stop() {
        clearInterval(interval);
        interval = null;
    }

    onDestroy(() => {
        stop();
    });

    function formatTime(count) {
        const minutes = Math.floor(count / 60);
        const seconds = count % 60;
        return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    }
</script>

<div >{formatTime($time)}</div>
    
