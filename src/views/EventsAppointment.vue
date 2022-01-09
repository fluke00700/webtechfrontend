<template>
  <div class="p-3 mb-2 bg-dark text-white" style= "max-width: 150rem;"><h1> Your Appointments</h1>
  </div>
  <AppointmentEventCard></AppointmentEventCard>
</template>

<script>
import AppointmentEventCard from '@/components/AppointmentEventCard'
export default {
  name: 'EventsAppointment',
  components: { AppointmentEventCard }
}
</script>

<style scoped>

</style>
