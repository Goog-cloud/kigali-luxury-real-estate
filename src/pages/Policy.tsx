import Header from "../components/Header/PagesHeader";
import Footer from "../components/Footer/Footer";
import Cubes from "../assets/Images/Cubes.jpeg";

function Policy() {
  return (
    <div className="flex flex-col gap-10">
      <Header />
      <div className="font-sans text-gray-800">
        <header className="bg-gray-50 p-8 text-left">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div>
              <h1 className="text-lg md:text-xl lg:text-2xl font-bold text-[#001420]">
                We Advise Policy Makers
              </h1>
              <p className="mt-4 text-xl md:text-2xl text-[#001420]">
                Econometer Research Center advises governments and development
                partners in programme and strategy design and implementation.
              </p>
            </div>

            <p className="mt-2 text-sm md:text-base lg:text-lg">
              <a href="#" className="text-gray-600 underline">
                Econometer Research Center
              </a>{" "}
              advises governments, development partners, and foundations on the
              design and delivery of{" "}
              <a href="#" className="text-gray-600 underline">
                evidence-based strategies
              </a>{" "}
              and{" "}
              <a href="#" className="text-gray-600 underline">
                programmes for development.
              </a>
              Our presence in East Africa ensures our research and
              recommendations are built on the back of experience and input from
              the stakeholders who will be the ultimate beneficiaries.
            </p>
          </div>
        </header>

        <section className="flex flex-col md:flex-row gap-8 justify-center bg-gray-100 p-8">
          <h2 className="text-2xl md:text-3xl text-[#001420]">Why work with us?</h2>
          <ul className="list-disc mt-4 space-y-2 text-sm md:text-base text-[#001420]">
            <li>We understand the context</li>
            <li>We can mobilise rapidly</li>
            <li>We have the networks</li>
            <li>We can reach a large number of stakeholders rapidly</li>
            <li>
              Our recommendations are based on experience and evidence from
              within the region
            </li>
          </ul>
        </section>

        <section className="relative">
          <img
            src={Cubes}
            alt="Data Collection Background"
            className="w-full h-[300px] object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center">
          <h1 className="text-white text-4xl sm:text-3xl md:text-4xl lg:text-5xl text-center px-4">
  Ultimately, our goal is to amplify the voice and expand opportunities for the populations we serve, with a particular emphasis on those who are most disadvantaged.
</h1>
          </div>
        </section>

        <section className="flex flex-col md:flex-row bg-white p-8 gap-8 items-center justify-center">
          <div className="flex bg-[#001420] items-center justify-center rounded w-full md:w-1/2 h-56">
            <h3 className="text-lg md:text-xl font-semibold text-white text-center p-4">
              Highlights of our work in this area include:
            </h3>
          </div>

          <ul className="mt-4 space-y-2 text-sm md:text-base font-bold list-disc text-[#001420] w-full md:w-auto">
            <li>
              Input to the Design of Rwanda’s Covid-19 Economics Recovery Fund
              (2020)
            </li>
            <li>
              Design and Implementation of Wholegrain School Feeding Project for{" "}
              <a href="#" className="text-[#001420] underline">
                Rockefeller Foundation (2020)
              </a>
            </li>
            <li>
              Design of Rwanda’s Agricultural Private Sector Leveraging Strategy
              (2019)
            </li>
            <li>
              Design of Trademark East Africa’s Five-year Borderlands Programme
              for Eastern DRC (2018)
            </li>
            <li>
              Design of Rwanda’s Fourth Strategic Plan for the Transformation of
              Agriculture (PSTA4) (2018)
            </li>
          </ul>
        </section>
      </div>
      <Footer />
    </div>
  );
}

export default Policy;