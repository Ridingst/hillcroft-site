<script>
  import { onMount } from 'svelte';

  import InstagramPost from './InstagramPost.svelte'
  let posts = [];
  export let baseUrl;
  
  onMount(async () => {
    const res = await fetch(baseUrl + '/api/instagram/feed')
    posts = await res.json()
  })
</script>

<div class="flex flex-wrap w-full bg-gray-800">
  {#each posts as p}
    <InstagramPost image={p.media_url} link={p.permalink} caption={p.caption} />
  {:else}
		<!-- this block renders when photos.length === 0 -->
		<p>loading...</p>
  {/each}
</div>