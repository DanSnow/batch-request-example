import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { useRouteContext } from '@tanstack/react-router'
import { useEffect, useState } from 'react'

function Devtools() {
  const { queryClient } = useRouteContext({ from: '__root__' })
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return mounted && <ReactQueryDevtools client={queryClient} />
}

Devtools.displayName = 'Devtools'

export default Devtools
