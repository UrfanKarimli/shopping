"use client";

import Image from "next/image";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import profile from "../../../public/profile.jpg";
import { useEffect, useRef, useState, useCallback } from "react";
import classNames from "classnames";
import LocaleSwitcher from "../local-switcher";

function Profile() {
  const [openP, setOpenP] = useState(false);
  const profileRef = useRef<HTMLDivElement>(null);

  const handleClickOutside = useCallback((event: MouseEvent) => {
    if (
      profileRef.current &&
      !profileRef.current.contains(event.target as Node)
    ) {
      setOpenP(false);
    }
  }, []);

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [handleClickOutside]);

  return (
    <div
      ref={profileRef}
      onClick={() => setOpenP((prev) => !prev)}
      className="flex items-center gap-3 relative cursor-pointer"
      aria-expanded={openP}
    >
      <Image
        className="rounded-full object-center object-cover"
        src={profile}
        width={36}
        height={36}
        alt="Profile picture"
      />
      <div className="flex flex-col items-center">
        <span className="text-sm font-bold text-[#404040] dark:text-text-dark truncate">
          Ürfan Kərimli
        </span>
      </div>
      <div className="closeprofile border border-[#5C5C5C] dark:border-[#cccccc] rounded-full h-5 w-5 flex items-center justify-center">
        <MdOutlineKeyboardArrowDown className="text-[#565656] dark:text-text-dark h-3 w-3" />
      </div>
      {openP && (
        <div
          className={classNames(
            "dropdown absolute -right-5 top-[53px] w-[200px] z-40 overflow-hidden rounded-[8px] bg-white border shadow-lg dark:bg-gray-800"
          )}
          onClick={(e) => e.stopPropagation()} // Tıklama olayını durduruyoruz
        >
          <ul>
            <li >
              <button
                className="flex items-center gap-2 pl-5 py-2 hover:bg-gray-100  w-full text-left text-sm text-[#404040] dark:text-gray-200 font-semibold "
                onClick={() => {
                  console.log("Hesabı idarə et seçildi.");
                }}
              >
                Hesabı idarə et
              </button>
            </li>
            <li >
              <LocaleSwitcher />
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default Profile;
