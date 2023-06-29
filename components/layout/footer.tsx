// @zigops-material/react components
import { Typography } from "packages/zigops-material-react/src";

import SectionSubscribe from "components/sections/subscribe";

export default function Footer() {
  const year = new Date().getFullYear();

  const socialMedia = [
    {
      icon: "fab fa-twitter",
      color: "text-light-blue-400",
      link: "https://www.twitter.com/creativetim?ref=zigops-material",
    },
    {
      icon: "fab fa-facebook-square",
      color: "text-light-blue-600",
      link: "https://www.facebook.com/creativetim?ref=zigops-material",
    },
    {
      icon: "fab fa-dribbble",
      color: "text-pink-400",
      link: "https://www.dribbble.com/creativetim?ref=zigops-material",
    },
    {
      icon: "fab fa-github",
      color: "text-gray-900",
      link: "https://www.github.com/creativetimofficial?ref=zigops-material",
    },
    {
      icon: "fab fa-discord",
      color: "text-blue-700",
      link: "https://discord.com/invite/gxtg2rJa?ref=zigops-material",
    },
  ];

  const usefulLink = [
    {
      name: "About Us",
      link: "https://www.creative-tim.com/presentation?ref=zigops-material",
    },
    {
      name: "Blog",
      link: "https://www.creative-tim.com/blog?ref=zigops-material",
    },
    {
      name: "Github",
      link: "https://github.com/creativetimofficial?ref=zigops-material",
    },
    {
      name: "Free Products",
      link: "https://www.creative-tim.com/templates/free?ref=zigops-material",
    },
  ];

  const resources = [
    {
      name: "MIT License",
      link: "https://github.com/creativetimofficial/zigops-material/blob/main/LICENSE.md?ref=zigops-material",
    },
    {
      name: "Contribute",
      link: "https://github.com/creativetimofficial/zigops-material/blob/main/CONTRIBUTING.md?ref=zigops-material",
    },
    {
      name: "Code of Conduct",
      link: "https://github.com/creativetimofficial/zigops-material/blob/main/CODE_OF_CONDUCT.md?ref=zigops-material",
    },
    {
      name: "Contact Us",
      link: "https://www.creative-tim.com/contact-us?ref=zigops-material",
    },
  ];

  return (
    <footer className="bg-gray-100 relative z-50 pt-16 pb-6 text-[#1A237E]">
      <SectionSubscribe />
      <div className="container mx-auto">
        <div className="flex flex-wrap">
          <div className="w-full px-4 md:w-6/12">
            <Typography variant="h3" color="inherit" className="mb-2">
              ZigOps Material
            </Typography>
            <Typography
              variant="h5"
              color="inherit"
              className="mt-0 mb-2 text-lg font-normal opacity-60"
            >
              Easy to use React components for Tailwind CSS and Material Design.
            </Typography>
            <div className="mt-6">
              {socialMedia.map(({ icon, color, link }, key) => (
                <a key={key} href={link} target="_blank" rel="noreferrer">
                  <i
                    className={`${icon} ${color} font-lg align-center mr-2 inline-block items-center justify-center rounded-full bg-white p-3 text-center shadow-lg outline-none focus:outline-none`}
                  />
                </a>
              ))}
            </div>
          </div>
          <div className="w-full px-4 md:w-6/12">
            <div className="items-top mb-6 flex flex-wrap">
              <div className="w-6/12 pt-6 md:ml-auto md:px-4 md:pt-0 xl:w-4/12">
                <span className="mb-2 block text-lg font-bold text-[#1A237E]">
                  Useful Links
                </span>
                <ul className="list-unstyled">
                  {usefulLink.map(({ name, link }, key) => (
                    <li key={key}>
                      <a
                        href={link}
                        target="_blank"
                        rel="noreferrer"
                        className="block pb-2 text-sm font-normal text-[#1A237E]/60"
                      >
                        {name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="ml-auto w-6/12 pt-6 md:px-4 md:pt-0 xl:w-4/12">
                <span className="mb-2 block text-lg font-bold text-[#1A237E]">
                  Other Resources
                </span>
                <ul className="list-unstyled">
                  {resources.map(({ name, link }, key) => (
                    <li key={key}>
                      <a
                        href={link}
                        target="_blank"
                        rel="noreferrer"
                        className="block pb-2 text-sm font-normal text-[#1A237E]/60"
                      >
                        {name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <hr className="border-gray-300 my-6" />
        <div className="flex flex-wrap items-center justify-center gap-2 md:justify-between">
          <div className="w-full px-4  text-center md:w-4/12 md:px-0 md:text-right">
            <div className="py-1 text-sm font-medium">
              Copyright &copy; {year} ZigOps Material 
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
