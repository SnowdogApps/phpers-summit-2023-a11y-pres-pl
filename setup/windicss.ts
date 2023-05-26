import { resolve } from 'path'
import { defineWindiSetup } from '@slidev/types'

export default defineWindiSetup(() => ({
  extract: {
    include: [
      resolve(__dirname, '../**/*.{vue,ts}'),
    ],
  },
  shortcuts: {
    // custom the default background
    'bg-main': 'bg-white text-[#181818] dark:(bg-[#121212] text-[#ddd])',
    'w-1/2': 'w-1/2',
    'h-1/2': 'h-1/2',
    'mx-auto': 'mx-auto',
    'w-3/4': 'w-3/4',
    'p-6': 'p-6',
    'text-accent': 'text-[#2f2a95]'
  },
}))
