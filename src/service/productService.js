const getAll = async () => {
    try {
        const response = await fetch('https://fakestoreapi.com/products');        
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching all products:', error);
        throw error;
    }
}

const getById = async (id) => {
    try {
        const response = await fetch(`https://fakestoreapi.com/products/${id}`);        
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching product:', error);
        throw error;
    }
}

export {getAll, getById, }