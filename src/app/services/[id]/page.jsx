import React from 'react';

export default function ServiceDetailPage({ params }) {
    const data = [
        {
            id: "SP001",
            name: "SwiftClean Services",
            img: "https://img.freepik.com/premium-photo/male-hand-touching-service-concept_220873-7591.jpg?semt=ais_hybrid",
            description: "Professional cleaning services for homes and offices. Fast, reliable, and eco-friendly solutions tailored to your needs."
        },
        {
            id: "SP002",
            name: "FixItPro",
            img: "https://img.freepik.com/premium-photo/male-hand-touching-service-concept_220873-7591.jpg?semt=ais_hybrid",
            description: "Expert handyman services for all your repair needs. From plumbing to electrical, we've got you covered!"
        },
        {
            id: "SP003",
            name: "TechBuddy",
            img: "https://img.freepik.com/premium-photo/male-hand-touching-service-concept_220873-7591.jpg?semt=ais_hybrid",
            description: "On-demand tech support for your devices. Quick troubleshooting and maintenance services at your convenience."
        },
        {
            id: "SP004",
            name: "GreenScape Designs",
            img: "https://img.freepik.com/premium-photo/male-hand-touching-service-concept_220873-7591.jpg?semt=ais_hybrid",
            description: "Transform your outdoor spaces with our innovative landscaping services. Eco-conscious designs to fit every budget."
        },
        {
            id: "SP005",
            name: "GourmetOnCall",
            img: "https://img.freepik.com/premium-photo/male-hand-touching-service-concept_220873-7591.jpg?semt=ais_hybrid",
            description: "Experience fine dining at home with our personal chef services. Customized menus for all occasions."
        }
    ]
    const id = params?.id;
    const singleData = data.find((d) => d.id === id);
    if (singleData) {
        return (
            <div>
                <h1>ServiceDetailPage</h1>
                <p>ID: {id}</p>
                <p>Name:{singleData.name}</p>
                <img src={singleData.img} alt="img" />
            </div>
        );
    }
    else {
        return (
            <>
                <p>Not Found Service</p></>
        )
    }

};