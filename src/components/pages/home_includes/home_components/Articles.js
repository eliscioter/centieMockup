import React from 'react'

export default function Articles({ prop }) {
    
    return (
    <div className="container my-5">
        <div className="text-center mb-5">
            <span className="fs-1 border-warning border-2 border-bottom">
                Articles
            </span>
        </div>
        <div className="articles p-lg-5 border rounded">
            {
                prop.map((img, id) =>
                    <div key={id} className="p-3">
                        <img src={img.download_url} alt={img.author} className="img-fluid" />
                    </div>
                )
            }
        </div>
    </div>
    )
}
