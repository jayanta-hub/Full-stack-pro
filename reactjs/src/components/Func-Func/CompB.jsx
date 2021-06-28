function CompB(props){
return (
    <>
    <h1>Hello:{props.one}</h1>
    <pre>{JSON.stringify(props)}</pre>
    <hr />
    <h4>Product Name: {props.four.productName}</h4>
    </>
);
}
export default CompB;
