import { DataGrid } from '@mui/material';

export default function GroceriesPanel({ groceries }) {
    return (
      <ul>
        {groceries.map((item) => {
          let color;
          if (item.category === "house supplies") {
            color = 'magenta';
          } else if (item.category === "produce") {
            color = 'darkgreen';
          } else if (item.category === "dairy") {
            color = 'blue';
          } else if (item.category === "meat") {
            color = 'orange';
          }
  
          return (
            <li key={item.id} style={{ color }}>
              {item.name}
            </li>
          );
        })}
      </ul>
    );
  }

  import { useState } from 'react';
import {
  Table,
  TableContainer,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Checkbox,
  Button,
} from '@mui/material';

// export default function GroceryTable({ categories, groceries, onAddItems }) {
//   const [selectedItems, setSelectedItems] = useState([]);

//   const handleCheckboxChange = (event, item) => {
//     if (event.target.checked) {
//       setSelectedItems((prevSelectedItems) => [...prevSelectedItems, item]);
//     } else {
//       setSelectedItems((prevSelectedItems) =>
//         prevSelectedItems.filter((selectedItem) => selectedItem.id !== item.id)
//       );
//     }
//   };

//   const handleAddItems = () => {
//     onAddItems(selectedItems);
//     setSelectedItems([]);
//   };

//   return (
//     <TableContainer>
//       <Table>
//         <TableHead>
//           <TableRow>
//             <TableCell>Name</TableCell>
//             {categories.map((category) => (
//               <TableCell key={category} align="center">
//                 {category}
//               </TableCell>
//             ))}
//           </TableRow>
//         </TableHead>
//         <TableBody>
//           {groceries.map((item) => (
//             <TableRow key={item.id}>
//               <TableCell>{item.name}</TableCell>
//               {categories.map((category) => (
//                 <TableCell key={category} align="center">
//                   <Checkbox
//                     checked={selectedItems.some(
//                       (selectedItem) =>
//                         selectedItem.id === item.id && selectedItem.category === category
//                     )}
//                     onChange={(event) => handleCheckboxChange(event, item)}
//                   />
//                 </TableCell>
//               ))}
//             </TableRow>
//           ))}
//         </TableBody>
//       </Table>
//       <Button variant="contained" onClick={handleAddItems} disabled={selectedItems.length === 0}>
//         Add Selected Items
//       </Button>
//     </TableContainer>
//   );
// }
