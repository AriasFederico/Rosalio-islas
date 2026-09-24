import { BiBone } from 'react-icons/bi';
import {
  BsArrowDownShort,
  BsArrowUpShort,
  BsCircle,
  BsClock,
  BsFacebook,
  BsInstagram,
  BsPhone,
  BsPin,
  BsPlusLg,
  BsWhatsapp,
} from 'react-icons/bs';

import { FcGoogle } from 'react-icons/fc';
import { LuActivity, LuBrain, LuHeart, LuSmile, LuUser } from 'react-icons/lu';

export const iconMap = {
  icon: BsCircle, // delete
  message: BsWhatsapp,
  google: FcGoogle,

  arrowDown: BsArrowDownShort,
  arrowUp: BsArrowUpShort,
  arrowFaq: BsPlusLg,

  clock: BsClock,
  location: BsPin,
  tel: BsPhone,

  instagram: BsInstagram,
  facebook: BsFacebook,

  // services:
  brain: LuBrain,
  activity: LuActivity,
  heart: LuHeart,
  user: LuUser,
  bone: BiBone,
  smile: LuSmile,
};
