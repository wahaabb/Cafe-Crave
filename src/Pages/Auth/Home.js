import Cards from 'Components/Cards'
import React from 'react'
import img from '/projects/coffee-shop/src/Assets/Capture.PNG'
import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import Header from 'Components/Header'
export default function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <Header brand="Café Crave" heading="Indulge Your Coffee Cravings" para="Revive your senses with our aromatic brews, Experience coffee like never before." />
      <section className='mb-5'>
        <div className="container mt-5 ">
          <h1 className='text-center mt-5'>About Us</h1>
          <p className='text-center mt-3'>-----•☕︎•------</p>
          <div className="row category mt-5">
            <div className="col-md-6 col-lg-6 col-sm-12 mt-3">
              <div className="abt-pic"></div>
            </div>
            <div className="col-md-6 col-lg-6 col-sm-12  ">
              <h2 className='mt-3'>What makes our Coffee special?</h2>
              <p>"Our coffee is special because we source premium beans from around the world, roast them to perfection, and craft each cup with care. From rich, aromatic blends to unique single-origin brews, every sip reflects our commitment to quality and excellence.Every cup is a blend of meticulous craftsmanship and passion, ensuring a unique flavor experience. We’re dedicated to bringing you the best in every sip, making each visit memorable.
                Our dedication to sourcing the finest beans and perfecting each brew means every cup offers a moment of pure coffee bliss."
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className='text-center mt-5'>
        <div className="container ">
          <h1 className='text-center'>Top Categories </h1>
          <p className='text-center mt-3'>-----•☕︎•------</p>
          <p>Explore our top categories and discover your next favorite brew or treat.</p>
          <div className="row category ">
            <div className='col-md-6 col-sm-12 col-lg-4 mt-4'>
              <Cards
                link="/menu" btn="See Menu" title="Indulge in the rich flavors of our expertly crafted espresso drinks." heading="Espresso Classics" img="https://i.pinimg.com/564x/6a/86/c3/6a86c387495a30851e5843a582c7b6f2.jpg" />
            </div>
            <div className='col-md-6 col-sm-12 col-lg-4 mt-4'>
              <Cards link="/menu" btn="See Menu" title="Refresh your day with our smooth, chilled cold brew creations." heading="Cold Brews" img="https://i.pinimg.com/564x/ba/d0/14/bad014cfb7b8255a34383caaff8f59fe.jpg" />
            </div>
            <div className='col-md-6 col-sm-12 col-lg-4 mt-4'>
              <Cards link="/menu" btn="See Menu" title="Pair your coffee with our fresh, delicious bakery delights." heading="Bakery Treats" img="https://miro.medium.com/v2/resize:fit:720/format:webp/1*aZRfmnz8r8_eaAuCYZGGHg.jpeg" />
            </div>
          </div>
        </div>
      </section>
      <section className='text-center mt-5'>
        <div className="container">
          <h1>Our Menu</h1>
          <p className='text-center mt-3'>-----•☕︎•------</p>
          <div className="row category">
            <div className="col-md-6 col-sm-12 col-lg-6 ">
              <h2>Menu Layout</h2>
              <p>Our menu offers something for everyone, from rich Espresso Classics to refreshing Cold Brews. Pair your favorite drink with a fresh Bakery Treat, and enjoy a delightful culinary experience tailored to your taste</p>
              <Link to="/menu" className='btn'>Veiw Menu</Link>
            </div>
            <div className="col-md-6 col-sm-12 col-lg-6 mt-4">
              <div className='w-100 '>
                <img src={img} className='menu-pic' alt="" srcset="" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}