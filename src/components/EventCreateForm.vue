<template>
  <button class="btn btn-success sticky-button" data-bs-toggle="offcanvas" data-bs-target="#events-create-offcanvas" aria-controls="#events-create-offcanvas">
    <i class="bi bi-event-plus-fill"></i>
  </button>
  <div class="offcanvas offcanvas-end" tabindex="-1" id="events-create-offcanvas" aria-labelledby="offcanvas-label">
    <div class="offcanvas-header">
      <h5 id="offcanvas-label">New Event</h5>
      <button type="button" id="close-offcanvas" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
    </div>
    <div class="offcanvas-body">
      <form class="text-start needs-validation" id="events-create-form" novalidate>
        <div class="mb-3">
          <label for="event-name" class="form-label">Was haben Sie vor?</label>
          <input type="text" class="form-control" id="event-name" v-model="eventName" required>
          <div class="invalid-feedback">
            Teilen Sie uns mit, was Sie vorhaben.
          </div>
        </div>
        <div class="mb-3">
          <label for="event-Des" class="form-label">Event Description</label>
          <input type="text" class="form-control" id="event-Des" v-model="eventDes">
        </div>
        <div class="mb-3">
          <label for="event-Start" class="form-label">Event starting time</label>
          <input type="text" class="form-control" id="event-Start" v-model="eventStart" required>
          <div class="invalid-feedback">
            Teilen Sie uns mit, wo Ihre Aktivität/ Ihr Termin stattfindet.
          </div>
        </div>
        <div class="mb-3">
          <label for="event-Location" class="form-label">Event Location</label>
          <input type="text" class="form-control" id="event-Location" v-model="eventLocation" required>
          <div class="invalid-feedback">
            Teilen Sie uns mit, wo Ihre Aktivität/ Ihr Termin stattfindet.
          </div>
        </div>
        <div class="mb-3">
          <label for="event-Coordinate" class="form-label">Event Coordinate</label>
          <input type="text" class="form-control" id="event-Coordinate" v-model="eventCoordinate" required>
          <div class="invalid-feedback">
            Teilen Sie uns mit, was Sie vorhaben.
          </div>
        </div>
        <div v-if="this.serverValidationMessages">
          <ul>
            <li v-for="(message, index) in serverValidationMessages" :key="index" style="color: rgba(255,255,255,0)">
              {{ message }}
            </li>
          </ul>
        </div>
        <div class="mt-5">
          <button class="btn btn-primary me-3" type="submit" @click.prevent="createEvent">Create</button>
          <button class="btn btn-danger" type="reset">Reset</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'EventCreateForm',
  data () {
    return {
      id: '',
      eventName: '',
      eventDes: '',
      eventStart: '',
      eventLocation: '',
      eventCoordinate: '',
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
          eventCoordinate: this.eventCoordinate
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
  bottom: 20px;
  right: 20px;
  padding: 10px 15px;
  border-radius: 30px;
}
</style>
