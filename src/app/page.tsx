import SectionTwoKeyPoint from "@/components/section-two-key-point";
import SectionOneItem from "@/components/section-one-item";

export default function Home() {
  return (
    <div>
      <section className="section-1">
        <h2 className="section-title">
          What makes us different makes them stronger
        </h2>
        <div className="section-1-content">
          <div className="section-1-items">
            <SectionOneItem
              title="Real Food"
              decscription="Wholesome recipes for dogs with real meat and veggies."
              image="/food-1.png"
            />

            <SectionOneItem
              title="Premium Ingredient"
              decscription="Elevating pet care with unmatched safety and quality."
              image="/food-2.png"
            />
          </div>
          <div className="section-1-image">
            <img src="/section-1-image.png" alt="Food Image" />
          </div>
          <div className="section-1-items">
            <SectionOneItem
              title="Made Fresh"
              decscription="We prioritize maintaining the integrity of whole foods and nutrition."
              image="/food-3.png"
            />

            <SectionOneItem
              title="Vet Developed"
              decscription="We raise the bar for dog nutrition, surpassing industry expectations."
              image="/food-4.png"
            />
          </div>
        </div>

        <div className="section-1-action">
          <button className="section-1-button">
            Get your dog's healthy meal today!
          </button>
          <div className="section-1-action-desc">
            <div className="section-1-action-desc-text">
              <img src="/Vector.png" alt="shield icon" />
              30-day money back guarantee
            </div>
            <div className="section-1-action-desc-payments">
              <img src="/payment-1.png" alt="Paypal payment" />
              <img src="/payment-2.png" alt="Visa payment" />
              <img src="/payment-3.png" alt="MasterCard payment" />
              <img src="/payment-4.png" alt="Apple pay payment" />
              <img src="/payment-5.png" alt="Google pay payment" />
            </div>
          </div>
        </div>
      </section>
      <section className="section-2">
        <div className="section-2-content">
          <div>
            <h2 className="section-title">
              Nutrition is the foundation for longer, healthier lives in dogs.
            </h2>
            <p className="section-2-text">
              Invest in your dog's future with our scientifically formulated
              superfood-powered supplements. Give them the nutrition they
              deserve and watch them thrive with vitality, energy, and the joy
              of a longer, healthier life.
            </p>
          </div>

          <div>
            <h3 className="key-points">Key Points:</h3>
            <SectionTwoKeyPoint
              percent={97}
              description="Dogs choose our dog food over leading brands because of its real functional ingredients and delicious flavor."
            />
            <SectionTwoKeyPoint
              percent={84}
              description="Our dog food provides superior nutrition and a patented probiotic for optimal nutrient absorption."
            />
            <SectionTwoKeyPoint
              percent={92}
              description="Our dog food's high protein and fat digestibility contribute to ideal stool quality."
            />
          </div>

          <button className="section-1-button">
            Give your furry friend the gift of wholesome nutrition
          </button>
        </div>

        <div className="section-2-image">
          <img src="/doc.png" alt="Dog" />
        </div>
      </section>

      <section className="section-3">
        <div className="section-3-item">
          <div className="section-3-image">
            <img src="/dogs.gif" alt="Dog with food" />
          </div>
          <div className="section-3-content">
            <h2 className="section-title">
              Improve overall gastrointestinal health for better nutrient
              absorption
            </h2>
            <p className="section-3-text">
              Through rigorous scientific studies and consultations with
              veterinarians, we have created a breakthrough formula exclusively
              tailored to combat the health challenges prevalent in dogs. A
              staggering 91% of our customers have reported significant
              improvements in their dogs' health after incorporating our product
              into their diet.
            </p>
          </div>
        </div>
        <div className="section-3-item">
          <div className="section-3-content">
            <h2 className="section-title">
              Improve overall gastrointestinal health for better nutrient
              absorption
            </h2>
            <p className="section-3-text">
              Through rigorous scientific studies and consultations with
              veterinarians, we have created a breakthrough formula exclusively
              tailored to combat the health challenges prevalent in dogs. A
              staggering 91% of our customers have reported significant
              improvements in their dogs' health after incorporating our product
              into their diet.
            </p>
          </div>
          <div className="section-3-image">
            <img src="/foodgif.jpg" alt="Dog with food" />
          </div>
        </div>
      </section>
    </div>
  );
}
