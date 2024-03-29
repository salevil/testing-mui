import { useState } from 'react';
import {
  TextField,
  Button
} from '@mui/material';

export default function AddCategory({onCategorySubmit}) {
  const [category, setCategory] = useState();

  const handleSubmit = (event) => {
    event.preventDefault();
    const newCategory = {
      name: category,
      id: Date.now()
    }
    onCategorySubmit(newCategory);
    setCategory('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        label="Name of new Category"
        value={category}
        onChange={(event) => setCategory(event.target.value)}
        fullWidth
        margin="normal"
      />
      <Button size="small" type="submit" variant="contained">Submit</Button>
    </form>
  );
}
