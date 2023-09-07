<template>
  <main class="flex gap-5">
    <div class="flex-[2] flex flex-col gap-12">
      <h2 class="text-6xl relative w-fit">About Us</h2>
      <p class="text-xl">
        "Shenron's Tiny Trinkets" began with a deep love for Dragon Ball Z. As
        lifelong fans, we wanted to create a place where fellow enthusiasts
        could find unique collectibles. We scoured the globe to bring you the
        best Dragon Ball Z merchandise, from figurines to keychains. Our mission
        is simple: celebrate the Dragon Ball Z legacy with our diverse community
        of collectors and fans. Thank you for being a part of our journey, and
        may your adventures in the world of Dragon Ball Z be as epic as the
        series itself.
      </p>
      <div class="bg-[#1E1E1E] p-5 rounded-md">
        <h4 class="text-4xl text-primary mb-5 flex items-center">Our Vision&nbsp; <img
            src="https://i.postimg.cc/C5XKWrwP/red-Star-min.png"
            alt="red star"
            class="h-1/2"
          /></h4>
        <p class="text-lg">
          At Shenron's Tiny Trinkets, our vision is to be the ultimate
          destination for Dragon Ball Z enthusiasts, a place where the magic and
          excitement of this beloved anime series come to life. We aim to create
          a vibrant online community of fans, collectors, and cosplayers who
          share our passion for the Dragon Ball Z universe. Our vision is to
          continually expand our offerings, foster creativity, and provide a
          one-of-a-kind experience that keeps the spirit of Dragon Ball Z alive
          for generations to come.
        </p>
      </div>
      <div class="bg-[#1E1E1E] p-5 rounded-md">
        <h4 class="text-4xl text-primary mb-5 flex items-center">
          Our Mission&nbsp;
          <img
            src="https://i.postimg.cc/C5XKWrwP/red-Star-min.png"
            alt="red star"
            class="h-1/2"
          />
          <img
            src="https://i.postimg.cc/C5XKWrwP/red-Star-min.png"
            alt="red star"
            class="h-1/2"
          />
        </h4>
        <p class="text-lg">
          Our mission is to deliver the most captivating Dragon Ball Z trinkets
          and merchandise while offering exceptional customer service. We're
          committed to curating a diverse selection of high-quality products
          that cater to fans of all ages. We strive to make the world of Dragon
          Ball Z more accessible by providing unique customization options,
          allowing fans to connect with their favorite characters in a personal
          way. Through our mission, we aim to ignite and celebrate the passion
          that unites Dragon Ball Z fans worldwide.
        </p>
      </div>
      <div class="bg-[#1E1E1E] p-5 rounded-md">
        <h4 class="text-4xl text-primary mb-5 flex items-center">
          Our Values&nbsp;
          <img
            src="https://i.postimg.cc/C5XKWrwP/red-Star-min.png"
            alt="red star"
            class="h-1/2"
          />
          <img
            src="https://i.postimg.cc/C5XKWrwP/red-Star-min.png"
            alt="red star"
            class="h-1/2"
          />
          <img
            src="https://i.postimg.cc/C5XKWrwP/red-Star-min.png"
            alt="red star"
            class="h-1/2"
          />
        </h4>
        <ol class="flex flex-col gap-3">
          <li>
            <p class="text-xl">
              <span class="text-3xl text-secondary"
                ><span class="text-primary">1.</span> Quality</span
              > : We are driven by our unwavering passion for Dragon Ball Z, and
              we infuse this passion into everything we do.
            </p>
          </li>
          <li>
            <p class="text-xl">
              <span class="text-3xl text-secondary"
                ><span class="text-primary">2.</span> Community</span
              > : We are dedicated to offering only the finest, officially
              licensed Dragon Ball Z merchandise, ensuring that every product
              meets our high standards of quality.
            </p>
          </li>
          <li>
            <p class="text-xl">
              <span class="text-3xl text-secondary"
                ><span class="text-primary">3.</span> Innovation</span
              > : We value our community of fans and collectors and actively
              engage with them through events, social media, and collaborations.
            </p>
          </li>
          <li>
            <p class="text-xl">
              <span class="text-3xl text-secondary"
                ><span class="text-primary">4.</span> Integrity</span
              > : We constantly explore new ways to enhance the Dragon Ball Z
              experience, from unique trinket designs to interactive features on
              our website.
            </p>
          </li>
          <li>
            <p class="text-xl">
              <span class="text-3xl text-secondary"
                ><span class="text-primary">5.</span> Passion</span
              > : We operate with honesty and integrity in every aspect of our
              business, building trust with our customers and partners.
            </p>
          </li>
          <li>
            <p class="text-xl">
              <span class="text-3xl text-secondary"
                ><span class="text-primary">6.</span> Customer-Centric</span
              > : Our customers are at the heart of everything we do. We
              prioritize their needs and strive to exceed their expectations.
            </p>
          </li>
          <li>
            <p class="text-xl">
              <span class="text-3xl text-secondary"
                ><span class="text-primary">7.</span> Sustainability</span
              > : We are committed to environmentally responsible practices,
              making conscious choices to reduce our impact on the planet.
            </p>
          </li>
        </ol>
      </div>
    </div>
    <div class="flex-1">
      <img
        src="https://i.postimg.cc/zBdBJcXS/column-banner-min.png"
        alt="character column"
        class="w-full"
      />
    </div>
  </main>
</template>

<script>
export default {};
</script>

<style scoped>
h2::before {
  content: "";
  position: absolute;
  width: 60%;
  height: 2px;
  bottom: 0;
  left: 0;
  background-color: var(--primary-color);
  border-radius: 999px;
}

h2::after {
  content: "";
  position: absolute;
  width: 60%;
  height: 2px;
  bottom: -15%;
  right: 0;
  background-color: var(--secondary-color);
  border-radius: 999px;
}
</style>
