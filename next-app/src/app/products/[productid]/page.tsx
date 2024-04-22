export default function PrductDetails( {params} : {params:{productid: string}} ){
    return (
        <>
            <h1> Details About This Product</h1>
            <h2>Product ID:{params.productid} </h2>
            <h2>Product Name:</h2>
            <h2>Product Price</h2>
            
        </>
    );
}