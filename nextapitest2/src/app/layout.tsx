import { ReactNode } from "react";
import "./globals.css";
import Link from "next/link";

type Props = {
  children : ReactNode
}

const DashboardLayout = ({children}:Props) => {
  return (
    <html lang="en">
      <body>
        <p>
          THIS IS PART OF LAYOUT
        </p>
        <Link href={"/login"}>LOGIN</Link>
        <main>{children}</main>
      </body>
    </html>
  );
}
export default DashboardLayout
