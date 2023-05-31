export default function Groceries({groceries}) {
    return (
        <ul>
            {groceries.map((item) => (
                <li
                    key={item.id}
                    style={{
                        if (item.category === "house supplies") {
                            color: 'magenta'
                        // }  
                        // else if(item.category === "produce") {
                        //     color: 'darkgreen'
                        // }
                        // else if(item.category === "dairy") {
                        //     color: 'blue'
                        // }
                        // else if(item.category === "meat") {
                        //     color: 'orange'
                        }
                    }} 
                    >
                       {item.name} 
                </li>
            ))}
        </ul>
        )
}