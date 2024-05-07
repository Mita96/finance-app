import Klarna from "../assets/logo-wall/klarna.png";
import Stripe from "../assets/logo-wall/stripe.png";
import PayPall from "../assets/logo-wall/paypal.png";
import Bedc from "../assets/logo-wall/bedc.png";
import MasterCard from "../assets/logo-wall/mastercard.png";
import Mtn from "../assets/logo-wall/mtn.png";
import Airtel from "../assets/logo-wall/airtel.png";
import Payoneer from "../assets/logo-wall/payoneer.png";
import Visa from "../assets/logo-wall/visa.png";
import Mobile from "../assets/logo-wall/mobile.png";
import Ikeja from "../assets/logo-wall/ikeja.png";
import Dstv from "../assets/logo-wall/dstv.png";

import LogoWall from "../common/LogoWall";

function Partners() {
  return (
    <section id="partners" className=" mt-20 flex flex-col bg-gray-200 py-20">
      <article className="mb-10 w-full px-8 text-center lg:px-12">
        <h2 className=" mb-4 text-4xl  font-semibold text-orange-500">
          Lorem, ipsum dolor.....
        </h2>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore minus
          porro <br />
          deleniti modi pariatur magnam nemo laborum vel ullam. Similique ipsam
          eum cumque.
        </p>
      </article>
      <div className=" xl:flex xl:justify-center">
        <LogoWall
          src1={Klarna}
          src2={Stripe}
          src3={PayPall}
          alt1="Klarna Logo"
          alt2="Stripe Logo"
          alt3="PayPal Logo"
        ></LogoWall>
        <LogoWall
          src1={Bedc}
          src2={MasterCard}
          src3={Mtn}
          alt1="Bedc Logo"
          alt2="MasterCard Logo"
          alt3="Mtn Logo"
        ></LogoWall>
      </div>
      <div className=" xl:flex xl:justify-center">
        <LogoWall
          src1={Airtel}
          src2={Payoneer}
          src3={Visa}
          alt1="Airtel Logo"
          alt2="Payoneer Logo"
          alt3="Visa Logo"
        ></LogoWall>
        <LogoWall
          src1={Mobile}
          src2={Ikeja}
          src3={Dstv}
          alt1="Mobile Logo"
          alt2="Ikeja Logo"
          alt3="Dstv Logo"
        ></LogoWall>
      </div>
    </section>
  );
}

export default Partners;
