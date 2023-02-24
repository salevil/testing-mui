export default function FruitOrVeggie(props) {
    const { products } = props;
    const listItems = products.map(product => 
       <li
        key={product.id}
        style={{
            color: product.isFruit ? 'magenta' : 'darkgreen'
        }} 
        >
           {product.name} 
        </li>
    );

    return (
        <ul>{listItems}</ul>
    )
}