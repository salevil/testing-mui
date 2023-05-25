// import { FormControl, InputLabel, Input } from "@mui/material";
// export default function AddFruitOrVeggies({value, handleChange}) {
//     console.log(">>>>>>", handleChange, value);
//     return (
//         <FormControl>
//             <InputLabel htmlFor="name">Name:</InputLabel>
//             <Input id="name" aria-describedby="name" />
//             <InputLabel htmlFor="type">Is a fruit:</InputLabel>
//             <Input id="isFruit" aria-describedby="type" />
//         </FormControl>

//     )
// }

import { useState } from 'react';
import { TextField, FormControlLabel, Checkbox, Button } from '@mui/material';

export default function AddFruitOrVeggies({ onProductSubmit}) {
  const [name, setName] = useState('');
  const [isFruit, setIsFruit] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    const newProduct = {
      title: name,
      isFruit,
      id: Date.now()
    }
    onProductSubmit(newProduct);
    setName('');
    setIsFruit(false);
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        label="Name"
        value={name}
        onChange={(event) => setName(event.target.value)}
        fullWidth
        margin="normal"
      />
      <FormControlLabel
        control={<Checkbox checked={isFruit} onChange={(event) => setIsFruit(event.target.checked)} />}
        label="Is Fruit"
      />
      <Button type="submit">Submit</Button>
    </form>
  );
}
