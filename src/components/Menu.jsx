import React from 'react'
import { FaRegComment } from "react-icons/fa";
import HeaderBox from './HeaderBox';
import { BsArrowUpShort, BsArrowDownShort } from "react-icons/bs";
const Menu = () => {
 
  return (
    <div className="md:flex justify-evenly space-y-3 md:space-y-0 md:px-3 gap-5 ">
      <HeaderBox
        icon={<FaRegComment size={30} color="orange" />}
        title="Earning"
        heading="$195"
        value="20%"
        bgColor="#FFC2C7"
        textcolor="#02894B"
        subheading={` this month `}
        subicon={<BsArrowUpShort size={15} />}
      />
      <HeaderBox
        icon={<FaRegComment size={30} color="Brown" />}
        title="Earning"
        heading="$195"
        value="7%"
        textcolor="#BA0F30"
        bgColor="#F27900"
        subheading={` this month `}
        subicon={<BsArrowDownShort size={15} />}
      />
      <HeaderBox
        icon={<FaRegComment size={30} color="blue" />}
        title="Earning"
        heading="$195"
        bgColor="#75E6DA"
        textcolor="#BA0F30"
        value="10%"
        subheading={` this month `}
        subicon={<BsArrowDownShort size={15} color="yellow" />}
      />
      <HeaderBox
        icon={<FaRegComment size={30} color="MediumSeaGreen" />}
        title="Earning"
        heading="$195"
        value="18%"
        textcolor="#02894B"
        bgColor="#75E6DA"
        subheading={` this month `}
        subicon={<BsArrowUpShort size={15} />}
      />
    </div>
  );
}

export default Menu