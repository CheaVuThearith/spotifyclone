import React from "react";

type Props = {};

const AuthorAndDescription = (props: Props) => {
  return (
    <div className="flex flex-col">
      <p className="text-sm">Title</p>
      <p className="text-xs opacity-70">Author</p>
    </div>
  );
};

export default AuthorAndDescription;
