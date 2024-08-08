import React from 'react'
import './Legal.css'
import { Link } from 'react-router-dom'

export default function Privacy() {
  return (
    <div className='legal'>
        <h1>Privacy Policy</h1>

        <h2>Introduction</h2>

        <p>
            Thiago Tequila Company is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and share your personal information when you visit our website thiagotequila.com or purchase products from us.
        </p>

        <h2>Information We Collect</h2>
        <ul>
            <li><b>Personal Information:</b> We collect personal information that you provide to us, such as your name, email address, phone number, shipping address, and payment information.</li>
        
            <li><b>Usage Data:</b> We collect information about your interactions with the Site, including your IP address, browser type, pages visited, and the time and date of your visits.</li>
        </ul>

        <h2>How We Use Your Information</h2>
        <ul>
            <li><b>To Process Orders:</b> We use your personal information to process and fulfil your orders, communicate with you about your orders, and provide customer support.</li>
            
            <li><b>To Improve Our Site:</b> We use usage data to analyse trends, administer the Site, and improve the user experience.</li>
            
            <li><b>Marketing:</b> With your consent, we may use your personal information to send you promotional materials and updates about our Products.</li>
        
        </ul>
        <h2>Sharing Your Information</h2>
        <ul>
            <li><b>Third-Party Service Providers:</b> We may share your personal information with third-party service providers who perform services on our behalf, such as payment processing, shipping, and marketing.</li>
        
            <li><b>Legal Requirements:</b> We may disclose your personal information if required to do so by law or in response to a valid request by a governmental authority.</li>
        </ul>

        <h2>Cookies and Tracking Technologies</h2>

        <p>
            We use cookies and similar tracking technologies to track activity on our Site and hold certain information. You can control the use of cookies through your browser settings.
        </p>
        <h2>Data Security
        </h2>
        <p>
            We implement required security measures to protect your personal information from unauthorised access, use, or disclosure. However, no internet transmission is completely secure, and we cannot guarantee the absolute security of your information.
        </p>
        <h2>Your Rights</h2>

        <p>
            You have the right to access, update, and delete your personal information. You may also have the right to restrict or object to certain types of data processing. To exercise these rights, please contact us via <Link to={'/customer-service'}>Customer Services</Link>.
        </p>
        <h2>Changes to This Privacy Policy</h2>

        <p>
            We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on our Site. Your continued use of the Site after any changes indicates your acceptance of the new Privacy Policy.
        </p>
        <h2>Contact Us</h2>

        <p>
            If you have any questions about this Privacy Policy, please contact us via <Link to={'/customer-service'}>Customer Services</Link>.
        </p>
    </div>
  )
}
