import React from "react";

export default function ReviewCard() {
  return (
    <div>
      <p className="border border-gray-100 my-2"></p>
      <div className="flex items-center gap-5">
        <div>
          <div className="avatar">
            <div className="w-16 rounded-full shadow-lg shadow-gray-400 ring-offset-2">
              <img src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80" />
            </div>
          </div>
        </div>
        <div>
          <h2 className="font-medium mb-1.5">Shakil Ahmed</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam,
            repellat? Nobis reprehenderit veritatis, error illo repudiandae
            inventore, quisquam eveniet blanditiis nam perferendis facere
            necessitatibus. Consequuntur dolore sit in laboriosam sunt.
          </p>
        </div>
      </div>
    </div>
  );
}
