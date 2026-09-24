import {
  Home,
  User,
  Mail,
  Facebook,
  Instagram,
  Twitter,
  Youtube,
  MapPin,
  Phone,
  ArrowRight,
} from "lucide-vue-next";
export default {
  generalData: {
    generalLogo: new URL("@/assets/logo.png", import.meta.url).href,
    bgImage:new URL("@/assets/bg/bg-pattern.jpeg", import.meta.url).href,
    bgImage1:new URL("@/assets/bg/bg-pattern.png", import.meta.url).href,
    bgImage2:new URL("@/assets/bg/image9.jfif", import.meta.url).href,
    bgImage3:new URL("@/assets/bg/bg2.jpg", import.meta.url).href,
    name: "Qafilatul Mahabbah",
    year: new Date().getFullYear(),
    // desiger: "TheCodeUnit-Soft Technologies",
    designerUrl: "https://www.thecodeunit.org.ng",
    orphan:"Orphans Day",
    clothing:"Clothing Day",
    sick:"Day of the sick",
  },
  socialLinks: [
    { icon: Facebook, url: "https://www.facebook.com/share/1G2YcR8a1r/" },
    {
      icon: Instagram,
      url: "https://www.instagram.com/qafila_mahabbah?igshid=YzVkODRmOTdmMw%3D%3D",
    },
    { icon: Youtube, url: "https://www.youtube.com/@QAFILATULMAHABBAH" },
  ],
  values: [
    {
      title: "Our Vision",
      description: `A tolerant Muslim society that cooperates in righteousness and piety and is based on love, understanding and peaceful coexistence between Muslims and with others.`,
      icon: new URL("@/assets/gifs/vis.gif", import.meta.url).href,
    },
    {
      title: "Our Mission",
      description: `Qafilatul Mahabbah is coming together to promote peace and love of Muslim within Nigeria and outside its shores.`,
      icon: new URL("@/assets/gifs/mission.gif", import.meta.url).href,
    },
    {
      title: "Core Values",
      description: `Integrity, Transparency, Teamwork, Hard Work, and Accountability guide everything we do.`,
      icon: new URL("@/assets/gifs/target.gif", import.meta.url).href,
    },
  ],
  programs: [
    {
      title: "يوم البيئة",
      translation:"Enviromental Day",
      icon: new URL("@/assets/gifs/p1.gif", import.meta.url).href,
      description: `An Initiative focused on sanitation, tree planting, and community awareness, promoting sustainable practices to combat desertification and build greener, healthier communities.`,
      link: "https://qepi.qafilatulmahabbah.org.ng",
    },
    {
      title: "يوم الإطعام",
      translation:"Feeding Day",
      icon: new URL("@/assets/gifs/p2.gif", import.meta.url).href,
      description: `A compassion driven initiative providing meals, and essential aid to vulnerable families, and the needy focused on fighting hunger and strengthening community support.`,
      link: "https://qfi.qafilatulmahabbah.org.ng",
    },
    {
      title: "دعوة تعليم",
      translation:"Eduaction Drive",
      icon: new URL("@/assets/gifs/p3.gif", import.meta.url).href,
      description: `We believe education is the foundation of lasting change. By providing accessible, quality learning opportunities, we empower young minds with the knowledge needed to build a brighter future.`,
      link: "https://qedi.qafilatulmahabbah.org.ng",
    },
    {
      title: "يوم الأيتام",
      translation:"Orphans Day",
      icon: new URL("@/assets/gifs/p5.gif", import.meta.url).href,
      description: `Providing food, welfare, and long term support for orphans in our communities.`,
      link: "/orphans", // internal route
    },
    {
      title: "يوم الكسوة",
      translation:"Clothing Day",
      icon: new URL("@/assets/gifs/p6.gif", import.meta.url).href,
      description: `Distributing clothes and essentials to the needy to ensure dignity and comfort.`,
      link: "/clothing", // internal route
    },
    {
      title: "يوم المرضى",
      translation:"Day of the Sick",
      icon: new URL("@/assets/gifs/p4.gif", import.meta.url).href,
      description: `Offering medical care, counseling, and support to sick and vulnerable individuals in our community.`,
      link: "/sick", // internal route
    },
  ],
  contactInfo: [
    {
      icon: MapPin,
      title: "Address",
      value: "Big Homes, Plot 903 Valentine Nwabueze Crescent, Jahi – Abuja",
    },
    {
      icon: Phone,
      title: "Phone",
      value: "07031040115, 07060400069",
    },
    {
      icon: Mail,
      title: "Email",
      value: "info@qafilatulmahabbah.org.ng",
    },
  ],
};
