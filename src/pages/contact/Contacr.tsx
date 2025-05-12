const ContactInformationComponent = () => {
  //   const [formData, setFormData] = useState({
  //     firstName: '',
  //     subject: '',
  //     email: '',
  //     message: '',
  //     companyName: '',
  //     phoneNumber: ''
  //   });

  //   const handleChange = (e) => {
  //     const { name, value } = e.target;
  //     setFormData(prevState => ({
  //       ...prevState,
  //       [name]: value
  //     }));
  //   };

  //   const handleSubmit = () => {
  //     // Form submission logic would go here
  //     console.log('Form submitted:', formData);
  //   };

  return (
    <div className="">
      <div className="px-[16px] py-[40px]  md:p-[80px]">
        <div className="flex flex-col md:flex-row gap-6 md:gap-10">
          {/* Left Column - Contact Details */}
          <div className="flex-1">
            <h2 className="text-lg font-medium mb-6 md:mb-[40px] md:leading-[50px]">
              Contact Information
            </h2>

            <div className="mb-6 md:mb-[46px] text-justify">
              <h3 className="font-medium md:text-[16px] md:leading-[24px] mb-2 md:mb-[18px]">
                Location
              </h3>
              <p className="text-[14px] md:text-[16px] md:leading-[24px]">
                3-5 Edin - Alaran Road,
              </p>
              <p className="text-[14px] md:text-[16px] md:leading-[24px]">
                Behind Ahmadiya Hospital
              </p>
              <p className="text-[14px] md:text-[16px] md:leading-[24px]">
                Ojokoro Agege - Lagos, Nigeria.
              </p>
            </div>

            <div className="mb-6  md:mb-[46px] text-justify">
              <h3 className="font-medium md:text-[16px] md:leading-[24px] mb-2 md:mb-[18px]">
                Email
              </h3>
              <p className="text-[14px] text-[#E25319] hover:underline md:text-[16px] md:leading-[24px] md:text-[16px]">
                <a href="mailto:info@miccomcables.com">info@miccomcables.com</a>
              </p>
              <p className="text-[14px] text-[#E25319] hover:underline md:text-[16px] md:leading-[24px] md:text-[16px]">
                <a href="mailto:sales@miccomcables.com">
                  sales@miccomcables.com
                </a>
              </p>
            </div>

            <div className="mb-6 md:mb-[34px] text-justify">
              <h3 className="font-medium md:text-[16px] md:leading-[24px] mb-2 md:mb-[18px]">
                Phone Number
              </h3>
              <p className="text-[14px] md:text-[16px] md:leading-[24px]">
                (+234) 807-720-0496
              </p>
              <p className="text-[14px] md:text-[16px] md:leading-[24px]">
                (+234) 805-507-7015
              </p>
            </div>
          </div>

          {/* Right Column - Enquiry Form */}
          <div className="flex-1 md:flex-[3.5]">
            <div className="border-[2px] border-[#009140] rounded-lg md:rounded-[20px] p-[25px] md:p-[40px]">
              <h2 className="text-[20px] md:text-[22px] md:leading-[36px] md:mb-[10px] font-medium mb-2">
                Have Any Enquiries?
              </h2>
              <p className="text-[14px] md:text-[14px] md:leading-[24px] mb-4 md:mb-[40px]">
                Kindly fill the form below and we’ll reach out as soon as
                possible.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-[20px] md:gap-[80px] mb-[20px] md:mb-[50px]">
                <div>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    placeholder="First Name"
                    // value={formData.firstName}
                    className="w-full border-b placeholder-[#001D0D] text-[#001D0D] border-[#001D0D] pb-1 bg-transparent focus:outline-none focus:border-green-500 text-[14px]"
                  />
                </div>

                <div>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    placeholder="Subject"
                    // value={formData.subject}
                    className="w-full border-b placeholder-[#001D0D] text-[#001D0D] border-[#001D0D] pb-1 bg-transparent focus:outline-none focus:border-green-500 text-[14px]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-[20px] md:gap-[80px] mb-[20px] md:mb-[50px]">
                <div>
                  <div className="">
                    <input
                      type="email"
                      id="email"
                      name="email"
                      placeholder="Email"
                      //   value={formData.email}
                      className="w-full border-b placeholder-[#001D0D] text-[#001D0D] border-[#001D0D] pb-1 bg-transparent focus:outline-none focus:border-green-500 text-[14px] mb-[20px] md:mb-[50px]"
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      id="companyName"
                      name="companyName"
                      placeholder="Company Name"
                      className="w-full border-b placeholder-[#001D0D] text-[#001D0D] border-[#001D0D] pb-1 bg-transparent focus:outline-none focus:border-green-500 text-[14px]"
                    />
                  </div>
                </div>

                <div className="md:mt-[-18px]">
                  <label htmlFor="message" className="text-[14px]">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="w-full border-b placeholder-[#001D0D] text-[#001D0D] border-[#001D0D] pb-1 bg-transparent focus:outline-none focus:border-green-500"
                  ></textarea>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-[80px] mb-6 md:mb-[0px]">
                <div>
                  <input
                    type="tel"
                    id="phoneNumber"
                    name="phoneNumber"
                    // value={formData.phoneNumber}
                    placeholder="Phone Number"
                    className="w-full border-b placeholder-[#001D0D] text-[#001D0D] border-[#001D0D] pb-1 bg-transparent focus:outline-none focus:border-green-500 text-[14px]"
                  />
                </div>

                <div className="text-left">
                  <button
                    //   onClick={handleSubmit}
                    className="bg-[#E25319] w-full md:w-auto text-white px-4 py-2 rounded text-[14px] md:text-[14px] md:leading-[24px] hover:bg-orange-600 transition duration-200 md:px-[30px] md:py-[9px]"
                  >
                    Send Message
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Map Section */}
      <div className="mt-6 md:mb-[80px] md:px-[80px] mb-[40px] h-[300px] md:h-[450px] w-full">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3962.876408144299!2d3.2924123736508384!3d6.662235321538359!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b9728eb2dae25%3A0xa5794c85531e1c98!2s3-5%20Edun%20Alaran%20Rd%2C%20Adealu%20St%2C%20behind%20Ahmadiya%20Hospital%2C%20Dopemu%2C%20Lagos%20101232%2C%20Lagos!5e0!3m2!1sen!2sng!4v1746832953503!5m2!1sen!2sng"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen={true}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="MicCom Cables Location"
          className="rounded-[6px]"
        ></iframe>
      </div>
    </div>
  );
};

export default ContactInformationComponent;
