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

export default function GroceryTable({ categories, groceries, onAddItems }) {

  const [selectedItems, setSelectedItems] = useState([]);

  const handleCheckboxChange = (event, item) => {
    if (event.target.checked) {
      setSelectedItems((prevSelectedItems) => [...prevSelectedItems, item]);
    } else {
      setSelectedItems((prevSelectedItems) =>
        prevSelectedItems.filter((selectedItem) => selectedItem.id !== item.id)
      );
    }
  };

  const handleAddItems = () => {
    onAddItems(selectedItems);
    setSelectedItems([]);
  };

  return (
    
    <TableContainer>
      <Table>
        <TableHead>
          <TableRow>
            {categories.map((category) => (
              <TableCell key={category} align="center">
                {category.name}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {groceries.map((item) => (
            <TableRow key={item.id}>
              <TableCell>{item.name}</TableCell>
                <Checkbox
                  // checked={selectedItems.some(
                  //   (selectedItem) =>
                  //     selectedItem.id === item.id && selectedItem.category === category
                  // )}
                  // onChange={(event) => handleCheckboxChange(event, item)}
                />
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Button variant="contained" size="small" onClick={handleAddItems} disabled={selectedItems.length === 0}>
        Generate list
      </Button>
    </TableContainer>
  );
}
