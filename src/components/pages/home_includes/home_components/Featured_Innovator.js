import React from 'react'

const getFullName = (innovator) => {
    const {name: {first, last}} = innovator;
    return `${first} ${last}`
}

export default function FeaturedInnovator({ prop }) {
    return (
        <div className="container my-5 p-lg-5">
            <div className="text-center mb-5">
                <span className="fs-1 border-warning border-2 border-bottom">
                    Featured Innovators
                </span>
            </div>
            <div className="row g-3">
            {
                prop.map((innovator, idx) => (
                        <div key={idx} className="col-md-4">
                            <div className="card card-shadow innovator-container">
                                <img src={innovator.picture.large} alt="pic" />
                                <div className="card-body">
                                    <div className="text-center">{getFullName(innovator)}</div>
                                    <p>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                                        Reprehenderit magni odio animi, modi repellat obcaecati doloremque optio eos sapiente minima 
                                        eius numquam aliquam laborum molestias excepturi ut ad repudiandae! Repellendus.
                                    </p>
                                </div>
                            </div>
                        </div>
                    )
                )
            }
            </div>
        </div>
    )
}
