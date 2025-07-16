# Vue 3 + Vite + Capacitor

This template should help get you started developing with Vue 3 in Vite. The template uses **Vue 3** `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

This project also includes **Pinia** for state management and **Capacitor** for mobile development.

Learn more about IDE Support for Vue in the [Vue Docs Scaling up Guide](https://vuejs.org/guide/scaling-up/tooling.html#ide-support).

# USAGE

To run this project, clone the repository and run the following commands:

```bash
# If you haven't already, install dependencies
npm install

# Start the development server
npm run dev
```

## Pinia State Management

This project uses **Pinia** with **TypeScript** for state management. The reminder functionality is managed through the `useReminderStore`:

```typescript
// The reminder store handles all reminder operations
import { useReminderStore } from '@/stores/reminder'
import type { Reminder } from '@/stores/types'

const reminderStore = useReminderStore()
// Access reminders: reminderStore.reminders
// Add reminder: reminderStore.addReminder()
// Delete reminder: reminderStore.deleteReminder(id)
```

## Mobile Development with Capacitor

To run the project on a mobile device using Capacitor, follow these steps:

```bash
# Build the Vue app
npm run build
# Copy web assets to native platforms and sync plugins
npx cap sync
# Run the native app on Android or iOS
npx cap run android # or ios
```
