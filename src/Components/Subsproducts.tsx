import styles from "../styles/style";
import { navLinks, subsComponents, personalSubs, subsExtensions } from "../constants";
import { personalSubsCopie, buttonPreview, postInstagram } from "../assets";


const Subsproducts = () => {
  return (
    <section
      id="home"
      className={`flex md:flex-row flex-col ${styles.paddingY}`}
    >
      <div
        className={`flex-1 ${styles.flexCenter} flex-col xl:px-0 sm:px-16 px-6`}
      >
        <h1 id="component" className="font-poppins font-semibold ss:text-[32px] text-[32px] text-white ">
          Subs Components <br className="sm:block hidden" />{" "}
        </h1>
        <div className="overflow-hidden py-24 sm:py-25">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto grid max-w-2xl grid-cols-1 gap-y-16 gap-x-8 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
              <div className="lg:pr-8 lg:pt-4">
                <div className="lg:max-w-lg">
                  <h2 className="text-base font-semibold leading-7 text-white text-[20px]">
                    Create and implement your own subscription system faster
                  </h2>
                  <p className="mt-2 text-3xl font-bold tracking-tight text-gradient sm:text-4xl">
                    A new income stream
                  </p>
                  <p className="mt-6 text-lg leading-8 text-white">
                    Make a fully customable plan, in only a few clicks. And use SUBS pugins in your projects.
                    Subscribers only need to sign a single transaction, they will thank you later.
                  </p>
                  <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                    {subsComponents.map((feature) => (
                      <div key={feature.name} className="relative pl-9">
                        <dt className="inline font-semibold text-white text-[15px]">
                          <feature.icon
                            className="absolute top-1 left-1 h-5 w-5 text-cyan-400"
                            aria-hidden="true"
                          />
                          {feature.name}
                        </dt>{" "}
                        <dd className="inline text-white">
                          {feature.description}
                        </dd>
                      </div>
                    ))}
                  </dl>
                </div>
              </div>
              <img
                src={buttonPreview}
                alt="Product screenshot"
                className="w-[48rem] max-w rounded-xl mt-20 shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0"
                width={2432}
                height={1442}
              />
            </div>
          </div>
        </div>
        <h1 id="personal" className="font-poppins font-semibold ss:text-[32px] text-[32px] text-white ">
          Personal Subs <br className="sm:block hidden" />{" "}
        </h1>
        <div className="overflow-hidden py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto grid max-w-2xl grid-cols-1 gap-y-16 gap-x-8 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">

              <div className="lg:pr-8 lg:pt-4">
                <div className="lg:max-w-lg">
                  <h2 className="text-base font-semibold leading-7 text-white text-[20px]">
                    Let your customers subscribe to your products easily on your
                    SUBS page
                  </h2>
                  <p className="mt-2 text-3xl font-bold tracking-tight text-gradient sm:text-4xl">
                    Perfect for entrepreneurs
                  </p>
                  <p className="mt-6 text-lg leading-8 text-white">
                    Stop dealing with old and slow methods of payments. Just customize your own page on SUBS website.
                    We take care of the rest.
                  </p>
                  <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                    {personalSubs.map((feature) => (
                      <div key={feature.name} className="relative pl-9">
                        <dt className="inline font-semibold text-white text-[15px]">
                          <feature.icon
                            className="absolute top-1 left-1 h-5 w-5 text-cyan-400"
                            aria-hidden="true"
                          />
                          {feature.name}
                        </dt>{" "}
                        <dd className="inline text-white">
                          {feature.description}
                        </dd>
                      </div>
                    ))}
                  </dl>
                </div>
              </div>
              <img
                src={personalSubsCopie}
                alt="Product screenshot"
                className="w-[48rem] max-w mt-10 rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0"
                width={2432}
                height={1442}
              />
            </div>
          </div>
        </div>
        <h1 id="extensions" className="font-poppins font-semibold ss:text-[32px] text-[32px] text-white  ">
          Subs Extensions <br className="sm:block hidden" />{" "}
        </h1>
        <div className="overflow-hidden py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto grid max-w-2xl grid-cols-1 gap-y-16 gap-x-8 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
              <div className="lg:pr-8 lg:pt-4">
                <div className="lg:max-w-lg">
                  <h2 className="text-base font-semibold leading-7 text-white text-[20px]">
                    Give visibility to your plan directly on social media.
                  </h2>
                  <p className="mt-2 text-3xl font-bold tracking-tight text-gradient sm:text-4xl">
                    Monetize your influence
                  </p>
                  <p className="mt-6 text-lg leading-8 text-white">
                    SUBS extensions make it easy to subscribe and support your favorite content creator.
                    All all directly from your favorite social media page.
                  </p>
                  <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                    {subsExtensions.map((feature) => (
                      <div key={feature.name} className="relative pl-9">
                        <dt className="inline font-semibold text-white text-[15px]">
                          <feature.icon
                            className="absolute top-1 left-1 h-5 w-5 text-cyan-400"
                            aria-hidden="true"
                          />
                          {feature.name}
                        </dt>{" "}
                        <dd className="inline text-white">
                          {feature.description}
                        </dd>
                      </div>
                    ))}
                  </dl>
                </div>
              </div>
              <img
                src={postInstagram}
                alt="Product screenshot"
                className="w-4/6 rounded-xl shadow-xl ring-1 ring-gray-400/10  md:-ml-4 lg:-ml-0"
                width={2432}
                height={1442}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Subsproducts;
