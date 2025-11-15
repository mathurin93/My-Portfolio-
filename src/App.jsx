import React, { useEffect } from "react";



export default function App() {

// Scroll reveal effect and Typed.js initialization

useEffect(() => {

// --- 1. Scroll Reveal Logic (Existing) ---

const revealElements = document.querySelectorAll('.reveal');

const observer = new IntersectionObserver((entries) => {

entries.forEach(entry => {

if (entry.isIntersecting) {

entry.target.classList.add('opacity-100', 'translate-y-0');

}

});

}, { threshold: 0.12 });



revealElements.forEach((el) => observer.observe(el));





// --- 2. Typed.js Setup ---

// Load Typed.js CDN dynamically

const script = document.createElement('script');

script.src = 'https://cdn.jsdelivr.net/npm/typed.js@2.0.12';

script.async = true;

document.body.appendChild(script);



// Initialize Typed.js after the script loads

script.onload = () => {

// Use window.Typed since it's loaded via CDN

if (window.Typed) {

if (document.querySelector('.multiple-text')) {

new window.Typed('.multiple-text', {

strings: ['Web Developer', 'Graphic Designer', 'Game Designer', 'Mobile Designer', 'SQL Developer', 'Digital Marketer'],

typeSpeed: 100,

backSpeed: 100,

backDelay: 1000,

loop: true,

});

}

}

};





// --- 3. Cleanup ---

return () => {

observer.disconnect();

// Remove the Typed.js script when the component unmounts

script.remove();

};

}, []);



const projects = [
    { href: "https://www.mothersrefreshedfoundation.com/", title: "Mothers Refreshed Foundation", desc: "WordPress site focused on accessibility and community outreach.", imageUrl: "/images/MRF.png" }, // Use your filename
    { href: "https://www.wumcanada.com/", title: "WUM Canada", desc: "Custom content layout and responsive design for nonprofit.", imageUrl: "/images/WUM.png" }, // Use your filename
    { href: "https://www.bethanyfosterrmt.com/", title: "Bethany Foster RMT", desc: "SEO-focused site build and local search optimization.", imageUrl: "/images/BMT.png" }, // Use your filename
    { href: "https://fwdmarch.com/", title: "FWD March", desc: "Event site with clear calls-to-action and registration flow.", imageUrl: "/images/HH.png" }, // Use your filename
    { href: "https://renewedfamilyservices.com/", title: "Renewed Family Services", desc: "Responsive WordPress build and content strategy.", imageUrl: "/images/RFS.png" }, // Use your filename
    { href: "https://isaiahbedwardhamilton.com/", title: "Isaiah Bedward-Hamilton", desc: "Artist site with event program and media integration.", imageUrl: "/images/IBH.png" }, // Use your filename
    { href: "https://mathurin93.github.io/Isaiahs-Program/", title: "Isaiah's Program (GitHub)", desc: "Static site prototype and interactive program schedule.", imageUrl: "/images/Program.png" }, // Use your filename
    { href: "https://cogsabbath.org/", title: "Church of God Sabbath Keeping", desc: "Full website redesign and improved user experience.", imageUrl: "/images/COG.png" }, // Use your filename
    { href: "https://www.bonamics.org/", title: "Bonamics", desc: "Modern website build with responsive layout and optimized content.", imageUrl: "/images/BOM.png" } // Use your filename
];
  
  
  
  // The placeholder URL function is no longer needed but can be left if desired.
  // const getPlaceholderUrl = (text) => { ... }


// Base URL for consistent, themed placeholder images (16:9 ratio, now using Indigo-600: #4F46E5)

const getPlaceholderUrl = (text) => {

// Using hex code for Indigo-600: #4F46E5

return `https://placehold.co/320x180/4F46E5/ffffff?text=${encodeURIComponent(text)}`;

};



return (

<div className="min-h-screen bg-gray-50 text-gray-900 font-sans">

<header className="bg-white shadow-sm">

<div className="max-w-6xl mx-auto px-6 py-6 flex items-center justify-between">

<div className="flex items-center gap-4">

{/* Indigo Logo */}

<div className="w-12 h-12 rounded-full bg-indigo-600 flex items-center justify-center text-white font-bold">MR</div>

<div>

{/* Colored Name */}

<h1 className="text-xl font-semibold text-indigo-700">Matt Robinson</h1>

{/* Changed Subtitle to dark gray/black font */}

<p className="text-sm text-gray-900">Web Developer • UX/UI Designer • Digital Marketer</p>

</div>

</div>

<nav className="flex gap-4 text-sm">

{/* Colored Nav Links */}

<a href="#projects" className="hover:underline text-indigo-600">Projects</a>

<a href="#skills" className="hover:underline text-indigo-600">Skills</a>

<a href="#about" className="hover:underline text-indigo-600">About</a>

<a href="#contact" className="hover:underline text-indigo-600">Contact</a>

{/* LinkedIn link removed from header menu as requested */}

</nav>

</div>

</header>



<main className="max-w-6xl mx-auto px-6 py-12">

{/* Hero Section - Updated for Typed.js and styling */}

<section className="grid md:grid-cols-2 gap-8 items-center reveal opacity-0 translate-y-6 transition-all duration-700">

<div>

{/* New Typed.js Content Structure */}

<div className="mb-4">

<h3 className="text-2xl font-semibold text-gray-700">Hello, It's</h3> {/* Removed "Me" */}

{/* Colored Hero Name */}

<h1 className="text-6xl font-extrabold text-indigo-700 mt-1 mb-2 leading-tight">Matt Robinson</h1>

<h3 className="text-3xl font-semibold text-gray-900 leading-snug"> {/* Fixed text is black */}

And I'm a <span className="multiple-text font-bold text-indigo-600"></span> {/* Dynamic text is Indigo */}

</h3>

</div>

{/* End New Typed.js Content Structure */}



<p className="text-lg text-gray-700 mb-6">I combine web development, UX/UI design, and digital marketing to create user-centered websites and campaigns. I specialize in WordPress, SEO, content strategy, and practical marketing execution.</p>

<div className="flex gap-3">

{/* Indigo Button */}

<a href="#projects" className="inline-block bg-indigo-600 text-white px-5 py-2 rounded shadow hover:bg-indigo-700 transition">View projects</a>

{/* Indigo Border Button */}

<a href="#contact" className="inline-block border border-indigo-600 text-indigo-600 px-5 py-2 rounded hover:bg-indigo-50 transition">Get in touch</a>

</div>

<ul className="mt-6 text-sm text-gray-600 space-y-1">

<li>📍 Guelph, Ontario</li>

<li>📧 mathurin_robinson@ymail.com</li>

<li>📱 647-806-0926</li>

</ul>

</div>



<aside className="bg-white rounded-lg p-6 shadow-sm">

{/* Colored Featured skills Heading */}

<h3 className="font-semibold mb-3 text-indigo-700">Featured skills</h3>

<div className="grid grid-cols-2 gap-3 text-sm">

<div className="p-3 bg-gray-100 rounded">WordPress Development</div>

<div className="p-3 bg-gray-100 rounded">SEO & Analytics</div>

<div className="p-3 bg-gray-100 rounded">Adobe Creative Suite</div>

<div className="p-3 bg-gray-100 rounded">Google Ads</div>

<div className="p-3 bg-gray-100 rounded">HTML / CSS / JavaScript</div>

<div className="p-3 bg-gray-100 rounded">Figma & Prototyping</div>

<div className="p-3 bg-gray-100 rounded">Cybersecurity (Certified)</div>

<div className="p-3 bg-gray-100 rounded">Google Digital Marketing & E-commerce</div>

</div>

</aside>

</section>



{/* --- SECTION ORDER REARRANGED AS REQUESTED --- */}



{/* 1. About (MOVED UP AND REWRITTEN - NO ASTERISKS) */}

<section id="about" className="mt-16 bg-white rounded-lg p-6 shadow reveal opacity-0 translate-y-6 transition-all duration-700">

{/* Colored About me Heading */}

<h3 className="text-2xl font-bold mb-3 text-indigo-700">About me</h3>

<p className="text-gray-700">

I am a versatile Web Developer and Digital Strategist focused on building accessible, high-performing digital experiences for small businesses and nonprofits. My approach is unique, combining technical proficiency in development and design with a strong foundation in human-centered analysis, stemming from a previous degree in Kinesiology from Ryerson University.

</p>

<p className="text-gray-700 mt-3">

I hold an Advanced Diploma in IT Innovation and Design from Conestoga College, and I specialize in full-spectrum project leadership: from UX/UI prototyping (Figma) and WordPress development to SEO optimization and launching effective Google Ads campaigns. I thrive in environments where problem-solving and quality communication are key to delivering exceptional results.

</p>

<ul className="mt-4 text-sm text-gray-600 space-y-1">

<li>• Dual Educational Background: IT Innovation & Design (Advanced Diploma) and Kinesiology (BSc).</li>

<li>• Certifications: Google Digital Marketing & E-commerce, Google Ads, Email Marketing, Marketing Analytics.</li>

<li>• Core Values: Strong communication, team leadership (husband and father of four), and attention to detail.</li>

</ul>

</section>



{/* 2. Projects (FOLLOWS ABOUT) */}

<section id="projects" className="mt-16">

{/* Colored Selected projects Heading */}

<h3 className="text-2xl font-bold mb-4 text-indigo-700">Selected projects</h3>

<p className="text-sm text-gray-600 mb-6">A selection of live sites I designed, developed, and optimized.</p>



<div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

{projects.map((p, i) => (

<article key={i} className="transform transition-all duration-300 hover:-translate-y-1 hover:shadow-lg bg-white rounded-lg shadow-xl overflow-hidden">

<a href={p.href} target="_blank" rel="noreferrer" className="block">

{/* Project Image Placeholder (now Indigo) */}

<div className="w-full h-auto">
                    <img 
                      src={p.imageUrl} // <-- The updated line
                      alt={`Preview of ${p.title}`} 
                      className="w-full h-auto object-cover aspect-video" // Added aspect-video for better consistency
                    />
                  </div>

{/* Project Details */}

<div className="p-4">

<h4 className="font-semibold text-lg">{p.title}</h4>

<p className="text-xs text-gray-600 mt-1">{p.desc}</p>

</div>

</a>

</article>

))}

</div>

</section>



{/* 3. Links (MOVED DOWN) */}

<section className="mt-10 reveal opacity-0 translate-y-6 transition-all duration-700">

<div className="bg-white rounded-lg p-6 shadow">

{/* Colored More work & design files Heading */}

<h4 className="text-xl font-semibold mb-3 text-indigo-700">More work & design files</h4>

{/* Links changed to dark gray/black font */}

<ul className="text-sm text-gray-800 space-y-2">

<li><a href="https://github.com/mathurin93" target="_blank" rel="noreferrer" className="hover:text-indigo-600 transition-colors">• GitHub Portfolio — Full code repositories</a></li>

<li><a href="https://www.figma.com/@mathurinrobinso" target="_blank" rel="noreferrer" className="hover:text-indigo-600 transition-colors">• Figma Portfolio — UI/UX design projects</a></li>

</ul>

</div>

</section>





{/* 4. Skills (REMAINS) */}

<section id="skills" className="mt-12 grid md:grid-cols-2 gap-6 reveal opacity-0 translate-y-6 transition-all duration-700">

<div className="bg-white rounded-lg p-6 shadow">

{/* Colored Technical Skills Heading */}

<h4 className="font-semibold mb-3 text-indigo-700">Technical Skills</h4>

<ul className="text-sm text-gray-700 space-y-2">

<li>WordPress & CMS management</li>

<li>HTML, CSS, JavaScript</li>

<li>SEO & Google Analytics</li>

<li>Google Ads & Email Marketing</li>

<li>Adobe InDesign, Illustrator, Photoshop</li>

</ul>

</div>



<div className="bg-white rounded-lg p-6 shadow">

{/* Colored Personal Skills Heading */}

<h4 className="font-semibold mb-3 text-indigo-700">Personal Skills</h4>

<ul className="text-sm text-gray-700 space-y-2">

<li>Communication & client relations</li>

<li>Project coordination & time management</li>

<li>Attention to detail & quality assurance</li>

<li>Creative problem-solving</li>

<li>Workshop facilitation & mentoring youth</li>

</ul>

</div>

</section>



{/* 5. Contact (REMAINS LAST) */}

<section id="contact" className="mt-12 bg-white rounded-lg p-6 shadow mb-12 reveal opacity-0 translate-y-6 transition-all duration-700">

{/* Colored Contact Heading */}

<h4 className="text-2xl font-bold mb-3 text-indigo-700">Contact</h4>

<p className="text-gray-700 mb-4">Interested in working together or want to see more? Reach out — I reply quickly.</p>



<div className="space-y-4">

<div className="grid sm:grid-cols-2 gap-4">

<div>

<p className="text-sm text-gray-600">Email</p>

{/* Colored Email Link */}

<a href="mailto:mathurin_robinson@ymail.com" className="text-indigo-600 hover:underline font-medium">mathurin_robinson@ymail.com</a>

</div>

<div>

<p className="text-sm text-gray-600">Phone</p>

{/* Colored Phone Link */}

<a href="tel:+16478060926" className="text-indigo-600 hover:underline font-medium">647-806-0926</a>

</div>

</div>

{/* LinkedIn Profile Added */}

<div className="pt-2">

<p className="text-sm text-gray-600">Professional Profile</p>

<a

href="https://www.linkedin.com/in/matt-robinson-31b9b3217/"

target="_blank"

rel="noreferrer"

className="text-indigo-600 hover:underline flex items-center gap-2 font-medium"

>

{/* Indigo Icon */}

<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-indigo-500"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>

LinkedIn Profile

</a>

</div>

</div>





<div className="mt-8">

<a href="/mnt/data/Matt Robinson Resume.pdf" download className="inline-block bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 transition shadow-md">Download Resume (PDF)</a>

</div>

</section>

</main>



<footer className="bg-white border-t py-6">

<div className="max-w-6xl mx-auto px-6 text-sm text-gray-600 text-center">© {new Date().getFullYear()} Matt Robinson — Web Development & Digital Marketing</div>

</footer>

</div>

);

}