import { useState } from "react";
import ProductFilters from "./ProductFilters";
import ProductsContainer from "./ProductsContainer";

const MainSection = () => {
    const [femaleProducts, setFemaleProducts] = useState(null)

    return (
        <>
            <ProductFilters setFemaleProducts={setFemaleProducts}/>
            <ProductsContainer femaleProducts={femaleProducts}/>
        </>
    );
};

export default MainSection;
