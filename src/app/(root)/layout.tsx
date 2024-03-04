import ContainerLandingPage from "@/components/LandingPage/ContainerLandingPage";
import FooterLandingPage from "@/components/LandingPage/FooterLandingPage";
import NavbarLandingPage from "@/components/LandingPage/NavbarLandingPage";

export default function LandingPageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ContainerLandingPage>
      <NavbarLandingPage />
      {children}
      <FooterLandingPage />
    </ContainerLandingPage>
  );
}
