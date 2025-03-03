const styles = {
  paddingX: "sm:px-16 px-6",
  paddingY: "sm:py-16 py-6",
  padding: "sm:px-16 px-6 sm:py-16 py-10",

  heroHeadText:
    "font-black text-white lg:text-[80px] sm:text-[60px] xs:text-[50px] text-[40px] lg:leading-[98px] mt-2",
  heroSubText:
    "text-[#dfd9ff] font-medium lg:text-[30px] sm:text-[26px] xs:text-[20px] text-[16px] lg:leading-[40px]",

  sectionHeadText:
    "text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]",
  sectionSubText:
    "sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider",

  // Add the following styles for the Navbar
  navbar: "w-full flex items-center py-5 fixed top-0 z-30", // Increased z-index
  navbarScrolled: "bg-primary",
  navbarTransparent: "bg-transparent",
  navbarContainer: "w-full flex justify-between items-center max-w-7xl mx-auto",
  navbarLink: "text-white text-[18px] font-bold cursor-pointer flex",
  navbarLinkHidden: "sm:block hidden",
  navMenu: "list-none hidden sm:flex flex-row gap-10",
  navItem: "hover:text-white text-[18px] font-medium cursor-pointer flex items-center gap-2",
  navItemActive: "text-white",
  navItemInactive: "text-secondary",
  navMenuMobile: "list-none flex justify-end items-start flex-1 flex-col gap-4",
  navMenuMobileContainer: "p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl",
  navMenuMobileHidden: "hidden",
  navMenuMobileVisible: "flex",
  navMenuMobileItem: "font-poppins font-medium cursor-pointer text-[16px] flex items-center gap-2",
  navMenuMobileItemActive: "text-white",
  navMenuMobileItemInactive: "text-secondary",
  navMenuMobileResume: "font-poppins font-medium cursor-pointer text-[16px] text-secondary hover:text-white flex items-center gap-2",
};

export { styles };
