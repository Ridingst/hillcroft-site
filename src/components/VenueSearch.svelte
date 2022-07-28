<script>
  import { onMount } from "svelte";  
  let rawData = []
  let data = []
  let rankFilter = 500
  let statusFilter = "all" //all, shortlist, enquiring, available
  let map
  let zoom = 11
  let position = { lat: 51.447913, lng: -0.14478 }
  export let venue

  function filterDataByLatLng(lat, lng){
    return rawData.filter(search, {lat: String(lat),lng: String(lng)})[0]
  }

  function changeFilter(status){
    statusFilter = status
    initMap()
  }

  function search(venue){
    return Object.keys(this).every((key) => venue[key] === this[key]);
  }

  function filterByRank(){
    
    console.log(data.length)
    initMap()
  }

  function getData(){
    data = rawData.filter(venue => venue.rank<= rankFilter)
    data = data.filter((venue)=>{
      if(statusFilter == "enquiring"){
        return (venue.Status== "Enquiring" || venue.Status.includes("Available ("))
      }else if(statusFilter == "shortlist"){
        return (venue.Status!= "")
      } else {
        return true
      }
    })

    return data
  }

  // init google maps
  onMount(async () => {
    map = new google.maps.Map(document.getElementById("map"), {
      zoom: zoom, gestureHandling : "greedy", center: position,
      disableDefaultUI: true,
    });

    const res = await fetch("/api/getVenues")
    
    await res.json().then((resp)=>{
      rawData = resp.data
      data = resp.data
      initMap()
    })
  })

  function addMarker(obj) {
    var icon = "http://labs.google.com/ridefinder/images/mm_20_gray.png"
    if(obj.Status.includes("Available (")){
      icon = "http://maps.google.com/mapfiles/ms/micons/green-dot.png"
    } else if(obj.Status == "Enquiring"){
      icon = "http://www.google.com/mapfiles/marker.png"
    }else if(obj.Status != ""){
      icon = "http://labs.google.com/ridefinder/images/mm_20_black.png"
    }

    new google.maps.Marker({
      position: { lat: Number(obj.lat), lng: Number(obj.lng) },
      map,
      animation: google.maps.Animation.DROP,
      title: obj.site_name,
      icon: icon
    }).addListener("click", (evt) => {
      obj = filterDataByLatLng(evt.latLng.lat(), evt.latLng.lng())
      console.log(obj)
      venue = obj
    });
  }

  function initMap() {
    zoom = map.getZoom()
    position = map.getCenter()

    map = new google.maps.Map(document.getElementById("map"), {
      zoom: zoom, gestureHandling : "greedy", center: position,
      disableDefaultUI: true,
    });
      getData().forEach(obj => addMarker(obj))
    }
</script>

<div class="mx-auto bg-white rounded-xl shadow-md overflow-hidden ">
  <div class="md:flex w-full h-screen overflow-scroll">
    <!-- MAP Section -->
    <div class="md:w-3/4 h-3/4 rounded md:h-screen">
      <div id="map" class="relative w-full h-full"/>
    </div>
    <!-- INFO Section -->
    <div class="w-full md:w-1/4 h-full md:h-screen items-center mx-2 my-2 overflow-y-scroll">
      <div class="m-auto align-middle">
        <div class="">
          <div class="pb-2 uppercase tracking-wide text-sm text-yellow-500 font-semibold">
            Filters
          </div>
          <div class="mb-3">
            <label for="default-range" class="block mb-2 text-xs text-gray-900 dark:text-gray-300">Distance Filter</label>
            <input id="default-range" type="range" bind:value={rankFilter} min=50 max=500 step=50 on:change={filterByRank} class="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700">
          </div>
          <div class="text-xs">
            <label for="default-range" class="block mb-2 text-xs text-gray-900 dark:text-gray-300">Status Filter</label>
            <button on:click={()=> {changeFilter('all')}} class="inline align-middle m-1 py-2 px-4 border border-gray-500 rounded {statusFilter === 'all' ? 'bg-yellow-500 text-white' : 'bg-transparent text-gray-700' }">
              <img src="http://labs.google.com/ridefinder/images/mm_20_gray.png" class="content-center h-4 m-auto"/>
              All
            </button>
            <button on:click={()=> {changeFilter('shortlist')}} class="inline align-middle m-1 font-semibold py-2 px-4 border border-gray-500  rounded {statusFilter === 'shortlist' ? 'bg-yellow-500 text-white' : 'bg-transparent text-gray-700' }">
              <img src="http://labs.google.com/ridefinder/images/mm_20_black.png" class="content-center h-4 m-auto"/>
              Shortlist
            </button>
            <button on:click={()=> {changeFilter('enquiring')}} class="inline align-middle m-1 font-semibold py-2 px-4 border border-gray-500  rounded {statusFilter === 'enquiring' ? 'bg-yellow-500 text-white' : 'bg-transparent text-gray-700' }">
              <img src="http://www.google.com/mapfiles/marker.png" class="content-center h-4 m-auto"/>
              Active
            </button>
          </div>
        </div>

        <div class="m-3"><hr/></div>
      
        <div class="mt-6 uppercase tracking-wide text-sm text-yellow-500 font-semibold">
          Venue Details
        </div>
        {#if venue}
          <a class="block mt-1 text-lg leading-tight font-medium text-black hover:underline">{venue.site_name}</a>
          <p class="mx-0 mt-2 text-slate-500">
            <button class="bg-transparent font-semibold py-2 px-4 border border-yellow-500 rounded">
              {venue["Status"] || "Not Enquiring"}
            </button>
            <br/><br/>
            {venue["Notes"] || ""}
            <br/><br/>
            {venue["Extra notes"] || ""}
            <br/><br/>
            <strong>Travel times (Public Transport)</strong><br/>
            London Bridge: {venue['Travel from London Bridge']}<br/>
            Streatham: {venue['Travel from Streatham']}<br/>
            Tooting: {venue['Travel from Tooting']}<br/>
            Clapham South: {venue['Travel from Clapham South']}<br/>
          </p>
          <img src={venue['Image']} style="pt-3"/>
        {:else}
          <a class="block mt-1 text-lg leading-tight font-medium text-black hover:underline">Select a venue to see more info</a>
        {/if}
      </div>
    </div>
  </div>
</div>
