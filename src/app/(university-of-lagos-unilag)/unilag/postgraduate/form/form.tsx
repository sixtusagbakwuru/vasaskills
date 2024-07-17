import React from "react";
import Notice from "../notice";
import EmailSubscriptionForm from "../email-subscription-form";
import { FaCheckCircle } from "react-icons/fa";
import Link from "next/link";
import { CgCalendarDates } from "react-icons/cg";
import { TbCircleNumber1Filled } from "react-icons/tb";
import { TbCircleNumber2Filled } from "react-icons/tb";
import { TbCircleNumber3Filled } from "react-icons/tb";
import { TbCircleNumber4Filled } from "react-icons/tb";





export default function Form() {
    return (
        <div>
            <h1 className="text-3xl font-bold bg-white p-4 rounded">Everything You Need to Know About the UNILAG Postgraduate Form 2024/2025 </h1>
            <div className="p-4">
                <p className="text-lg leading-7 mb-4">Are you looking to advance your academic journey with a postgraduate degree? The <Link href="https://www.unilag.edu.ng" target="_blank">University of Lagos (UNILAG)</Link> offers a range of postgraduate programs that could be your next step. This guide covers everything you need to know about the UNILAG postgraduate form, from application deadlines to eligibility criteria and application procedures.</p>
                <p className="text-lg leading-7 mb-4">In other to provide you with all these, we have structured this page according to the following table of content below:</p>
                <p className="text-lg leading-7 mb-4">Meanwhile, if you have any questions, don’t hesitate to call <span className="font-bold text-vasaskills-blue">08148964735</span> (WhatsApp) or <span className="font-bold text-vasaskills-blue">08086912162</span> for more clarification.</p>
                <EmailSubscriptionForm />
                <h2 className="text-2xl font-bold mt-8 mb-4">Table of Content:</h2>
                <ul>
                    <li className="text-lg leading-7 mb-4 flex items-start gap-2"> <FaCheckCircle className="mt-1 min-h-5 min-w-5 text-vasaskills-green" /> <Link href="#why-choose-unilag" className="text-vasaskills-blue hover:underline"> Why Choose UNILAG for Your Postgraduate Studies?</Link></li>
                    <li className="text-lg leading-7 mb-4 flex items-start gap-2"> <FaCheckCircle className="mt-1 min-h-5 min-w-5 text-vasaskills-green" /> <Link href="#important-dates" className="text-vasaskills-blue hover:underline"> Important Dates for UNILAG Postgraduate Form 2024/2025</Link></li>
                    <li className="text-lg leading-7 mb-4 flex items-start gap-2"> <FaCheckCircle className="mt-1 min-h-5 min-w-5 text-vasaskills-green" /> <Link href="#eligibility-criteria" className="text-vasaskills-blue hover:underline"> Eligibility Criteria</Link></li>
                    <li className="text-lg leading-7 mb-4 flex items-start gap-2"> <FaCheckCircle className="mt-1 min-h-5 min-w-5 text-vasaskills-green" /> <Link href="#how-to-apply" className="text-vasaskills-blue hover:underline"> How to Apply for the UNILAG Postgraduate Form</Link></li>
                    <li className="text-lg leading-7 mb-4 flex items-start gap-2"> <FaCheckCircle className="mt-1 min-h-5 min-w-5 text-vasaskills-green" /> <Link href="#available-courses" className="text-vasaskills-blue hover:underline"> Available Courses</Link></li>
                    <li className="text-lg leading-7 mb-4 flex items-start gap-2"> <FaCheckCircle className="mt-1 min-h-5 min-w-5 text-vasaskills-green" /> <Link href="#school-fees" className="text-vasaskills-blue hover:underline"> School Fees</Link></li>
                    <li className="text-lg leading-7 mb-4 flex items-start gap-2"> <FaCheckCircle className="mt-1 min-h-5 min-w-5 text-vasaskills-green" /> <Link href="#entrance-exam" className="text-vasaskills-blue hover:underline"> Entrance Exam</Link></li>
                    <li className="text-lg leading-7 mb-4 flex items-start gap-2"> <FaCheckCircle className="mt-1 min-h-5 min-w-5 text-vasaskills-green" /> <Link href="#past-questions" className="text-vasaskills-blue hover:underline"> Past Questions</Link></li>
                    <li className="text-lg leading-7 mb-4 flex items-start gap-2"> <FaCheckCircle className="mt-1 min-h-5 min-w-5 text-vasaskills-green" /> <Link href="#tutorial" className="text-vasaskills-blue hover:underline"> Tutorial</Link></li>
                    <li className="text-lg leading-7 mb-4 flex items-start gap-2"> <FaCheckCircle className="mt-1 min-h-5 min-w-5 text-vasaskills-green" /> <Link href="#tips" className="text-vasaskills-blue hover:underline"> Tips for a Successful Application</Link></li>
                    <li className="text-lg leading-7 mb-4 flex items-start gap-2"> <FaCheckCircle className="mt-1 min-h-5 min-w-5 text-vasaskills-green" /> <Link href="#faq" className="text-vasaskills-blue hover:underline"> Frequently Asked Questions (FAQ) on UNILAG Postgraduate Form</Link></li>
                    <li className="text-lg leading-7 mb-4 flex items-start gap-2"> <FaCheckCircle className="mt-1 min-h-5 min-w-5 text-vasaskills-green" /> <Link href="#conclusion" className="text-vasaskills-blue hover:underline"> Conclusion</Link></li>
                </ul>
                <h2 className="text-2xl font-bold mt-8 mb-4" id="why-choose-unilag">Why Choose UNILAG for Your Postgraduate Studies?</h2>
                <p className="text-lg leading-7 mb-4">The University of Lagos is one of Nigeria&apos;s premier institutions, renowned for its academic excellence, research output, and vibrant campus life. Here are a few reasons why you should consider UNILAG for your postgraduate studies:</p>
                <ul>
                    <li className="text-lg leading-7 mb-4"><strong>Diverse Programs:</strong> UNILAG offers a wide range of postgraduate programs across various disciplines, including arts, sciences, engineering, law, and business.</li>
                    <li className="text-lg leading-7 mb-4"><strong>Experienced Faculty:</strong> Learn from distinguished professors and industry experts.</li>
                    <li className="text-lg leading-7 mb-4"><strong>Research Opportunities:</strong> Engage in groundbreaking research that can make a significant impact in your field.</li>
                    <li className="text-lg leading-7 mb-4"><strong>State-of-the-Art Facilities:</strong> Access to modern laboratories, libraries, and other learning resources.</li>
                </ul>
                <h2 className="text-2xl font-bold mt-8 mb-4" id="important-dates">Important Dates for UNILAG Postgraduate Form 2024/2025</h2>
                <p className="text-lg leading-7 mb-4">The application process for the UNILAG postgraduate form typically opens in the first quarter of the year. Here are the key dates to keep in mind:</p>
                <ul>
                    <li className="text-lg leading-7 mb-4 flex items-start gap-2"><CgCalendarDates className="mt-1 min-h-7 min-w-7 text-vasaskills-green" /><span><strong>Application Start Date:</strong> March 1, 2024</span></li>
                    <li className="text-lg leading-7 mb-4 flex items-start gap-2"><CgCalendarDates className="mt-1 min-h-7 min-w-7 text-vasaskills-green" /><span><strong>Application Deadline:</strong> May 31, 2024</span></li>
                    <li className="text-lg leading-7 mb-4 flex items-start gap-2"><CgCalendarDates className="mt-1 min-h-7 min-w-7 text-vasaskills-green" /><span><strong>Entrance Examination:</strong> June 15-30, 2024</span></li>
                    <li className="text-lg leading-7 mb-4 flex items-start gap-2"><CgCalendarDates className="mt-1 min-h-7 min-w-7 text-vasaskills-green" /><span><strong>Admission List Release:</strong> August 2024</span></li>
                </ul>
                <h2 className="text-2xl font-bold mt-8 mb-4" id="eligibility-criteria">Eligibility Criteria</h2>
                <p className="text-lg leading-7 mb-4">Before applying, ensure you meet the following eligibility criteria for the UNILAG postgraduate form:</p>
                <ol>
                    <li className="text-lg leading-7 mb-4 flex items-start gap-2"><TbCircleNumber1Filled className="min-h-8	min-w-8 text-lg text-vasaskills-green"/><span><strong>Bachelor&apos;s Degree:</strong> Applicants must have a minimum of a Second Class Lower Division (2:2) in their first degree.</span></li>
                    <li className="text-lg leading-7 mb-4 flex items-start gap-2"><TbCircleNumber2Filled className="min-h-8	min-w-8 text-lg text-vasaskills-green"/><span><strong>Academic Transcripts:</strong> Official transcripts from your undergraduate institution.</span></li>
                    <li className="text-lg leading-7 mb-4 flex items-start gap-2"><TbCircleNumber3Filled className="min-h-8	min-w-8 text-lg text-vasaskills-green"/><span><strong>NYSC Discharge Certificate:</strong> Proof of completion of the National Youth Service Corps (NYSC) program.</span></li>
                    <li className="text-lg leading-7 mb-4 flex items-start gap-2"><TbCircleNumber4Filled className="min-h-8	min-w-8 text-lg text-vasaskills-green"/><span><strong>Professional Qualifications:</strong> Relevant professional qualifications (if applicable).</span></li>
                </ol>
                <h2 className="text-2xl font-bold mt-8 mb-4" id="admission-form">Admission Form</h2>
                <p className="text-lg leading-7 mb-4">The 2020/2021 UNILAG Postgraduate Admission Form is sold for N22,500 excluding bank charge. The sales of the form started on Monday, 25th May, 2020 and closes on Friday, 9th October, 2020.</p>
                <p className="text-lg leading-7 mb-4">Meanwhile, completed application form must be submitted online not later than Wednesday, 14th October, 2020</p>
                <Notice />
                <h2 className="text-2xl font-bold mt-8 mb-4">How To Obtain The Admission Form </h2>
                <p className="text-lg leading-7 mb-4">The 2020/2021 Admission Form of UNILAG PG School can be purchased from any of the banks within the campus or via the online platform (Remita).</p>
                <p className="text-lg leading-7 mb-4">Note that filling and submission of the form demands high level of precision, accuracy and technical skills. A slight mistake can disqualify you from being considered for admission.</p>
                <p className="text-lg leading-7 mb-4">In order to avoid mistakes, we are fully ready to assist you with the whole process of buying, filling and submission of the form. Kindly come to our outlet in Faculty of Education, Close to Wema Bank, Education B/Stop, UNILAG with the following credentials:</p>
                <ol>
                    <li className="text-lg leading-7 mb-4">First Degree Certificate or Statement of Result</li>
                    <li className="text-lg leading-7 mb-4">NYSC Certificate (Discharged or Exemption)</li>
                    <li className="text-lg leading-7 mb-4">White background colored passport photograph.</li>
                </ol>
                <p className="text-lg leading-7 mb-4">Call 08148964735 (WhatsApp) or 08086912162 for proper direction to our office in UNILAG. Please note that our outlet is just 2 minutes walk away from the University Main Gate.</p>
                <p className="text-lg leading-7 mb-4">Alternatively, we can actually assist you from anywhere you are without you coming to our outlet in UNILAG. This is how it works:</p>
                <p className="text-lg leading-7 mb-4">STEP #1: Kindly send us the following detail to 08148964735 (WhatsApp) or 08086912162.</p>
                <ol>
                    <li className="text-lg leading-7 mb-4">Surname</li>
                    <li className="text-lg leading-7 mb-4">First Name</li>
                    <li className="text-lg leading-7 mb-4">Middle Name </li>
                    <li className="text-lg leading-7 mb-4">Phone Number</li>
                    <li className="text-lg leading-7 mb-4">Email Address</li>
                </ol>
                <p className="text-lg leading-7 mb-4">STEP #2: Once we get the above details, we will initiate the process after which UNILAG will send you an email to verify your email address and generate reference.</p>
                <p className="text-lg leading-7 mb-4">STEP #3: In that email, click on the verification link, and your email will be verified and your reference number generated.</p>
                <p className="text-lg leading-7 mb-4">STEP #4: With the reference number, you can pay for the application form ONLINE from anywhere you are. If you don&apos;t know how to go about that, don&apos;t worry as we are here to guide you through the process.</p>
                <p className="text-lg leading-7 mb-4">STEP #5: Once you successfully pay for the application form, you can then forward the reference number and the following credentials to us via WhatsApp (08148964735):</p>
                <ol>
                    <li className="text-lg leading-7 mb-4">First Degree Certificate or Statement of Result</li>
                    <li className="text-lg leading-7 mb-4">NYSC Certificate (Discharged or Exemption)</li>
                    <li className="text-lg leading-7 mb-4">White background colored passport photograph.</li>
                </ol>
                <p className="text-lg leading-7 mb-4">STEP #6: After receiving your credentials, we will complete the form and send you a preview copy before final submission,</p>
                <p className="text-lg leading-7 mb-4">STEP #7: Finally, after previewing and making corrections where necessary, we will submit the form and send you the final copy which you can print anywhere if you wish.</p>
                <Notice />
                <h2 className="text-2xl font-bold mt-8 mb-4" id="available-courses">Available Courses</h2>
                <p className="text-lg leading-7 mb-4">Here is a Full List of UNILAG Postgraduate Courses and Requirements.</p>
                <p className="text-lg leading-7 mb-4">Ensure that the programme you wish to apply for is available before proceeding with the purchase of the form.</p>
                <Notice />
                <h2 className="text-2xl font-bold mt-8 mb-4">School Fees</h2>
                <p className="text-lg leading-7 mb-4">The school fees of UNILAG PG School varies from course to course. For example, the school fees of all Full-Time Art Courses is N75,000 while the school fees of Master of Information Technology (Part Time) is N450,000.</p>
                <p className="text-lg leading-7 mb-4">However, the N64,500 obligatory fees (acceptance fees) associated with every course is the same for all the courses.</p>
                <p className="text-lg leading-7 mb-4">You can see more detail about the UNILAG Postgraduate School Fees for Each Course.</p>
                <Notice />
                <h2 className="text-2xl font-bold mt-8 mb-4">Entrance Exam</h2>
                <p className="text-lg leading-7 mb-4">Entrance exam comes up in August after the close of the sales of admission form.</p>
                <p className="text-lg leading-7 mb-4">Note that the entrance exam is applicable to all PGD and Masters Programmes.</p>
                <p className="text-lg leading-7 mb-4">Only candidates who score up to the required cut off mark shall be considered for admission.</p>
                <p className="text-lg leading-7 mb-4">Consequently, studying past questions alone is not longer enough. You also need to practice Computer-Based-Test (CBT). That is why we have introduced CBT Practice. Click Here To Learn More About Our CBT Practice</p>
                <Notice />
                <h2 className="text-2xl font-bold mt-8 mb-4">Past Questions</h2>
                <p className="text-lg leading-7 mb-4">Adequate preparation is the key to success in pursuit of admission into UNILAG PG School.</p>
                <p className="text-lg leading-7 mb-4">One of the ways to prepare for the entrance exam of UNILAG PG School is to study the past questions very well.</p>
                <p className="text-lg leading-7 mb-4">Fortunately, we have both hard copies and soft copies of the past questions for all courses.</p>
                <p className="text-lg leading-7 mb-4">The price of soft copy is N6,000 (instead of N8,000) while the price for hard copy is N8,000 (instead of N10,000).</p>
                <p className="text-lg leading-7 mb-4">So which one do you want?</p>
                <p className="text-lg leading-7 mb-4">Kindly call 08148964735 (WhatsApp) or 08086912162 to place your order now because PRICE GOES UP TO THE REGULAR AMOUNT SOON.</p>
            </div>
        </div>
    )
}