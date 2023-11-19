import React, { useState } from 'react';
import OtpInput from 'react-otp-input';
import { useNavigate } from 'react-router-dom';
import mail from '../../../Assets/Img/mail.png'
import logo from '../../../Assets/Img/logo.PNG'
import Asset from '../../../Assets/Img/Asset.png'

export default () => {
    const [otp, setOtp] = useState('');
    const navigate = useNavigate();

    const [IsClassAdded, setIsClassAdded] = useState(false);
    const [Loading, setLoading] = useState(false);
    const handleSubmit = (e) => {
        e.preventDefault()
        setLoading(true)
        navigate('/Submitted')
    }
    return (

        <div className='main'>
            <div className='section_1 px-1' >
                <div>
                    <img src={logo} alt='' height='100px' />
                </div>
                <div className=' section_2 px-10'  >
                <p className='text-white'><h1>Terms & Conditions</h1></p>
                <p>ParetoSys,  LLC (“Pareto Process”) is happy to welcome you here!

We ask that you carefully review these Terms of Service because they contain important information about your legal rights and your relationship with us.
These terms and conditions outline the rules and regulations for the use of ParetoProcess Website, located at https://www.ParetoProcess.com/.
By accessing this website we assume you accept these terms and conditions.
Do not continue to use Pareto Process if you do not agree to take all of the terms and conditions stated on this page.
The following terminology applies to these Terms and Conditions, Privacy Statement and Disclaimer Notice and all Agreements: “Client”, “You” and “Your” refers to you, 
the person log on this website and compliant to the Company’s terms and conditions. “The Company”, “Ourselves”, “We”, “Our” and “Us”, refers to our Company. “Party”, “Parties”, 
or “Us”, refers to both the Client and ourselves. All terms refer to the offer, acceptance and consideration of payment necessary to undertake the process of our assistance to 
the Client in the most appropriate manner for the express purpose of meeting the Client’s needs in respect of provision of the Company’s stated services, in accordance with and 
subject to, prevailing law of the United States of America. Any use of the above terminology or other words in the singular, plural, capitalization and/or he/she or they, are 
taken as interchangeable and therefore as referring to same. </p>
                

<p>
                <h2 className='text-white'>1. Cookies</h2>
                <br></br>
We employ the use of cookies. By accessing ParetoProcess, you agreed to use cookies in agreement with the ParetoProcess Privacy Policy.

Most interactive websites use cookies to let us retrieve the user’s details for each visit. Cookies are used by our website to enable the functionality of certain areas to make it easier for people visiting our website. Some of our affiliate/advertising partners may also use cookies.
<br></br>
 <br></br>
<h2 className='text-white'>2. License</h2>
<br></br>
Unless otherwise stated, ParetoProcess and/or its licensors own the intellectual property rights for all material on ParetoProcess. All intellectual property rights are reserved. You may access this from ParetoProcess for your own personal use subjected to restrictions set in these terms and conditions.

You must not:

Republish material from ParetoProcess
Sell, rent or sub-license material from ParetoProcess
Reproduce, duplicate or copy material from ParetoProcess
Redistribute content from ParetoProcess
This Agreement shall begin on the date hereof.

Parts of this website offer an opportunity for users to post and exchange opinions and information in certain areas of the website. ParetoProcess does not filter, edit, publish or review Comments prior to their presence on the website. Comments do not reflect the views and opinions of ParetoProcess ,its agents and/or affiliates. Comments reflect the views and opinions of the person who post their views and opinions. To the extent permitted by applicable laws, ParetoProcessshall not be liable for the Comments or for any liability, damages or expenses caused and/or suffered as a result of any use of and/or posting of and/or appearance of the Comments on this website.

ParetoProcess reserves the right to monitor all Comments and to remove any Comments which can be considered inappropriate, offensive or causes breach of these Terms and Conditions.

You warrant and represent that:

You are entitled to post the Comments on our website and have all necessary licenses and consents to do so;
The Comments do not invade any intellectual property right, including without limitation copyright, patent or trademark of any third party;
The Comments do not contain any defamatory, libelous, offensive, indecent or otherwise unlawful material which is an invasion of privacy
The Comments will not be used to solicit or promote business or custom or present commercial activities or unlawful activity.
You hereby grant ParetoProcess a non-exclusive license to use, reproduce, edit and authorize others to use, reproduce and edit any of your Comments in any and all forms, formats or media.
<br></br>
 <br></br>
<h2 className='text-white'>3. Hyperlinking to our Content</h2>
<br></br>
The following organizations may link to our Website without prior written approval:

Government agencies;
Search engines;
News organizations;
Online directory distributors may link to our Website in the same manner as they hyperlink to the Websites of other listed businesses; and
System wide Accredited Businesses except soliciting non-profit organizations, charity shopping malls, and charity fundraising groups which may not hyperlink to our Web site.
These organizations may link to our home page, to publications or to other Website information so long as the link: (a) is not in any way deceptive; (b) does not falsely imply sponsorship, endorsement or approval of the linking party and its products and/or services; and (c) fits within the context of the linking party’s site.

We may consider and approve other link requests from the following types of organizations:

commonly-known consumer and/or business information sources;
dot.com community sites;
associations or other groups representing charities;
online directory distributors;
internet portals;
accounting, law and consulting firms; and
educational institutions and trade associations.
We will approve link requests from these organizations if we decide that: (a) the link would not make us look unfavorably to ourselves or to our accredited businesses; (b) the organization does not have any negative records with us; (c) the benefit to us from the visibility of the hyperlink compensates the absence of ParetoProcess ; and (d) the link is in the context of general resource information.

These organizations may link to our home page so long as the link: (a) is not in any way deceptive; (b) does not falsely imply sponsorship, endorsement or approval of the linking party and its products or services; and (c) fits within the context of the linking party’s site.

If you are one of the organizations listed in paragraph 2 above and are interested in linking to our website, you must inform us by sending an e-mail to ParetoProcess. Please include your name, your organization name, contact information as well as the URL of your site, a list of any URLs from which you intend to link to our Website, and a list of the URLs on our site to which you would like to link. Wait 2-3 weeks for a response.

Approved organizations may hyperlink to our Website as follows:

By use of our corporate name; or
By use of the uniform resource locator being linked to; or
By use of any other description of our Website being linked to that makes sense within the context and format of content on the linking party’s site.
No use of ParetoProcess logo or other artwork will be allowed for linking absent a trademark license agreement.
<br></br>
 <br></br>
<h2 className='text-white'>4. iFrames</h2>
<br></br>
Without prior approval and written permission, you may not create frames around our Webpages that alter in any way the visual presentation or appearance of our Website.
<br></br>
 <br></br>
 <h2 className='text-white'>5. Content Liability</h2>
 <br></br>
We shall not be hold responsible for any content that appears on your Website. You agree to protect and defend us against all claims that is rising on your Website. No link(s) should appear on any Website that may be interpreted as libelous, obscene or criminal, or which infringes, otherwise violates, or advocates the infringement or other violation of, any third party rights.
<br></br>
 <br></br>
 <h2 className='text-white'>6. Your Privacy </h2>
 <br></br>

Please read Privacy Policy
<br></br>
 <br></br>
 <h2 className='text-white'>7. Reservation of Rights  </h2>
 <br></br>

We reserve the right to request that you remove all links or any particular link to our Website. You approve to immediately remove all links to our Website upon request. We also reserve the right to amen these terms and conditions and it’s linking policy at any time. By continuously linking to our Website, you agree to be bound to and follow these linking terms and conditions.
<br></br>
 <br></br>
 <h2 className='text-white'>8. Removal of links from our website   </h2>
 <br></br>
If you find any link on our Website that is offensive for any reason, you are free to contact and inform us any moment. We will consider requests to remove links but we are not obligated to or so or to respond to you directly.

We do not ensure that the information on this website is correct, we do not warrant its completeness or accuracy; nor do we promise to ensure that the website remains available or that the material on the website is kept up to date.
<br></br>
 <br></br>
 <h2 className='text-white'>9. Disclaimer   </h2>
 <br></br>
To the maximum extent permitted by applicable law, we exclude all representations, warranties and conditions relating to our website and the use of this website. Nothing in this disclaimer will:

limit or exclude our or your liability for death or personal injury;
limit or exclude our or your liability for fraud or fraudulent misrepresentation;
limit any of our or your liabilities in any way that is not permitted under applicable law; or
exclude any of our or your liabilities that may not be excluded under applicable law.
The limitations and prohibitions of liability set in this Section and elsewhere in this disclaimer: (a) are subject to the preceding paragraph; and (b) govern all liabilities arising under the disclaimer, including liabilities arising in contract, in tort and for breach of statutory duty.

As long as the website and the information and services on the website are provided free of charge, we will not be liable for any loss or damage of any nature.
<br></br>
 <br></br>

  <h2 className='text-white'>10. Right to Refuse Services  </h2>
  <br></br>
We reserve the right to refuse service to anyone for any reason at any time. We also reserve the right to cease access to our Website and services at any time without notice. 

You agree to indemnify, defend, and hold Pareto Process, its affiliates, officers, directors, employees, agents, and licensors harmless from and against any and all claims, liabilities, damages, losses, costs, expenses, or fees (including reasonable attorneys’ fees) arising from or relating to:

Your use of our Website or services;
The violation of any right of any third party including rights of privacy, publicity, and/or intellectual property rights in connection with Your  use of the Services; and/or the violation of any law, statue, regulation, ordinance, or treaty, whether local, state, provincial, national, or international in connection with Your use of the Services.
Any content you submit, post, or transmit through our Website or services;
Your breach of this Agreement or any applicable law or regulation;
Your infringement of any intellectual property or other proprietary right of any third party;
Any action taken by us as part of an investigation into a suspected violation of this Agreement or as a result of any legal action or threatened legal action against us related to your use of our Website or services;
Any damages, injury, or harm caused by you to any third party; or
Any other claim or action arising from or related to your use of our Website or services.
We reserve the right, at our own expense, to assume the exclusive defense and control of any matter otherwise subject to indemnification by you, in which event you will cooperate with us in asserting any available defenses. You agree not to settle any matter without our prior written consent.
<br></br>
 <br></br>
  <h2 className='text-white'>11. No Professional Advice   </h2>
  <br></br>
Pareto Process provides consulting services and information on technology and related topics. The information provided by Pareto Process is for general informational purposes only and should not be relied upon or used as a substitute for professional advice.

We make no representations or warranties, express or implied, regarding the accuracy, completeness, or reliability of any information or content contained on our Website or provided through our services. We disclaim any and all liability for any reliance on such information or content.

You understand and agree that any advice, guidance, or recommendations provided by Pareto Process are solely for informational purposes and should not be considered professional advice. You should consult with a qualified professional before making any decisions or taking any actions based on any information or content provided by Pareto Process.

Pareto Process shall not be liable for any damages, losses, or expenses arising from or related to your use of our Website or services or any reliance on any information or content provided by Pareto Process. We expressly disclaim any liability for any direct, indirect, incidental, consequential, or punitive damages arising from or related to your use of our Website or services.
<br></br>
 <br></br>
 <h2 className='text-white'>12. ADA Disability     </h2>
 <br></br>
Pareto Process is committed to providing equal access and opportunity for individuals with disabilities. We strive to make our Website and services accessible to all individuals, regardless of disability.

We have taken reasonable steps to ensure that our Website and services comply with the Americans with Disabilities Act (ADA) and related laws and regulations. However, we make no representations or warranties, express or implied, regarding the accessibility of our Website or services.

If you have a disability and encounter any difficulties accessing our Website or services, please contact us immediately at hello@paretoprocess.com so that we can work with you to provide the information, content, or services you need in an accessible format.

Pareto Process shall not be liable for any damages, losses, or expenses arising from or related to any difficulties accessing our Website or services due to a disability. We expressly disclaim any liability for any direct, indirect, incidental, consequential, or punitive damages arising from or related to the accessibility of our Website or services.
<br></br>
 <br></br>
 <h2 className='text-white'>13. Refund Policy   </h2>
 <br></br>
Pareto Process provides consulting services and information on technology and related topics. We offer our services with the understanding that our clients have a comprehensive understanding of their technology needs and requirements.

As a result, we have a strict no refund policy. Once services have been rendered or information has been provided, we do not offer refunds, exchanges, or credits for any reason.

We make no representations or warranties, express or implied, regarding the suitability, reliability, or accuracy of any information or content provided by Pareto Process. We disclaim any and all liability for any reliance on such information or content.

You understand and agree that by using our services, you are solely responsible for making informed decisions and taking appropriate actions based on the information and content provided by Pareto Process. You acknowledge that we have no responsibility or liability for any decisions, actions, or results arising from or related to your use of our services.

Pareto Process shall not be liable for any damages, losses, or expenses arising from or related to your use of our services or any reliance on any information or content provided by Pareto Process. We expressly disclaim any liability for any direct, indirect, incidental, consequential, or punitive damages arising from or related to our no refund policy.

<br></br>
 <br></br>
<h2 className='text-white'>14. Force Majeure   </h2>
<br></br>
Pareto Process shall not be liable for any failure to perform its obligations under this Agreement or for any delay or interruption in the provision of its services if such failure, delay or interruption is due to any event beyond its reasonable control, including but not limited to, acts of God, acts of governmental authorities, acts of terrorism, natural disasters, fire, flood, earthquakes, strikes or other labor disputes, power outages, or internet or network connectivity issues (a “Force Majeure Event”).

If a Force Majeure Event occurs, Pareto Process shall use commercially reasonable efforts to notify you promptly and to minimize the impact of such event on its services. Pareto Process shall have no liability for any damages, losses or expenses incurred by you as a result of a Force Majeure Event.

If a Force Majeure Event occurs and prevents Pareto Process from performing its obligations under this Agreement for a period of thirty (30) consecutive days or more, either party may terminate this Agreement upon written notice to the other party. Termination under this provision shall not relieve you from any obligation to pay for services rendered prior to the termination date.
<br></br>
 <br></br>
<h2 className='text-white'>15. Indemnification   </h2>
<br></br>

You agree to indemnify, defend, and hold harmless Pareto Process, its affiliates, and their respective officers, directors, employees, agents, and contractors from and against any and all claims, damages, losses, liabilities, costs, and expenses (including reasonable attorneys’ fees and court costs) arising from or relating to your use of our services, your breach of these Terms and Conditions, or any negligent or wrongful act or omission by you or your employees or agents.

You acknowledge and agree that Pareto Process shall not be liable for any damages, losses, or expenses arising from or relating to your use of our services or your reliance on any advice or information provided by Pareto Process, whether or not such damages, losses, or expenses were foreseeable or result from any negligent or wrongful act or omission by Pareto Process.

You further acknowledge and agree that Pareto Process shall not be liable for any damages, losses, or expenses arising from or relating to any claim or lawsuit brought against you by any third party, including but not limited to claims of infringement of intellectual property rights, defamation, or invasion of privacy.

You agree to promptly notify Pareto Process in writing of any claim or suit brought against you, and you will cooperate with Pareto Process in the defense of any such claim or suit. Pareto Process reserves the right, at its own expense, to assume the exclusive defense and control of any matter subject to indemnification by you.
<br></br>
 <br></br>

 <h2 className='text-white'>16. Intellectual Property Rights   </h2>
 <br></br>
All content, trademarks, service marks, logos, and other intellectual property rights displayed or used on our website and services (collectively, “Intellectual Property”) are the property of Pareto Process or its licensors, and are protected by applicable intellectual property laws. You agree not to reproduce, distribute, modify, or create derivative works of any Intellectual Property without our express written consent.

You acknowledge and agree that any materials, suggestions, ideas, or other feedback you provide to Pareto Process regarding our services or website (collectively, “Feedback”) will become the property of Pareto Process, and you hereby assign all rights, title, and interest in and to such Feedback to Pareto Process. You agree that Pareto Process may use such Feedback in any manner it deems appropriate without compensation or attribution to you. Anyone who contributes Content to the Services grants Pareto Process a world-wide, perpetual, non-exclusive, royalty-free, assignable, sublicensable, and transferable license to use the Content for any purpose.

You acknowledge and agree that Pareto Process is not responsible for the content, accuracy, or legality of any user-generated content on our website or services. You agree that any user-generated content you post or submit to our website or services is your own original work, and you hereby grant Pareto Process a perpetual, irrevocable, worldwide, royalty-free, and non-exclusive license to use, distribute, reproduce, modify, adapt, publicly perform, publicly display, and create derivative works of such user-generated content in any form or media now known or later developed, without compensation or attribution to you.

You acknowledge and agree that Pareto Process respects the intellectual property rights of others, and we expect our users to do the same. If you believe that your intellectual property rights have been infringed upon by any content on our website or services, please contact us immediately and provide us with all necessary information to investigate the matter.

You acknowledge and agree that Pareto Process shall not be liable for any damages, losses, or expenses arising from or relating to any claim or lawsuit brought against you by any third party alleging infringement of their intellectual property rights. You agree to promptly notify Pareto Process in writing of any such claim or suit brought against you, and you will cooperate with Pareto Process in the defense of any such claim or suit.
<br></br>
 <br></br>
 <h2 className='text-white'>17. Personal Information Collected   </h2>
 <br></br>
Pareto Process may collect personal information from you in order to provide our services. This information may include your name, email address, phone number, and other contact information. We may also collect information about your business or organization, such as your industry, size, and other relevant details.


By using our service, you acknowledge that you may provide us with certain personally identifiable information (PII) that we will collect and process. This information may include but is not limited to your name, email address, phone number, and other contact information.

We collect this information for specific purposes related to our services, including but not limited to responding to your inquiries, providing you with requested services, and improving the quality of our services. 

We do not knowingly collect or solicit personal information from anyone under the age of 13 or knowingly allow such persons to use our services. If you are under 13, please do not attempt to use our services or send any personal information about yourself to us. If we learn that we have collected personal information from a child under the age of 13, we will promptly delete that information. If you believe that a child under the age of 13 may have provided us with personal information, please contact us immediately at hello@paretoprocess.com so that we can investigate and take appropriate action.</p>



                </div>
            </div>
        </div>
    );
};