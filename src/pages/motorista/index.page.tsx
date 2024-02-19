import { DriverContextProvider } from '@/contexts'

import { Login } from '@/modules/Drive/components'

export default function Motorista() {
  return (
    <DriverContextProvider>
      <Login />
    </DriverContextProvider>
  )
}
