import { defineStore } from 'pinia'
import { ref } from 'vue'
import { LocalNotifications } from "@capacitor/local-notifications"
import {
  scheduleNotification,
  cancelNotification,
  listPendingNotifications,
} from "../notification/notification_service"
import type { Reminder, NewReminder } from './types'

export const useReminderStore = defineStore('reminder', () => {
  // State
  const reminders = ref<Reminder[]>([])
  const newReminder = ref<NewReminder>({
    title: "",
    datetime: "",
    repeatMode: "none",
  })
  const permission = ref<any>(null)

  // Load reminders from localStorage
  function loadReminders(): Reminder[] {
    const stored = localStorage.getItem("reminders")
    if (stored) {
      reminders.value = JSON.parse(stored)
    }
    return reminders.value
  }

  // Save reminders to localStorage
  function saveReminders(): void {
    localStorage.setItem("reminders", JSON.stringify(reminders.value))
  }

  // Initialize permissions
  async function requestPermissions(): Promise<any> {
    permission.value = await LocalNotifications.requestPermissions()
    return permission.value
  }

  // Add a new reminder
  function addReminder(): void {
    const id = Date.now() % 2147483647
    const reminder: Reminder = { ...newReminder.value, id }
    reminders.value.push(reminder)
    saveReminders()
    
    if (permission.value && permission.value.display === "granted") {
      scheduleNotification(reminder)
    } else {
      alert("Notification permission not granted")
    }
    
    // Reset form
    newReminder.value = {
      title: "",
      datetime: "",
      repeatMode: "none",
    }
  }

  // Delete a reminder
  function deleteReminder(id: number): void {
    reminders.value = reminders.value.filter((r) => r.id !== id)
    saveReminders()
    cancelNotification(id)
  }

  // Show pending notifications
  function showPendingNotifications(): void {
    listPendingNotifications()
  }

  // Initialize store
  function init(): void {
    loadReminders()
    requestPermissions()
  }

  return {
    // State
    reminders,
    newReminder,
    permission,
    // Actions
    addReminder,
    deleteReminder,
    showPendingNotifications,
    init,
    loadReminders,
    requestPermissions
  }
})