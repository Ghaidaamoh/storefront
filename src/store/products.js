const initialState ={
    products :[
        {name:'TV',description:'Full HD Smart TV | Samsung',category: 'ELECTRONICS',price:'700$',inventoryCount:'20',image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOrkZ5SlIP2o3rOha2GZ6Lko4jTLOZIVhw3A&usqp=CAU'},
        {name:'MAcbook Pro',description:'Apple MacBook Pro 13-inch (M1, 2020) | TechRadar',category: 'ELECTRONICS',price:'1200 $',inventoryCount:'5',image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIRL3h_viRI5GAsx9JEMpe-hlN-aGYN6Y7Tg&usqp=CAU'},
        {name:'Burger',description:' Beef Burger ',category: 'FOOD',price:'12 $',inventoryCount:'unlimited',image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-oOckEyhvgEp5WGfKsg1bZVT_q0mSqa4nCw&usqp=CAU'},
        {name:'SALAD',description:'Tofu & Watercress Salad with Mango & Avocado Recipe |',category: 'FOOD',price:'7 $',inventoryCount:'15',image: 'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F44%2F2021%2F02%2F04%2Fwatercress-salad-honey-Balsamic-tofu-2000.jpg&q=85'}
    ],
    activeProduct:[]
}

export default (state = initialState, action) =>{
    const {type,payload}= action;
    switch(type){
        case'ACTIVE_CATEGORY':
        let activated = state.products.filter(item =>{
            return item.category === payload;
        })
        return {
            products: state.products, 
            activeProduct:activated
        };
        case 'REMOVE':
            let removing = state.products.map(item =>{
                if(item.name == payload.name && item.inventoryCount >0){
                    item.inventoryCount = item.inventoryCount - 1;
                }
                if(item.inventoryCount === 0){
                    return item.inventoryCount = 'Out Of Stock';
                }
                return item;
            });
        return {
            products: removing,
            activeProduct: state.activeProduct
        }
        default:
          return state;
    }
}

export function productActive(name){
    return{
        type:'ACTIVE_CATEGORY',
        payload:name
    }
}

export function inventory(name){
    return{
        type:'REMOVE',
        payload: name
    }
}