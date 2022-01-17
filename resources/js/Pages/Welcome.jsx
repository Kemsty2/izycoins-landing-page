import React from "react";
import Particles from "react-tsparticles";
import { isEmpty } from "lodash";
import toast from "react-hot-toast";
import { Head, usePage } from "@inertiajs/inertia-react";

import Layout from "../layouts/Layout";
import { ThemeContext } from "../components/ThemeContext";
import Panel from "../components/Panel";
import NewsLetter from "../components/NewsLetter";

const particlesoptions = {
  particles: {
    number: {
      value: 100,
      density: {
        enable: true,
        value_area: 800,
      },
    },
    shape: {
      type: "circle",
      stroke: {
        width: 0,
        color: "#b6b2b2",
      },
    },
    opacity: {
      value: 0.5211089197812949,
      random: false,
      anim: {
        enable: true,
        speed: 1,
        opacity_min: 0.1,
        sync: false,
      },
    },
    size: {
      value: 8.017060304327615,
      random: true,
      anim: {
        enable: true,
        speed: 12.181158184520175,
        size_min: 0.1,
        sync: true,
      },
    },
    line_linked: {
      enable: true,
      distance: 150,
      color: "#808080",
      opacity: 0.4,
      width: 1,
    },
    move: {
      enable: true,
      speed: 2,
      direction: "none",
      random: false,
      straight: false,
      out_mode: "bounce",
      bounce: false,
      attract: {
        enable: false,
        rotateX: 600,
        rotateY: 1200,
      },
    },
  },
  retina_detect: true,
};

function Welcome() {
  const { setModalIsOpen, modalIsOpen, theme } = React.useContext(ThemeContext);
  const [panelOpen, setPanelOpen] = React.useState(false);
  const { flash } = usePage().props;

  React.useEffect(() => {
    if (!isEmpty(flash.message)) {
      console.log(flash.type);
      if (flash.type === "success") {
        toast.success(flash.message);
      } else {
        toast.error(flash.message, {
          duration: 5000,
          position: "top-right",
          style: {
            background: theme === "dark" ? "#00193D" : "#0047ab",
            color: "#eee",
          },
        });
      }
    }
    return () => {};
  }, [flash]);

  const openModal = () => {
    console.log(modalIsOpen);
    setModalIsOpen(true);
  };
  const openPanel = () => {
    setPanelOpen(true);
  };
  const closePanel = () => {
    setPanelOpen(false);
  };

  return (
    <Layout>
      <Head>
        <title>IzyCoins Capital</title>
        <meta
          name="description"
          content="IzyCoins Capital is a service provider engaged in the business
                of providing cutting edge trading strategies for
                cryptocurrencies, uncorrelated to the global financial industry."
        />
      </Head>
      <section id="hero" className="relative flex flex-col h-full z-0">
        <div className="bg-header-mobile bg-custom-mobile-header-size absolute w-full h-full bg-no-repeat lg:hidden"></div>
        <div className="bg-header-desktop absolute w-full h-full bg-no-repeat hidden lg:block bg-left -right-42.6%"></div>
        {/* <div className="bg-image-mockups absolute z-20 w-full h-full bg-no-repeat bg-top -top-12 md:-top-16 bg-custom-mobile-mockup-size lg:hidden"></div> */}
        <div className="container h-full flex-grow sm:h-screen relative z-20">
          <Particles className="particles" params={particlesoptions} />
          <div className="h-full w-full flex justify-center sm:justify-between items-center pb-4 lg:pb-0 flex-col sm:flex-row">
            <div className="h-1/2 flex order-2 sm:order-1 flex-col justify-center items-center text-center lg:items-start lg:text-left w-80 md:w-96">
              <div className="mt-5 lg:mt-6 w-20 sm:w-24 flex flex-row items-center gap-2 sm:self-center">
                <img
                  src={
                    theme === "light"
                      ? "/images/logo_default_white.png"
                      : "/images/logo_default.png"
                  }
                  alt="easybank logo"
                />
              </div>
              <h1 className="text-4xl sm:text-6xl md:text-5xl text-primary-dark-blue dark:text-white pb-5 self-center">
                Coming Soon
              </h1>
              <div className="flex flex-row justify-between mb-1 w-full">
                <span className="text-base font-medium text-blue-700 dark:text-white">
                  Working
                </span>
                <span className="text-sm font-medium text-blue-700 dark:text-white mr-12">
                  80%
                </span>
              </div>
              <div className="relative w-full bg-gray-200 rounded dark:bg-gray-700 mb-3">
                <div
                  style={{ width: "80%" }}
                  className="absolute top-0 h-4 rounded shim-blue"
                ></div>
              </div>

              <p
                className="text-gray-700 text-base sm:text-xl leading-5 mb-7 text-justify dark:text-neutral-white"
                style={{ letterSpacing: "-1.25px" }}
              >
                IzyCoins is a service provider engaged in the business of
                providing cutting edge trading strategies for cryptocurrencies,
                uncorrelated to the global financial industry.
              </p>
              <button
                onClick={openModal}
                className="hidden font-semibold sm:text-base sm:block self-center hover:bg-primary-cobalt-blue-600 bg-primary-cobalt-blue-100  ring-blue-400 dark:ring-blue-800 px-7 py-3 rounded-full text-neutral-white text-xs bg-gradient-to-r focus:outline-none focus:ring"
              >
                Get Started
              </button>
              <button
                onClick={openPanel}
                className="block sm:hidden font-semibold hover:bg-primary-cobalt-blue-600 bg-primary-cobalt-blue-100  ring-blue-400 dark:ring-blue-800 px-7 py-3 rounded-full text-neutral-white text-xs focus:outline-none focus:ring"
              >
                Get Started
              </button>
            </div>
            <img
              className="sm:w-6/12 md:w-5/12 w-9/12 mt-4 sm:mt-0 order-1 sm:order-2"
              src="/images/image-investment.svg"
              alt="Illustration"
            ></img>
          </div>
          <Panel isOpen={panelOpen} close={closePanel} />
          <NewsLetter />
        </div>
      </section>
    </Layout>
  );
}

Welcome.propTypes = {};

export default Welcome;
