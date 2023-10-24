import About from '@/components/About'
import Header from '@/components/Header'
import Jobs from '@/components/Jobs'
import { Stack } from '@mui/material'

export default function Home() {
  return (
    <Stack minWidth={"100vw"} spacing={4}>
      <Header />
      <About />
      <Jobs />
    </Stack>
  )
}
