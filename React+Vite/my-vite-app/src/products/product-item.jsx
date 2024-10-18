import './product-item.css';
function ButtonComponent() {
    return <button className="buttonStyle">Click</button>;

}



function ProductItem({singleProductItem, key}) {
    return (
        <div key={key}>
            <p>
                {singleProductItem}
            </p>
            <ButtonComponent/>
        </div>
    );
}
export default ProductItem;