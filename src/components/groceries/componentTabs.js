import * as React from 'react';
import Groceries from "./groceries";
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import AddItems from './addItems';
import AddCategory from './addCategory';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs({
  groceries, 
  setGroceries,
  categories,
  setCategories,
  onGroceriesSubmit,
  onCategorySubmit
  }) {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="Prepare Grocery List" {...a11yProps(0)} />
          <Tab label="Add Items" {...a11yProps(1)} />
          <Tab label="Add new Category" {...a11yProps(2)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <Groceries groceries={groceries} />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <AddItems
          groceries={groceries}
          setGroceries={setGroceries}
          categories={categories}
          setCategories={setCategories}
          onGroceriesSubmit={onGroceriesSubmit}
        />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <AddCategory
          categories={categories}
          setCategories={setCategories}
          onCategorySubmit={onCategorySubmit}
        />
      </TabPanel>
    </Box>
  );
}