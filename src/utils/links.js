import { IoBarChartSharp } from 'react-icons/io5';
import { MdQueryStats } from 'react-icons/md';
import { FaWpforms } from 'react-icons/fa';
import { ImProfile } from 'react-icons/im';

const links = [  
  { id: 1, text: 'STORIES', path: 'all-jobs', icon: <MdQueryStats /> },
  { id: 2, text: 'SCRIPT PAD', path: 'add-job', icon: <FaWpforms /> },
  { id: 3, text: 'AI SAYS...', path: 'profile', icon: <FaWpforms /> },
  { id: 4, text: 'PLANNING', path: 'profile', icon: <FaWpforms /> },
  { id: 5, text: 'ACCOUNT', path: 'profile', icon: <ImProfile /> },
  { id: 6, text: 'SETTINGS', path: 'profile', icon: <FaWpforms /> },
  { id: 7, text: 'SCRIPT STATS', path: '/', icon: <IoBarChartSharp /> }
];

export default links;
