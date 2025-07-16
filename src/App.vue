<script setup>
import { onMounted } from "vue"
import { useReminderStore } from "./stores/reminder"

const reminderStore = useReminderStore()

onMounted(() => {
  reminderStore.init()
})
</script>

<template>
  <div>
    <input v-model="reminderStore.newReminder.title" placeholder="Title" />
    <input v-model="reminderStore.newReminder.datetime" type="datetime-local" />
    <select v-model="reminderStore.newReminder.repeatMode">
      <option
        v-for="mode in [
          'minutely',
          'daily',
          'weekly',
          'monthly',
          'yearly',
          'none',
        ]"
        :key="mode"
        :value="mode"
      >
        {{ mode.charAt(0).toUpperCase() + mode.slice(1) }}
      </option>
    </select>
    <button @click="reminderStore.addReminder()">Add</button>

    <ul>
      <li v-for="reminder in reminderStore.reminders" :key="reminder.id">
        {{ reminder.title }} - {{ reminder.datetime }}
        <button @click="reminderStore.deleteReminder(reminder.id)">Delete</button>
      </li>
    </ul>
    <!-- See Pending Notifications in Alert Button -->
    <button @click="reminderStore.showPendingNotifications()">
      Show Pending Notifications
    </button>
  </div>
</template>
