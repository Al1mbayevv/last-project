/* eslint-disable no-unused-vars */
import { useState } from "react";
import Movie from "./product";
import Navbar from "./navbar";
import Product from "./product";

const Home = () => {
    const data = [
        {
            id: 1,
            imageUrl:
                "https://abbos-frontend.vercel.app/static/media/1.87f6c2f48f7e15ed845b.png",
            name: "IPhone",
            text: "$120",
        },
        {
            id: 2,
            imageUrl:
                "https://abbos-frontend.vercel.app/static/media/2.5f080d9e47bf46ca3fce.png",
            name: "Macbook Pro 2022 (M1)",
            text: "$1999",
        },
        {
            id: 3,
            imageUrl:
                "https://abbos-frontend.vercel.app/static/media/4.dce93278370eb9a94e56.png",
            name: "WLS Van Gogh Denim Jacket",
            text: "$228",
        },
        {
            id: 4,
            imageUrl:
                "https://abbos-frontend.vercel.app/static/media/5.a13c8fc38072a14d6633.png",
            name: "LED Light Strips",
            text: "$19.99",
        },
        {
            id: 5,
            imageUrl: "https://abbos-frontend.vercel.app/static/media/7.59c9a0eba54726d9fc95.webp",
            name: "AUTO SERVICE by GOLF WANG",
            text: "$120",
        },
        {
            id: 6,
            imageUrl:
                "https://abbos-frontend.vercel.app/static/media/8.8bd0ab9ccc0cf9fb335d.webp",
            name: "DON'T TRIP UNSTRACTURED HAT",
            text: "$40",
        },
    ]

    const [movies, setMovies] = useState(data);

    const onChange = () => {
        console.log("changet");
    };

    const onTextChange = (e) => {
        const text = e.target.value;
        const filteredMovies = data.filter((m) =>
            m.name.toLowerCase().includes(text.toLowerCase())
        );

        setMovies(filteredMovies);
    };


    return (
        <>
            <Navbar />
            <div className="container">

                <div className="products-container">
                    {movies.map((m) => (
                        <Movie
                            key={m.id}
                            title={m.name}
                            year={m.text}
                            imageUrl={m.imageUrl}
                        />
                    ))}
                </div>
            </div>
        </>
    );
};

export default Home