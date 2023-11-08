import { setupServer } from 'msw/node'
import { handlers } from './handlers'


// mocking server
export const server = setupServer(...handlers)

