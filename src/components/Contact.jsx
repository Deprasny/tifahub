const Contact = () => {
  const contactInfo = [
    {
      title: "Visit Our Office",
      description: "Graha Bukopin, 7th - 8th & 12th Floor",
      address: "Jl. Panglima Sudirman 10-18, Surabaya",
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      )
    },
    {
      title: "Email Us",
      description: "We'll respond within 24 hours",
      address: "info@tifahub.com",
      link: "mailto:info@tifahub.com",
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      title: "Call Us",
      description: "Mon-Fri from 8am to 5pm",
      address: "+62 812-3456-7890",
      link: "tel:+6281234567890",
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      )
    }
  ];

  return (
    <section className="relative py-20 bg-gray-50">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>

      <div className="container relative">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="heading-lg mb-6">
            Get in <span className="text-primary">Touch</span>
          </h2>
          <p className="text-body-lg">
            Visit us or reach out to learn more about our workspace solutions
          </p>
        </div>

        {/* Contact Info Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {contactInfo.map((info, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative p-8">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-primary/10 text-primary mr-4 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                    {info.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-gray-900">{info.title}</h3>
                    <p className="text-sm text-gray-500">{info.description}</p>
                  </div>
                </div>
                {info.link ? (
                  <a
                    href={info.link}
                    className="text-lg font-medium text-primary hover:text-primary/80 transition-colors"
                  >
                    {info.address}
                  </a>
                ) : (
                  <p className="text-lg text-gray-600">{info.address}</p>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Contact Form */}
        <div className="w-full">
          <div className="relative bg-white rounded-2xl p-8 shadow-lg overflow-hidden">            
            {/* Form Content */}
            <div className="relative">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-medium mb-2">Send us a Message</h3>
                <p className="text-gray-500">We'll get back to you as soon as possible</p>
              </div>

              <form className="max-w-3xl mx-auto space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="form-group">
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-3 rounded-lg bg-gray-50/50 border border-gray-200 text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-200"
                      placeholder="Your Name"
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-3 rounded-lg bg-gray-50/50 border border-gray-200 text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-200"
                      placeholder="Email Address"
                    />
                  </div>
                </div>

                <div className="form-group">
                  <input
                    type="text"
                    id="subject"
                    className="w-full px-4 py-3 rounded-lg bg-gray-50/50 border border-gray-200 text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-200"
                    placeholder="Subject"
                  />
                </div>

                <div className="form-group">
                  <textarea
                    id="message"
                    rows="4"
                    className="w-full px-4 py-3 rounded-lg bg-gray-50/50 border border-gray-200 text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-200"
                    placeholder="Your Message"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full md:w-auto px-8 py-3 text-base font-medium text-white bg-primary rounded-lg hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-all duration-200"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
