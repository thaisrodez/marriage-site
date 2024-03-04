import { useState } from 'react';

type DropDownProps = {
  title: string;
  text: string;
}

export const DropDown = ({ title, text }: DropDownProps) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <article className="w-full lg:w-1/2">
      <div onClick={() => setIsOpen(!isOpen)} className="flex justify-between font-medium text-green">
        <h4>{title}</h4>
        {isOpen ? (
          <span>-</span>
        ) : (
          <span>+</span>
        )}
      </div>
      {isOpen && (
        <div className="mt-2">
          <p>{text}</p>
        </div>
      )}
    </article>
  );
}
