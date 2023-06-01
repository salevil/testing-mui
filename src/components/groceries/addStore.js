import { useState } from 'react';
import {
  TextField,
  Button
} from '@mui/material';

export default function AddStore({onStoreSubmit}) {
  const [store, setStore] = useState();

  const handleSubmit = (event) => {
    event.preventDefault();
    const newStore = {
      name: store,
      id: Date.now()
    }
    onStoreSubmit(newStore);
    setStore('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        label="Name of new Store"
        value={store}
        onChange={(event) => setStore(event.target.value)}
        fullWidth
        margin="normal"
      />
      <Button size="small" type="submit" variant="contained">Submit</Button>
    </form>
  );
}