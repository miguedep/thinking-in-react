import React from 'react';
// import logo from './logo.svg';
import './App.css';

const FilterableProductTable = () => {
    return (
        <div className="filterableProductTable">
            <SearchBar />
            <ProductTable />
        </div>
    );
};

const SearchBar = () => {
    return (
        <div className="searchBar">
            <form>
                <label htmlFor="searchBar">
                    <input
                        id="searchBar"
                        value="hi"
                        onChange={console.log(2)}
                    />
                </label>
                <br />
                <label htmlFor="checkBox">
                    <input type="checkbox" id="checkBox" value={false} />
                    Only show products in stock
                </label>
            </form>
        </div>
    );
};

const ProductTable = () => {
    const categories = [];
    console.log(categories);
    data.map(e =>
        categories.indexOf(e.category) === -1
            ? categories.push(e.category)
            : null,
    );
    return (
        <div className="productTable">
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                    </tr>
                </thead>
                {categories.map(e => (
                    <ProductCategoryRow cat={e} />
                ))}
            </table>
        </div>
    );
};

const ProductCategoryRow = ({ cat }) => {
    return (
        <React.Fragment>
            <tr>
                <th colSpan="2">{cat}</th>
            </tr>
            <ProductRow cat={cat} />
        </React.Fragment>
    );
};

const ProductRow = ({ cat }) => {
    const products = data.filter(product => product.category === cat);
    return products.map(e => {
        return (
            <tr style={{ color: e.stocked ? 'red' : 'black' }}>
                <td>{e.name}</td>
                <td>{e.price}</td>
            </tr>
        );
    });
};

function App() {
    return (
        <div className="App">
            <FilterableProductTable />
        </div>
    );
}

export default App;

const data = [
    {
        category: 'Sporting Goods',
        price: '$49.99',
        stocked: true,
        name: 'Football',
    },
    {
        category: 'Sporting Goods',
        price: '$9.99',
        stocked: true,
        name: 'Baseball',
    },
    {
        category: 'Sporting Goods',
        price: '$29.99',
        stocked: false,
        name: 'Basketball',
    },
    {
        category: 'Electronics',
        price: '$99.99',
        stocked: true,
        name: 'iPod Touch',
    },
    {
        category: 'Electronics',
        price: '$399.99',
        stocked: false,
        name: 'iPhone 5',
    },
    {
        category: 'Electronics',
        price: '$199.99',
        stocked: true,
        name: 'Nexus 7',
    },
];
