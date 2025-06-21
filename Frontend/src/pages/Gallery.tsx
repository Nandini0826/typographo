import React from "react";

const Gallery = () => {
  return (
    <div className="bg-[#061039] text-[#E1F0F5] justify-between p-6 px-9 ">
      <h1 className="text-2xl">
        Printing technologies we are empowering currently
      </h1>
      <p className="p-4">
        Welcome to the heart of our mission. Our platform is built to connect
        minds, exchange knowledge, and uplift the printing industry — one
        connection at a time. Whether you're just stepping into the world of
        printing or you're an industry veteran, we bring together innovation,
        guidance, and community.
      </p>
      <div className="font-semibold">
        We are currently focusing on three major printing technologies that are
        transforming industries across the globe:
      </div>
      <br></br>
      <div>
        <h1 className="font-semibold text-xl">
          Offset Printing: The Backbone of Mass Printing
        </h1>
        <br></br>
        <p>
          Offset printing is a traditional, high-volume printing technique used
          primarily for books, magazines, newspapers, packaging, and marketing
          materials.
        </p>
        <p>
          Why it matters?
          <br></br>
          <ul>
            <li>Used in over 70% of commercial printing.</li>
            <li>Perfect for large-scale jobs due to low cost per unit.</li>
            <li>Provides high-quality, consistent results.</li>
          </ul>
        </p>

        <br></br>
        <div>
          Applications:
          <ul>
            <li>Flyers and posters</li>
            <li>Brochures</li>
            <li>Business cards</li>
            <li>Packaging</li>
          </ul>
        </div>
      </div>
      <br></br>
      <div>
        <h1 className="font-semibold text-xl">
          Screen Printing: Where Art Meets Fabric
        </h1>
        <br></br>
        <p>
          Screen printing involves using a stencil (or screen) to apply ink onto
          a surface. It’s widely used in textile, apparel, and custom design
          industries.
        </p>
        <p>
          Why it matters?
          <br></br>
          <ul>
            <li>Powers a $7.5 billion global apparel customization market.</li>
            <li>Great for vivid colors and unique materials.</li>
            <li>Low-cost setup for small businesses.</li>
          </ul>
        </p>

        <br></br>
        <div>
          Applications:
          <ul>
            <li>T-shirt & fabric printing</li>
            <li>Posters and signage</li>
            <li>Glass, ceramics, and plastic prints</li>
            <li>Stickers and decals</li>
          </ul>
        </div>
      </div>
      <br></br>
      <div>
        <h1 className="font-semibold text-xl">
          3D Printing: The Future is Now
        </h1>
        <br></br>
        <p>
          3D printing, or additive manufacturing, creates three-dimensional
          objects layer-by-layer from a digital file. This cutting-edge tech is
          revolutionizing industries.
        </p>
        <p>
          Why it matters?
          <br></br>
          <ul>
            <li> Disrupting manufacturing, healthcare, and education.</li>
            <li>
              {" "}
              Enables prototyping, custom parts, and low-volume production.
            </li>
            <li>Reduces material waste and speeds up innovation.</li>
          </ul>
        </p>

        <br></br>
        <div>
          Applications:
          <ul>
            <li>Product prototypes</li>
            <li>Medical models and prosthetics</li>
            <li>Architecture models</li>
            <li>Custom tools and fixtures</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
