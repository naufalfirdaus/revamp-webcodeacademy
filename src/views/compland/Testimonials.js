import React, { useState, useEffect } from "react";
import TestimonialItem from "./TestimonialsItem";
import config from "../../config/config";
import apiTestimonials from "../../api/api-testimonials";
import { Link } from "react-router-dom";
import { ChevronRightIcon } from "@heroicons/react/solid";
import { ChevronUpIcon, ChevronDownIcon } from "@heroicons/react/solid";

function Testimonials() {
    const slides = [1, 2, 3, 4, 5, 6, 7, 8];
    const [testi, setTesti] = useState([]);
    useEffect(() => {
        apiTestimonials.findBySql().then((data) => {
            setTesti(data);
        });
    }, []);

    const slideLeft = () => {
        var slider = document.getElementById("slider");
        slider.scrollTop = slider.scrollTop + 500;
    };
    const slideRight = () => {
        var slider = document.getElementById("slider");
        slider.scrollTop = slider.scrollTop - 500;
    };

    return (
        <section
            className="container mt-36 text-center flex flex-col items-center"
            id="testimonial"
        >
            <h3 className="text-4xl font-bold">What They Feel?</h3>
            <hr className="bg-blue-100 h-1 w-[30%] mt-3 rounded-full animate-pulse"></hr>
            <p className="font-medium mt-4 max-w-lg">
                We are always on the lookout for all levels of software
                developers - from junior to senior developers with all range of
                skills.
            </p>

            <div
                id="main-slider"
                className=" h-[400px] mt-4 relative flex items-center text-center   "
            >
                <ChevronDownIcon
                    className="w-8 bg-amber-600 rounded-[100%] left-0 absolute opacity-[0.5] hover:opacity-[1] cursor-pointer ml-2 "
                    onClick={slideLeft}
                />

                <div
                    id="slider"
                    className="  "
                    data-aos="fade-up"
                    data-aos-duration="3000"
                >
                    {testi &&
                        testi.map((data) => (
                            <div className=" w-[278px] h-[280px] rounded-lg inline-block ml-[5px] mr-[5px] shadow-md dark:bg-gray-800 dark:border-gray-700 mt-5  ">
                                <TestimonialItem
                                    name={data.user_name}
                                    designation={data.tale_position}
                                    userImg={`${config.urlImage}/${data.tale_photo}`}
                                    rating={data.cure_rating}
                                    bootcamp={data.tale_bootcamp}
                                    testimonial={data.cure_review}
                                />
                            </div>
                        ))}
                </div>
                <ChevronUpIcon
                    className="w-8 bg-amber-600 rounded-[100%] right-0 absolute opacity-[0.5] hover:opacity-[1] cursor-pointer mr-2 "
                    onClick={slideRight}
                />
            </div>
            <div className="flex justify-end items-end justify-items-end w-full mt-6 mr-9  ">
                <Link to="/testimoni/viewall">
                    <button
                        type="button"
                        className=" text-blue-900 bg-blue-100 border border-transparent rounded-md hover:bg-green-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500 flex justify-center items-center px-4 py-2 "
                    >
                        View All
                        <ChevronRightIcon className="w-8 " />
                    </button>
                </Link>
            </div>
        </section>
    );
}

export default Testimonials;