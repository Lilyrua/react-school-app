import React from "react";


export default function Detail(props) {
  const { data: activity } = props;
  return (
    <div className="w-full bg-base-100 max-w-3xl mx-auto p-[2rem]">
      <figure className="w-full ">
        <img
          src={
            "http://localhost:1337" +
            activity.attributes.cover_image.data.attributes.url
          }
          className="w-full rounded-xl"
          alt="cover"
        />
      </figure>
      <div className="flex flex-col mt-5 gap-3">
        <div className="flex flex-col gap-2">
          <h2 className="card-title">{activity.attributes.name}</h2>
          <div className="break-all">{activity.attributes.detail}</div>
        </div>
        <a className="btn btn-primary" href={activity.attributes.link}>Register</a>
        <div onClick={() => props.onBack()} className="btn btn-primary">Back</div>
      </div>
    </div>
  );
}

