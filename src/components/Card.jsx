import React from "react";
import { Link } from "react-router-dom";

export default function Card({name,followers,image,url}){
    return(
        <>
            <div className="relative h-[400px] w-[300px] rounded-lg m-4 hover:bg-white-100 hover:scale-105 transition duration-300">
                <img
                    src={image}
                    alt="AirMax Pro"
                    className="z-0 h-full w-full rounded-md object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-left">
                    <h1 className="text-lg font-semibold text-white">{name}</h1>
                    <p className="mt-2 text-sm text-gray-300">
                    Number of followers: {followers}
                    </p>
                    <Link to={url}>
                        <button className="mt-2 inline-flex cursor-pointer items-center text-sm font-semibold text-white">
                        View Profile →
                        </button>
                    </Link>
                </div>
            </div>
        </>
    )
}