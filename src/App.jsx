import './index.css';
function App() {
  return (
    <div className="App">
      <header className='grid'>
        <img src="assets/images/logo.svg" alt="" />
        <ul>
          <li> <a href="/">Home</a> </li>
          <li> <a href="/">New</a> </li>
          <li> <a href="/">Popular</a> </li>
          <li> <a href="/">Trending</a> </li>
          <li> <a href="/">Categories</a> </li>
        </ul>
      </header>

      <main className='grid'>

        <article className="featured">
          <img src="assets/images/image-web-3-desktop.jpg" alt="" />

          <div className='grid'>
            <h1 className='title'>The Bright Future of Web 3.0?</h1>
            <div className='title-text'>
              <p>We dive into the next evolution of the web that claims to put the power of the platform
                back into the hands of the people. But is it really fulfilling its promise?
              </p>
              <button>READ MORE</button>
            </div>

          </div>
        </article>

        <aside>
          <h2>New</h2>
          <div className='text'>
            <h3>Hydrogen VS Electric Cars</h3>
            <p>Will hydrogen-fueled cars ever catch up to EVs?</p>
          </div>

          <div className='text'>
            <h3>The Downsides of AI Artistry</h3>
            <p>What are the possible adverse effects of on-demand AI image generation?</p>
          </div>

          <div className='text'>
            <h3>Is VC Funding Drying Up?</h3>
            <p>Private funding by VC firms is down 50% YOY. We take a look at what that means.</p>
          </div>

        </aside>

        <article className='unfeatured  one'>
          <img src="assets/images/image-retro-pcs.jpg" alt="" />
          <div className='text'>
            <h2>01</h2>
            <h4>Reviving Retro PCs</h4>
            <p>What happens when old PCs are given modern upgrades?</p>
          </div>

        </article>


        <article className='unfeatured two'>
          <img src="assets/images/image-top-laptops.jpg" alt="" />
          <div className='text'>
            <h2>02</h2>
            <h4>Top 10 Laptops of 2022</h4>
            <p>Our best picks for various needs and budgets.</p>
          </div>
        </article>


        <article className='unfeatured three'>

          <img src="assets/images/image-gaming-growth.jpg" alt="gaming image" />

          <div className='text'>
            <h2>03</h2>
            <h4>The Growth of Gaming</h4>
            <p>How the pandemic has sparkled fresh opportunities.</p>
          </div>
        </article>
      </main>
    </div >
  );
}

export default App;