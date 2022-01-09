<template>
  <div class="p-3 mb-2 bg-dark text-white" style= "max-width: 150rem;"><h1> Your Eating Events</h1>
  </div>
  <EatingEventCard></EatingEventCard>
</template>

<script>
import EatingEventCard from '@/components/EatingEventCard'
export default {
  name: 'EventsEating',
  components: { EatingEventCard }
}
</script>

<style scoped>

</style>
