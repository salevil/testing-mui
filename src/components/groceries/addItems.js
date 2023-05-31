import { useState } from 'react';
import {
  TextField,
  FormControlLabel,
  FormControl,
  RadioGroup,
  Radio,
  FormLabel,
  Button
} from '@mui/material';

export default function AddItems({onGroceriesSubmit, categories}) {
  const [item, setItem] = useState('');
  const [category, setCategory] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    const newItem = {
      name: item,
      category: category,
      id: Date.now()
    }
    onGroceriesSubmit(newItem);
    setItem('');
    setCategory('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        label="Name of item"
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
                key={category}
                value={category}
                control={<Radio />}
                label={category}
              />
            ))}
          </RadioGroup>
        </FormControl>
      <Button type="submit" variant="contained">Submit</Button>
    </form>
  );
}
