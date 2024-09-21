import styles from "../styles/style";
import {
  navLinks,
  subsComponents,
  personalSubs,
  subsExtensions,
} from "../constants";
import { lastPage, buttonPreview, postInstagram } from "../assets";

const Subsproducts = () => {
  return (
    <section
      id="integration"
      className={`flex md:flex-row flex-col ${styles.paddingY}`}
    >
      <div
        className={`flex-1 ${styles.flexCenter} flex-col xl:px-0 sm:px-16 px-6`}
      >
        <div className="mx-auto max-w-2xl lg:text-center">
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Easy integration
          </p>
        </div>
        <h1 className="font-poppins text-[22px] mt-8 text-black ">
          SDK <br className="sm:block hidden" />{" "}
        </h1>
        <h2 className="text-base font-semibold leading-7 text-indigo-600">
          Crypto subscription easily in your app
        </h2>
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
              {subsComponents.map((feature) => (
                <div key={feature.name} className="relative pl-16">
                  <dt className="text-base font-semibold leading-7 text-gray-900">
                    <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                      <feature.icon
                        className="h-6 w-6 text-white"
                        aria-hidden="true"
                      />
                    </div>
                    {feature.name}
                  </dt>
                  <dd className="mt-2 text-base leading-7 text-gray-600">
                    {feature.description}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
        <br />
        <h1
          id="integration"
          className="font-poppins text-[22px] mt-8 text-black "
        >
          Hosted frontend platform <br className="sm:block hidden" />{" "}
        </h1>
        <h2 className="text-base font-semibold leading-7 text-indigo-600">
          Web page to help you with your users
        </h2>
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
              {personalSubs.map((feature) => (
                <div key={feature.name} className="relative pl-16">
                  <dt className="text-base font-semibold leading-7 text-gray-900">
                    <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                      <feature.icon
                        className="h-6 w-6 text-white"
                        aria-hidden="true"
                      />
                    </div>
                    {feature.name}
                  </dt>
                  <dd className="mt-2 text-base leading-7 text-gray-600">
                    {feature.description}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
        <div className="overflow-hidden mt-4">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="">
              <img
                src={lastPage}
                alt="Product screenshot"
                className=" h-full w-full  mt-10 rounded-xl shadow-xl ring-1 ring-gray-400/10  md:-ml-4 lg:-ml-0"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Subsproducts;
