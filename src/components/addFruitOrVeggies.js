import { TextField } from "@mui/material";

export default function AddFruitOrVeggies({value, handleChange}) {
    console.log(">>>>>>", handleChange, value);
    return (
        <TextField 
            label="Enter text here:"
            variant="filled"
            multiline
            rows={5}
        />
    )
}

// import { useState } from 'react';
// import { TextField, FormControlLabel, Checkbox, Button } from '@mui/material';

// export default function AddFruitOrVeggies() {
//   const [name, setName] = useState('');
//   const [isFruit, setIsFruit] = useState(false);

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     console.log({ name, isFruit });
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <TextField
//         label="Name"
//         value={name}
//         onChange={(event) => setName(event.target.value)}
//         fullWidth
//         margin="normal"
//       />
//       <FormControlLabel
//         control={<Checkbox checked={isFruit} onChange={(event) => setIsFruit(event.target.checked)} />}
//         label="Is Fruit"
//       />
//       <Button type="submit">Submit</Button>
//     </form>
//   );
// }
