<template>
  <button class="btn btn-success sticky-button" data-bs-toggle="offcanvas" data-bs-target="#events-create-offcanvas" aria-controls="offcanvasScrolling">
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus-lg" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z"/>
    </svg>
  </button>
  <div class="offcanvas offcanvas-end" tabindex="-1" id="events-create-offcanvas" aria-labelledby="offcanvas-label">
    <div class="offcanvas-header">
      <h5 id="offcanvas-label">New Event</h5>
      <button type="button" id="close-offcanvas" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
    </div>
    <div class="offcanvas-body">
      <form class="text-start needs-validation" id="events-create-form" novalidate>
        <div class="mb-3">
          <label for="event-name" class="form-label">Event Name</label>
          <input type="text" class="form-control" id="event-name" v-model="eventName" required>
          <div class="invalid-feedback">
            Seems like you haven't filled out the name of the event.
          </div>
        </div>
        <h4><br></h4>
        <div class="mb-3">
          <label for="event-Des" class="form-label">Event Description</label>
          <input type="text" class="form-control" id="event-Des" v-model="eventDes" required>
          <div class="invalid-feedback">
            Seems like you haven't filled out the description of the event.
          </div>
        </div>
        <h4><br></h4>
        <div class="mb-3">
          <label for="event-Start" class="form-label">Event Starting Time</label>
          <input type="text" class="form-control" id="event-Start" v-model="eventStart" required>
          <div class="invalid-feedback">
            Seems like you haven't filled out the date and time of the event.
          </div>
        </div>
        <h4><br></h4>
        <div class="mb-3">
          <label for="event-Location" class="form-label">Event Location</label>
          <input type="text" class="form-control" id="event-Location" v-model="eventLocation" required>
          <div class="invalid-feedback">
            Seems like you haven't filled out the location of the event.
          </div>
        </div>
        <h4><br></h4>
        <div class="mb-3">
          <label for="event-Category" class="form-label">Event Category</label>
          <select id="event-Category" class="form-select" v-model="eventCategory" required>
            <option value="" selected disabled>Please Choose...</option>
            <option value="Eating">Eating</option>
            <option value="Meeting">Meeting</option>
            <option value="Appointment">Appointment</option>
            <option value="Chilling">Chilling</option>
            <option value="Others">Others</option>
          </select>
          <div class="invalid-feedback">
            Seems like you haven't selected the category of the event.
          </div>
        </div>
        <h4><br></h4>
        <div v-if="this.serverValidationMessages">
          <ul>
            <li v-for="(message, index) in serverValidationMessages" :key="index" style="color: rgba(255,255,255,0)">
              {{ message }}
            </li>
          </ul>
        </div>
        <div class="mt-5">
          <button class="btn btn-primary me-3" type="submit"  @click.prevent="createEvent"  >Create</button>
          <button class="btn btn-danger" type="reset">Clear</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'EventCreateForm',
  components: { },
  data () {
    return {
      id: '',
      eventName: '',
      eventDes: '',
      eventStart: '',
      eventLocation: '',
      eventCategory: '',
      serverValidationMessages: []
    }
  },
  emits: ['created'],
  methods: {
    async createEvent () {
      if (this.validate()) {
        const endpoint = process.env.VUE_APP_BACKEND_BASE_URL + '/events'
        const headers = new Headers()
        headers.append('Content-Type', 'application/json')
        const event = JSON.stringify({
          id: this.id,
          eventName: this.eventName,
          eventDes: this.eventDes,
          eventStart: this.eventStart,
          eventLocation: this.eventLocation,
          eventCategory: this.eventCategory
        })
        const requestOptions = {
          method: 'POST',
          headers: headers,
          body: event,
          redirect: 'follow'
        }
        const response = await fetch(endpoint, requestOptions)
        await this.handleResponse(response)
      }
    },
    async handleResponse (response) {
      if (response.ok) {
        this.$emit('created', response.headers.get('location'))
        document.getElementById('close-offcanvas').click()
        location.reload()
      } else if (response.status === 400) {
        response = await response.json()
        response.errors.forEach(error => {
          this.serverValidationMessages.push(error.defaultMessage)
        })
      } else {
        this.serverValidationMessages.push('Unknown error occurred')
      }
    },
    validate () {
      const form = document.getElementById('events-create-form')
      form.classList.add('was-validated')
      return form.checkValidity()
    }
  }
}
</script>

<style scoped>
.sticky-button {
  position: fixed;
  bottom: 930px;
  right: 20px;
  padding: 10px 15px;
  border-radius: 30px;
}
</style>
