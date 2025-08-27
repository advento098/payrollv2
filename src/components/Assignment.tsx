import clsx from 'clsx';
import { useState } from 'react';

export default function Assignment() {
  const title: string = 'Angeles';
  const [test, setTest] = useState<boolean>(false);
  const [selector, setSelector] = useState<boolean>(false);

  const handleSelectorClick = () => {
    setSelector((prev) => !prev);
  };

  const variants = {
    tableHeader: 'border-2 border-r-0 border-b-0 px-2 py-1 text-center',
    tableData: 'border-2 border-r-0 min-w-40 border-b-0 px-2 py-1 text-center',
    nullDataHeader: 'border-2 border-r-0 min-w-40 border-b-0 px-2 py-1',
  } as const;

  return (
    <main className="flex w-[80%] flex-col items-center border-2">
      <h1>{title}</h1>
      {/* For table dimension */}
      <div className="min-w-[20%]">
        {/* First half of the month */}
        <div className="border-b-2">
          <h2 className="text-center">August</h2>
          <table>
            <tr>
              <td className={variants.tableHeader}>Date type</td>
              <td className={variants.tableHeader}>Date</td>
              {test ? (
                <td className={clsx(variants.tableData, 'border-r-2')}>Day</td>
              ) : (
                <td className={clsx(variants.nullDataHeader, 'border-r-2')}>
                  <div className="relative flex justify-center">
                    <button
                      className="flex cursor-pointer"
                      onClick={handleSelectorClick}
                    >
                      <span className="material-symbols-outlined !text-[25px]">
                        arrow_drop_down_circle
                      </span>
                    </button>

                    {selector && <div className="absolute">Some Posts</div>}
                  </div>
                </td>
              )}
            </tr>
          </table>
        </div>
      </div>
    </main>
  );
}
