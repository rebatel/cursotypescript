interface CartItem {
    id: number;
    title: string;
    variantId: number;
  }
  
  function addToCart(item: CartItem) {
    console.log(`Adding "${item.title}" to cart.`);
  }
  
  addToCart({ id: 1, title: 'shoes', variantId: 123 }); // Agora requer variantId
  addToCart({ id: 2, title: 'Shirt', variantId: 456 }); // Exemplo com outro item
  
  // Se você quiser lidar com a possibilidade de variantId ser opcional:
  
  interface CartItemOptionalVariant {
    id: number;
    title: string;
    variantId?: number; // O ponto de interrogação torna variantId opcional
  }
  
  function addToCartOptional(item: CartItemOptionalVariant) {
    console.log(`Adding "${item.title}" to cart.`);
    if (item.variantId) {
      console.log(`Variant ID: ${item.variantId}`);
    }
  }
  
  addToCartOptional({ id: 1, title: 'shoes' }); // OK, variantId opcional
  addToCartOptional({ id: 2, title: 'Shirt', variantId: 789 }); // OK, variantId presente