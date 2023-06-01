import { useState } from 'react';
import {
  TextField,
  FormControlLabel,
  FormControl,
  RadioGroup,
  Radio,
  FormLabel,
  Button,
  InputLabel,
  NativeSelect,
  Box
} from '@mui/material';

export default function AddItems({
    groceries,
    setGroceries,
    onGroceriesSubmit,
    categories,
    stores,
    aisles
  }) {
  const [item, setItem] = useState('');
  const [category, setCategory] = useState(false);
  const [store, setStore] = useState(false);
  const [aisle, setAisle] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    const newItem = {
      name: item,
      category: category,
      store: store,
      aisle: aisle,
      id: Date.now()
    }
    onGroceriesSubmit(newItem);
    setItem('');
    setCategory('');
    setStore('');
    setAisle('');
  };

  console.log(">>>>Groceries", groceries);
  console.log(">>>>Aisles", aisles);
  console.log(">>>>Stores", stores);
  return (
    <form onSubmit={handleSubmit}>
      <TextField
        label="Name of new item"
        value={item}
        onChange={(event) => setItem(event.target.value)}
        fullWidth
        margin="normal"
      />
      <Box sx={{ minWidth: 120, maxWidth: 200 }}>
        <FormControl fullWidth>
          <InputLabel variant="standard" htmlFor="uncontrolled-native">
            Choose Category
          </InputLabel>
          <NativeSelect
            defaultValue="none"
            variant="filled"
            onChange={(event) => setCategory(event.target.value)}
          >
          {categories.map((category) => (
            <option key={category.key} value={category.name}>{category.name}</option>
          ))}
          </NativeSelect>
        </FormControl>
      </Box>
      <Box sx={{ minWidth: 120, maxWidth: 200 }}>
        <FormControl fullWidth>
          <InputLabel variant="standard" htmlFor="uncontrolled-native">
            Store
          </InputLabel>
          <NativeSelect
            onChange={(event) => setStore(event.target.value)}
          >
          {stores.map((store) => (
            <option key={store.key} value={store.name}>{store.name}</option>
          ))}
          </NativeSelect>
        </FormControl>
      </Box>
      <Box sx={{ minWidth: 120, maxWidth: 200 }}>
        <FormControl fullWidth>
          <InputLabel variant="standard" htmlFor="uncontrolled-native">
            Aisle
          </InputLabel>
          <NativeSelect
            onChange={(event) => setAisle(event.target.value)}
          >
          {aisles.map((aisle) => (
            <option key={aisle.key} value={aisle.name}>{aisle.name}</option>
          ))}
          </NativeSelect>
        </FormControl>
      </Box>
      <Box display="flex" justifyContent="flex-end" >
        <Button size="small" type="submit" variant="contained" >Submit</Button>
      </Box>
    </form>
  );
}
