// import React, { useState } from "react";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Textarea } from "@/components/ui/textarea";
// import { Mail, Phone, MapPin, Check } from "lucide-react";
// import { useToast } from "@/components/ui/use-toast";

// const ContactSection = () => {
//   const { toast } = useToast();
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     message: "",
//   });
//   const [formSubmitted, setFormSubmitted] = useState(false);

//   const handleChange = (
//     e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
//   ) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({
//       ...prev,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     // In a real scenario, you would send this data to your server
//     console.log("Form submitted:", formData);

//     // Show success message
//     toast({
//       title: "Message sent!",
//       description: "We'll get back to you as soon as possible.",
//       duration: 5000,
//     });

//     // Reset form
//     setFormSubmitted(true);
//     setFormData({
//       name: "",
//       email: "",
//       phone: "",
//       message: "",
//     });

//     // Reset submission state after a delay
//     setTimeout(() => setFormSubmitted(false), 5000);
//   };

//   return (
//     <section id="contact" className="py-20 bg-white">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="text-center mb-16">
//           <h2 className="text-3xl md:text-4xl font-bold text-royalblue mb-4">
//             Contact Us
//           </h2>
//           <div className="h-1 w-20 bg-gold mx-auto mb-6"></div>
//           <p className="max-w-2xl mx-auto text-lg text-royalblue/80">
//             Ready to start your project? Get in touch with us today and let's
//             create something amazing together.
//           </p>
//         </div>
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
//           <div className="bg-gold-light/30 p-8 rounded-lg shadow-md">
//             <h3 className="text-2xl font-bold mb-6 text-royalblue">
//               Send Us a Message
//             </h3>
//             <form onSubmit={handleSubmit} className="space-y-6">
//               <div>
//                 <label
//                   htmlFor="name"
//                   className="block text-sm font-medium mb-2"
//                 >
//                   Name
//                 </label>
//                 <Input
//                   id="name"
//                   name="name"
//                   value={formData.name}
//                   onChange={handleChange}
//                   placeholder="Your name"
//                   required
//                   className="w-full"
//                 />
//               </div>
//               <div>
//                 <label
//                   htmlFor="email"
//                   className="block text-sm font-medium mb-2"
//                 >
//                   Email
//                 </label>
//                 <Input
//                   id="email"
//                   name="email"
//                   type="email"
//                   value={formData.email}
//                   onChange={handleChange}
//                   placeholder="your.email@example.com"
//                   required
//                   className="w-full"
//                 />
//               </div>
//               <div>
//                 <label
//                   htmlFor="phone"
//                   className="block text-sm font-medium mb-2"
//                 >
//                   Phone
//                 </label>
//                 <Input
//                   id="phone"
//                   name="phone"
//                   type="tel"
//                   value={formData.phone}
//                   onChange={handleChange}
//                   placeholder="Your phone number"
//                   required
//                   className="w-full"
//                 />
//               </div>
//               <div>
//                 <label
//                   htmlFor="message"
//                   className="block text-sm font-medium mb-2"
//                 >
//                   Message
//                 </label>
//                 <Textarea
//                   id="message"
//                   name="message"
//                   value={formData.message}
//                   onChange={handleChange}
//                   placeholder="Tell us about your requirements..."
//                   required
//                   className="w-full min-h-[120px]"
//                 />
//               </div>
//               <Button className="bg-royalblue text-white hover:bg-gold hover:text-royalblue font-semibold">
//                 Send Message
//               </Button>
//             </form>
//           </div>
//           <div className="flex flex-col justify-center bg-white p-8 rounded-lg shadow-md border border-gold">
//             <h3 className="text-2xl font-bold mb-6 text-royalblue">
//               Contact Details
//             </h3>
//             <div className="flex items-center gap-2 mb-2 text-royalblue">
//               <Mail className="w-5 h-5 text-gold" />
//               mishrasenterprises74@gmail.com
//             </div>
//             <div className="flex items-center gap-2 mb-2 text-royalblue">
//               <Phone className="w-5 h-5 text-gold" /> +91 7766842702, +91 92632
//               31519
//             </div>
//             <div className="flex items-center gap-2 text-royalblue">
//               <MapPin className="w-5 h-5 text-gold" /> Rai Jai krishna Road,
//               Mittan Ghat, Gurhatta, Patna city, Bihar - 800008
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ContactSection;
////////////////

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Check } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);

    toast({
      title: "Message sent!",
      description: "We'll get back to you as soon as possible.",
      duration: 5000,
    });

    setFormSubmitted(true);
    setFormData({
      name: "",
      email: "",
      phone: "",
      message: "",
    });

    setTimeout(() => setFormSubmitted(false), 5000);
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      details: ["+91 7766842702", "+91 92632 31519"],
      href: "tel:+917766842702",
    },
    {
      icon: Mail,
      title: "Email",
      details: ["mishrasenterprises74@gmail.com"],
      href: "mailto:mishrasenterprises74@gmail.com",
    },
    {
      icon: MapPin,
      title: "Address",
      details: [
        "Rai Jai krishna Road,",
        "Mittan Ghat, Gurhatta,",
        "Patna city, Bihar - 800008",
      ],
      href: "https://maps.google.com/?q=Rai+Jai+krishna+Road,+Mittan+Ghat,+Gurhatta,+Patna+city,+Bihar+800008",
    },
  ];

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-royalblue mb-4">
            Contact Us
          </h2>
          <div className="h-1 w-20 bg-gold mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-lg text-royalblue/80">
            Get in touch with us to discuss your catering requirements or learn
            more about our services.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <h3 className="text-2xl font-bold mb-6 text-royalblue">
              Get in Touch
            </h3>
            {contactInfo.map((item, index) => (
              <a
                key={index}
                href={item.href}
                target={item.icon === MapPin ? "_blank" : "_self"}
                rel={item.icon === MapPin ? "noopener noreferrer" : ""}
                className="flex items-start space-x-4 p-4 rounded-lg hover:bg-muted transition-colors"
              >
                <div className="bg-amber-50 p-3 rounded-full">
                  <item.icon className="w-6 h-6 text-amber-600" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">{item.title}</h4>
                  {item.details.map((detail, idx) => (
                    <p key={idx} className="text-muted-foreground">
                      {detail}
                    </p>
                  ))}
                </div>
              </a>
            ))}
          </div>

          <div className="bg-muted p-8 rounded-lg">
            <h3 className="text-2xl font-bold mb-6 text-royalblue">
              Send Us a Message
            </h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-2"
                >
                  Name
                </label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  required
                  className="w-full"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-2"
                >
                  Email
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your.email@example.com"
                  required
                  className="w-full"
                />
              </div>
              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium mb-2"
                >
                  Phone
                </label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Your phone number"
                  required
                  className="w-full"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-2"
                >
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your requirements..."
                  required
                  className="w-full min-h-[120px]"
                />
              </div>
              <Button className="bg-royalblue text-white hover:bg-gold hover:text-royalblue font-semibold">
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
