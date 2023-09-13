"use client";
import React, { ReactNode, useState } from "react";
import { Switch } from "@headlessui/react";
// https://headlessui.com/react/switch
interface Props {
  id: number;
  toggled: boolean;
}
const Switch: React.FC<Props> = ({ ...Props }): ReactNode => {
  const [loading, setLoading] = useState<boolean>(false);
  const [toggle, setToggle] = useState<boolean>(Props.toggled);

  function changeToggle() {
    setLoading(true);
    setTimeout(() => {
      console.log(Props.id, " and ", toggle);
      if (1 === 3) {
      } else {
        setToggle(Props.toggled);
      }
      setLoading(false);
    }, 5000);
  }
  return (
    <Switch
      disabled={loading}
      onChange={() => {
        setToggle(!toggle);
        changeToggle(!toggle);
      }}
      className={`${
        toggle ? "bg-orange-300" : "bg-gray-200"
      } relative inline-flex h-6 w-11 items-center rounded-full`}
    >
      <span className="sr-only"></span>
      <span
        className={`${
          toggle ? "translate-x-6" : "translate-x-1"
        } inline-block h-4 w-4 transform rounded-full bg-white transition`}
      />
    </Switch>
  );
};
export default Switch;
