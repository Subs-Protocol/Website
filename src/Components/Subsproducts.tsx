import styles from "../styles/style";
import { navLinks, subsComponents, personalSubs, subsExtensions } from "../constants";
import { personalSubsCopie, buttonPreview, postInstagram } from "../assets";


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
          <p className="mt-6 text-lg leading-8 text-gray-600">
            We've made it easy to implement Subs with code or no-code, thanks to our components, personal pages and more.
          </p>
        </div>
        <h1 className="font-poppins text-[22px] mt-8 text-black ">
          Subs Components <br className="sm:block hidden" />{" "}
        </h1>
        <h2 className="text-base font-semibold leading-7 text-indigo-600">Subs in your app</h2>
        <div className="overflow-hidden py-8 sm:py-25">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto grid max-w-2xl grid-cols-1 gap-y-16 gap-x-8 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
              <div className="lg:pr-8 lg:pt-4">
                <div className="lg:max-w-lg">
                  <h2 className="text-base leading-7 text-black text-[20px]">
                    Create and implement your own subscription system faster
                  </h2>
                  <p className="mt-2 text-3xl font-bold tracking-tight text-secondary sm:text-4xl">
                    A new income stream
                  </p>
                  <p className="mt-6 text-lg leading-8 text-black">
                    Make a fully customable plan, in only a few clicks. And use Subs plugins in your projects.
                    Subscribers only need to sign a single transaction, they will thank you later.
                  </p>
                  <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                    {subsComponents.map((feature) => (
                      <div key={feature.name} className="relative pl-9">
                        <dt className="inline font-semibold text-black text-[15px]">
                          <feature.icon
                            className="absolute top-1 left-1 h-5 w-5 text-secondary"
                            aria-hidden="true"
                          />
                          {feature.name}
                        </dt>{" "}
                        <dd className="inline text-black">
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
                className="w-full rounded-xl shadow-xl"
              />
            </div>
          </div>
        </div>
        <h1 id="integration" className="font-poppins text-[22px] mt-8 text-black ">
          Personal Subs <br className="sm:block hidden" />{" "}
        </h1>
        <h2 className="text-base font-semibold leading-7 text-indigo-600">No-code crypto subscription</h2>
        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
              {personalSubs.map((feature) => (
                <div key={feature.name} className="relative pl-16">
                  <dt className="text-base font-semibold leading-7 text-gray-900">
                    <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                      <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                    </div>
                    {feature.name}
                  </dt>
                  <dd className="mt-2 text-base leading-7 text-gray-600">{feature.description}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
        <div className="overflow-hidden mt-4">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="">
              <img
                src={personalSubsCopie}
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
