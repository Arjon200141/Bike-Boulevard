const FAQs = () => {
    return (
        <div className="py-16 mx-20">
            <div className="mb-14">
                <h2 className="text-5xl font-semibold text-center">Frequently Asked Qustions</h2>
            </div>
            <div className=" flex justify-center gap-12">
                <div className="h-[400px] flex-1">
                    <img src="https://i.ibb.co/d6BdZnJ/flat-questions-concept-illustration-52683-64276.jpg" alt="" className="h-[480px]"/>
                </div>
                <div className="h-[500px] flex-1 mt-8">
                    <div className="collapse collapse-plus bg-white/30">
                        <input type="radio" name="my-accordion-3" defaultChecked />
                        <div className="collapse-title text-xl font-medium">What is the return policy for bikes and accessories?</div>
                        <div className="collapse-content">
                            <p>We offer a 30-day return policy on all bikes and accessories. Items must be in their original condition and packaging. Please contact our customer service team to initiate a return.</p>
                        </div>
                    </div>
                    <div className="collapse collapse-plus bg-white/30">
                        <input type="radio" name="my-accordion-3" />
                        <div className="collapse-title text-xl font-medium">How long does delivery take?</div>
                        <div className="collapse-content">
                            <p>Delivery times vary based on your location. Typically, bikes are delivered within 5-7 business days, and accessories within 3-5 business days. You will receive a tracking number once your order has shipped.</p>
                        </div>
                    </div>
                    <div className="collapse collapse-plus bg-white/30">
                        <input type="radio" name="my-accordion-3" />
                        <div className="collapse-title text-xl font-medium">Do you offer assembly services for bikes?</div>
                        <div className="collapse-content">
                            <p>Yes, we offer professional assembly services for an additional fee. You can select this option at checkout, and our team will ensure your bike is fully assembled and ready to ride upon delivery.</p>
                        </div>
                    </div>
                    <div className="collapse collapse-plus bg-white/30">
                        <input type="radio" name="my-accordion-3" />
                        <div className="collapse-title text-xl font-medium">What payment methods do you accept?</div>
                        <div className="collapse-content">
                            <p>We accept all major credit cards, including Visa, MasterCard, American Express, and Discover. We also accept payments via PayPal and Apple Pay for your convenience.</p>
                        </div>
                    </div>
                    <div className="collapse collapse-plus bg-white/30">
                        <input type="radio" name="my-accordion-3" />
                        <div className="collapse-title text-xl font-medium">Do you offer any warranties on your bikes and accessories?</div>
                        <div className="collapse-content">
                            <p>Yes, all our bikes come with a manufacturer's warranty that covers defects in materials and workmanship. Accessories also come with a warranty period that varies by manufacturer. Please check the product details for specific warranty information.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FAQs;