import React from "react";

const About = () => {
  return (
    <div className="bg-white flex flex-col gap-y-3">
      <img
        src="/about_pic.png"
        alt="grand opening pic"
        className="h-1/5 w-full object-cover pb-20"
      />
      <div className="px-10 pb-10 text-left animate-pulse">
        <h1 className="pb-8 text-3xl font-bold">Our Story</h1>
        <p className="text-base leading relaxed">
          Founder, Jonathan Li, shares a passion for board games, boba, and
          delicious food, so he combined them all to become Sip & Play, Park
          Slope’s first board game cafe. It is a straightforward concept, come
          in with your friends and family to play any board game from our
          library of 300+ games! We hope when you visit, you also enjoy our
          coffee, espresso, boba, sandwiches, and snacks!
        </p>
      </div>
    </div>
  );
};

export default About;
