import React from 'react';
// import logo from './logo.svg';
import './App.css';
// FilterableProductTable (orange): contains the entirety of the example
// SearchBar (blue): receives all user input
// ProductTable (green): displays and filters the data collection based on user input
// ProductCategoryRow (turquoise): displays a heading for each category
// ProductRow (red): displays a row for each product

const FilterableProductTable = () => {
    return (
        <div className="filterableProductTable">
            <SearchBar />
            <ProductTable />
        </div>
    );
};

const SearchBar = () => {
    return <div className="searchBar"></div>;
};

const ProductTable = () => {
    return (
        <div className="productTable">
            <ProductCategoryRow />
        </div>
    );
};

const ProductCategoryRow = () => {
    return (
        <div className="productCategoryRow">
            <ProductRow />
        </div>
    );
};

const ProductRow = () => {
    return <div className="productRow"></div>;
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
