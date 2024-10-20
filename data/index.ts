import { link } from "fs";

export const navItems = [
    { name: "About", link: "#about" },
    { name: "Projects", link: "#projects" },
    { name: "Testimonials", link: "#testimonials" },
    { name: "Contact", link: "#contact" },
  ];
  
  export const gridItems = [
    {
      id: 1,
      title: "I prioritize client collaboration, fostering open communication ",
      description: "",
      className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
      imgClassName: "w-full h-full",
      titleClassName: "justify-end",
      img: "/b1.svg",
      spareImg: "",
    },
    {
      id: 2,
      title: "I'm very flexible with time zone communications",
      description: "",
      className: "lg:col-span-2 md:col-span-3 md:row-span-2",
      imgClassName: "",
      titleClassName: "justify-start",
      img: "",
      spareImg: "",
    },
    {
      id: 3,
      title: "My tech stack",
      description: "I constantly try to improve",
      className: "lg:col-span-2 md:col-span-3 md:row-span-2",
      imgClassName: "",
      titleClassName: "justify-center",
      img: "",
      spareImg: "",
    },
    {
      id: 4,
      title: "Tech enthusiast with a passion for development.",
      description: "",
      className: "lg:col-span-2 md:col-span-3 md:row-span-1",
      imgClassName: "",
      titleClassName: "justify-start",
      img: "/grid.svg",
      spareImg: "/b4.svg",
    },
  
    {
      id: 5,
      title: "Currently building a Pharmacy Management System using JavaFX",
      description: "The Inside Scoop",
      className: "md:col-span-3 md:row-span-2",
      imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
      titleClassName: "justify-center md:justify-start lg:justify-center",
      img: "/b5.svg",
      spareImg: "/grid.svg",
    },
    {
      id: 6,
      title: "Do you want to start a project together?",
      description: "",
      className: "lg:col-span-2 md:col-span-3 md:row-span-1",
      imgClassName: "",
      titleClassName: "justify-center md:max-w-full max-w-60 text-center",
      img: "",
      spareImg: "",
    },
  ];
  
  export const projects = [
    {
      id: 1,
      title: "CarePulse- An Appointment Managemnet System",
      des: "An Appointment Management System Created using Next.Js and Appwrite CMS",
      img: "/carepulse.png",
      iconLists: ["/re.svg", "/tail.svg", "/ts.svg","/app.png"],
      link: "https://vercel.live/link/carepulse-wheat-eight.vercel.app?",
    },
    {
      id: 2,
      title: "Valyrian Visions - An E-Commerce Platform",
      des: "An art E-commerce Platform made using PHP Laravel and MySQL",
      img: "/art.jpg",
      iconLists: ["/mysql.png", "/php.png", "/laravel.png", "/tail.svg"],
      link: "https://github.com/Sasitha-Ruvin/Valyrians",
    },
    {
      id: 3,
      title: "Valyrian Visions - Android Application",
      des: "An art E-commerce android app made using Kotlin Jetpack Compose and Firebase for Authentication",
      img: "/android.jpg",
      iconLists: ["/kot.png", "/jet.png", "/fire.png"],
      link: "https://github.com/Sasitha-Ruvin/ValyrianVisionsp",
    },
    {
      id: 4,
      title: "Advanced Classic White - Cosmetic Website",
      des: "A Cosmetic Company Website made for a Client using ReactJS and Tailwind CSS",
      img: "/acw.png",
      iconLists: ["/re.svg", "/tail.svg", "/ts.svg"],
      link: "https://github.com/Sasitha-Ruvin/acw",
    },
  ];
  
  export const testimonials = [
    {
      quote:
        "Collaborating with Sasitha was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Sasitha's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Sasitha is the ideal partner.",
      name: "Michael Johnson",
      title: "Director of AlphaStream Technologies",
    },
    {
      quote:
        "Collaborating with Sasitha was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Sasitha's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Sasitha is the ideal partner.",
      name: "Michael Johnson",
      title: "Director of AlphaStream Technologies",
    },
    {
      quote:
        "Collaborating with Sasitha was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Sasitha's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Sasitha is the ideal partner.",
      name: "Michael Johnson",
      title: "Director of AlphaStream Technologies",
    },
    {
      quote:
        "Collaborating with Sasitha was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Sasitha's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Sasitha is the ideal partner.",
      name: "Michael Johnson",
      title: "Director of AlphaStream Technologies",
    },
    {
      quote:
        "Collaborating with Sasitha was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Sasitha's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Sasitha is the ideal partner.",
      name: "Michael Johnson",
      title: "Director of AlphaStream Technologies",
    },
  ];
  
  export const companies = [
    {
      id: 1,
      name: "cloudinary",
      img: "/cloud.svg",
      nameImg: "/cloudName.svg",
    },
    {
      id: 2,
      name: "appwrite",
      img: "/app.svg",
      nameImg: "/appName.svg",
    },
    {
      id: 3,
      name: "HOSTINGER",
      img: "/host.svg",
      nameImg: "/hostName.svg",
    },
    {
      id: 4,
      name: "stream",
      img: "/s.svg",
      nameImg: "/streamName.svg",
    },
    {
      id: 5,
      name: "docker.",
      img: "/dock.svg",
      nameImg: "/dockerName.svg",
    },
  ];
  
  export const workExperience = [
    // {
    //   id: 1,
    //   title: "Student Assitant",
    //   desc: "Assisted in the development of a web-based platform using React.js, enhancing interactivity.",
    //   className: "md:col-span-2",
    //   thumbnail: "/exp1.svg",
    // },
    // {
    //   id: 2,
    //   title: "Mobile App Dev - JSM Tech",
    //   desc: "Designed and developed mobile app for both iOS & Android platforms using React Native.",
    //   className: "md:col-span-2", // change to md:col-span-2
    //   thumbnail: "/exp2.svg",
    // },
    {
      id: 1,
      title: "Freelance Web Developer",
      desc: "Developed Webistes for Clients according to  their requiremnets using React Framework",
      className: "md:col-span-2", // change to md:col-span-2
      thumbnail: "/exp3.svg",
    },
    // {
    //   id: 4,
    //   title: "Lead Frontend Developer",
    //   desc: "Developed and maintained user-facing features using modern frontend technologies.",
    //   className: "md:col-span-2",
    //   thumbnail: "/exp4.svg",
    // },
  ];
  
  export const socialMedia = [
    {
      id: 1,
      img: "/git.svg",
      link:"https://github.com/Sasitha-Ruvin"
    },
    {
      id: 2,
      img: "/insta.png",
      link:""
    },
    {
      id: 3,
      img: "/link.svg",
      link:"https://www.linkedin.com/in/sasitha-ruween-1752502b3/"
    },
  ];

  export const profile = {
    img: "/profile.jpeg",  
    title: "My Profile", 
  };