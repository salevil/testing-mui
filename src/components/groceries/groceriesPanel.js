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