import React from "react";

const ContactUs = () => {
  return (
    <div className="flex flex-col justify-center items-center  w-full space-y-8">
        <div className="py-12 space-y-4 w-full text-center">
        <h1 className="text-4xl font-semibold ">Contact</h1>
      <p className="text-xl   font-medium dark:text-gray-400 ">
        We are a here to help.
      </p>
        </div>

      {/* Parent */}
      <div className="flex w-full justify-between max-w-5xl ">
        {/* left  */}
        <div className="dark:text-gray-400 text-lg tracking-wide font-medium space-y-6">
          <h2 className="dark:text-white text-3xl font-semibold">Contact Pohha</h2>
          <p>
            Have something to say? We are here to help. 
            <br/>
            Fill up the form or send
            email or call phone.
          </p>

          <div className="space-y-2">
            <div>
              <p>H-39 Civil Lines, Jail Road Khandwa</p>
            </div>
            <div>
              <p>ankitbourasiapple@gmail.com</p>
            </div>
            <div>
              <p>(+91) 9589 854 745</p>
            </div>
          </div>
        </div>
        {/* right  */}

        <div className=" w-1/2">
            <form action="submit" className="flex flex-col space-y-6 ">
                <input  type="text" className="p-3 rounded-md  border-2"  placeholder="Full Name"/>
                <input type="email" className="p-3 rounded-md border-2" placeholder="Email Address" />
                <textarea className="p-3 rounded-md border-2 " placeholder="Your Message"></textarea>
                <button className="py-4 bg-black dark:bg-white rounded-lg">
                    <p className="text-white dark:text-black font-bold">Send Message</p>
                </button>
            </form>

        </div>
      </div>
    </div>
  );
};

export default ContactUs;
