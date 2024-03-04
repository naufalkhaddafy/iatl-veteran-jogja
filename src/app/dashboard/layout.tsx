import NavbarAdmin from "@/components/Admin/NavbarAdmin";
import SidebarAdmin from "@/components/Admin/SidebarAdmin";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main>
      <NavbarAdmin />
      <SidebarAdmin />
      <div className="p-4 sm:ml-64">
        <div className="p-4 rounded-lg  mt-14">{children}</div>
      </div>
    </main>
  );
}
