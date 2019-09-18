import React from 'react';

import rocket from './rocket';
import drawerOpen from './drawerOpen';

export default React.createContext({
  theme: rocket,
  drawer: drawerOpen,
});
