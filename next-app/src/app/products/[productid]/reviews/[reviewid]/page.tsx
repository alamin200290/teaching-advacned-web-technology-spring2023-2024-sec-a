import { notFound } from "next/navigation"; 

export default function PrductDetails( {params} : {params:{productid: string, reviewid: string}} ){
    
    if(parseInt(params.reviewid) > 1000){
        notFound();
    }
    
    return (
        <>
            <h1> Details About Product {params.productid}</h1>
            <h2>Review ID:{params.reviewid} </h2>
            <h2>Review Details: This product is good</h2>
        </>
    );
}