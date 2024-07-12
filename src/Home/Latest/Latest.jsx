const Latest = () => {
    return (
        <div className="py-12 mx-8">
            <div>
                <h2 className="text-5xl font-semibold text-center mb-12">Our Latest Arrivals</h2>
            </div>
            <div className="grid grid-cols-3 gap-4">
                <div className="card bg-base-100  shadow-xl">
                    <figure>
                        <img
                            src="https://i.ibb.co/FVC5Yd6/bmw.jpg"
                            alt="Shoes" className="h-[280px]" />
                    </figure>
                    <hr />
                    <div className="card-body">
                        <h2 className="card-title">
                            BMW M 1000 RR
                            <div className="badge badge-secondary">NEW</div>
                        </h2>
                        <p>
                            The BMW M 1000 RR is a superbike with a 999cc engine producing 205 horsepower. It's built for high performance with advanced aerodynamics and carbon fiber components.</p>
                    </div>
                </div>
                <div className="card bg-base-100  shadow-xl">
                    <figure>
                        <img
                            src="https://i.ibb.co/WP6HQry/24706-1616308857.jpg"
                            alt="Shoes" className="h-[280px] w-[400px]" />
                    </figure>
                    <hr />
                    <div className="card-body">
                        <h2 className="card-title">
                            Kawasaki Ninja ZX-10R
                            <div className="badge badge-secondary">NEW</div>
                        </h2>
                        <p>The Kawasaki Ninja ZX-10R features a 998cc engine delivering 203 horsepower. It's designed for top-tier performance with advanced electronics and aerodynamic styling.</p>
                    </div>
                </div>
                <div className="card bg-base-100  shadow-xl">
                    <figure>
                        <img
                            src="https://i.ibb.co/q0Jd5RV/view-cool-powerful-motorcycle-23-2150704851.jpg"
                            alt="Shoes" className="h-[280px]" />
                    </figure>
                    <hr />
                    <div className="card-body">
                        <h2 className="card-title">
                            Suzuki GSX-R1000R
                            <div className="badge badge-secondary">NEW</div>
                        </h2>
                        <p>The Suzuki GSX-R1000R is powered by a 999.8cc engine, delivering strong performance with 199 horsepower. It combines advanced electronics with lightweight construction for agile handling and high-speed capabilities.</p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Latest;