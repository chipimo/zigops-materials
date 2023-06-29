import { Fragment } from "react";

// next.js components
import Link from "next/link";

// @zigops-material/components
import { Typography } from "packages/zigops-material-react/src";

// prop-types
interface Props {
  type: "react" ;
  frontMatter: any;
}

export default function DocsFooter({ type, frontMatter }: Props) {
  const date = new Date().getFullYear();

  return (
    <Fragment>
      <div
        className={`mt-20 flex w-full items-center ${
          !frontMatter.prev && frontMatter.next
            ? "justify-end"
            : "justify-between"
        }`}
      >
        {frontMatter.prev && (
          <Link href={`/docs/${type}/${frontMatter.prev}`}>
            <Typography className="py-2 font-medium capitalize text-blue-gray-500 transition-colors hover:text-blue-gray-900">
              <i className="fas fa-caret-left mr-2 mt-px" />
              {frontMatter.prev.includes("-")
                ? frontMatter.prev
                    .split("-")
                    .map((el) => (el === "css" ? "CSS" : el))
                    .join(" ")
                : frontMatter.prev}
            </Typography>
          </Link>
        )}
        {frontMatter.next && (
          <Link href={`/docs/${type}/${frontMatter.next}`}>
            <Typography className="py-2 font-medium capitalize text-blue-gray-500 transition-colors hover:text-blue-gray-900">
              {frontMatter.next.includes("-")
                ? frontMatter.next
                    .split("-")
                    .map((el) => (el === "css" ? "CSS" : el))
                    .join(" ")
                : frontMatter.next}
              <i className="fas fa-caret-right ml-2 mt-px" />
            </Typography>
          </Link>
        )}
      </div>
     
      <footer className="flex flex-col items-center justify-between gap-4 border-t border-blue-gray-50 py-6 lg:flex-row">
        <Typography className="text-center font-normal text-blue-gray-500 lg:text-left">
          Copyright &copy; {date} ZigOps 
        </Typography>
      </footer>
    </Fragment>
  );
}
