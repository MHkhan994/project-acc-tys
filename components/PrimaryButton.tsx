'use client'
import Link from 'next/link';
import React from 'react';

type Button = {
    text: string;
    buttonStyle: string;
    handleClick?: () => React.MouseEvent<HTMLButtonElement>;
}

const PrimaryButton = ({ text, buttonStyle, handleClick }: Button) => {
    return (
        <button
            className={`${buttonStyle}`}
            onClick={handleClick}
        >
            {text}
        </button>
    );
};

export default PrimaryButton;