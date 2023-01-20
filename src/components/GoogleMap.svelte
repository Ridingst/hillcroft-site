<script>
  import { onMount } from "svelte";

  // init google maps
  onMount(async () => {
    let google = window.google;
    let map = document.getElementById("map-canvas");
    let lat = map.getAttribute("data-lat");
    let lng = map.getAttribute("data-lng");

    const myLatlng = new google.maps.LatLng(lat, lng);
    const mapOptions = {
      zoom: 12,
      scrollwheel: false,
      center: myLatlng,
      mapTypeId: google.maps.MapTypeId.ROADMAP,
      
    };

    map = new google.maps.Map(map, mapOptions);

    const marker = new google.maps.Marker({
      position: myLatlng,
      map: map,
      animation: google.maps.Animation.DROP,
      title: "Hillcroft Lacrosse Club!",
    });

    const contentString =
      '<div class="info-window-content"><h2>Hillcroft Lacrosse Club, London</h2>';

    const infowindow = new google.maps.InfoWindow({
      content: contentString,
    });

    infowindow.open(map, marker);

    google.maps.event.addListener(marker, "click", function () {
      infowindow.open(map, marker);
    });
  });
</script>

<div
  id="map-canvas"
  class="relative w-full rounded h-full"
  data-lat="51.489304"
  data-lng="-0.066058"
></div>
