import Image from "next/image";
import Link from "next/link";
import AdminLayout from "./layout";

export default function Dashboard() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-start">
      <Link href="/">Home</Link>
      Hello IAM Dashboard
    </main>
  );
}

// Dashboard.getLayout = function getLayout(page) {
//   return <AdminLayout>{page}</AdminLayout>;
// };
