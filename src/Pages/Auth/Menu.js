import React from 'react';
import Cards from 'Components/Cards';
import { useCart } from './CartContext';
import { useEffect } from 'react';
import Header from 'Components/Header';

export default function Menu() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const { addToCart } = useCart();
  // Espresso products
  const espressoProducts = [
    {
      btn: "Add to cart",
      heading: "Espresso",
      img: "https://blogstudio.s3.theshoppad.net/coffeeheroau/ec178d83e5f597b162cda1e60cb64194.jpg",
      price: "$3.50"
    },
    {
      btn: "Add to cart",
      heading: "Latte",
      img: "https://i.pinimg.com/564x/6a/86/c3/6a86c387495a30851e5843a582c7b6f2.jpg",
      price: "$4.00"
    },
    {
      btn: "Add to cart",
      heading: "Americano",
      img: "https://popmenucloud.com/cdn-cgi/image/width%3D1440%2Cheight%3D1440%2Cfit%3Dscale-down%2Cformat%3Dauto%2Cquality%3D60/qvtwsegp/33e2a4f7-9cff-41f2-aef4-2b69d37612d7.jpg",
      price: "$3.75"
    },
    {
      btn: "Add to cart",
      heading: "Cappuccino",
      img: "https://lorcoffee.com/cdn/shop/articles/Cappuccino-exc.jpg?format=pjpg&v=1684870907&width=749",
      price: "$4.25"
    },
    {
      btn: "Add to cart",
      heading: "Flat White",
      img: "https://www.foodandwine.com/thmb/BzAPlKJh_Rg8bMsyBzTtFLqEqn8=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Partners-Flat-White-FT-BLOG0523-b11f6273c2d84462954c2163d6a1076d.jpg",
      price: "$4.00"
    },
    {
      btn: "Add to cart",
      heading: "Macchiato",
      img: "https://i.pinimg.com/564x/ca/ba/19/caba197c51f04089a90f907073843a7b.jpg",
      price: "$3.75"
    }
  ];

  // Products for Cold Brews
  const coldBrewProducts = [
    {
      btn: "Add to cart",
      heading: "Cold Brew",
      img: "https://www.simplyrecipes.com/thmb/iCUy4YwLzRlgu_379eKu3UoNwQk=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Simply-Recipes-Cold-Brew-Coffee-LEAD-16-428691bcdd594281b2f5dc6dbc8235e4.jpg",
      price: "$5.00"
    },
    {
      btn: "Add to cart",
      heading: "Iced Latte",
      img: "https://coffeeaffection.com/wp-content/uploads/2019/10/how-to-make-iced-latte.jpg",
      price: "$4.50"
    },
    {
      btn: "Add to cart",
      heading: "Iced Americano",
      img: "https://www.usa.philips.com/c-dam/b2c/master/experience/ho/philips-chef/recipe/drinks-and-ice-creams/iced-americano/iced-americano-main-thumb.jpg",
      price: "$4.25"
    },
    {
      btn: "Add to cart",
      heading: "Nitro Iced Brew",
      img: "https://costracoffee.com/wp-content/uploads/2023/03/nitro-brew.jpg",
      price: "$5.50"
    },
    {
      btn: "Add to cart",
      heading: "Iced Chai Latte",
      img: "https://costracoffee.com/wp-content/uploads/2023/03/Iced-Chai-Latte-Recipe-10.jpg",
      price: "$4.75"
    },
    {
      btn: "Add to cart",
      heading: "Iced Caramel Macchiato",
      img: "https://www.allrecipes.com/thmb/hHZ8OjScUDlL9l5XJjYyWM9KAGw=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/258686-IcedCaramelMacchiato-ddmps-4x3-104704-2effb74f7d504b8aa5fbd52204d0e2e5.jpg",
      price: "$5.25"
    }
  ];

  //  Products for Bakery Treats
  const bakeryTreatsProducts = [
    {
      btn: "Add to cart",
      heading: "Croissants",
      img: "https://assets.zuckerjagdwurst.com/u4q97pkqszcdxj62j8adg1z9xdpz/1110/701/55/true/center/R870-Vegane-Schoko-Croissants-01.webp?animated=false",
      price: "$2.50"
    },
    {
      btn: "Add to cart",
      heading: "Muffins",
      img: "https://i0.wp.com/smittenkitchen.com/wp-content/uploads/2022/05/double-chocolate-chip-muffins-3-scaled.jpg?resize=750%2C500&ssl=1",
      price: "$3.00"
    },
    {
      btn: "Add to cart",
      heading: "Bagels",
      img: "https://i.pinimg.com/736x/a1/df/84/a1df8441bb7157f482392d9787a652e3.jpg",
      price: "$2.75"
    },
    {
      btn: "Add to cart",
      heading: "Scones",
      img: "https://i.pinimg.com/564x/4e/e6/ba/4ee6ba6e19a7e28dd1ffe9e618192495.jpg",
      price: "$3.25"
    },
    {
      btn: "Add to cart",
      heading: "Cinnamon Rolls",
      img: "https://i.pinimg.com/564x/a4/4b/f9/a44bf920fd9e3906d4c01668aab47a5b.jpg",
      price: "$3.50"
    },
    {
      btn: "Add to cart",
      heading: "Danishes",
      img: "https://i.pinimg.com/736x/84/3b/f0/843bf0ee789530b80ea000596ddbeff7.jpg",
      price: "$3.00"
    }
  ];

  return (

    <div>
      <Header heading=" Our Menu" />
      {/* Espresso Classics */}
      <section>
        <div className="container">
          <h1 className='text-center'> Espresso Classics </h1>
          <p className='text-center mt-3'>-----•☕︎•------</p>
          <div className="row">
            {espressoProducts.map((product, index) => (
              <div key={index} className="col-12 col-md-6 col-lg-4 mt-3">
                <Cards
                  btn={product.btn}
                  heading={product.heading}
                  img={product.img}
                  price={product.price}
                  addToCart={addToCart}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cold Brews */}
      <section>
        <div className="container">
          <h1 className='text-center'> Cold Brews </h1>
          <p className='text-center mt-3'>-----•☕︎•------</p>
          <div className="row">
            {coldBrewProducts.map((product, index) => (
              <div key={index} className="col-12 col-md-6 col-lg-4 mt-3">
                <Cards
                  btn={product.btn}
                  heading={product.heading}
                  img={product.img}
                  price={product.price}
                  addToCart={addToCart}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Bakery Treats */}
      <section>
        <div className="container">
          <h1 className='text-center'> Bakery Treats </h1>
          <p className='text-center mt-3'>-----•☕︎•------</p>
          <div className="row">
            {bakeryTreatsProducts.map((product, index) => (
              <div key={index} className="col-12 col-md-6 col-lg-4 mt-3">
                <Cards
                  btn={product.btn}
                  heading={product.heading}
                  img={product.img}
                  price={product.price}
                  addToCart={addToCart}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}