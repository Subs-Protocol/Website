import styles from "../styles/style";
import { ArrowPathIcon, BanknotesIcon, BellAlertIcon, CloudArrowUpIcon, FingerPrintIcon, LockClosedIcon, RocketLaunchIcon } from '@heroicons/react/24/outline'

const RegulatorIntroduction = () => {
    return (
        <section>


            {/* <div className="py-24 sm:py-20">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto max-w-2xl lg:text-center">
                        <h2 className="text-base text-xl font-semibold leading-7 text-secondary">They keep the protocol alive</h2>
                        <p className="mt-2 text-5xl font-bold tracking-tight text-secondary sm:text-8xl p-3">
                            Regulators
                        </p>
                        <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                        
                            The detail that makes us totally different
                        </p>
                        <p className="mt-6 text-lg leading-8 text-white">
                            They are the actors that trigger all the payment at the selected date. <br/>
                            Let us introduce this new way to work toghether.

                        </p>
                        
                    </div>
                    <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
                        <dl className="grid max-w-xl grid-cols-1 gap-y-10 gap-x-8 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
                            {features.map((feature) => (
                                <div key={feature.name} className="relative pl-16">
                                    <dt className="text-base font-semibold leading-7 text-white">
                                        <div className="absolute top-0 left-0 flex h-10 w-10 items-center justify-center rounded-lg bg-cyan-400">
                                            <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                                        </div>
                                        {feature.name}
                                    </dt>
                                    <dd className="mt-2 text-base leading-7 text-white">{feature.description}</dd>
                                </div>
                            ))}
                        </dl>
                    </div>
                    <div className="mx-auto max-w-2xl lg:text-center">
                        
                        <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl pt-16">
                        
                            Join us and become a regulator !
                        </p>
                    </div>
                </div>
                
            </div> */}
        </section>
    );
};

export default RegulatorIntroduction;


const features = [
    {
        name: 'A financial incentive',
        description:
            'After each successful debit to a subscriber, regulators are rewarded with SUBS Tokens.',
        icon: BanknotesIcon,
    },
    {
        name: 'Blockchain Listeners',
        description:
            'We provide regulator a way to get data from the blockchain and check if subscibers are up to date. If a payment is due, they can try to transfer the funds.',
        icon: BellAlertIcon,
    },
    {
        name: 'An additional security for subscribers.',
        description:
            "They are also layer of security, this way malicious content creators cannot debit all the subscriber's funds at once.",
        icon: LockClosedIcon,
    },
    {
        name: 'Believe in the protocol',
        description:
            'The only requierement to become a regulator is to hodle some SUBS Token.',
        icon: RocketLaunchIcon,
    },
    
    
]

