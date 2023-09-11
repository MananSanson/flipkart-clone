
//components
import Header from './component/header/header';
import Home from './component/header/home/home';
import DataProvider from './context/DataProvider';

import {Box} from '@mui/material';

function App() {
  return (
    <DataProvider>
      <Header/>
      <Box style={{marginTop: 54}}>
        <Home/>
      </Box>
    </DataProvider>
  );
}

export default App;
