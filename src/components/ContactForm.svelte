<script>
	import { fade } from 'svelte/transition';
  import { createForm } from "svelte-forms-lib";
  import * as yup from "yup";
	export let formurl = "/api/notifications/contact";
	let messageSended = false;
	let sendError = false;
	const { form, 
					errors, 
					state, 
					isValid,
					isSubmitting,
					handleChange, 
					handleSubmit,  
				} 
				= 	createForm({
							initialValues: {
								email: "",
								subject: "",
								message: "",
							},
							validationSchema: yup.object().shape({
								email: yup
									.string()
									.email()
									.required(),
								subject: yup.string().required(),
								message: yup.string().required()
							}),
							onSubmit: values => sendMessage(values)
						});
	async function sendMessage(payload) {	
		sendError = false;
		console.log("send message: ", payload);
		try {
		let response = await fetch(formurl, {
  			method: "POST",
				headers: {
						'Accept': 'application/json, text/plain, */*',
						'Content-Type': 'application/json'
				},
				body: JSON.stringify(payload)
		});
		
    sendError = !response.ok
    if(response.ok) {
      messageSended = true;
    }
		console.log(response);
		} catch(err) {
			sendError = true;
		}
	}
</script>

<div class="screen-body">
  <div class="screen-body-item left">
      {#if sendError}
        <div class="app-title" transition:fade>
        <span>Oops! Something went wrong</span>
        <span>Please try again later</span>
        </div><br/>
      {/if}
      {#if !messageSended}
      <form on:submit={handleSubmit}>
        <div class="app-form-group">
          <input class="app-form-control" 
            id="email"
            name="email"
            placeholder="Email" 
            on:change={handleChange}
            bind:value={$form.email}>
            {#if $errors.email}
              <small>{$errors.email}</small>
            {/if}
        </div>
        <div class="app-form-group">
          <input class="app-form-control" 
          id="subject"
          name="subject"
          placeholder="Subject" 
          on:change={handleChange}
          on:blur={handleChange}
          bind:value={$form.subject}
          />
          {#if $errors.subject}
            <small>{$errors.subject}</small>
          {/if}
        </div>
        <div class="app-form-group">
          <textarea class="app-form-control"
            id="message"
            name="message"
            placeholder="Message"
            on:change={handleChange}
            on:blur={handleChange}
            bind:value={$form.message}
          ></textarea>
          {#if $errors.message}
            <small>{$errors.message}</small>
          {/if}
        </div>

        <div class="app-form-group buttons">
        <button type="submit" class="app-form-button">
        {#if $isSubmitting}Sending...{:else}Send{/if} 
        </button>
      </div>
      </form>			
      {:else}
        <div class="app-title" transition:fade>
          <span>Your message was successfully sent!</span>
          <br/>
          <br/>
          <br/> 
          <br/> 
          <br/> 
          <br/>
          <br/>
          <br/> 
         </div>
      {/if}
  </div>
  
  <div class="screen-body-item right">
    <div class="app-contact"></div>
  </div>
  
</div>


<style>
*, *:before, *:after {
  box-sizing: border-box;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}


.screen-body {
  display: flex;
}
.screen-body-item {
  flex: 1;
  padding: 30px;
}
.screen-body-item.left {
  display: flex;
  flex-direction: column;
	min-width: 400;
}
.screen-body-item.right {
  display: flex;
  flex-direction: column;
	max-width: 200px;
}
.app-title {
  display: flex;
  flex-direction: column;
  position: relative;
  color: #F59E0B;
  font-size: 26px;
}

.app-title:after {
  content: '';
  display: block;
  position: absolute;
  left: 0;
  bottom: -10px;
  width: 25px;
  height: 4px;
  background: #F59E0B;
}
.app-contact {
  margin-top: auto;
  font-size: 8px;
  color: #888;
}
.app-form-group {
  margin-bottom: 15px;
}
.app-form-group.buttons {
  margin-bottom: 0;
  text-align: right;
}
.app-form-control {
  width: 100%;
  padding: 10px 0;
  background: none;
  border: none;
  border-bottom: 1px solid #666;
  color: #ddd;
  font-size: 14px;
  outline: none;
  transition: border-color .2s;
}
.app-form-control::placeholder {
  color: #666;
}
textarea {
    padding: 30px;
    border: 0;
    width: 100%;
    font-size: 1rem;
    background-color: #2d2d2d;
    color: white;
    border-radius: 4px;
		min-height: 150px
}
.app-form-control:focus {
  border-bottom-color: #ddd;
}
.app-form-button {
  background: none;
	display: inline-flex;
  border: none;
  color: #F59E0B;
  font-size: 14px;
  cursor: pointer;
  outline: none;
}
.app-form-button:hover {
  color: #F59E0B;
}
@media screen and (max-width: 520px) {
  .screen-body {
    flex-direction: column;
  }
  .screen-body-item.left {
    margin-bottom: 30px;
  }
  .app-title {
    flex-direction: row;
  }
  .app-title span {
    margin-right: 12px;
  }
  .app-title:after {
    display: none;
  }
}
@media screen and (max-width: 600px) {
  .screen-body {
    padding: 40px;
  }
  .screen-body-item {
    padding: 0;
  }
}
</style>