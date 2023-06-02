import {
  Table,
  TableContainer,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Checkbox,
  Button
} from '@mui/material';

export default function GroceryTable({
  categories,
  groceries,
  onAddItems,
  selectedItems,
  setSelectedItems,
  onCheckboxChange
}) {

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
              <TableCell key={category.name} align="center">
                {category.name}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {groceries.map((item) => (
            <TableRow key={item.id}>
              {categories.map((category) => (
                <TableCell key={category.name} align="center">
                  {category.name === item.category && (
                    <div>
                      {item.name}
                      <Checkbox
                        checked={selectedItems.some((selectedItem) =>
                        selectedItem.id === item.id)}
                        onChange={(event) => onCheckboxChange(event, item)}
                      />
                    </div>
                  )}
                </TableCell>
              ))}   
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
