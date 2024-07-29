import React from 'react'
import './Legal.css'
import { Link } from 'react-router-dom'

export default function Terms() {
  return (
    <div className='legal'>
        <h1>Terms and Conditions</h1>

        <h2>Introduction</h2>

        <p>
            Welcome to Thiago Tequila Company. These Terms and Conditions govern your use of our website thiagotequila.com and the purchase of wholesale and direct-to-consumer products through our Site. By accessing or using the Site, you agree to comply with and be bound by these Terms. If you do not agree to these Terms, please do not use the Site.
        </p>
        <h2>Eligibility</h2>

        <p>
            By using our Site, you represent and warrant that you are at least 18 years old and have the legal capacity to enter into these Terms. If you are using the Site on behalf of an organisation, you represent and warrant that you have the authority to bind that organisation to these Terms.
        </p>
        <h2>Orders and Payment</h2>
        <ul>
            <li><b>Order Acceptance:</b> All orders placed through the Site are subject to our acceptance. We reserve the right to refuse or cancel any order for any reason.</li>

            <li><b>Pricing:</b> All prices listed on the Site are in GBP and are subject to change without notice. We reserve the right to correct any pricing errors that may occur.</li>

            <li><b>Payment Terms:</b> Payment for Products must be made in full at the time of order unless otherwise agreed upon. We accept various forms of payment as indicated on the Site.</li>
        </ul>

        

        <h2>Shipping and Delivery</h2>

        <ul>
            <li><b>Shipping:</b> We offer shipping to various locations as specified on the Site. Shipping costs and delivery times will be provided at the time of order.</li>

            <li><b>Delivery:</b> We are not responsible for any delays in delivery caused by events outside our control.</li>
        </ul>

      

        <h2>Returns and Refunds</h2>
        
        <ul>
            <li><b>Return Policy:</b> Products may be returned within 5 working days of receipt for a full refund or exchange, subject to our return policy. The Products must be in their original condition and packaging.</li>

            <li><b>Refunds:</b> Refunds will be processed within 5 working days of receiving the returned Products. Refunds will be issued to the original payment method.</li>
        </ul>

        <h2>Use of the Site</h2>

        <ul>
            <li><b>Licence:</b> We grant you a limited, non-exclusive, non-transferable, revocable licence to use the Site for personal or organisational use in accordance with these Terms.</li>

            <li><b>Prohibited Conduct:</b> You agree not to use the Site for any unlawful purpose or in any way that could harm us or any third party. Prohibited conduct includes, but is not limited to, interfering with the operation of the Site, attempting to gain unauthorised access to the Site, and infringing on our intellectual property rights.</li>
        </ul>

        <h2>Intellectual Property</h2>

        <p>
            All content on the Site, including but not limited to text, graphics, logos, images, and software, is the property of the Company or its content suppliers and is protected by copyright and other intellectual property laws. You may not use any content from the Site without our prior written consent.
        </p>
        <h2>Limitation of Liability</h2>

        <p>
            To the maximum extent permitted by law, the Company shall not be liable for any direct, indirect, incidental, special, or consequential damages arising out of or in connection with your use of the Site or the purchase of Products.
        </p>
        <h2>Governing Law</h2>

        <p>
        These Terms shall be governed by and construed in accordance with the laws of England and Wales, without regard to its conflict of laws principles.
        </p>
        <h2>Changes to These Terms</h2>

        <p>
            We reserve the right to update or modify these Terms at any time without prior notice. Your continued use of the Site after any changes indicates your acceptance of the new Terms.
        </p>
        <h2>Contact Us</h2>

        <p>
            If you have any questions about these Terms, please contact us via <Link to={'customer-service'}>Customer Services</Link>.
        </p>
    </div>
  )
}
