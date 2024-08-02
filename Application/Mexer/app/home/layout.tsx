import SideBar from "@/components/Home/sidebar";
import SidebarProvider from "@/components/Home/sidebarContext";
import "@/styles/globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning>
      <head />
      <body className="layout">
        <SidebarProvider>
          <SideBar />
          <main className="main-content">
            {children}
          </main>
        </SidebarProvider>
      </body>
    </html>
  );
}

