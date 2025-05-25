// src/components/home/Contact.jsx
import React, { useState } from 'react';
import Section from '../layout/Section';
import Button from '../common/Button';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import { personalInfo } from '../../utils/data';
import emailjs from '@emailjs/browser';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  
  const { elementRef: formRef, isVisible: formVisible } = useScrollAnimation();
  const { elementRef: infoRef, isVisible: infoVisible } = useScrollAnimation(0.3);
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Replace these with your actual EmailJS credentials
      const result = await emailjs.send(
        'service_fxs218s',     // Replace with your EmailJS service ID
        'template_qp48yhi',    // Replace with your EmailJS template ID
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
          to_email: personalInfo.email, // Your email where you want to receive messages
        },
        '3xPly_kI8L9_WVR6h'      // Replace with your EmailJS public key
      );
      
      console.log('Email sent successfully:', result);
      setSubmitStatus('success');
      
      // Reset form after successful submission
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      
    } catch (error) {
      console.error('Email sending failed:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      
      // Clear status message after 5 seconds
      setTimeout(() => {
        setSubmitStatus(null);
      }, 5000);
    }
  };
  
  return (
    <Section
      id="contact"
      title="Get In Touch"
      subtitle="Let's connect and discuss your project or opportunities"
    >
      <div className="contact-container">
        <div 
          ref={formRef}
          className={`contact-form-wrapper ${formVisible ? 'animate-slideInLeft' : ''}`}
        >
          <form className="contact-form" onSubmit={handleSubmit}>
            {submitStatus === 'success' && (
              <div className="submit-success">
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  width="24" 
                  height="24" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                >
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                  <polyline points="22 4 12 14.01 9 11.01"></polyline>
                </svg>
                <p>Thank you for your message! I'll get back to you as soon as possible.</p>
              </div>
            )}
            
            {submitStatus === 'error' && (
              <div className="submit-error">
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  width="24" 
                  height="24" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="10"></circle>
                  <line x1="15" y1="9" x2="9" y2="15"></line>
                  <line x1="9" y1="9" x2="15" y2="15"></line>
                </svg>
                <p>Sorry, there was an error sending your message. Please try again or contact me directly.</p>
              </div>
            )}
            
            <div className="form-group">
              <label htmlFor="name" className="form-label">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="form-input"
                placeholder="Enter your name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="email" className="form-label">
                Your Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="form-input"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="subject" className="form-label">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                className="form-input"
                placeholder="What is this regarding?"
                value={formData.subject}
                onChange={handleChange}
                required
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="message" className="form-label">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                className="form-textarea"
                placeholder="Your message"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            
            <Button 
              type="submit" 
              variant="primary" 
              size="lg" 
              fullWidth 
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </Button>
          </form>
        </div>
        
        <div 
          ref={infoRef}
          className={`contact-info ${infoVisible ? 'animate-slideInRight' : ''}`}
        >
          <div className="info-card">
            <div className="info-header">
              <h3 className="info-title">Contact Information</h3>
              <p className="info-subtitle">
                Feel free to reach out to me directly through any of these channels.
              </p>
            </div>
            
            <div className="info-items">
              <div className="info-item">
                <div className="info-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                  </svg>
                </div>
                <div className="info-content">
                  <h4 className="info-label">Phone</h4>
                  <a href={`tel:${personalInfo.phone.replace(/[^0-9+]/g, '')}`} className="info-value">
                    {personalInfo.phone}
                  </a>
                </div>
              </div>
              
              <div className="info-item">
                <div className="info-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                    <polyline points="22,6 12,13 2,6"></polyline>
                  </svg>
                </div>
                <div className="info-content">
                  <h4 className="info-label">Email</h4>
                  <a href={`mailto:${personalInfo.email}`} className="info-value">
                    {personalInfo.email}
                  </a>
                </div>
              </div>
              
              <div className="info-item">
                <div className="info-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                </div>
                <div className="info-content">
                  <h4 className="info-label">Location</h4>
                  <address className="info-value">
                    {personalInfo.location}
                  </address>
                </div>
              </div>
            </div>
            
            <div className="info-availability">
              <h4 className="availability-title">Current Availability</h4>
              <p className="availability-status">
                Available for full-time opportunities. <br></br>
                Let's create something amazing together!
                
              </p>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Contact;







// src/components/home/Contact.jsx
// import React, { useState } from 'react';
// import Section from '../layout/Section';
// import Button from '../common/Button';
// import { useScrollAnimation } from '../../hooks/useScrollAnimation';
// import { personalInfo } from '../../utils/data';
// import emailjs from '@emailjs/browser';
// import './Contact.css';

// const Contact = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     subject: '',
//     message: ''
//   });
  
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [submitStatus, setSubmitStatus] = useState(null);
  
//   const { elementRef: formRef, isVisible: formVisible } = useScrollAnimation();
//   const { elementRef: infoRef, isVisible: infoVisible } = useScrollAnimation(0.3);
  
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData(prev => ({ ...prev, [name]: value }));
//   };
  
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setIsSubmitting(true);
    
//     try {
//       // Replace these with your actual EmailJS credentials
//       const result = await emailjs.send(
//         'service_fxs218s',     // Replace with your EmailJS service ID
//         'template_qp48yhi',    // Replace with your EmailJS template ID
//         {
//           from_name: formData.name,
//           from_email: formData.email,
//           subject: formData.subject,
//           message: formData.message,
//           to_email: personalInfo.email, // Your email where you want to receive messages
//         },
//         '3xPly_kI8L9_WVR6h'      // Replace with your EmailJS public key
//       );
      
//       console.log('Email sent successfully:', result);
//       setSubmitStatus('success');
      
//       // Reset form after successful submission
//       setFormData({
//         name: '',
//         email: '',
//         subject: '',
//         message: ''
//       });
      
//     } catch (error) {
//       console.error('Email sending failed:', error);
//       setSubmitStatus('error');
//     } finally {
//       setIsSubmitting(false);
      
//       // Clear status message after 5 seconds
//       setTimeout(() => {
//         setSubmitStatus(null);
//       }, 5000);
//     }
//   };
  
//   return (
//     <Section
//       id="contact"
//       title="Get In Touch"
//       subtitle="Let's connect and discuss your project or opportunities"
//     >
//       <div className="contact-container">
//         <div 
//           ref={formRef}
//           className={`contact-form-wrapper ${formVisible ? 'animate-slideInLeft' : ''}`}
//         >
//           <form className="contact-form" onSubmit={handleSubmit}>
//             {submitStatus === 'success' && (
//               <div className="submit-success">
//                 <svg 
//                   xmlns="http://www.w3.org/2000/svg" 
//                   width="24" 
//                   height="24" 
//                   viewBox="0 0 24 24" 
//                   fill="none" 
//                   stroke="currentColor" 
//                   strokeWidth="2" 
//                   strokeLinecap="round" 
//                   strokeLinejoin="round"
//                 >
//                   <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
//                   <polyline points="22 4 12 14.01 9 11.01"></polyline>
//                 </svg>
//                 <p>Thank you for your message! I'll get back to you as soon as possible.</p>
//               </div>
//             )}
            
//             {submitStatus === 'error' && (
//               <div className="submit-error">
//                 <svg 
//                   xmlns="http://www.w3.org/2000/svg" 
//                   width="24" 
//                   height="24" 
//                   viewBox="0 0 24 24" 
//                   fill="none" 
//                   stroke="currentColor" 
//                   strokeWidth="2" 
//                   strokeLinecap="round" 
//                   strokeLinejoin="round"
//                 >
//                   <circle cx="12" cy="12" r="10"></circle>
//                   <line x1="15" y1="9" x2="9" y2="15"></line>
//                   <line x1="9" y1="9" x2="15" y2="15"></line>
//                 </svg>
//                 <p>Sorry, there was an error sending your message. Please try again or contact me directly.</p>
//               </div>
//             )}
            
//             <div className="form-group">
//               <label htmlFor="name" className="form-label">
//                 Your Name
//               </label>
//               <input
//                 type="text"
//                 id="name"
//                 name="name"
//                 className="form-input"
//                 placeholder="Enter your name"
//                 value={formData.name}
//                 onChange={handleChange}
//                 required
//               />
//             </div>
            
//             <div className="form-group">
//               <label htmlFor="email" className="form-label">
//                 Your Email
//               </label>
//               <input
//                 type="email"
//                 id="email"
//                 name="email"
//                 className="form-input"
//                 placeholder="Enter your email"
//                 value={formData.email}
//                 onChange={handleChange}
//                 required
//               />
//             </div>
            
//             <div className="form-group">
//               <label htmlFor="subject" className="form-label">
//                 Subject
//               </label>
//               <input
//                 type="text"
//                 id="subject"
//                 name="subject"
//                 className="form-input"
//                 placeholder="What is this regarding?"
//                 value={formData.subject}
//                 onChange={handleChange}
//                 required
//               />
//             </div>
            
//             <div className="form-group">
//               <label htmlFor="message" className="form-label">
//                 Message
//               </label>
//               <textarea
//                 id="message"
//                 name="message"
//                 className="form-textarea"
//                 placeholder="Your message"
//                 value={formData.message}
//                 onChange={handleChange}
//                 required
//               ></textarea>
//             </div>
            
//             <Button 
//               type="submit" 
//               variant="primary" 
//               size="lg" 
//               fullWidth 
//               disabled={isSubmitting}
//             >
//               {isSubmitting ? 'Sending...' : 'Send Message'}
//             </Button>
//           </form>
//         </div>
        
//         {/* Rest of your contact info section remains the same */}
//         <div 
//           ref={infoRef}
//           className={`contact-info ${infoVisible ? 'animate-slideInRight' : ''}`}
//         >
//           {/* Your existing contact info code */}
//         </div>
//       </div>
//     </Section>
//   );
// };

// export default Contact;