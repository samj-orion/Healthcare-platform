import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import drPic from '../assets/dr_pic.jpeg';

function About() {
    useEffect(() => {
        // Simple scroll animation observer
        const observerOptions = {
            threshold: 0.1
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('opacity-100');
                    entry.target.classList.remove('opacity-0', 'translate-y-10');
                }
            });
        }, observerOptions);

        document.querySelectorAll('section').forEach(section => {
            section.classList.add('transition-all', 'duration-1000', 'opacity-0', 'translate-y-10');
            observer.observe(section);
        });

        return () => observer.disconnect();
    }, []);

    return (
        <>
            <main className="pt-20">
                {/*  Hero Section with Animation  */}
                <section className="relative h-[614px] flex items-center justify-center overflow-hidden bg-primary-container">

                    <div className="relative z-10 text-center px-gutter max-w-4xl">
                        <h1 className="text-display-lg font-display-lg text-white mb-base">Precision Care for Your Ears</h1>
                        <p className="text-body-lg font-body-lg text-on-primary-container/90 max-w-2xl mx-auto">Discover the legacy
                            of Life Hearing Care, where clinical excellence meets compassionate technology.</p>
                    </div>
                </section>

                {/*  Awards & Recognitions Images  */}
                <section className="py-xl bg-surface-container-low px-gutter">
                    <div className="max-w-container-max mx-auto">
                        <div className="text-center mb-lg">
                            <span className="text-secondary font-label-md text-label-md tracking-wider uppercase">Honors</span>
                            <h2 className="text-headline-md font-headline-md text-primary mt-xs">Awards & Recognitions</h2>
                            <p className="text-on-surface-variant mt-sm">Honored for our commitment to clinical excellence and community service.</p>
                        </div>
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-md">
                            {/* Widex Award */}
                            <div className="rounded-xl overflow-hidden bg-white shadow-md border border-outline-variant/20 group flex flex-col h-full hover:-translate-y-1 transition-transform duration-300">
                                <div className="aspect-square p-sm bg-surface-container-lowest flex items-center justify-center">
                                    <img className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                                        alt="Widex Sound Like No Other Award" src="/assets/certifications/widex-award.jpg" />
                                </div>
                                <div className="p-sm text-center border-t border-outline-variant/10 flex-grow flex flex-col justify-center bg-surface-bright">
                                    <h3 className="font-bold text-on-surface text-sm">Widex Award</h3>
                                    <p className="text-xs text-on-surface-variant mt-1 leading-tight">Recognized for delivering 'Sound Like No Other'</p>
                                </div>
                            </div>

                            {/* Dainik Bhaskar Award */}
                            <div className="rounded-xl overflow-hidden bg-white shadow-md border border-outline-variant/20 group flex flex-col h-full hover:-translate-y-1 transition-transform duration-300">
                                <div className="aspect-square p-sm bg-surface-container-lowest flex items-center justify-center">
                                    <img className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                                        alt="Dainik Bhaskar Health Care Award 2025" src="/assets/certifications/dainik-bhaskar-award.jpg" />
                                </div>
                                <div className="p-sm text-center border-t border-outline-variant/10 flex-grow flex flex-col justify-center bg-surface-bright">
                                    <h3 className="font-bold text-on-surface text-sm">Dainik Bhaskar Award</h3>
                                    <p className="text-xs text-on-surface-variant mt-1 leading-tight">Health Care Award 2025 for clinical excellence</p>
                                </div>
                            </div>

                            {/* Rotary Club */}
                            <div className="rounded-xl overflow-hidden bg-white shadow-md border border-outline-variant/20 group flex flex-col h-full hover:-translate-y-1 transition-transform duration-300">
                                <div className="aspect-square p-sm bg-surface-container-lowest flex items-center justify-center">
                                    <img className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                                        alt="Rotary Club Kota Certificate" src="/assets/certifications/rotary-club-cert.jpg" />
                                </div>
                                <div className="p-sm text-center border-t border-outline-variant/10 flex-grow flex flex-col justify-center bg-surface-bright">
                                    <h3 className="font-bold text-on-surface text-sm">Rotary Club Kota</h3>
                                    <p className="text-xs text-on-surface-variant mt-1 leading-tight">Honored for organizing free assistance camps</p>
                                </div>
                            </div>

                            {/* Vibe TuneTech */}
                            <div className="rounded-xl overflow-hidden bg-white shadow-md border border-outline-variant/20 group flex flex-col h-full hover:-translate-y-1 transition-transform duration-300">
                                <div className="aspect-square p-sm bg-surface-container-lowest flex items-center justify-center">
                                    <img className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                                        alt="Vibe TuneTech Dealership Certificate" src="/assets/certifications/vibe-tunetech-cert.jpg" />
                                </div>
                                <div className="p-sm text-center border-t border-outline-variant/10 flex-grow flex flex-col justify-center bg-surface-bright">
                                    <h3 className="font-bold text-on-surface text-sm">Vibe TuneTech</h3>
                                    <p className="text-xs text-on-surface-variant mt-1 leading-tight">Authorized Dealership Certificate 2024-2025</p>
                                </div>
                            </div>

                            {/* Joy of Giving */}
                            <div className="rounded-xl overflow-hidden bg-white shadow-md border border-outline-variant/20 group flex flex-col h-full hover:-translate-y-1 transition-transform duration-300">
                                <div className="aspect-square p-sm bg-surface-container-lowest flex items-center justify-center">
                                    <img className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                                        alt="Joy of Giving Society Recognition" src="/assets/certifications/joy-of-giving-cert.jpg" />
                                </div>
                                <div className="p-sm text-center border-t border-outline-variant/10 flex-grow flex flex-col justify-center bg-surface-bright">
                                    <h3 className="font-bold text-on-surface text-sm">Joy of Giving Society</h3>
                                    <p className="text-xs text-on-surface-variant mt-1 leading-tight">Recognition for inspiring social activities</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/*  Clinic Story Section  */}
                <section className="py-xl px-gutter max-w-container-max mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-xl items-center">
                        <div className="space-y-md">
                            <span className="text-secondary font-label-md text-label-md tracking-wider uppercase">Our Legacy</span>
                            <h2 className="text-headline-md font-headline-md text-primary">A Vision for Better Hearing</h2>
                            <div className="space-y-base text-on-surface-variant">
                                <p>Founded in 2019, Life Hearing Care began with a simple yet profound realization: hearing is
                                    not just about sound; it's about connection. Our founder, Dr. Manish Singh, envisioned a
                                    clinic that treated the patient, not just the audiogram.</p>
                                <p>Over the past fifteen years, we have evolved from a small local practice into a
                                    state-of-the-art clinical center. We've stayed true to our roots by prioritizing high-touch
                                    care while adopting the most sophisticated diagnostic tools available in modern audiology.
                                </p>
                                <p>Today, we serve thousands of patients across three locations, providing life-changing hearing
                                    solutions that restore the music of everyday life.</p>
                            </div>
                        </div>
                        <div className="grid grid-cols-2 gap-md">
                            <div className="space-y-md pt-lg">
                                <img className="rounded-xl shadow-lg w-full h-64 object-cover"
                                    alt="A clean, modern clinical examination room in a professional hearing care facility."
                                    src="/tech_images/about_1.webp" />
                                <img className="rounded-xl shadow-lg w-full h-48 object-cover"
                                    alt="A macro shot of a sophisticated, modern behind-the-ear hearing aid resting on a soft, light grey velvet surface."
                                    src="/tech_images/about_2.webp" />
                            </div>
                            <div className="space-y-md">
                                <img className="rounded-xl shadow-lg w-full h-80 object-cover"
                                    alt="An expert audiologist in professional clinical attire warmly smiling while speaking with an elderly patient."
                                    src="/tech_images/about_3.webp" />
                                <img className="rounded-xl shadow-lg w-full h-32 object-cover"
                                    alt="A close-up of a digital hearing test screen displaying complex but clean audiogram data."
                                    src="/tech_images/about_4.webp" />
                            </div>
                        </div>
                    </div>
                </section>
                {/*  Mission & Vision Section  */}
                <section className="py-xl bg-surface-container-low px-gutter">
                    <div className="max-w-container-max mx-auto">
                        <div className="text-center mb-lg">
                            <h2 className="text-headline-md font-headline-md text-primary">The Principles That Guide Us</h2>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-lg">
                            {/*  Mission Card  */}
                            <div
                                className="bg-white p-lg rounded-xl shadow-[0px_4px_20px_rgba(15,76,129,0.05)] border-t-4 border-primary hover:translate-y-[-4px] transition-transform duration-300">
                                <div className="w-12 h-12 rounded-full bg-primary-fixed flex items-center justify-center mb-md">
                                    <span className="material-symbols-outlined text-primary">flag</span>
                                </div>
                                <h3 className="text-title-lg font-title-lg text-primary mb-base">Our Mission</h3>
                                <p className="text-on-surface-variant">To empower individuals through personalized hearing
                                    solutions, ensuring no one is left out of life's most meaningful conversations.</p>
                            </div>
                            {/*  Vision Card  */}
                            <div
                                className="bg-white p-lg rounded-xl shadow-[0px_4px_20px_rgba(15,76_129,0.05)] border-t-4 border-secondary hover:translate-y-[-4px] transition-transform duration-300">
                                <div className="w-12 h-12 rounded-full bg-secondary-fixed flex items-center justify-center mb-md">
                                    <span className="material-symbols-outlined text-secondary">visibility</span>
                                </div>
                                <h3 className="text-title-lg font-title-lg text-secondary mb-base">Our Vision</h3>
                                <p className="text-on-surface-variant">To be the global benchmark for clinical audiology, bridging
                                    the gap between medical science and human connection.</p>
                            </div>
                            {/*  Values Card  */}
                            <div
                                className="bg-white p-lg rounded-xl shadow-[0px_4px_20px_rgba(15,76_129,0.05)] border-t-4 border-tertiary-fixed-dim hover:translate-y-[-4px] transition-transform duration-300">
                                <div className="w-12 h-12 rounded-full bg-tertiary-fixed flex items-center justify-center mb-md">
                                    <span className="material-symbols-outlined text-tertiary">favorite</span>
                                </div>
                                <h3 className="text-title-lg font-title-lg text-tertiary mb-base">Our Values</h3>
                                <p className="text-on-surface-variant">Integrity in diagnostics, innovation in solutions, and
                                    unwavering empathy for every person who walks through our doors.</p>
                            </div>
                        </div>
                    </div>
                </section>
                {/*  Interactive Timeline Component  */}
                <section className="py-xl px-gutter max-w-4xl mx-auto">
                    <h2 className="text-headline-md font-headline-md text-primary text-center mb-xl">Our Journey Through Time</h2>
                    <div className="relative">
                        {/*  Vertical Line  */}
                        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-outline-variant"></div>
                        {/*  Timeline Item 1  */}
                        <div className="relative z-10 mb-xl flex items-center justify-between group">
                            <div className="w-[45%] text-right pr-md">
                                <span className="text-primary font-bold text-headline-md">2019</span>
                                <h4 className="text-title-lg font-title-lg">The Foundation</h4>
                                <p className="text-body-lg text-on-surface-variant">First clinic opened in the heart of the city
                                    with two treatment rooms and a dream.</p>
                            </div>
                            <div
                                className="w-10 h-10 rounded-full bg-primary flex items-center justify-center border-4 border-white shadow-md relative z-20 transition-transform group-hover:scale-125">
                                <span className="material-symbols-outlined text-white text-sm">home</span>
                            </div>
                            <div className="w-[45%]"></div>
                        </div>
                        {/*  Timeline Item 2  */}
                        <div className="relative z-10 mb-xl flex items-center justify-between group">
                            <div className="w-[45%]"></div>
                            <div
                                className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center border-4 border-white shadow-md relative z-20 transition-transform group-hover:scale-125">
                                <span className="material-symbols-outlined text-white text-sm">rocket_launch</span>
                            </div>
                            <div className="w-[45%] pl-md">
                                <span className="text-secondary font-bold text-headline-md">2022</span>
                                <h4 className="text-title-lg font-title-lg">Digital Expansion</h4>
                                <p className="text-body-lg text-on-surface-variant">Adopted 100% digital diagnostic standards and
                                    pioneered remote fitting protocols.</p>
                            </div>
                        </div>
                        {/*  Timeline Item 3  */}
                        <div className="relative z-10 mb-xl flex items-center justify-between group">
                            <div className="w-[45%] text-right pr-md">
                                <span className="text-primary font-bold text-headline-md">Today</span>
                                <h4 className="text-title-lg font-title-lg">A Growing Community</h4>
                                <p className="text-body-lg text-on-surface-variant">Serving over 5,000 active patients across
                                    regional clinics.</p>
                            </div>
                            <div
                                className="w-10 h-10 rounded-full bg-primary flex items-center justify-center border-4 border-white shadow-md relative z-20 transition-transform group-hover:scale-125">
                                <span className="material-symbols-outlined text-white text-sm">emoji_events</span>
                            </div>
                            <div className="w-[45%]"></div>
                        </div>
                    </div>
                </section>

                {/*  Leadership Team Section  */}
                <section className="py-xl px-gutter max-w-container-max mx-auto bg-[#faf9f6] rounded-3xl">
                    <div className="text-center mb-12">
                        <span className="inline-flex items-center gap-2 text-[#d4af37] font-semibold text-sm bg-[#fff8e1] px-4 py-1.5 rounded-full mb-6 shadow-sm">
                            ⭐ India's Leading Audiologist
                        </span>
                        <h2 className="text-4xl md:text-5xl font-display-lg text-primary">
                            About <span className="text-[#802c3d]">Manish Singh</span>
                        </h2>
                    </div>

                    <div className="flex flex-col lg:flex-row gap-12 items-start max-w-5xl mx-auto">
                        {/* Left Image */}
                        <div className="w-full lg:w-1/3 flex-shrink-0">
                            <div className="rounded-2xl overflow-hidden shadow-2xl relative border-4 border-white">
                                <img
                                    className="w-full aspect-[4/5] object-cover object-top"
                                    alt="Manish Singh"
                                    src={drPic}
                                />
                            </div>
                        </div>

                        {/* Right Content */}
                        <div className="w-full lg:w-2/3 space-y-6 text-left">
                            <div className="space-y-4 text-on-surface-variant text-body-lg leading-relaxed">
                                <p>
                                    Manish Singh is an award-winning audiologist and speech-language pathologist celebrated for his accurate diagnostics and life-changing solutions. Blending the expertise of clinical audiology, modern technology, and compassionate care, he helps individuals overcome hearing challenges and reconnect with the world.
                                </p>
                                <p>
                                    His mastery in hearing sciences reveals how treating hearing loss can transform your quality of life. With precision and deep empathy, Manish has guided thousands across India to live with clarity, confidence, and joy.
                                </p>
                            </div>

                            {/* Tags */}
                            <div className="flex flex-wrap gap-3 pt-2">
                                {['Certified Audiologist', 'Speech Therapist', 'Pediatric Specialist', 'Featured on Media Portals'].map((tag, idx) => (
                                    <div key={idx} className="flex items-center gap-1.5 bg-[#f0f8f1] text-[#2e7d32] px-3 py-1.5 rounded-md text-sm font-medium border border-[#c8e6c9]">
                                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                        </svg>
                                        {tag}
                                    </div>
                                ))}
                            </div>

                            {/* Stat Boxes */}
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-6">
                                <div className="bg-[#fcf5f6] border border-[#f5e6e8] rounded-xl p-4 text-center transition-transform hover:-translate-y-1">
                                    <div className="text-[#802c3d] font-bold text-2xl mb-1">5,000+</div>
                                    <div className="text-[#7a6f71] text-[11px] uppercase tracking-wider font-semibold">Lives Transformed</div>
                                </div>
                                <div className="bg-[#fcf5f6] border border-[#f5e6e8] rounded-xl p-4 text-center transition-transform hover:-translate-y-1">
                                    <div className="text-[#802c3d] font-bold text-2xl mb-1">8+ Years</div>
                                    <div className="text-[#7a6f71] text-[11px] uppercase tracking-wider font-semibold">Experience</div>
                                </div>
                                <div className="bg-[#fcf5f6] border border-[#f5e6e8] rounded-xl p-4 text-center transition-transform hover:-translate-y-1">
                                    <div className="text-[#802c3d] font-bold text-2xl mb-1">2+ Clinics</div>
                                    <div className="text-[#7a6f71] text-[11px] uppercase tracking-wider font-semibold">Across Region</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* FAQ Section */}
                <section className="py-xl px-gutter max-w-4xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl md:text-5xl font-display-lg text-primary">
                            Frequently Asked <span className="text-[#802c3d]">Questions</span>
                        </h2>
                    </div>
                    <div className="space-y-4">
                        {[
                            { q: "What is an Audiological Evaluation?", a: "It is a comprehensive test to determine the type and degree of your hearing loss." },
                            { q: "Is the hearing test safe?", a: "Yes, our tests are non-invasive and completely safe for all ages." },
                            { q: "When will I see results?", a: "You will receive immediate results after your audiological evaluation is complete." },
                            { q: "What does the report include?", a: "The report includes an audiogram, speech scores, and personalized recommendations for hearing aids if needed." },
                            { q: "How long does it take?", a: "A standard hearing evaluation takes about 30 to 45 minutes." },
                            { q: "Is there a refund policy?", a: "Please contact our front desk to understand our trial periods and refund policies for hearing aids." }
                        ].map((faq, idx) => (
                            <details key={idx} className="group bg-[#fbfbfb] border border-[#ebebeb] rounded-xl cursor-pointer shadow-sm hover:shadow-md transition-shadow overflow-hidden">
                                <summary className="flex justify-between items-center font-medium cursor-pointer list-none p-5 text-primary text-title-lg">
                                    <span>{faq.q}</span>
                                    <span className="transition-transform duration-300 group-open:rotate-180 text-on-surface-variant">
                                        <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
                                    </span>
                                </summary>
                                <div className="text-on-surface-variant p-5 pt-0 text-body-lg">
                                    <p>{faq.a}</p>
                                </div>
                            </details>
                        ))}
                    </div>
                </section>

                {/*  Certifications & Gallery Section  */}
                <section className="py-xl px-gutter max-w-container-max mx-auto">
                    <div className="flex flex-col lg:flex-row gap-xl">
                        {/*  Certifications  */}
                        <div className="w-full lg:w-1/3">
                            <h2 className="text-headline-md font-headline-md text-primary mb-md">Our Credentials</h2>
                            <div className="space-y-sm">
                                <div
                                    className="flex items-center gap-md p-md bg-white rounded-xl border border-outline-variant/20 shadow-sm">
                                    <span className="material-symbols-outlined text-secondary"
                                        style={{ fontVariationSettings: "'FILL' 1" }}>verified</span>
                                    <div>
                                        <h5 className="font-bold text-on-surface">Experienced RCI Certified Audiologist</h5>
                                        <p className="text-sm text-on-surface-variant">Rehabilitation Council of India</p>
                                    </div>
                                </div>
                                <div
                                    className="flex items-center gap-md p-md bg-white rounded-xl border border-outline-variant/20 shadow-sm">
                                    <span className="material-symbols-outlined text-secondary"
                                        style={{ fontVariationSettings: "'FILL' 1" }}>verified</span>
                                    <div>
                                        <h5 className="font-bold text-on-surface">ISHA Certified Audiologist</h5>
                                        <p className="text-sm text-on-surface-variant">Indian Speech and Hearing Association</p>
                                    </div>
                                </div>
                                <div
                                    className="flex items-center gap-md p-md bg-white rounded-xl border border-outline-variant/20 shadow-sm">
                                    <span className="material-symbols-outlined text-secondary"
                                        style={{ fontVariationSettings: "'FILL' 1" }}>emoji_events</span>
                                    <div>
                                        <h5 className="font-bold text-on-surface">Dainik Bhaskar Medical Award 2026</h5>
                                        <p className="text-sm text-on-surface-variant">Recognized for Medical Excellence</p>
                                    </div>
                                </div>
                                <div
                                    className="flex items-center gap-md p-md bg-white rounded-xl border border-outline-variant/20 shadow-sm">
                                    <span className="material-symbols-outlined text-secondary"
                                        style={{ fontVariationSettings: "'FILL' 1" }}>military_tech</span>
                                    <div>
                                        <h5 className="font-bold text-on-surface">Rotary Club Award</h5>
                                        <p className="text-sm text-on-surface-variant">Awarded for Community Service</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/*  Facility Gallery (Bento Grid Style)  */}
                        <div className="w-full lg:w-2/3 grid grid-cols-2 md:grid-cols-3 grid-rows-2 gap-sm h-[500px]">
                            <div className="col-span-2 row-span-2 rounded-2xl overflow-hidden relative group">
                                <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                    alt="A wide-angle shot of the main lobby of Life Hearing Care clinic."
                                    src="/tech_images/about_5.webp" />
                                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors"></div>
                            </div>
                            <div className="rounded-2xl overflow-hidden relative group">
                                <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                    alt="A specialized soundproof booth used for clinical hearing tests."
                                    src="/tech_images/about_6.webp" />
                            </div>
                            <div className="rounded-2xl overflow-hidden relative group">
                                <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                    alt="A modern laboratory workbench where a technician is working on a miniature hearing aid component."
                                    src="/tech_images/about_7.webp" />
                            </div>
                        </div>
                    </div>
                </section>
                {/*  CTA Section  */}
                <section className="py-xl px-gutter">
                    <div className="max-w-4xl mx-auto rounded-3xl bg-primary overflow-hidden relative p-lg md:p-xl text-center">

                        <div className="relative z-10">
                            <h2 className="text-display-lg-mobile md:text-display-lg font-display-lg text-white mb-md">Ready to
                                Experience Better Hearing?</h2>
                            <p className="text-on-primary-container text-body-xl mb-lg max-w-2xl mx-auto">Join the thousands who
                                have rediscovered the sounds they love. Schedule your comprehensive evaluation today.</p>
                            <div className="flex flex-col md:flex-row items-center justify-center gap-md">
                                <Link
                                    to="/book"
                                    className="w-full md:w-auto bg-white text-primary font-bold px-xl py-md rounded-xl shadow-lg hover:scale-105 transition-transform text-center">Book
                                    Your Visit</Link>
                                <Link
                                    to="/book"
                                    className="w-full md:w-auto border-2 border-white/30 text-white font-bold px-xl py-md rounded-xl hover:bg-white/10 transition-colors text-center">Contact
                                    Our Team</Link>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
}

export default About;
