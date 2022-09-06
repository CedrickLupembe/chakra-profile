import Sidebox from "./components/Sidebox";
import Scrollbox from "./components/Scrollbox";
import { Flex } from "@chakra-ui/react";

function App() {
  return (
    <Flex w='100%' direction={['column', 'column', 'row']} pos='relative'>
      <Sidebox />
      <Scrollbox />
    </Flex>
  );
}

export default App;
