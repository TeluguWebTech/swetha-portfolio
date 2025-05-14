import { useState, useEffect } from 'react';
import { FaBars, FaTimes, FaGithub, FaLinkedinIn, FaTwitter, FaEnvelope, FaPhone, FaMapMarkerAlt, FaGlobe, FaGraduationCap, FaUniversity, FaExternalLinkAlt, FaArrowUp } from 'react-icons/fa';


const SwethaResume = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [showScrollTop, setShowScrollTop] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };
    useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for your message! I will get back to you soon.');
    e.target.reset();
  };

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth'
      });
      setMobileMenuOpen(false);
    }
  };

    const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };


  return (
    <div className="font-sans bg-gray-50 text-gray-800 relative">
            {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 w-12 h-12 bg-indigo-600 text-white rounded-full flex items-center justify-center shadow-lg hover:bg-indigo-700 transition-all duration-300 z-50"
          aria-label="Scroll to top"
        >
          <FaArrowUp className="text-xl" />
        </button>
      )}

      {/* Header */}
      <header className="fixed w-full bg-white shadow-md z-50">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <a href="#" className="text-2xl font-bold text-indigo-600">Swetha N</a>
          
          {/* Mobile menu button */}
          <button 
            className="md:hidden text-gray-800 focus:outline-none"
            onClick={toggleMobileMenu}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="#home" className="font-medium hover:text-indigo-600" onClick={() => scrollToSection('home')}>Home</a>
            <a href="#about" className="font-medium hover:text-indigo-600" onClick={() => scrollToSection('about')}>About</a>
            <a href="#skills" className="font-medium hover:text-indigo-600" onClick={() => scrollToSection('about')}>Skills</a>
            <a href="#experience" className="font-medium hover:text-indigo-600" onClick={() => scrollToSection('experience')}>Experience</a>
            <a href="#education" className="font-medium hover:text-indigo-600" onClick={() => scrollToSection('education')}>Education</a>
            <a href="#contact" className="font-medium hover:text-indigo-600" onClick={() => scrollToSection('contact')}>Contact</a>
          </nav>
        </div>
        
        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white py-4 px-6 shadow-lg">
            <nav className="flex flex-col space-y-4">
              <a href="#home" className="font-medium hover:text-indigo-600" onClick={() => scrollToSection('home')}>Home</a>
              <a href="#about" className="font-medium hover:text-indigo-600" onClick={() => scrollToSection('about')}>About</a>
              <a href="#skills" className="font-medium hover:text-indigo-600" onClick={() => scrollToSection('skills')}>Skills</a>
              <a href="#experience" className="font-medium hover:text-indigo-600" onClick={() => scrollToSection('experience')}>Experience</a>
              <a href="#education" className="font-medium hover:text-indigo-600" onClick={() => scrollToSection('education')}>Education</a>
              <a href="#contact" className="font-medium hover:text-indigo-600" onClick={() => scrollToSection('contact')}>Contact</a>
            </nav>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section id="home" className="pt-32 pb-20 bg-gradient-to-r from-indigo-50 to-emerald-50">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <p className="text-indigo-600 font-medium mb-2">Hello, I'm</p>
              <h1 className="text-5xl font-bold mb-4">Swetha N</h1>
              <h2 className="text-2xl text-indigo-600 font-medium mb-6">Senior Web Developer</h2>
              <p className="text-lg mb-8">
                I build responsive, user-friendly web and mobile interfaces with 9+ years of experience.
              </p>
                         <div className="flex space-x-4 mb-8">
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-indigo-600 text-white flex items-center justify-center hover:bg-indigo-700 transition-all transform hover:-translate-y-1 shadow-md hover:shadow-lg">
                  <FaLinkedinIn />
                </a>
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-gray-800 text-white flex items-center justify-center hover:bg-gray-900 transition-all transform hover:-translate-y-1 shadow-md hover:shadow-lg">
                  <FaGithub />
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-blue-400 text-white flex items-center justify-center hover:bg-blue-500 transition-all transform hover:-translate-y-1 shadow-md hover:shadow-lg">
                  <FaTwitter />
                </a>
                <a href="mailto:94akhil@gmail.com" className="w-10 h-10 rounded-full bg-purple-600 text-white flex items-center justify-center hover:bg-purple-700 transition-all transform hover:-translate-y-1 shadow-md hover:shadow-lg">
                  <FaEnvelope />
                </a>
              </div>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg font-semibold hover:from-indigo-700 hover:to-purple-700 transition-all transform hover:-translate-y-1 shadow-md hover:shadow-lg text-center"
                >
                  Contact Me
                </button>
                {/* <button 
                  onClick={() => scrollToSection('experience')}
                  className="border-2 border-indigo-600 text-indigo-600 hover:bg-indigo-50 px-6 py-3 rounded-lg font-medium transition duration-300"
                >
                  View Work
                </button> */}
              </div>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <div className="relative">
                <img 
                  src="assets/swetha.jpg" 
                  alt="Swetha N" 
                  className="w-64 h-64 md:w-80 md:h-80 rounded-full border-4 border-white shadow-xl object-cover"
                />
                  <div className="absolute -bottom-3 -right-3 bg-indigo-600 text-white px-4 py-2 rounded-full font-medium shadow-lg">
                  Open to Work
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 relative">
            About Me
            <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-indigo-600 rounded-full"></span>
          </h2>
          
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0 md:pr-10">
              <p className="mb-4">
                I am a Senior Web Developer with over 9+ years of experience in front-end development,
                specializing in building responsive and user-friendly web and mobile interfaces.
              </p>
              <p className="mb-4">
                I have strong expertise in HTML5, CSS3, JavaScript, TypeScript, Angular (2+ to latest),
                React.js, Vue.js, and Node.js.
              </p>
              <p className="mb-8">
                Currently based in the USA, I hold a Master's in Information System Security and am
                passionate about creating secure, performant web applications.
              </p>
              
              <div className="bg-gray-100 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-indigo-600 mb-4">Personal Info</h3>
                <ul className="space-y-2">
                  <li><span className="font-semibold">Email:</span> n.swetha597@gmail.com</li>
                  <li><span className="font-semibold">Phone:</span> +1 (804) 250-6543</li>
                  <li><span className="font-semibold">Education:</span> MS in Information System Security</li>
                  <li><span className="font-semibold">Experience:</span> 9+ years</li>
                </ul>
              </div>
            </div>
            
          <div className="lg:w-1/2">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">My Skills</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
                  <h4 className="text-lg font-semibold text-indigo-600 mb-4">Front-end</h4>
                  <div className="flex flex-wrap gap-2">
                    {['Angular', 'React', 'JavaScript', 'TypeScript','AG grid', 'HTML/CSS'].map(skill => (
                      <span key={skill} className="px-3 py-1 bg-indigo-50 text-indigo-700 rounded-full text-sm font-medium">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
                  <h4 className="text-lg font-semibold text-indigo-600 mb-4">Back-end</h4>
                  <div className="flex flex-wrap gap-2">
                    {['Node.js','Express.js', 'Springboot', 'React Native', 'Flutter', 'Java/Kotlin', 'Swift'].map(skill => (
                      <span key={skill} className="px-3 py-1 bg-indigo-50 text-indigo-700 rounded-full text-sm font-medium">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
                  <h4 className="text-lg font-semibold text-indigo-600 mb-4">Databases</h4>
                  <div className="flex flex-wrap gap-2">
                    {['MS SQL', 'MongoDB', 'PostgreSQL', 'Oracle', 'GraphQL'].map(skill => (
                      <span key={skill} className="px-3 py-1 bg-indigo-50 text-indigo-700 rounded-full text-sm font-medium">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
                  <h4 className="text-lg font-semibold text-indigo-600 mb-4">Tools</h4>
                  <div className="flex flex-wrap gap-2">
                    {['Docker', 'Git', 'Jenkins', 'Azure','AWS', 'Terraform', 'Kubernetes'].map(skill => (
                      <span key={skill} className="px-3 py-1 bg-indigo-50 text-indigo-700 rounded-full text-sm font-medium">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
 

      {/* Experience Section */}
      <section id="experience" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 relative">
            Professional Experience
            <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-indigo-600 rounded-full"></span>
          </h2>
          
          <div className="relative">
            {/* Timeline line */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gray-200 transform -translate-x-1/2"></div>
            
            {/* Timeline items */}
            <div className="space-y-8 md:space-y-16">
              {/* Timeline Item 1 */}
              <div className="relative md:flex">
                {/* Dot */}
                <div className="hidden md:block absolute left-1/2 top-8 w-4 h-4 bg-indigo-600 rounded-full transform -translate-x-1/2"></div>
                
                <div className="md:w-1/2 md:pr-8 md:mb-0 mb-6">
                  <div className="bg-gray-100 p-6 rounded-lg shadow-md">
                    <span className="inline-block bg-indigo-600 text-white text-sm px-3 py-1 rounded-full mb-3">Dec 2023 – Current</span>
                    <h3 className="text-xl font-bold text-indigo-600 mb-1">Cigna</h3>
                    <h4 className="text-lg font-semibold mb-4">Sr React Developer | Philadelphia, PA</h4>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>Developed dynamic and responsive UIs using React.js</li>
                      <li>Managed application state using Redux and React Context API</li>
                      <li>Leveraged Next.js for Server-Side Rendering (SSR) and Static Site Generation (SSG)</li>
                      <li>Utilized AG Grid for handling large datasets with advanced features</li>
                      <li>Built client-side interfaces using React.js with Node.js and MongoDB backend</li>
                    </ul>
                  </div>
                </div>
                
                <div className="md:w-1/2 md:pl-8 md:mt-16">
                  <div className="bg-gray-100 p-6 rounded-lg shadow-md">
                    <span className="inline-block bg-indigo-600 text-white text-sm px-3 py-1 rounded-full mb-3">Jun 2023 – Nov 2023</span>
                    <h3 className="text-xl font-bold text-indigo-600 mb-1">CVS Health</h3>
                    <h4 className="text-lg font-semibold mb-4">Sr React Developer | Woonsocket, RI</h4>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>Developed dynamic front-end applications using React JS</li>
                      <li>Migrated from Flux to Redux for state management</li>
                      <li>Built Express.js backend services and orchestrated data fetching</li>
                      <li>Implemented live data polling from Graph APIs</li>
                      <li>Configured Webpack, Babel, and Gulp for TypeScript transpilation</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              {/* Timeline Item 2 */}
              <div className="relative md:flex">
                {/* Dot */}
                <div className="hidden md:block absolute left-1/2 top-8 w-4 h-4 bg-indigo-600 rounded-full transform -translate-x-1/2"></div>
                
                <div className="md:w-1/2 md:pr-8 md:mb-0 mb-6">
                  <div className="bg-gray-100 p-6 rounded-lg shadow-md">
                    <span className="inline-block bg-indigo-600 text-white text-sm px-3 py-1 rounded-full mb-3">July 2021 - Dec 2022</span>
                    <h3 className="text-xl font-bold text-indigo-600 mb-1">Capgemini/Zurich</h3>
                    <h4 className="text-lg font-semibold mb-4">Consultant | Hyderabad, India</h4>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>Utilized ES6, Babel, Webpack for modern JavaScript development</li>
                      <li>Built front-end using Next.js and Ant Design with JWT Authentication</li>
                      <li>Participated in full Software Development Life Cycle (SDLC)</li>
                      <li>Developed Single Page Application (SPA) using React, Redux</li>
                      <li>Implemented cross-browser compatibility solutions</li>
                    </ul>
                  </div>
                </div>
                
                <div className="md:w-1/2 md:pl-8 md:mt-16">
                  <div className="bg-gray-100 p-6 rounded-lg shadow-md">
                    <span className="inline-block bg-indigo-600 text-white text-sm px-3 py-1 rounded-full mb-3">Apr 2017 - Jun 2021</span>
                    <h3 className="text-xl font-bold text-indigo-600 mb-1">Infosys</h3>
                    <h4 className="text-lg font-semibold mb-4">Software Engineer | Hyderabad, India</h4>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>Worked on Agile (Scrum) Development Team</li>
                      <li>Developed React.js components with Forms, Events, Router</li>
                      <li>Styled applications with SASS for dynamic behavior</li>
                      <li>Worked on React.js Virtual DOM and component architecture</li>
                      <li>Implemented flux pattern using Redux framework</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              {/* Timeline Item 3 */}
              <div className="relative md:flex justify-center">
                {/* Dot */}
                <div className="hidden md:block absolute left-1/2 top-8 w-4 h-4 bg-indigo-600 rounded-full transform -translate-x-1/2"></div>
                
                <div className="md:w-1/2">
                  <div className="bg-gray-100 p-6 rounded-lg shadow-md">
                    <span className="inline-block bg-indigo-600 text-white text-sm px-3 py-1 rounded-full mb-3">Sep 2015 - Mar 2017</span>
                    <h3 className="text-xl font-bold text-indigo-600 mb-1">Maisa Solutions</h3>
                    <h4 className="text-lg font-semibold mb-4">Software Engineer | Hyderabad, India</h4>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>Frontend development with CSS3, Bootstrap and AngularJS</li>
                      <li>Developed interactive UIs with HTML, CSS, JavaScript, jQuery</li>
                      <li>Built reusable Web components with CSS and Bootstrap</li>
                      <li>Introduced automated scripts with Grunt and Gulp</li>
                      <li>Developed RESTful web-services using Spring MVC-Hibernate</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 bg-gradient-to-r from-emerald-50 to-amber-50">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 relative">
            Education
            <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-indigo-600 rounded-full"></span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Education Item 1 */}
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition duration-300">
              <h3 className="text-xl font-bold text-indigo-600 mb-2">Master of Information System Security</h3>
              <h4 className="text-lg font-semibold mb-1">University of the Cumberlands</h4>
              <p className="text-gray-600 mb-4">Kentucky, USA | May 2024</p>
              <p>
                Specialized in information security principles, network security, and secure software development.
              </p>
            </div>
            
            {/* Education Item 2 */}
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition duration-300">
              <h3 className="text-xl font-bold text-indigo-600 mb-2">Bachelor's in Computer Science and Engineering</h3>
              <h4 className="text-lg font-semibold mb-1">JNTUH</h4>
              <p className="text-gray-600 mb-4">Hyderabad, India | July 2013</p>
              <p>
                Focused on software engineering, algorithms, data structures, and web technologies.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 relative">
            Get In Touch
            <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-indigo-600 rounded-full"></span>
          </h2>
          
          <div className="flex flex-col md:flex-row gap-10">
            {/* Contact Info */}
            <div className="md:w-1/2 bg-gray-100 p-8 rounded-xl">
              <h3 className="text-2xl font-bold text-indigo-600 mb-6">Contact Information</h3>
              <p className="mb-8">Feel free to reach out to me for any questions or opportunities!</p>
              
              <div className="space-y-6">
                {/* Contact Item 1 */}
                <div className="flex items-start">
                  <div className="bg-indigo-100 p-3 rounded-full mr-4">
                    <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg">Email</h4>
                    <p className="text-gray-600">n.swetha597@gmail.com</p>
                  </div>
                </div>
                
                {/* Contact Item 2 */}
                <div className="flex items-start">
                  <div className="bg-indigo-100 p-3 rounded-full mr-4">
                    <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg">Phone</h4>
                    <p className="text-gray-600">+1 (804) 250-6543</p>
                  </div>
                </div>
                
                {/* Contact Item 3 */}
                <div className="flex items-start">
                  <div className="bg-indigo-100 p-3 rounded-full mr-4">
                    <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg">Location</h4>
                    <p className="text-gray-600">United States</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Contact Form */}
            <div className="md:w-1/2 bg-gray-100 p-8 rounded-xl">
              <form onSubmit={handleSubmit}>
                <div className="mb-6">
                  <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                    required
                  />
                </div>
                
                <div className="mb-6">
                  <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                    required
                  />
                </div>
                
                <div className="mb-6">
                  <label htmlFor="message" className="block text-gray-700 font-medium mb-2">Message</label>
                  <textarea 
                    id="message" 
                    rows="5" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                    required
                  ></textarea>
                </div>
                
                <button 
                  type="submit" 
                  className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-3 px-6 rounded-lg transition duration-300"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
    {/* Footer */}
<footer className="bg-gray-900 text-white py-12">
  <div className="container mx-auto px-6">
    <div className="flex flex-col md:flex-row justify-between items-center">
      {/* Left side - Branding */}
      <div className="mb-6 md:mb-0">
        <a href="#" className="text-2xl font-bold text-indigo-400">Swetha N</a>
        <p className="mt-2 text-gray-400">Senior Web Developer</p>
      </div>
      
      {/* Middle - Quick Links */}
      <div className="mb-6 md:mb-0">
        <h3 className="text-lg font-semibold mb-3 text-center md:text-left">Quick Links</h3>
        <div className="flex flex-wrap justify-center gap-4 md:gap-6">
          <a 
            href="#home" 
            className="text-gray-400 hover:text-indigo-400 transition duration-300"
            onClick={() => scrollToSection('home')}
          >
            Home
          </a>
          <a 
            href="#about" 
            className="text-gray-400 hover:text-indigo-400 transition duration-300"
            onClick={() => scrollToSection('about')}
          >
            About
          </a>
          <a 
            href="#skills" 
            className="text-gray-400 hover:text-indigo-400 transition duration-300"
            onClick={() => scrollToSection('skills')}
          >
            Skills
          </a>
          <a 
            href="#experience" 
            className="text-gray-400 hover:text-indigo-400 transition duration-300"
            onClick={() => scrollToSection('experience')}
          >
            Experience
          </a>
          <a 
            href="#contact" 
            className="text-gray-400 hover:text-indigo-400 transition duration-300"
            onClick={() => scrollToSection('contact')}
          >
            Contact
          </a>
        </div>
      </div>
      
      {/* Right side - Social Links */}
      <div>
        <h3 className="text-lg font-semibold mb-3 text-center md:text-left">Connect With Me</h3>
        <div className="flex justify-center space-x-4">
          <a 
            href="https://linkedin.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full bg-gray-800 hover:bg-indigo-600 text-white flex items-center justify-center transition-all duration-300"
            aria-label="LinkedIn"
          >
            <FaLinkedinIn className="text-lg" />
          </a>
          <a 
            href="https://github.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full bg-gray-800 hover:bg-gray-700 text-white flex items-center justify-center transition-all duration-300"
            aria-label="GitHub"
          >
            <FaGithub className="text-lg" />
          </a>
          <a 
            href="https://twitter.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full bg-gray-800 hover:bg-blue-400 text-white flex items-center justify-center transition-all duration-300"
            aria-label="Twitter"
          >
            <FaTwitter className="text-lg" />
          </a>
          <a 
            href="mailto:n.swetha597@gmail.com" 
            className="w-10 h-10 rounded-full bg-gray-800 hover:bg-red-500 text-white flex items-center justify-center transition-all duration-300"
            aria-label="Email"
          >
            <FaEnvelope className="text-lg" />
          </a>
        </div>
      </div>
    </div>
    
    {/* Bottom - Copyright */}
    <div className="border-t border-gray-800 mt-8 pt-8 text-center">
      <p className="text-gray-400">
        &copy; {new Date().getFullYear()} Swetha N. All rights reserved.
      </p>
      <p className="text-gray-500 text-sm mt-1">
        Built with React and Tailwind CSS
      </p>
    </div>
  </div>
</footer>
    </div>
  );
};

export default SwethaResume;