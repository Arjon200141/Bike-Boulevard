import { useEffect, useState } from "react";
import { FaStar, FaUser } from "react-icons/fa";

const Review = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch('review.json')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])
    return (
        <div className="mx-10 py-20">
            <div>
                <h2 className="text-5xl font-semibold text-center">What Our Clients Say</h2>
            </div>
            <div className="grid grid-cols-3 gap-4 mt-16">
                {
                    reviews.map(review =>
                        <div key={review.Image}>
                            <div className="card bg-white/35 shadow-2xl">
                                <div className="avatar">
                                    <div className="w-24 rounded-xl ml-8 mt-4">
                                        <img src={review.Image}/>
                                    </div>
                                </div>
                                <div className="card-body">
                                    <div className="flex justify-between gap-16">
                                    <h2 className="text-2xl flex items-center gap-3"><FaUser />{review.ReviewerName}</h2>
                                    <p  className="text-2xl flex items-center gap-3"><FaStar />{review.Rating}</p>
                                    </div>
                                    <p>{review.Review}</p>
                                </div>
                                
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default Review;