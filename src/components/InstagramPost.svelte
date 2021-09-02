<script>
  export let link;
  export let image;
  export let caption;
</script>

<a class="w-full lg:w-1/4 p-2 hover:brightness-90 rounded-sm" href={link} target="_blank" rel="noopener">
  <img src={image} class="cover h-full w-full" alt={caption}>
</a>