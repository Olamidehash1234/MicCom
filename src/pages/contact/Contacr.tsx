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

            <div className="mb-6 md:mb-[34px] text-justify">
              <h3 className="font-medium md:text-[16px] md:leading-[24px] mb-2 md:mb-[20px]">
                Location
              </h3>
              <p className="text-[14px] md:text-[16px] md:leading-[24px]">
                3-5 Edin - Aiaran Road,
              </p>
              <p className="text-[14px] md:text-[16px] md:leading-[24px]">
                Behind Ahmadiya Hospital
              </p>
              <p className="text-[14px] md:text-[16px] md:leading-[24px]">
                Ojokoro Agege - Lagos, Nigeria.
              </p>
            </div>

            <div className="mb-6  md:mb-[34px] text-justify">
              <h3 className="font-medium md:text-[16px] md:leading-[24px] mb-2 md:mb-[20px]">
                Email
              </h3>
              <p className="text-[14px] md:text-[16px] md:leading-[24px] md:text-[16px]">
                info@miccomcables.com
              </p>
              <p className="text-[14px] md:text-[16px] md:leading-[24px] md:text-[16px]">
                sales@miccomcables.com
              </p>
            </div>

            <div className="mb-6 md:mb-[34px] text-justify">
              <h3 className="font-medium md:text-[16px] md:leading-[24px] mb-2 md:mb-[20px]">
                Phone Number
              </h3>
              <p className="text-[14px] md:text-[16px] md:leading-[24px]">
                0802-720-0496
              </p>
              <p className="text-[14px] md:text-[16px] md:leading-[24px]">
                0825-5094-633
              </p>
              <p className="text-[14px] md:text-[16px] md:leading-[24px]">
                0805-507-7015
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
                Kindly fill the form below and we'll reach out within 24hrs.
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
      <div className="mt-6 md:mb-[80px] mb-[40px] h-64 md:h-auto w-full overflow-hidden">
        {/* This is where you would add your actual map image */}
        <img
          src="/images/contact/map.png"
          alt="Location map showing Ahmadiya Hospital area in Ojokoro"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default ContactInformationComponent;
