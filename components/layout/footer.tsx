// @zigops-material/react components
import { Typography } from "packages/zigops-material-react/src";

export default function Footer() {
  const year = new Date().getFullYear();


  return (
    <footer className="bg-gray-100 relative z-50 pt-16 pb-6 text-[#1A237E]">
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
