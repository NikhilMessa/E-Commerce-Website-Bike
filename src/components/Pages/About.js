import React from "react";
import Header from "../Common/Header";
import Footer from "../Common/Footer";
import YTVideo from "../Common/YTVideo";

import image from "../assets/img/about-bg.jpg";
import aboutright from "../assets/img/aboutright.png";

const About = () => {
  return (
    <div>
      <div className="container">
        <Header title="about" titlemain="about" image={image} />
        <div className="about-main">
          <div className="about-left">
            <h2>About Us</h2>
            <p>
              We’ve all experienced the beauty of the trail or the freedom of
              the open road. For many, cycling presents a world of possibilities
              and opportunities at every turn. At Jenson USA, our passion for
              cycling sprouted back in 1994 and has since taken root and grown
              into a community of people devoted to living life to its fullest.
              We're building a culture of people who respect each other, set the
              pace, and lead through service. We strive daily to better serve
              our customers, our fellow employees, and our community. Over the
              years we’ve found that happy people are hardworking people, and
              that the time we spend on two wheels together builds the greatest
              profit of all.
            </p>
            <p>
              We all approach life with different stories and special
              experiences that have shaped us into who we are as individuals.
              Deep down, it's a love of adventure that brings us together,
              inspires us to push the limits of what we are capable of, and
              daily rediscover the freedom found when we first started pedaling.
            </p>
          </div>
          <div className="about-right">
            <img src={aboutright} alt="quote    " />
          </div>
        </div>
        <YTVideo url="https://youtu.be/aQ6CGU_9yHo" />
        <div className="values-wrapper">
          <h2>Our Core Values</h2>
          <div className="values">
            <div className="value">
              <h3>Customers are everything. show them the love</h3>
              <p>
                We simply exist to serve our customers and to deliver superior
                customer experiences. We're a service company first that happens
                to be selling bicycles, parts and accessories.
              </p>
            </div>
            <div className="value">
              <h3>set the pace</h3>
              <p>
                At Jenson USA we thrive on establishing the standard that other
                companies look to as the example/benchmark.
              </p>
            </div>
            <div className="value">
              <h3>be honest and open</h3>
              <p>
                When we say "Be Honest" we mean to stick to our values, follow
                through on our commitments, and be willing to admit when we have
                fallen short of those expectations.
              </p>
            </div>
            <div className="value">
              <h3>together we can do anything</h3>
              <p>
                It is our core belief that companies do not grow in and of
                themselves, but rather that people grow and bring companies
                along with them.
              </p>
            </div>
            <div className="value">
              <h3>be a sustainable buisness</h3>
              <p>
                It's important that at Jenson USA we consider the impact of our
                decisions in a financially, environmentally and socially
                responsible way.
              </p>
            </div>
            <div className="value">
              <h3>demonstrate leadership through serving others</h3>
              <p>
                We maximize our likelihood of achieving success when we seek to
                serve others first.
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default About;
