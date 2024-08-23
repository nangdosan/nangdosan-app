import ButtonPrimary from "@/components/ButtonPrimary";
import ButtonSecondary from "@/components/ButtonSecondary";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import Link from "next/link";
import { IoMdHeart } from "react-icons/io";
import {
  AiOutlineWhatsApp,
  AiFillFacebook,
  AiFillInstagram,
  AiOutlineMail,
  AiFillLinkedin,
} from "react-icons/ai";
import { Icon } from "@iconify/react";
import Skill from "@/components/Skill";

export default function Home() {
  return (
    <>
      <Navbar />
      {/* Jumbotron */}
      <section className="block md:flex items-center justify-evenly my-10 mt-0 md:pt-20 mx-10 md:mx-24">
        <div className="flex items-center w-full md:w-1/3 lg:w-1/4">
          <div className="flex flex-col items-center space-y-4">
            <Link href="https://api.whatsapp.com/send/?phone=%2B6289531834810&text&type=phone_number&app_absent=0">
              <AiOutlineWhatsApp size={32} className="text-white/80" />
            </Link>
            <Link href="https://www.facebook.com/danang449/">
              <AiFillFacebook size={32} className="text-white/80" />
            </Link>
            <Link href="https://www.instagram.com/nangdosan/">
              <AiFillInstagram size={32} className="text-white/80" />
            </Link>
            <Link href="mailto:danangpostman37@gmail.com?subject=Halo%20Danang&body=Isi%20pesan%20di%20sini">
              <AiOutlineMail size={30} className="text-white/80" />
            </Link>
            <Link href="https://www.linkedin.com/in/danang-hapis-fadillah-682878202/">
              <AiFillLinkedin size={32} className="text-white/80" />
            </Link>
          </div>
          <Image src="/images/me.png" alt="logo" width={400} height={400} />
        </div>
        <div className="w-full md:w-1/2 lg:w-1/3">
          <span className="text-white/20">Nang do san</span>
          <h1 className="text-4xl font-bold text-white mb-3 uppercase">
            Danang Hapis Fadillah
          </h1>
          <p className="text-sm tracking-wide text-white/90 text-justify">
            I'm Danang Hapis Fadillah, a passionate 21-year-old Web Developer
            specializing in Node.js.I've been freelancing at Fiverr since 2022.
            Lately, I've been diving deep into the fascinating fields of Machine
            Learning and Deep Learning, exploring the cutting-edge technologies
            that are shaping our future. My journey as a member of the Google
            Developer Student Club at the University of Indonesiahas further
            fueled my enthusiasm for tech innovation.
          </p>
          <div className="mt-7 flex items-center space-x-3">
            <ButtonPrimary href="/contact">View Resume</ButtonPrimary>
            <ButtonSecondary href="/projects">View Projects</ButtonSecondary>
          </div>
        </div>
      </section>
      {/* End Jumbotron */}

      {/* Skills */}
      <div className="mx-10 md:mx-24 mt-40 border-t-[1px] border-white/10 py-7 overflow-hidden">
        <div className="flex space-x-8 items-center justify-evenly animate-slide whitespace-nowrap w-[200%]">
          {/* Set pertama ikon */}
          <Icon icon="logos:react" width={56} />
          <Icon icon="ri:nextjs-fill" width={64} />
          <Icon icon="devicon:tailwindcss" width={64} />
          <Icon icon="logos:firebase" width={40} />
          <Icon icon="logos:python" width={52} />
          <Icon icon="devicon:scikitlearn" width={72} />
          <Icon icon="logos:tensorflow" width={50} />
          {/* Salin set ikon kedua untuk efek looping */}
          <Icon icon="logos:react" width={56} className="hidden md:block" />
          <Icon icon="ri:nextjs-fill" width={64} className="hidden md:block" />
          <Icon
            icon="devicon:tailwindcss"
            width={64}
            className="hidden md:block"
          />
          <Icon icon="logos:firebase" width={40} className="hidden md:block" />
          <Icon icon="logos:python" width={52} className="hidden md:block" />
          <Icon
            icon="devicon:scikitlearn"
            width={72}
            className="hidden md:block"
          />
          <Icon
            icon="logos:tensorflow"
            width={50}
            className="hidden md:block"
          />
        </div>
      </div>
      {/* End Skills */}

      {/* Projects */}
      <section id="projects" className="mt-56 mx-10 md:mx-24">
        <span className="text-white/20 text-sm text-center block">
          Projects
        </span>
        <h1 className="text-3xl font-semibold mb-20 text-center">
          Latest Activity
        </h1>
        <div className="block md:flex flex-wrap justify-evenly space-y-10 md:space-y-0">
          <Skill
            title="Psychobot AI - Social Media Emotion Analysis System"
            urlImage="/images/projects/1.png"
            desc="Psychobot AI is a web application that helps users identify their dominant emotional states while on social media. Using the LightGBM Machine Learning model with > 98% accuracy, the application analyzes data such as the number of posts, likes, comments, and daily usage duration. The application is deployed using Streamlit, offering an easy-to-use interface and real-time emotion analysis. Psychobot AI provides valuable insights into the impact of social media activity on users’ emotional well-being."
            demoUrl="https://psychobot.streamlit.app/"
            codeUrl="https://github.com/n0yy/psychobot-ai"
          />
          <Skill
            urlImage="/images/projects/2.png"
            title="RISTEK Datathon UI - Time Series Forecasting"
            desc="I participated in the RISTEK Datathon UI competition which focused on predicting the average speed of vehicles using a time series forecasting model. Using the XGBOOST algorithm, I managed to rank 46th out of 89 participants, demonstrating my ability to build accurate models and analyze factors that affect traffic."
          />
          <Skill
            title="MobileNET - Pet’s Expression Classification"
            desc="In another project, I used the Pet's Facial Expression Image Dataset dataset from Kaggle and trained a classification model using MobileNet V2. This model is designed to recognize and classify various animal facial expressions, leveraging MobileNet V2's ability to process images with high efficiency."
            urlImage="/images/projects/3.png"
          />
        </div>
      </section>
      {/* End Projects */}

      {/* Footer */}
      <footer className="mx-20 md:mx-24 mt-72 border-t border-white/10 flex items-center justify-center py-3 text-white/75">
        <span className="text-sm mr-1">2024 | Built by Nangdosan with</span>
        <IoMdHeart />
      </footer>
      {/* End Footer */}
    </>
  );
}
