<script>
import { useToast, POSITION } from 'vue-toastification'
export default {
  setup() {
    const toast = useToast()
    const message = ref('Notify!')
    const position = ref('top-right')
    const type = ref('default')
    const duration = ref(5000)

    const showToast = () => {
      const options = {
        position: POSITION[position.value.toUpperCase().replace('-', '_')],
        timeout: duration.value,
      }

      switch (type.value) {
        case 'info':
          toast.info(message.value, options)
          break
        case 'success':
          toast.success(message.value, options)
          break
        case 'error':
          toast.error(message.value, options)
          break
        case 'warning':
          toast.warning(message.value, options)
          break
        default:
          toast(message.value, options)
      }
    }

    return {
      showToast,
      message,
      type,
      duration,
      position,
    }
  },
}
</script>

<template>
  <NuxtLayout>
    <div class="w-full justify-center self-center flex flex-col">
      <div class="py-32 w-1/2 justify-center self-center">
        <div>
          <label for="message" class="block text-sm font-medium text-gray-700"
            >Toast Message</label
          >
          <input
            id="message"
            v-model="message"
            type="text"
            class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
          />
        </div>
        <div>
          <label for="type" class="block text-sm font-medium text-gray-700"
            >Toast Type</label
          >
          <select
            id="type"
            v-model="type"
            class="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          >
            <option value="default">Default</option>
            <option value="info">Info</option>
            <option value="success">Success</option>
            <option value="warning">Warning</option>
            <option value="error">Error</option>
          </select>
        </div>
        <div>
          <label for="position" class="block text-sm font-medium text-gray-700"
            >Toast Position</label
          >
          <select
            id="position"
            v-model="position"
            class="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          >
            <option value="top-right">Top Right</option>
            <option value="top-center">Top Center</option>
            <option value="top-left">Top Left</option>
            <option value="bottom-right">Bottom Right</option>
            <option value="bottom-center">Bottom Center</option>
            <option value="bottom-left">Bottom Left</option>
          </select>
        </div>
        <div>
          <label for="duration" class="block text-sm font-medium text-gray-700"
            >Duration (in milliseconds)</label
          >
          <input
            id="duration"
            v-model="duration"
            type="number"
            class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
          />
        </div>
        <button
          class="my-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          @click="showToast"
        >
          Show Toast
        </button>
      </div>
    </div>
  </NuxtLayout>
</template>
