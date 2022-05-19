import React,{useState,useEffect} from "react";
import SearchBar from "./ShopPage/SearchBar";
import Categories from "./ShopPage/Categories";
import ShoppingItems  from "./ShopPage/ShopItemCenter"
import itemData from "./ShopPage/ShopItemsData";


const Shop = () => {
const [number,setNumber]=useState(0)
const [items,setItems] = useState([])

useEffect(()=>{
const onLoad = itemData.filter((item)=> item.category === "chairs")
setItems(onLoad)  
},[])

const AddItem = ()=>{
  const newNum = number + 1 
  setNumber(newNum)
}


const filterItems = (category)=>{
  const newItems = itemData.filter((item)=> item.category === category)
  setItems(newItems)
 }

const Cart = ()=>{
  return(<div id="cart" onClick={AddItem}/>)
}


return <section id='shop-page'>
        <SearchBar count={number}/>
        <Categories filterItems={filterItems} />
       <div style={{width:'100%',
          height:'5px',
          background:'#E58411',
          marginTop:'7px'}}>
        </div>
        <ShoppingItems Cart={Cart} items={items}/>
    </section>;
  
}

export default Shop;
