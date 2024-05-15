import Link from "next/link";
import React from "react";

const PaginationButton = ({ direction, newPage, cat}) => {
  const arrowDirection =
    direction === "left" ? "chevron-left" : "chevron-right";

    if (newPage <= 0) {
        newPage = 1
    }

    if (newPage > 500) {
      newPage = 500
    }

  return (
    <Link
      href={`/${cat}/${newPage}`}
      style={{
        backgroundColor: "#007bff",
        color: "#fff",
        border: "none",
        borderRadius: "4px",
        padding: "8px 12px",
        cursor: "pointer",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#FFFFFF"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={`feather feather-${arrowDirection}`}
      >
        <path d={direction === "left" ? "M15 18l-6-6 6-6" : "M9 18l6-6-6-6"} />
      </svg>
    </Link>
  );
};

export default PaginationButton;
