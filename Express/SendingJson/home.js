const express = require('express');
const { products } = require ("../../data")
const app = express();
app.get("/", (req, res) =>{
   res.send(`<h1> This is HomePage </h1>
    <a href="api/products">Products</a>`)
});

// displaying product id, name, image 
app.get("/api/products",(req, res) =>{
    const showLess = products.map((product) =>{
        const {id, name, image}=product;
        return {id, name, image }
    })
    res.json( showLess );
});

// product searching using product id 
app.get("/api/products/:id", (req, res) =>{
    const { id } = req.params;
    console.log(req.params);
  const singleProduct = products.find((product)=>
   product.id === Number(id))

   if(!singleProduct)
        res.status(404).send(`<h1>Sorry product is not found </h1>`)

  res.json(singleProduct)
});

// displaying products based on query parameters (like sorting)
app.get("/api/sorting/query", (req, res)=>{
    // console.log(req.query)
    const {search, limit} = req.query
    // console.log(search,limit);
    let sortedProducts= [ ...products ]
    if(search){
         sortedProducts = sortedProducts.filter( (product)=> {
            return product.name.startsWith(search);
        })
    }
    if(limit){
       return  sortedProducts = sortedProducts.slice(0, Number(limit))
    }
    if(sortedProducts.length <1 ){
    //    return  res.status(200).send("There are no products your searching for")
        return res.status(200).json({request: "sucess", data : ["no products found"] })
    }
    res.json(sortedProducts);
})
/* remember to give return keyword after certain condition,
  beacuse we can only send one response per request....
  if we want send more based on conditons (if,else) 
  we've give return keyword inOrder to tell express we are sending data 
  if we didn't give return keyword 
  it will give the first response and read the code contionusly  bla bla .....
*/ 

app.listen(3000,() => {
    console.log("Our Server is running on port 3000.....")
})

