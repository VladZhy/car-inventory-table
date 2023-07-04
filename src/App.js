import CarInventoryTable from './components/CarInventoryTable';
import { ChakraProvider } from '@chakra-ui/react'

const App = () => {
  return (
    <ChakraProvider>
      <CarInventoryTable />
    </ChakraProvider>
  )
}

export default App;