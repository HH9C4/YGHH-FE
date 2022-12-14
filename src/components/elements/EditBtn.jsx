import React from "react"
import { useNavigate, useParams } from "react-router-dom"

const EditBtn = () => {
  const navigate = useNavigate()
  const param = useParams()
  return (
    <button
      className="fixed bottom-[204px] right-[30px] bg-gradient-to-r from-bbpink to-bbgradientp shadow-[0_0_5px_0_rgba(174,174,174,1.0)] rounded-full w-[40px] h-[40px] active:animate-ping"
      onClick={() => navigate(`/write/${param.gu}`, { replace: false })}
    >
      <svg
        className="mx-auto"
        width="23"
        height="23"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M25.3333 26.6667H6.66668C6.31305 26.6667 5.97392 26.8072 5.72387 27.0572C5.47382 27.3073 5.33334 27.6464 5.33334 28C5.33334 28.3536 5.47382 28.6928 5.72387 28.9428C5.97392 29.1929 6.31305 29.3334 6.66668 29.3334H25.3333C25.687 29.3334 26.0261 29.1929 26.2762 28.9428C26.5262 28.6928 26.6667 28.3536 26.6667 28C26.6667 27.6464 26.5262 27.3073 26.2762 27.0572C26.0261 26.8072 25.687 26.6667 25.3333 26.6667Z"
          fill="white"
        />
        <path
          d="M6.66664 24H6.78664L12.3466 23.4933C12.9557 23.4327 13.5253 23.1643 13.96 22.7333L25.96 10.7333C26.4257 10.2413 26.6774 9.58468 26.6599 8.90738C26.6424 8.23009 26.3572 7.58735 25.8666 7.12L22.2133 3.46667C21.7365 3.0188 21.1117 2.76182 20.4577 2.74461C19.8038 2.7274 19.1663 2.95116 18.6666 3.37334L6.66664 15.3733C6.23566 15.808 5.96731 16.3776 5.90663 16.9867L5.3333 22.5467C5.31534 22.742 5.34068 22.9388 5.40752 23.1232C5.47435 23.3076 5.58104 23.4749 5.71997 23.6133C5.84456 23.7369 5.99231 23.8347 6.15476 23.901C6.31721 23.9674 6.49116 24.001 6.66664 24ZM20.36 5.33334L24 8.97334L21.3333 11.5733L17.76 8L20.36 5.33334ZM8.4933 17.2133L16 9.76L19.6 13.36L12.1333 20.8267L8.1333 21.2L8.4933 17.2133Z"
          fill="white"
        />
      </svg>
    </button>
  )
}

export default EditBtn
