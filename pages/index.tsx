import React from 'react';
import Image from 'next/image';
import { If, Link, MetaFields, Then } from '@/components/Common';
import { STACKS } from '@/utils/stack';
import Footer from '@/components/Common/Footer';

function TrainerProfile({ data }: { data: string }) {
    return (
        <>
            <MetaFields title={'Ridwan Bin Sarwar'} />

            <div className="w-full flex flex-col justify-between items-center h-[100vh] select-none">
                <div className="w-full flex flex-col items-center">
                    <div className="sticky flex items-center top-0 w-full z-50 bg-white h-[78px] shadow-[0px_10px_15px_0px_rgba(0,0,0,0.10)] pc-lg:mb-[50px] ">
                        <div className="w-full flex justify-center">
                            <div className="w-full flex flex-col justify-center mx-[15px] tab:mx-[40px] pc:mx-[80px] pc-lg:mx-0 " style={{ maxWidth: '1300px' }}>
                                <div className="flex justify-end tab:justify-between select-none">
                                    <div className="hidden tab:block font-bold p-4">
                                        <div className="font bold text-sm">Ridwan Bin Sarwar</div>
                                        <div className="text-[10px] text-[#B7B7B9]">Software Engineer</div>
                                    </div>
                                    <div className="flex space-x-2 tab:space-x-3  cursor-pointer text-xs tab:text-base">
                                        <Link href={'#aboutme'}>
                                            <div className="font-bold p-2 tab:p-4">About me</div>
                                        </Link>

                                        <Link href={'#projects'}>
                                            <div className="font-bold p-2 tab:p-4">Projects</div>
                                        </Link>
                                        <Link href={'#education'}>
                                            <div className="font-bold p-2 tab:p-4">Education</div>
                                        </Link>
                                        <Link href={'#achievements'}>
                                            <div className="font-bold p-2 tab:p-4">Achievements</div>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-full">
                        <div className="w-full flex justify-center">
                            <div id="aboutme" className="w-full flex flex-col mx-[15px] tab:mx-[40px] pc:mx-[80px] pc-lg:mx-0 scroll-mt-20" style={{ maxWidth: '1300px' }}>
                                <div className="relative">
                                    <div className={` mt-[58px] flex justify-center left-[50%] bg-white rounded-full`}>
                                        <div className={`w-[190px] h-[190px] pc-sm:w-[244px] pc-sm:h-[244px] relative rounded-full shadow-[0px_0px_35px_0px_rgba(0,0,0,0.35)]`}>
                                            <Image src={'/img/ridwan.jpg'} alt={'trainer-image'} title={'trainer-image'} layout="fill" objectFit="cover" className="rounded-full" />
                                            <div className="absolute top-0 w-full h-full bg-gray-300 animate-pulse  pc-lg:rounded-full" style={{ zIndex: -1 }}></div>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex flex-col mb-[150px]">
                                    <section className="flex flex-col items-center text-center">
                                        <div className={`w-full tab:w-[700px]  mt-[25px] text-center `}>
                                            <div className="flex justify-center ">
                                                <div className="mr-3 text-gray-400 w-[12px] h-[16px]">
                                                    <i className="fas fa-map-marker-alt text-base"></i>
                                                </div>
                                                Dhaka, Bangladesh
                                            </div>

                                            <div className="text-[32px] mb-[20px] font-bold">Ridwan Bin Sarwar</div>
                                            <div className="text-[14px] tab:text-base  font-medium leading-6">
                                                <span className="font-bold ">Hi there!</span>{' '}
                                                {
                                                    "I'm Ridwan, a Software Engineer, primarily working with React and Node.js, with a keen interest in Distributed Systems. I love building things from scratch and to turn ideas into reality. I'm enthusiastic about collaborating and working on ideas that have real impacts!"
                                                }
                                            </div>
                                            <Link href={'mailto:ridwan.bin.sarwar@gmail.com'}>
                                                <button className="bg-portfolio-teach p-[15px] rounded-[20px] font-semibold text-white my-[30px]">Contact Me</button>
                                            </Link>
                                            <div className="border-b-2  text-[#CCCCCC]"></div>
                                            <div className="flex justify-center space-x-6 p-[30px]">
                                                <Link target="blank" href={'https://www.linkedin.com/in/ridwan-bin-sarwar-57aa98137/'}>
                                                    <div className=" w-[20px] h-[20px] cursor-pointer p-4 flex items-center justify-center ">
                                                        <i className="fab fa-linkedin-in text-[20px]"></i>
                                                    </div>
                                                </Link>
                                                <Link target="blank" href={'https://www.github.com/ridwanbinsarwar'}>
                                                    <div className=" w-[20px] h-[20px] cursor-pointer p-4 flex items-center justify-center ">
                                                        <i className="fa fa-github text-[20px]"></i>
                                                    </div>
                                                </Link>
                                                <Link target="blank" href={'https://cyclocoder.blogspot.com'}>
                                                    <div className=" w-[25px] h-[25px] cursor-pointer p-4 flex items-center justify-center ">
                                                        <i className="fab fa-blogger text-[25px]"></i>
                                                    </div>
                                                </Link>
                                                <Link target="blank" href={'https://codeforces.com/profile/xenon_r'}>
                                                    <div className="cursor-pointer flex items-center justify-center ">
                                                        <img src="/img/codeforces.png" alt="codeforces" className=" h-[25px]" />
                                                    </div>
                                                </Link>
                                            </div>
                                        </div>
                                    </section>

                                    <div className="mt-[30px] pc-sm:mt-10 pc:mt-20 flex-1 flex-col">
                                        <section id="techStack" className="flex flex-col items-center w-full tab:mr-[26px] pc:mr-[106px] scroll-mt-28 ">
                                            <div className="font-bold text-3xl mb-[50px]">Tech Stack</div>
                                            <div className="container mx-auto ">
                                                <div className="flex flex-col justify-center">
                                                    <div className="grid lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-4 ">
                                                        {STACKS.map((stack, idx) => (
                                                            <div key={idx} className="p-3 rounded-l-xl rounded-t-xl flex justify-around items-center bg-slate-100 ">
                                                                <div className="flex flex-col items-center">
                                                                    <img className="w-14 h-14" src={stack.icon} alt={stack.alt} />
                                                                    <div className=" font-semibold mt-2">{stack.alt}</div>
                                                                </div>
                                                            </div>
                                                        ))}
                                                    </div>
                                                </div>
                                            </div>
                                        </section>
                                        <section id="projects" className="mt-[100px] tab:mt-[150px] flex flex-col items-center w-full tab:mr-[26px] pc:mr-[106px] scroll-mt-28">
                                            <div className="font-bold text-3xl mb-1">Projects</div>
                                            <div className="font-bold text-sm pc-sm:text-xl text-gray-400 mb-[50px] tab:mb-[55px] text-center">{"Products I've built, and businesses I am collaborating with"}</div>
                                            <div className="flex flex-col tab:flex-row space-x-0 tab:space-x-4 rounded-3xl shadow-card   bg-slate-100/40">
                                                <div className="flex-1 flex-col p-3 tab:p-8 mb-4 tab:mb-0">
                                                    <div className="font-bold mb-1">The Pantry</div>
                                                    <div className="font-medium text-sm tab:text-base">
                                                        {
                                                            'The Pantry is a food distribution service for people in need that is operated by Feeding Hawaii Together, a Hawaii-based nonprofit organization. Their high-speed tech solution enables clients to pre-shop in an e-commerce setup and to get a notification with their pickup time.'
                                                        }
                                                    </div>
                                                    <div className="mt-[15px] font-bold  mb-5 tab:mb-9">The product was build using React, typescript, Next.js, .NET Core, MongoDB.</div>
                                                    <Link target="blank" href={'https://shop.thepantry.org/'}>
                                                        <button className="px-3 py-3  border-portfolio-settings rounded-3xl border-2 font-medium text-sm">View Product</button>
                                                    </Link>
                                                </div>
                                                <div className="hidden tab:flex w-1/3  rounded-3xl ">
                                                    <img className="rounded-3xl" src="/img/pantry.png" alt="" />
                                                </div>
                                            </div>
                                            <div className="flex flex-col tab:flex-row space-x-0 tab:space-x-4 rounded-3xl mt-[40px] shadow-card bg-slate-100/40">
                                                <div className="hidden tab:flex w-1/3">
                                                    <img className="rounded-3xl" src="/img/transcom.png" alt="" />
                                                </div>
                                                <div className="flex-1 flex-col p-3 tab:p-8 mb-4 tab:mb-0">
                                                    <div className="font-bold mb-1">Transcom Digital</div>
                                                    <div className="font-medium mb-5 tab:mb-9 text-sm tab:text-base">
                                                        {
                                                            'Transcom Digitial is a Bangladesh based eCommerce offers consumers and businesses smooth and fast user experience to buy and sell electronics products. The product enables consumers to filter, shop and order products in an e-commerce setup using different online payment gateways.'
                                                        }
                                                    </div>
                                                    <div className="mt-[15px] font-bold  mb-3">The product was build using React, Next.js, .NET Core, MongoDB, Elasticsearch.</div>
                                                    <div className="mt-[15px] font-medium mb-5 tab:mb-9">
                                                        <span className="font-bold">Key contribution:</span> Improved product filter and search time by almost 50%, implementing faceted search using Elasticsearch.
                                                    </div>

                                                    <Link href={'https://app.transcomdigital.com/subcategory/television'}>
                                                        <button className="px-3 py-3  border-portfolio-settings rounded-3xl border-2 font-medium text-sm">View Product</button>
                                                    </Link>
                                                </div>
                                            </div>

                                            <div className="flex flex-col tab:flex-row space-x-0 tab:space-x-4 rounded-3xl mt-[40px]  shadow-card bg-slate-100/40">
                                                <div className="flex-1 flex-col p-3 tab:p-8 mb-4 tab:mb-0">
                                                    <div className="font-bold mb-1">StepOut</div>
                                                    <div className="font-medium text-sm tab:text-base">{'StepOut is a Helsinki based start-up developing an all-in-one SAAS tool empowering independent trainers in fitness, recreation and wellness to streamline their business processes.'}</div>
                                                    <div className="mt-[15px] font-bold  mb-3">Tech stack: React, typescript, Next.js, Node.js, MongoDB.</div>
                                                    <div className="mt-[15px] font-medium mb-5 tab:mb-9">
                                                        <span className="font-bold">Contribution:</span> Remotely collaborating with StepOut tech team and single handedly managing the frontend. Also working in backend with another team member.
                                                    </div>
                                                    <Link target="blank" href={'http://app.stepout.pro/'}>
                                                        <button className="px-3 py-3  border-portfolio-settings rounded-3xl border-2 font-medium text-sm">View Product</button>
                                                    </Link>
                                                </div>
                                                <div className="hidden tab:flex w-1/3  rounded-3xl ">
                                                    <img className="rounded-3xl" src="/img/stepout.png" alt="" />
                                                </div>
                                            </div>
                                        </section>
                                        <section id="experience" className="mt-[100px] tab:mt-[150px] flex flex-col items-center w-full tab:mr-[26px] pc:mr-[106px] scroll-mt-28">
                                            <div className="font-bold text-3xl  mb-[50px] tab:mb-[55px]">Experience</div>
                                            <div className="container mx-auto ">
                                                <div className="flex flex-col justify-center">
                                                    <div className="grid  sm:grid-cols-3 grid-cols-2 gap-4 ">
                                                        <div className="p-3 rounded-l-xl rounded-t-xl flex justify-around items-center bg-slate-100 ">
                                                            <div className="flex flex-col items-center">
                                                                {/* <img className="w-14 h-14" src={stack.icon} alt={stack.alt} /> */}
                                                                <div className=" font-semibold mt-2">React</div>
                                                                <div className="font-medium text-sm tab:text-base mt-5">About 1 year</div>
                                                            </div>
                                                        </div>
                                                        <div className="p-3 rounded-l-xl rounded-t-xl flex justify-around items-center bg-slate-100 ">
                                                            <div className="flex flex-col items-center">
                                                                {/* <img className="w-14 h-14" src={stack.icon} alt={stack.alt} /> */}
                                                                <div className=" font-semibold mt-2">Next.js</div>
                                                                <div className="font-medium text-sm tab:text-base mt-5">About 1 year</div>
                                                            </div>
                                                        </div>
                                                        <div className="p-3 rounded-l-xl rounded-t-xl flex justify-around items-center bg-slate-100 ">
                                                            <div className="flex flex-col items-center text-center">
                                                                {/* <img className="w-14 h-14" src={stack.icon} alt={stack.alt} /> */}
                                                                <div className=" font-semibold mt-2">Node.js</div>
                                                                <div className="font-medium text-sm tab:text-base mt-5">About 6 months</div>
                                                            </div>
                                                        </div>
                                                        <div className="p-3 rounded-l-xl rounded-t-xl flex justify-around items-center text-center bg-slate-100 ">
                                                            <div className="flex flex-col items-center text-center">
                                                                {/* <img className="w-14 h-14" src={stack.icon} alt={stack.alt} /> */}
                                                                <div className=" font-semibold mt-2">.NET Core</div>
                                                                <div className="font-medium text-sm tab:text-base mt-5">About 1 year</div>
                                                            </div>
                                                        </div>
                                                        <div className="p-3 rounded-l-xl rounded-t-xl flex justify-around items-center text-center bg-slate-100 ">
                                                            <div className="flex flex-col items-center text-center">
                                                                {/* <img className="w-14 h-14" src={stack.icon} alt={stack.alt} /> */}
                                                                <div className=" font-semibold mt-2">MongoDB</div>
                                                                <div className="font-medium text-sm tab:text-base mt-5">About 1 year</div>
                                                            </div>
                                                        </div>
                                                        <div className="p-3 rounded-l-xl rounded-t-xl flex justify-around items-center text-center bg-slate-100 ">
                                                            <div className="flex flex-col items-center text-center">
                                                                {/* <img className="w-14 h-14" src={stack.icon} alt={stack.alt} /> */}
                                                                <div className=" font-semibold mt-2">Elasticsearch</div>
                                                                <div className="font-medium text-sm tab:text-base mt-5">About 3 months</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </section>
                                        <section id="education" className="mt-[100px] tab:mt-[150px] flex flex-col items-center w-full tab:mr-[26px] pc:mr-[106px] scroll-mt-28">
                                            <div className="font-bold text-3xl  mb-[50px] tab:mb-[55px]">Education</div>
                                            <div className="container mx-auto ">
                                                <div className="flex flex-col">
                                                    <div className="flex flex-col  rounded-3xl shadow-card p-3 tab:p-4 bg-slate-100/40">
                                                        <div className="flex flex-col items-center ">
                                                            <img className="rounded-3xl h-[150px] w-[150px] mb-3" src="/img/UIU-Logo.png" alt="" />
                                                            <div className="font-medium mb-2">United International University</div>
                                                        </div>
                                                        <div className="flex-1 flex-col py-3 tab:p-5">
                                                            <div className="font-bold ">
                                                                <span className="">Bachelor of Science in</span> CSE
                                                            </div>
                                                            <div className="font-semibold text-sm text-gray-400 mb-1">March 2021</div>
                                                            <div className="font-medium ">
                                                                {
                                                                    'I have graduated from UIU with a 3.81 CGPA in Computer Science & Engineering in March 2021. During my time at UIU, I worked as a Teaching Assistant for the university CSE department for two trimester. I received full free scholarship for two times and 25-50% scholarship rest of the trimesters.'
                                                                }
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </section>
                                        <section id="achievements" className="mt-[100px] tab:mt-[150px] flex flex-col items-center w-full tab:mr-[26px] pc:mr-[106px] scroll-mt-28">
                                            <div className="font-bold text-3xl  mb-[50px] tab:mb-[55px]">Achievements</div>
                                            <div className="container mx-auto ">
                                                <div className="flex flex-col justify-center">
                                                    <div className="flex flex-col justify-center space-x-4 rounded-3xl shadow-card p-3 tab:p-4 bg-slate-100/40">
                                                        <div className="flex-1 flex-col p-3 tab:p-5">
                                                            <div className="font-bold text-sm pc-sm:text-base ">1st runner up at Britannia Inter University Programming Contest 2019</div>
                                                            <div className="font-semibold text-sm text-gray-400 mb-1">{'Team name : UIU_Sinusoidal'}</div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="container mx-auto mt-[35px]">
                                                <div className="flex flex-col justify-center">
                                                    <div className="flex flex-col justify-center  space-x-4 rounded-3xl shadow-card p-3 tab:p-4 bg-slate-100/40">
                                                        <div className="flex-1 flex-col p-3 tab:p-5">
                                                            <div className="font-bold text-sm pc-sm:text-base ">46th at ICPC DHAKA REGIONAL Preliminary Contest 2019</div>
                                                            <div className="font-semibold text-sm text-gray-400 mb-6">{'Team name: UIU_CG_or_CP'}</div>
                                                            <Link target="blank" href={'https://icpc.global/ICPCID/3YMPKNB4NMOO'}>
                                                                <button className="px-3 py-3  border-portfolio-settings rounded-3xl border-2 font-medium text-sm">See credential</button>
                                                            </Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="container mx-auto mt-[35px]">
                                                <div className="flex flex-col justify-center">
                                                    <div className="flex flex-col justify-center  space-x-4 rounded-3xl shadow-card p-3 tab:p-4 bg-slate-100/40">
                                                        <div className="flex-1 flex-col p-3 tab:p-5">
                                                            <div className="font-bold text-sm pc-sm:text-base ">45th at ICPC DHAKA REGIONAL 2019</div>
                                                            <div className="font-semibold text-sm text-gray-400 mb-6">{'Team name: UIU_CG_or_CP'}</div>
                                                            <Link target="blank" href={'https://icpc.global/ICPCID/3YMPKNB4NMOO'}>
                                                                <button className="px-3 py-3  border-portfolio-settings rounded-3xl border-2 font-medium text-sm">See credential</button>
                                                            </Link>{' '}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </section>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="w-full flex justify-center">
                    <div className="w-full flex flex-col mx-[15px] tab:mx-[40px] pc:mx-[80px] pc-lg:mx-0" style={{ maxWidth: '1300px' }}>
                        <Footer />
                    </div>
                </div>
            </div>

            <style jsx>
                {`
                    .aspect-ratio-container {
                        padding-top: 28.01%; /* 25:7 Aspect Ratio */
                        position: relative; /* If you want text inside of it */
                    }

                    /* If you want text inside of the container */
                    .aspect-ratio-item {
                        position: absolute;
                        top: 0;
                        left: 0;
                        bottom: 0;
                        right: 0;
                    }
                    .aspect-ratio-container-class {
                        width: 100%;
                        padding-top: 100%; /* 1:1 Aspect Ratio */
                        position: relative; /* If you want text inside of it */
                    }

                    /* If you want text inside of the container */
                    .aspect-ratio-class {
                        position: absolute;
                        top: 0;
                        left: 0;
                        bottom: 0;
                        right: 0;
                    }
                `}
            </style>
        </>
    );
}

export async function getStaticProps({ params }: any) {
    return {
        props: { data: '' },
        revalidate: 60,
    };
}

export default TrainerProfile;
