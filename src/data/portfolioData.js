// src/data/portfolioData.js

const portfolioData = {
    name: "Sreejon Chowdhury",
    title: "IT Networking & Security Student",
    about: "I'm passionate about cybersecurity, networking, and cloud computing. Currently in my 4th year at Ontario Tech University studying Information Technology with a focus on Networking & IT Security, I'm eager to apply my knowledge and skills in real-world scenarios.",
    contactEmail: "sjcontactc@gmail.com",
    location: "Oshawa/Scarborough, ON, Canada",
    phone: "What a save!",
    socialLinks: [
      { name: "GitHub", url: "https://github.com/Esjeyy", icon: "fab fa-github" },
      { name: "LinkedIn", url: "https://linkedin.com/in/sreejon-chowdhury-99953123b/", icon: "fab fa-linkedin" },
    ],
    skills: [
      { name: "Networking (TCP/IP, VLANs, VPNs)", level: 90 },
      { name: "System Administration", level: 85 },
      { name: "Cybersecurity", level: 80 },
      { name: "Python", level: 85 },
      { name: "SQL", level: 75 },
      { name: "Windows Server", level: 80 },
      { name: "Linux", level: 75 },
      { name: "Active Directory", level: 85 },
      { name: "PowerShell & Bash", level: 70 },
      { name: "Wireshark", level: 80 }
    ],
    projects: [
      {
        title: "Enterprise Active Directory Implementation",
        description: "Designed and deployed a multi-site Active Directory environment with domain controllers across three locations. Configured DNS, DHCP, and file sharing services in a Windows Server environment. Implemented security through Group Policy including password policies and access controls.",
        technologies: ["Active Directory", "Windows Server", "DNS", "DHCP", "Group Policy"],
        image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=2000",
        link: "#",
        github: "https://github.com/Esjeyy"
      },
      {
        title: "Advanced Networking Configuration",
        description: "Configured and maintained enterprise-level network architecture using professional Cisco equipment in university's advanced networking laboratory. Applied industry-standard security protocols across complex network configurations.",
        technologies: ["Cisco", "Enterprise Networking", "Security Protocols", "Network Configuration"],
        image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?q=80&w=2000",
        link: "https://drive.google.com/drive/folders/1e1p9ruDiSZIfUgFJDqj7hMJMuRn4MbV8?usp=drive_link",
        github: "https://github.com/Esjeyy"
      }
    ],
    experience: [
      {
        position: "Online Data Analyst",
        company: "Telus Digital",
        duration: "May 2024 - Jan 2025",
        description: "Conducted data analysis and quality assessment. Performed pattern recognition and verification. Worked on information quality improvement (Details confidential)."
      },
      {
        position: "Computer Vision Programmer/Researcher",
        company: "Universiti Kebangsaan Malaysia",
        duration: "Jun 2023 - Sep 2023",
        description: "Designed a safety monitoring system using drone-captured imagery to detect compliance issues, achieving 99% accuracy in real-time detection. Integrated Wi-Fi connectivity enabling seamless visual data transmission with under 500 ms latency for immediate safety feedback. Improved project efficiency by 30% through Agile methodology implementation, facilitating rapid team collaboration."
      },
      {
        position: "Academic Lab Work - Networking and IT Security",
        company: "Ontario Tech University",
        duration: "Sep 2021 - Apr 2025",
        description: "Achieved 100% resolution rate of complex network issues within 3 hours using OpenStack ticketing system on university's enterprise-grade Cisco infrastructure. Configured and maintained enterprise-level network architecture using professional Cisco equipment in university's advanced networking laboratory. Applied industry-standard security protocols across complex network configurations, gaining hands-on experience with commercial-grade infrastructure."
      }
    ],
    education: [
      {
        degree: "Bachelor of Information Technology (Networking & IT Security)",
        institution: "Ontario Tech University",
        year: "Expected May 2025",
      }
    ],
    miscLinks: [
      { name: "Database Website", url: "https://sreejon.pythonanywhere.com/" }
    ]
  };
  
  export default portfolioData;
  