<script>
  import Button from '../components/Button.svelte';
</script>

<div class="w-full lg:min-h-screen items-center bg-white grid grid-cols-1 lg:grid-cols-3 gap-0">
  <div class="w-full col-span-1 lg:col-span-2 lg:inline-block px-10 z-10">
    <div class="py-6">
      <h2 class="text-6xl lg:text-9xl tracking-widest font-bold leading-snug">Hillcroft<span class="text-yellow-500">.</span></h2>
      <h3 class="text-xl lg:text-4xl tracking-widest font-bold leading-snug">London Lacrosse Club</h3>
    </div>
    <div class="py-6">
      <p class="font-serif tracking-wider lg:tracking-widest leading-widest text-lg italic pt-6 text-gray-900">
          Based in South London, Hillcroft Lacrosse Club boasts three men’s teams, one women’s team and an amazing social scene.
        We welcome players of all abilities, whether you’ve only just picked up a stick, or have played at an international level.
      </p>

      <p class="font-serif tracking-wider lg:tracking-widest leading-widest text-lg italic pt-6 text-gray-900">
          Playing out of Tooting and Mitcham FC in South London, Hillcroft is a great blend of home and international players seeking to play good quality lacrosse in London.
          Alongside our home-grown players, we have members from across Europe, North America and Australia, all looking to keep playing the game in England.
      </p>
    </div>

    <a href="#teams" class="py-6 cursor-pointer">
      <Button />
    </a>
  </div>
  <div class="col-span-1 h-full bg-black z-0">
    <img class="object-cover h-full" src="./images/hillcroft_lacrosse_club_london_stash.jpg">
  </div>
</div>

