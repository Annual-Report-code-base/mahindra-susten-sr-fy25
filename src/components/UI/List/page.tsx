import Image from 'next/image';
import Link from 'next/link';
import React, { FC } from 'react';

// 1. Define the props interface explicitly
interface ListProps {
  title: string;
  link: string[];
  bgImageSrc: string; // URL for the background image
  listItems: string[]; // Array of strings for the bullet points
  iconImageSrcs: string[]; // Array of URLs for the footer icons
}

// Define the component using the FC (Function Component) type
const   List: FC<ListProps> = ({
  title,
  link,
  bgImageSrc,
  listItems,
  iconImageSrcs = [] 
}) => {
  
  const BulletIcon: FC = () => (
    <span className='w-2 h-2 rounded-full  bg-[#005c33] mr-4 flex-shrink-0'></span>
  );

  return (
    <div className='marginal bg-gray-50 border-b border-r border-l rounded-b-2xl border-gray-300 text-[#58595b] text-md'>
      <h1 className='bg-gradient-to-r p-4 from-[#f6a537] to-[#65acac] w-fit text-4xl bg-clip-text text-transparent font-bold mb-2 pb-3'>
        {title}
      </h1>

      <div className='relative overflow-hidden'>
        <div className='absolute inset-0 z-0 opacity-40'>
  
        </div>

        {/* Content Container (List and Icons) */}
        <div className='relative z-10  flex flex-col lg:flex-row items-start lg:justify-between'>
          <ul className='space-y-4 px-6 text-xl font-medium text-black'>
            
            {/* Render Standard List Items */}
            {listItems.map((item, index) => (
              <li key={index} className='transition-transform duration-300 ease-in-out hover:translate-x-2 group'>
                <Link href={link[index] || '#'} className='flex items-center'>
                  <BulletIcon />
                  <span className='group-hover:text-[#005c33] transition-colors duration-300'>
                    {item}
                  </span>
                </Link>
              </li>
            ))}

            {/* Render Icons/Images as a final element (if icons are provided) */}
            {iconImageSrcs.length > 0 && (
              <li className='flex items-center'>
                {/* Adding ml-6 to visually align the icons with the text above them, 
                    since the bullet point is intentionally skipped here. */}
                <div className='flex space-x-2 lg:mt-0 ml-6'> 
                  {iconImageSrcs.map((src, index) => (
                    <div key={index} className='flex-shrink-0'>
                      {/* <Image 
                        src={src} 
                        alt={`Icon ${index + 1}`} 
                        width={100} 
                        height={100} 
                      /> */}
                    </div>
                  ))}
                </div>
              </li>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default List;