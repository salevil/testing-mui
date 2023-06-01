import { useState } from 'react';
import {
  TextField,
  Button
} from '@mui/material';

export default function AddAisle({onAisleSubmit}) {
  const [aisle, setAisle] = useState();

  const handleSubmit = (event) => {
    event.preventDefault();
    const newAisle = {
      name: aisle,
      id: Date.now()
    }
    onAisleSubmit(newAisle);
    setAisle('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        label="New Aisle Number"
        value={aisle}
        onChange={(event) => setAisle(event.target.value)}
        fullWidth
        margin="normal"
      />
      <Button size="small" type="submit" variant="contained">Submit</Button>
    </form>
  );
}