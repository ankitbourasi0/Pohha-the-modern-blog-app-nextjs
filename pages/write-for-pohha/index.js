import React from "react";

const WriteForPohha = () => {
  return (
    <div>
      <h1 className="text-5xl font-semibold">Write for Pohha</h1>
      <p>
        Want to create content on Pohha, Get your content published on Pohha!
      </p>
      <div>
        <div></div>
        <div>
          <form action="submit">
            <label htmlFor="firstname">First name</label>
            <input type="text" id="firstname" placeholder="First Name" />
            <label htmlFor="lastname">Last name</label>
            <input type="text" id="lastname" placeholder="Last Name" />

            <label htmlFor="email">Email</label>
            <input type="email" id="email" placeholder="Enter your email" />

            <label htmlFor="twitter">Twitter Handle (optional)</label>
            <input type="text" id="twitter" placeholder="" />

            <label htmlFor="website">Website URL (optional)</label>
            <input type="text" id="website" placeholder="" />

            <label htmlFor="pitch">Your proposed pitch</label>
            <textarea
              type="text"
              id="pitch"
              placeholder="In about 5-7 lines describes what you want to write about,
                    how it would be relevant, and what format you would like to write in (blog, guide, tutorial,code example, etc.) "
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default WriteForPohha;
