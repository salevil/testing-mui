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

export default function AddItems({onGroceriesSubmit}) {
  const [item, setItem] = useState('');
  const [category, setCategory] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    const newItem = {
      name: item,
      category: category,
      id: Date.now()
    }
    onItemSubmit(newItem);
    setItem('');
    setCategory('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        label="Name of item"
        value={name}
        onChange={(event) => setItem(event.target.value)}
        fullWidth
        margin="normal"
      />
        <FormControl>
          <FormLabel>Category</FormLabel>
          <RadioGroup>
            <FormControlLabel value="produce" control={<Radio />} label="produce"/>
            <FormControlLabel value="dairy" control={<Radio />} label="dairy"/>
            <FormControlLabel value="meat" control={<Radio />} label="meat"/>
            <FormControlLabel value="house supplies" control={<Radio />} label="house supplies"/>
          </RadioGroup>
        </FormControl>
      <Button type="submit" onChange={(event) => setCategory(event.target.value)}>Submit</Button>
    </form>
  );
}
