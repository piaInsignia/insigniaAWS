"use client";
import { images } from "@/lib/image";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import SimpleSlider from "./component/slider";
import { listFeature, listSolutions } from "./data/listHomeData";

export default function Home() {
  type SocialItem = { img: string };

  const socialMedia: SocialItem[] = [
    { img: images.IMG_FACEBOOK },
    { img: images.IMG_TWITTER },
    { img: images.IMG_ISTAGRAM },
    { img: images.IMG_LINKEDIN },
    { img: images.IMG_YOUTUBE },
  ];

  return (
    <section className="relative bg-white overflow-visible">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 mb-[0px] sm:mb-[100px]">
        {/* Gambar absolute di kiri atas, menjorok keluar */}
        <div className="col-span-1 md:col-span-3 relative w-full h-40 sm:h-100">
          <div
            className="
                        absolute
                        w-[100%]
                        h-100
                        top-[-100px]
                        left-[-130px]
                        sm:w-full
                        sm:h-screen
                        sm:top-[-150px]
                        sm:left-[-250px]
                        md:top-[-300px]
                        md:left-[-250px]
                        lg:left-[-200px]
                        lg:top-[-300px]
"
          >
            <Image
              src={images.LEFT_IMAGE}
              alt="Abstract Swirl"
              fill
              style={{ objectFit: "cover" }}
              sizes="(max-width: 100%) 100vw, 100vw"
            />
          </div>
        </div>

        {/* Konten teks di kanan */}
        <div className="w-full h-60 sm:h-80 col-span-2 px-5 pt-10  sm:px-20 lg:px-5 sm:pt-30 relative ml-auto md:ml-1/3 flex flex-col space-y-6 text-center md:text-left sm:border-b-1 border-[#DBDBE7] ">
          <div className="flex justify-end pr-0 xl:pr-20">
            <Image
              src={images.AWS_LOGO}
              alt="Abstract Swirl"
              width={100}
              height={100}
            />
          </div>
          <div className="flex flex-col justify-start mt-10 sm:mt-0 sm:gap-5">
            <div className="flex align-top sm:h-auto">
              <div className="sm:h-auto">
                <Image src={images.LAYER} alt="layer" width={10} height={10} />
              </div>
              <h1 className="font-schibsted text-[#292A71] text-[26px]  sm:text-5xl">
                AWS Solution
              </h1>
            </div>
            <div className="flex flex-col gap-5">
              <h5 className="font-league text-[#292A71] flex gap-2 text-[16px] sm:text-3xl pl-[30px] sm:p-0 ">
                <span>To Create a </span>
                <span className=" text-[#DB2234]">Lasting Impact.</span>
              </h5>
            </div>
          </div>
        </div>
      </div>

      <hr className="ms-[50px] py-5 sm:hidden" />

      <div className="px-5 sm:px-20 mt-0 sm:mt-60  h-full">
        <div className="flex gap-1 align-top">
          <div className="h-auto flex align-middle">
            <Image
              src={images.LAYER}
              alt="layer"
              width={10}
              height={0}
              className="flex align-top"
            />
          </div>
          <p className="font-schibsted text-[#696A9C]">AWS Partner</p>
        </div>
        <div className="flex flex-col sm:gap-2 font-schibsted text-[#DB2234] text-[26px] sm:text-5xl w-80 sm:w-full">
          <h1>Insignia: A.I Transformation</h1>
          <h1 className="">
            <span className="inline text-[#DB2234]">Consultant </span>
            <span className="inline text-[#292A71]">
              for Business Acceleration
            </span>
          </h1>
        </div>
        <div className="text-[#696A9C] font-league text-wrap mt-10 text-left flex flex-col gap-8">
          <p>
            At <strong className="font-bold">Insignia</strong>, we empower
            businesses to unlock the full potential of cloud technology through
            <strong className="font-bold">
              {" "}
              end-to-end data modernization and AI enablement.
            </strong>{" "}
            Our comprehensive approach integrates deep technical expertise with
            the latest AWS technologies, ensuring a smooth transition from
            legacy systems to a scalable, intelligent cloud infrastructure.
          </p>
          <p>
            We don’t just migrate your systems to the cloud —{" "}
            <strong className="text-[#292A71] font-bold">we transform</strong>{" "}
            them. By leveraging AWS’s powerful ecosystem, we help you reduce
            operational overhead, optimize workloads and databases, enhance
            security, and improve performance in real-time. 
          </p>
          <p>
            As an{" "}
            <strong className="text-[#292A71] font-bold">
              AWS Technology Partner
            </strong>
            , Insignia works hand-in-hand with AWS to bring you the latest
            innovations in cloud services. Our proven framework accelerates your
            digital transformation, enabling you to make data-driven decisions,
            improve operational agility, and stay ahead of the
            competition.Whether you’re modernizing your data platform, enabling
            AI at scale, or reimagining your infrastructure,{" "}
            <strong className="font-bold">
              Insignia is your trusted partner{" "}
            </strong>
            for{" "}
            <strong className="text-[#292A71] font-bold">
              future-ready cloud solutions.
            </strong>
          </p>
        </div>
      </div>
      <div className="px-0 py-10 sm:px-20 sm:py-20">
        <hr />
      </div>
      {/* key */}
      <div className=" px-5 sm:px-20  h-full gap-5">
        <div className="flex  items-start sm:items-center flex-col">
          <div className="flex gap-1 align-top">
            <div className="h-auto flex align-middle">
              <Image
                src={images.LAYER}
                alt="layer"
                width={10}
                height={0}
                className="flex align-top"
              />
            </div>
            <p className="font-schibsted text-[#696A9C]">Key Feature AWS</p>
          </div>
          <h1 className=" font-schibsted text-[26px] sm:text-5xl ">
            <span className="inline text-[#292A71] ">Insignia </span>
            <span className="inline text-[#DB2234]">Key Capabilities</span>
          </h1>
        </div>
        <div className="hidden sm:grid  py-20  grid-cols-3 gap-4">
          {listFeature.map((feature, index) => {
            return (
              <div
                key={index}
                className="font-league text-[#696A9C] flex flex-col gap-3"
              >
                <Image
                  src={feature.image}
                  alt="layer"
                  width={100}
                  height={100}
                  className="flex align-top"
                />
                <h5 className="font-schibsted text-[#0F0F79] text-[26px]">
                  {feature.title}
                </h5>
                <p className="text-left">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>

      <div className="block sm:hidden">
        <SimpleSlider
          data={listFeature}
          renderSlide={(item) => (
            <div className="text-left flex items-start flex-col h-60">
              <img src={item.image} alt="" />
              <h2 className="text-xl font-bold font-schibsted text-[#292A71] mb-2">
                {item.title}
              </h2>
              <p className="text-[#696A9C] font-league mb-4">
                {item.description}
              </p>
            </div>
          )}
        />
      </div>

      {/* parther */}
      <div className="w-full h-auto bg-cover bg-center bg-no-repeat sm:bg-[url('/assets/bg_partner.jpg')] bg-[url('/assets/bg_partner_mobile.jpg')]">
        <div className="px-5 py-10 sm:px-40 sm:py-30 flex flex-col gap-20">
          <div className="relative mt-13 sm:mt-0">
            <div
              className="
                        absolute
                        sm:w-[100px]
                        sm:h-[100px]
                        sm:top-[-65px]
                        sm:right-[0px]
                        w-[80px]
                        h-[80px]
                        top-[-75px]
                        right-[-8px]
                        "
            >
              <Image
                src={images.IMG_GROUP_PARTNER}
                alt="Abstract Swirl"
                fill
                style={{ objectFit: "contain" }}
              />
            </div>
            <p className="tracking-[.25em] sm:mb-8">PARTNER PROGRAM</p>
            <h2 className="text-[32px] w-80 sm:w-full sm:text-5xl">
              Amazon Partner Network
            </h2>
          </div>
          <div className="flex flex-col gap-10">
            <p className="text-left font-league">
              As an official member of the AWS Partner Network (APN), Insignia
              is proud to deliver advanced cloud, data, and AI solutions that
              help organizations accelerate transformation. Our core strength
              lies in end-to-end data modernization and AI enablement, enabling
              businesses to make smarter, faster decisions through the power of
              AWS technology.
            </p>
            <p className="text-left font-league">
              We follow AWS’s Well-Architected Framework to ensure every
              solution we deliver is secure, scalable, and aligned with industry
              best practices. With a team of certified cloud architects and deep
              experience across sectors—including education, government, and
              enterprise—Insignia is your trusted partner for navigating the
              complexities of cloud adoption and unlocking the full potential of
              AWS.
            </p>
          </div>
          <button className="inline-flex items-center justify-center w-full sm:w-fit gap-2 bg-white/30 backdrop-blur-md px-4 py-2 rounded-3xl">
            Learn More
            <ArrowRight className="w-5 h-5 text-current" />
          </button>
        </div>
      </div>

      {/* our solution */}
      <div className="px-5 py-10 sm:py-20 sm:px-40 h-full">
        <div className="flex gap-1 align-top">
          <div className="h-auto flex align-middle">
            <Image
              src={images.LAYER}
              alt="layer"
              width={10}
              height={0}
              className="flex align-top"
            />
          </div>
          <p className="font-schibsted text-[#696A9C]">Our Solution</p>
        </div>
        <h1 className="flex gap-1 sm:gap-2 font-schibsted text-[#292A71] text-[26px] sm:text-5xl w-90 sm:w-full flex-wrap">
          <span className="inline">Insignia Solution</span>
          <span className="inline text-[#DB2234] ">Examples</span>
        </h1>
        <div className="hidden sm:block  py-10 sm:py-20 text-[#696A9C]">
          {listSolutions.map((solution, index) => {
            return (
              <div
                key={index}
                className="py-10 grid gap-4 grid-cols-1 md:grid-cols-[200px_1fr] border-b-1 border-[#DBDBE7]"
              >
                <Image
                  src={solution.image}
                  alt="social-media"
                  width={150}
                  height={150}
                  className="object-contain"
                />

                <div className="flex flex-col gap-5">
                  <p className="text-left">{solution.description}</p>
                  <div className="grid grid-cols-1 md:grid-cols-[120px_1fr]">
                    <p>{solution.title}</p>
                    <div className="flex gap-2 flex-wrap">
                      {solution.features.map((feature, idx) => {
                        return (
                          <button
                            key={idx}
                            className="px-2 py-1 border-1 border-gray-300 rounded-4xl"
                          >
                            {feature}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="block sm:hidden">
        <SimpleSlider
          data={listSolutions}
          renderSlide={(item) => (
            <div className="text-left flex items-start flex-col mb-10 gap-5">
              <img src={item.image} alt="" />
              <h2 className="text-xl font-bold font-schibsted text-[#292A71] mb-2">
                {item.title}
              </h2>
              <p className="text-[#696A9C] font-league mb-4">
                {item.description}
              </p>
              <div className="flex gap-1 flex-wrap text-[#292A71] font-league">
                {item.features.map((feature, index) => {
                  return (
                    <button
                      key={index}
                      className="px-2 py-1 border-1 border-gray-300 rounded-4xl"
                    >
                      {feature}
                    </button>
                  );
                })}
              </div>
            </div>
          )}
        />
      </div>

      {/* service */}
      <div className="px-5 sm:px-40 py-5 h-full flex flex-col gap-10">
        <div className="flex items-center flex-col">
          <div className="flex  gap-1 align-top">
            <div className="h-auto flex align-middle">
              <Image
                src={images.LAYER}
                alt="layer"
                width={10}
                height={0}
                className="flex align-top"
              />
            </div>
            <p className="font-schibsted text-[#696A9C]">AWS Service</p>
          </div>
          <div className="flex flex-col text-center gap-2 font-schibsted sm:text-5xl text-[26px] items-center">
            <h1 className="inline text-[#292A71] w-80 sm:w-[70%] ">
              <span className="inline"> End-to-End AWS Expertise, </span>
              <span className="inline text-[#DB2234]">
                Delivered by Insignia
              </span>
            </h1>
          </div>
        </div>
        <div className="flex justify-center mt-10">
          <Image
            src={images.IMG_SERVICE}
            alt="layer"
            width={0}
            height={0}
            sizes="100vw"
            style={{ objectFit: "cover", width: "90%", height: "auto" }}
          />
        </div>
        <div className="text-center px-5 lg:px-40">
          <p className="font-league text-[#696A9C]">
            Insignia has hands-on experience building and managing cloud-native
            applications using AWS services such as ECS, CloudFormation,
            Redshift, Athena, and SageMaker. Whether it’s migration,
            optimization, or innovation — we bring technical depth and business
            alignment.
          </p>
        </div>
      </div>

      <div className="w-full h-auto bg-cover bg-center bg-no-repeat sm:bg-[url('/assets/bg_demo_session.jpg')] bg-[url('/assets/bg_demo_session_mobile.jpg')]">
        <div className="px-5 sm:px-40 py-11 sm:py-30 flex flex-col">
          <div className="text-center  sm:py-15 flex flex-col sm:gap-5">
            <p className="font-schibsted text-[12px] uppercase tracking-[.45em]">
              Your Personalized Demo Awaits
            </p>
            <h1 className="text-[32px] font-bold  sm:text-5xl sm:font-normal">
              SET UP DEMO SESSION?
            </h1>
          </div>
          <div className="text-center px-5 sm:py-15">
            Connect with our specialists today to arrange a demo session
            designed for your specific goals and challenges.
          </div>
          <div className="flex justify-center mt-10 sm:mt-0">
            <button className="inline-flex items-center justify-center w-full sm:w-fit gap-2 bg-white/30 backdrop-blur-md px-4 py-2 rounded-3xl">
              Start Demo
              <ArrowRight className="w-5 h-5 text-current" />
            </button>
          </div>
        </div>
      </div>

      <div className="py-10 sm:py-20">
        <div className="grid sm:grid-cols-3 grid-cols-1 px-5 sm:px-20 border-b-1 border-[#DBDBE7] pb-10 gap-5 sm:gap-0">
          <div className="col-span-2 flex items-center">
            <Image
              src={images.LOGO}
              alt="layer"
              width={100}
              height={100}
              className="flex align-top"
            />
          </div>
          <div className="text-left text-[#696A9C] font-league">
            <p className="text-[#292A71]">PT. Kreasi Media Asia ( Insignia )</p>
            <p className="w-82 sm:w-fit">
              Jl. Meruya Ilir Raya, Komp. Perum. Ruko Rich Palace Blok B8, No.
              36-40. RT. 008/ RW 007. Kel. Srengseng, Kec. Kebon Jeruk. Jakarta
              Barat Phone: 021 – 50880227x
            </p>
            <p>Email: sales@insignia.co.id</p>
          </div>
        </div>

        <div className="px-5 sm:px-20 py-10 ">
          <div className="grid sm:grid-cols-3 grid-cols-1 border-b-1 border-[#DBDBE7] pb-10">
            <div className="col-span-2 grid grid-cols-1 sm:grid-cols-3 gap-5">
              <div className="flex flex-col gap-5">
                <h6 className="font-schibsted text-[#292A71] font-bold">
                  Our Service
                </h6>
                <div className="flex flex-col gap-1 sm:gap-3 font-league text-[#696A9C]">
                  <span>A.I Solutions</span>
                  <span>Data Solutions</span>
                  <span>CRM Solutions</span>
                  <span>Cloud Service</span>
                </div>
              </div>
              <div className="flex flex-col gap-5">
                <h6 className="font-schibsted text-[#292A71] font-bold">
                  Company
                </h6>
                <div className="flex flex-col gap-1 sm:gap-3 font-league text-[#696A9C]">
                  <span>About Us</span>
                  <span>Use Cases</span>
                  <span>News Update</span>
                  <span>Careers</span>
                </div>
              </div>
              <div className="flex flex-col gap-5">
                <h6 className="font-schibsted text-[#292A71] font-bold">
                  Our Service
                </h6>
                <div className="flex flex-col gap-1 sm:gap-3 font-league text-[#696A9C]">
                  <span>Privacy Policy</span>
                  <span>Term and Conditions</span>
                </div>
              </div>
            </div>
            <div className="ps:0 sm:ps-5 pt-10 sm:pt-0">
              <div className="flex flex-col gap-5">
                <h6 className="font-schibsted text-[#292A71] font-bold">
                  Subscribe to our newsletter
                </h6>
                <div className="flex flex-col gap-4 font-league text-[#696A9C] w-full sm:max-w-80">
                  <p className="text-left">
                    Get updates on industry trends and exclusive content
                    delivered straight to your inbox.
                  </p>
                </div>
                <div className="grid grid-cols-3 gap-5 ">
                  <input
                    name="email"
                    placeholder="Enter your email"
                    className="outline-0 ps-2 col-span-2 border-b-2 border-[#A9AAC6] font-league text-[#696A9C]"
                  />
                  <div className="flex justify-end">
                    <button className="bg-[#292A71] font-league rounded-2xl px-4 py-1">
                      Subscribe
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="font-league text-[#696A9C] pt-10 flex text-center flex-col sm:flex-row sm:justify-between">
            <p>Copyright © 2025 Insignia | All Rights Reserved </p>
            <div className="flex gap-4 justify-center mt-5 sm:mt-0">
              {socialMedia.map((item, index) => (
                <div key={index} className="relative w-4 h-4">
                  <Image
                    src={item.img}
                    alt="social-media"
                    fill
                    className="object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
