import React from "react";
import {
  AiFillGoogleCircle,
  AiFillAmazonCircle,
  AiFillYoutube,
  AiFillInstagram,
} from "react-icons/ai";
 
const Home = () => {
  return (
    <>
      <div className="home" id="home">
        <main>
          <h1>Get-a-pet</h1>
          <p><i>  Until one has loved an animal, a part of one's soul remains unawakened!</i></p>
        </main>
      </div>

      <div className="home2">
        <img src="https://bcpetregistry.ca/wp-content/uploads/2018/04/Dog-cat-icon.png" alt="Graphics" />

        <div>
          <p>
          We take pride in the quality of our products and services, and we are committed to ensuring that your pet receives only the best. From premium pet food to cozy beds and fun toys, we have everything you need to keep your pet happy and healthy.
          </p>
        </div>
      </div>

      <div className="home3" id="about">
        <div>
          <h1>Who we are?</h1>
          <p>
          Welcome to Get-A-Pet, your one-stop-shop for all your pet needs! We are a premier pet store that offers a wide variety of pets, including dogs, cats, birds, fish, and small animals. At Get-A-Pet, we understand that pets are more than just animals - they are family members. That's why we are committed to providing the best products, services, and care for your furry friends.
          </p>
        </div>
         {/* <img id="sec" src="https://cdn-icons-png.flaticon.com/512/3460/3460335.png" alt="Graphics" /> */}
      </div>

      <div className="home4" id="links">
        <div>
          <h1>Links</h1>

          <article>
            <div
              style={{
                animationDelay: "0.3s",
              }}
            >
              <AiFillGoogleCircle />
              <p>Google</p>
            </div>

            <div
              style={{
                animationDelay: "0.5s",
              }}
            >
              <AiFillAmazonCircle />
              <p>Amazon</p>
            </div>

            <div
              style={{
                animationDelay: "0.7s",
              }}
            >
              <AiFillYoutube />
              <p>Youtube</p>
            </div>

            <div
              style={{
                animationDelay: "1s",
              }}
            >
              <AiFillInstagram />
              <p>Instagram</p>
            </div>
          </article>
        </div>
      </div>
    </>
  );
};

export default Home;
