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

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        label="Name of new item"
        value={item}
        onChange={(event) => setItem(event.target.value)}
        fullWidth
        margin="normal"
      />
      <FormControl>
        <FormLabel>Category</FormLabel>
        <RadioGroup value={category} onChange={(event) => setCategory(event.target.value)}>
          {categories.map((category) => (
            <FormControlLabel
              key={category.key}
              value={category.name}
              control={<Radio />}
              label={category.name}
            />
          ))}
        </RadioGroup>
      </FormControl>
      <FormControl>
        <FormLabel>Store</FormLabel>
        <RadioGroup value={store} onChange={(event) => setStore(event.target.value)}>
          {stores.map((store) => (
            <FormControlLabel
              key={store.key}
              value={store.name}
              control={<Radio />}
              label={store.name}
            />
          ))}
        </RadioGroup>
      </FormControl>
      <FormControl>
        <FormLabel>Aisle</FormLabel>
        <RadioGroup value={aisle} onChange={(event) => setAisle(event.target.value)}>
          {aisles.map((aisle) => (
            <FormControlLabel
              key={aisle.key}
              value={aisle.name}
              control={<Radio />}
              label={aisle.name}
            />
          ))}
        </RadioGroup>
      </FormControl>
      <Box sx={{ minWidth: 120, maxWidth: 200 }}>
      <FormControl fullWidth>
        <InputLabel variant="standard" htmlFor="uncontrolled-native">
          Store
        </InputLabel>
        <NativeSelect
          defaultValue="Choose store"
        >
          <option value={10}>Aldi</option>
          <option value={20}>Costco</option>
        </NativeSelect>
      </FormControl>
    </Box>
      <Box display="flex" justifyContent="flex-end" >
        <Button size="small" type="submit" variant="contained" >Submit</Button>
      </Box>
    </form>
  );
}
