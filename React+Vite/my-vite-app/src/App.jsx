import './App.css'
import FunctionalComponent from './functional-component';
import ProductList from './products';

const dummyProductData = ["Product 1", "Product 2", "Product 3"];

function App() {
    return (
        <div>
            <h1>React JS Concepts 2024</h1>
            <ProductList listofProducts={dummyProductData} name="Asif" city="Meerut" />
        </div>
    );
}

export default App;

