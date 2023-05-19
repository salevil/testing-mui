
// const products = [
//     { title: 'Cabbage', isFruit: false, id: 1 },
//     { title: 'Garlic', isFruit: false, id: 2 },
//     { title: 'Apple', isFruit: true, id: 3 }
// ];

export default function FruitOrVeggies(products) {
    console.log("Fru&Veggies>>>>>>PRODUCTS", products);
    const listItems = products.map(product => 
       <li
        key={product.id}
        style={{
            color: product.isFruit ? 'magenta' : 'darkgreen'
        }} 
        >
           {product.title} 
        </li>
    );

    return (
        <ul>{listItems}</ul>
        // <h3>FruitOrVeggies</h3>
    )
}