<script>
  import GoogleMap from './GoogleMap.svelte'
  import ContactForm from './ContactForm.svelte'

  function validate() {
		console.log("I'm the validate() function")
	}
</script>


<div class="w-full lg:min-h-screen items-center bg-white grid grid-cols-1 lg:grid-cols-3 lg:gap-0" id="contact">
  <div class="w-full lg:col-span-2 lg:inline-block px-10 z-10">
    <div class="py-6">
      <h2 class="text-6xl lg:text-9xl tracking-widest font-bold leading-snug">Contact<span class="text-yellow-500">.</span></h2>
      <h3 class="text-xl lg:text-4xl tracking-widest font-bold leading-snug">Please get in touch.</h3>
    </div>
    <div class="py-6">
      <p class="font-serif tracking-wider lg:tracking-widest leading-widest text-lg italic pt-6 text-gray-900">
        If you have any questions about the club, training, match days or socials, please do get in touch. One of the team would be happy to help and answer any queries.
      </p>
    </div>
    <div class="py-6">
      <ContactForm />
    </div>

  </div>
  <div class="col-span-1 grid-cols-1 w-full h-96 lg:h-full bg-black z-0">
    <GoogleMap />
  </div>
</div>

