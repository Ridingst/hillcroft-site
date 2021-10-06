<script>
  let hidden = true;
</script>


<div class='fixed {hidden ? 'w-0' : 'w-2/3'} lg:w-64 pt-8 lg:pt-0 h-screen top-0 z-50'>
  
  <!-- mobile menu bar -->
  <div class="bg-gray-800 flex justify-between lg:hidden absolute top-0 z-20 w-screen text-yellow-500">
    <!-- logo -->
    <span class="my-auto mx-2"> 
      <img class="object-contain inline " src="/images/hillcroft_lacrosse_club_london_icon.png" alt="Hillcroft Locrosse Club London, icon">
      <a href="/" class="uppercase inline align-middle text-gray-500">Hillcroft</a>
    </span>

    <!-- mobile menu button -->
    <button class="mobile-menu-button p-4 focus:outline-none focus:bg-gray-700" on:click="{() => hidden = !hidden}" aria-label="open mobile menu">
      <svg class="h-5 w-5 {!hidden ? 'hidden' : ''}" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
      </svg>
      <svg class="h-5 w-5 {hidden ? 'hidden' : ''}" viewBox="0 0 20 20" stroke="currentColor">
        <path fill="none" d="M15.898,4.045c-0.271-0.272-0.713-0.272-0.986,0l-4.71,4.711L5.493,4.045c-0.272-0.272-0.714-0.272-0.986,0s-0.272,0.714,0,0.986l4.709,4.711l-4.71,4.711c-0.272,0.271-0.272,0.713,0,0.986c0.136,0.136,0.314,0.203,0.492,0.203c0.179,0,0.357-0.067,0.493-0.203l4.711-4.711l4.71,4.711c0.137,0.136,0.314,0.203,0.494,0.203c0.178,0,0.355-0.067,0.492-0.203c0.273-0.273,0.273-0.715,0-0.986l-4.711-4.711l4.711-4.711C16.172,4.759,16.172,4.317,15.898,4.045z"></path>
      </svg>
    </button>
  </div>

  <!-- sidebar -->
  <aside class="{hidden ? 'hidden' : ''} lg:fixed z-10 lg:block w-64 h-full bg-gray-800 border-yellow-500 border-r">
    <div class="text-gray-700 inset-y-0 left-0 flex flex-col h-full">

      <!-- logo -->
      <div class="w-full bg-gray-700 items-center py-8 hidden lg:inline-block ">
        <a href="/" class="text-white flex space-x-2 px-4 w-full text-xl text-center uppercase">
          <img class="object-contain h-32 w-full my-4" src="/images/hillcroft_lacrosse_club_logo.png" alt="Hillcroft Lacrosse Club London, logo">
        </a>
      </div>

      <!-- nav -->
      <nav class="flex-grow lg:block p-4 lg:pb-0 divide-y divide-gray-700">
        
        <a class="block py-2 mt-2" href="/#intro">
          <div class="w-full text-center hover:text-yellow-500">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 mx-auto my-2" viewBox="0 0 512 512"><path fill="currentColor" d="M448 96v320h32a16 16 0 0 1 16 16v32a16 16 0 0 1-16 16H320a16 16 0 0 1-16-16v-32a16 16 0 0 1 16-16h32V288H160v128h32a16 16 0 0 1 16 16v32a16 16 0 0 1-16 16H32a16 16 0 0 1-16-16v-32a16 16 0 0 1 16-16h32V96H32a16 16 0 0 1-16-16V48a16 16 0 0 1 16-16h160a16 16 0 0 1 16 16v32a16 16 0 0 1-16 16h-32v128h192V96h-32a16 16 0 0 1-16-16V48a16 16 0 0 1 16-16h160a16 16 0 0 1 16 16v32a16 16 0 0 1-16 16z"></path></svg>
            Hillcroft
          </div>
        </a>

        <a class="block py-2 mt-2" href="/#mens">
          <div class="w-full text-center hover:text-yellow-500">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 mx-auto my-2" viewBox="0 0 20 20" fill="currentColor"><path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" /></svg>
            Teams
          </div>
        </a>

        <a class="block py-2 mt-2" href="/#socials">
          <div class="w-full text-center hover:text-yellow-500">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 mx-auto my-2" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M18 5v8a2 2 0 01-2 2h-5l-5 4v-4H4a2 2 0 01-2-2V5a2 2 0 012-2h12a2 2 0 012 2zM7 8H5v2h2V8zm2 0h2v2H9V8zm6 0h-2v2h2V8z" clip-rule="evenodd" /></svg>
            Social
          </div>
        </a>

        <a class="block py-2 mt-2" href="/#contact">
          <div class="w-full text-center hover:text-yellow-500">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 mx-auto my-2" viewBox="0 0 20 20" fill="currentColor"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" /><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" /></svg>
            Contact
          </div>
        </a>

        <a class="block py-2 mt-2" href="https://store.hillcroftlacrosse.com">
          <div class="w-full text-center hover:text-yellow-500">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 mx-auto my-2" viewBox="0 0 20 20" fill="currentColor"><path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" /></svg>
            Store
          </div>
        </a>

      </nav>

      <!-- social -->
      <footer class="align-baseline text-center">
        <a href="https://www.facebook.com/hillcroftlacrosse">
          <svg class="h-8 w-8 mx-auto my-2 inline" viewBox="0 0 20 20" fill="currentColor">
            <path d="M11.344,5.71c0-0.73,0.074-1.122,1.199-1.122h1.502V1.871h-2.404c-2.886,0-3.903,1.36-3.903,3.646v1.765h-1.8V10h1.8v8.128h3.601V10h2.403l0.32-2.718h-2.724L11.344,5.71z"></path>
          </svg>
        </a>
        <a href="https://www.instagram.com/hillcroftlacrosse">
          <svg class="h-8 w-8 mx-auto my-2 inline" viewBox="0 0 20 20" fill="currentColor">
            <path  d="M14.52,2.469H5.482c-1.664,0-3.013,1.349-3.013,3.013v9.038c0,1.662,1.349,3.012,3.013,3.012h9.038c1.662,0,3.012-1.35,3.012-3.012V5.482C17.531,3.818,16.182,2.469,14.52,2.469 M13.012,4.729h2.26v2.259h-2.26V4.729z M10,6.988c1.664,0,3.012,1.349,3.012,3.012c0,1.664-1.348,3.013-3.012,3.013c-1.664,0-3.012-1.349-3.012-3.013C6.988,8.336,8.336,6.988,10,6.988 M16.025,14.52c0,0.831-0.676,1.506-1.506,1.506H5.482c-0.831,0-1.507-0.675-1.507-1.506V9.247h1.583C5.516,9.494,5.482,9.743,5.482,10c0,2.497,2.023,4.52,4.518,4.52c2.494,0,4.52-2.022,4.52-4.52c0-0.257-0.035-0.506-0.076-0.753h1.582V14.52z"></path>
          </svg>
        </a>
      </footer>
    </div>
  </aside>
</div>

<slot></slot>
