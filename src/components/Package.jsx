import { useState } from "react";

import web from "../icons/web.svg";
import mobile from "../icons/mobile.svg";
import digital from "../icons/digital.svg";
import maintenance from "../icons/Maintenance.svg";
import cms from "../icons/cms.svg";
import payment from "../icons/Payment.svg";
import arrow from "../icons/Arrow.svg";

import aws from "../icons/aws.svg";
import cloud from "../icons/cloud.svg";
import angular from "../icons/angular.svg";
import css from "../icons/css.svg";
import html from "../icons/html.svg";
import js from "../icons/js.svg";
import php from "../icons/php.svg";
import pyton from "../icons/pyton.svg";
import react from "../icons/react.svg";
import ruby from "../icons/ruby.svg";
import mongo from "../icons/mongo.svg";
import mysql from "../icons/mysql.svg";
import postre from "../icons/postre.svg";
import sqlserver from "../icons/sqlserver.svg";

const Package = () => {
  const [hover, setHover] = useState(false);

  const onUserHover = (e) => {
    setHover(true);
    console.log(e.target.id);
    console.log(e.target);
  };

  const onUserLeave = () => {
    setHover(false);
    console.log(hover);
  };

  const packages = [
    {
      id: 1,
      title: "Website development",
      icon: web,
      description: "High-performance website to reach out more your potential customers",
      hover: false,
    },
    {
      id: 2,
      title: "Mobile apps development",
      icon: mobile,
      description: "To accelerate your business process",
      hover: false,
    },
    {
      id: 3,
      title: "Digital product design",
      icon: digital,
      description: "Complete digital product creation from UX prototyping to final UI designs",
      hover: false,
    },
    {
      id: 4,
      title: "Maintenance",
      icon: maintenance,
      description: "Make sure your digital environment keep online and update",
      hover: false,
    },
    {
      id: 5,
      title: "CMS development",
      icon: cms,
      description: "You can update your website content yourself",
      hover: false,
    },
    {
      id: 6,
      title: "Integrated payment method",
      icon: payment,
      description: "Simplify the payment system with just one step",
      hover: true,
    },
  ];

  const stacks = [
    {
      title: "aws",
      icon: aws,
    },
    {
      title: "cloud",
      icon: cloud,
    },
    {
      title: "angular",
      icon: angular,
    },
    {
      title: "css",
      icon: css,
    },
    {
      title: "html",
      icon: html,
    },
    {
      title: "js",
      icon: js,
    },
    {
      title: "php",
      icon: php,
    },
    {
      title: "pyton",
      icon: pyton,
    },
    {
      title: "react",
      icon: react,
    },
    {
      title: "ruby",
      icon: ruby,
    },
    {
      title: "mongo",
      icon: mongo,
    },
    {
      title: "mysql",
      icon: mysql,
    },
    {
      title: "postre",
      icon: postre,
    },
    {
      title: "sqlserver",
      icon: sqlserver,
    },
  ];

  return (
    <section className="container">
      <div className="mt-28 flex flex-col items-center">
        <div className="text-center">
          <p className="text-tertiary mb-3">Complete Package</p>
          <h1 className="font-bold text-3xl mb-8 lg:text-4xl text_shadow">From product design to software continuous delivery</h1>
        </div>
        <div className="grid lg:grid-cols-3 gap-x-9 gap-y-5 mb-16 w-full">
          {packages.map((pack) => (
            <div id={pack.id} className="p-5 border-2 border-tertiary hover:border-secondary hover:cursor-pointer rounded-xl" key={pack.title} onMouseEnter={onUserHover} onMouseLeave={onUserLeave}>
              <img src={pack.icon} alt={pack.title} className="mb-4" />
              <div className="flex">
                <p className="text-secondary text-[20px] font-semibold mb-2">{pack.title}</p>
                <img src={arrow} alt="arrow" className="mb-2 ml-3 opacity-0 hover:opacity-100" />
                {/* {hover ? <img src={arrow} alt="arrow" className="mb-2 ml-3" /> : <></>} */}
              </div>
              <p>{pack.description}</p>
            </div>
          ))}
        </div>
        <div className="grid md:grid-cols-4 lg:grid-cols-6 gap-5 mb-16 w-full justify-center">
          {stacks.map((stack) => (
            <div className="mx-auto mb-5 md:mb-0" key={stack.title}>
              <img src={stack.icon} alt={stack.title} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Package;
