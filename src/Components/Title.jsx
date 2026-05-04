import React from 'react'

const Title = ({text}) => {
  return (
    <div className="flex justify-center">
      
      <h1 className="font-extrabold text-2xl md:text-4xl font-integral text-center">
        {text}
      </h1>
    </div>
  );
}

export default Title
