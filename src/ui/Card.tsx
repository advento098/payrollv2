import imgPlaceHolder from '/person_image_placeholder.svg';

type CardTypes = {
  type?: 'simple';
  //   Profile section
  img?: string;
  imgAlt?: string;
  name?: string;
  sss?: string;
  philhealth?: string;
  //   Duty summary
  firstHalf?: Record<string, number>;
  secondHalf?: Record<string, number>;
};

export default function Card({
  type = 'simple',
  img = imgPlaceHolder,
  imgAlt = 'placeholder',
  name = 'John Doe',
  sss = '123-123-123',
  philhealth = '123-123-123',
  firstHalf = { RD: 1, RH: 2, 'RD AND RH': 3 },
  secondHalf = { RD: 1, RH: 2, 'RD AND RH': 3 },
}: CardTypes) {
  switch (type) {
    default:
      return (
        <DashboardSimpleCard
          img={img}
          imgAlt={imgAlt}
          name={name}
          sss={sss}
          philhealth={philhealth}
          firstHalf={firstHalf}
          secondHalf={secondHalf}
        />
      );
  }
}

function DashboardSimpleCard({
  img,
  imgAlt,
  name,
  sss,
  philhealth,
  firstHalf,
  secondHalf,
}: CardTypes) {
  return (
    <div className="bg-background grid grid-cols-[1fr_1fr_auto_auto] gap-6 border-2 border-gray-300 p-6 text-[#111827]">
      {/* Profile */}
      <div className="rounded-xl border-2 border-gray-300 bg-white p-4 text-center shadow-md">
        <img
          className="mx-auto aspect-square w-24 rounded-full border-2 border-[#223e6d]"
          src={img}
          alt={imgAlt}
        />
        <h2 className="mt-2 text-lg font-semibold text-[#223e6d]">{name}</h2>

        <div className="mt-3 space-y-2 text-left text-sm">
          <p>
            <span className="font-bold text-[#17bebb]">SSS:</span> {sss}
          </p>
          <p>
            <span className="font-bold text-[#17bebb]">Philhealth:</span>{' '}
            {philhealth}
          </p>
        </div>
      </div>

      {/* Duty Summary */}
      <div className="flex flex-col gap-4">
        <div>
          <h2 className="mb-1 font-semibold text-[#223e6d]">First Half</h2>
          <table className="w-full border border-gray-300 text-center text-sm">
            <thead className="bg-[#223e6d] text-white">
              <tr>
                <th className="border border-gray-300 p-1">RD</th>
                <th className="border border-gray-300 p-1">RH</th>
                <th className="border border-gray-300 p-1">RD & RH</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 p-1">{firstHalf?.RD}</td>
                <td className="border border-gray-300 p-1">{firstHalf?.RH}</td>
                <td className="border border-gray-300 p-1">
                  {firstHalf?.['RD AND RH']}
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div>
          <h2 className="mb-1 font-semibold text-[#223e6d]">Second Half</h2>
          <table className="w-full border border-gray-300 text-center text-sm">
            <thead className="bg-[#223e6d] text-white">
              <tr>
                <th className="border border-gray-300 p-1">RD</th>
                <th className="border border-gray-300 p-1">RH</th>
                <th className="border border-gray-300 p-1">RD & RH</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 p-1">{secondHalf?.RD}</td>
                <td className="border border-gray-300 p-1">{secondHalf?.RH}</td>
                <td className="border border-gray-300 p-1">
                  {secondHalf?.['RD AND RH']}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Summary */}
      <div className="border-l-2 border-gray-300 pl-4">
        <table className="w-44 text-sm">
          <thead>
            <tr>
              <th
                colSpan={2}
                className="pb-1 text-xs font-bold text-[#223e6d] uppercase"
              >
                Total Duty
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="pl-2">Day:</td>
              <td className="text-right">#</td>
            </tr>
            <tr>
              <td className="pl-2">Night:</td>
              <td className="text-right">#</td>
            </tr>
          </tbody>
        </table>

        <table className="mt-4 w-44 text-sm">
          <thead>
            <tr>
              <th
                colSpan={2}
                className="pb-1 text-xs font-bold text-[#223e6d] uppercase"
              >
                Gross Earnings
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="pl-2">1st Half:</td>
              <td className="text-right">#</td>
            </tr>
            <tr>
              <td className="pl-2">2nd Half:</td>
              <td className="text-right">#</td>
            </tr>
          </tbody>
        </table>

        <div className="mt-2 font-semibold text-[#223e6d]">
          Total: <span className="float-right text-[#111827]">#</span>
        </div>
      </div>

      {/* Deductions */}
      <div className="border-l-2 border-gray-300 pl-4">
        <table className="w-44 text-sm">
          <thead>
            <tr>
              <th
                colSpan={2}
                className="pb-1 text-xs font-bold text-[#223e6d] uppercase"
              >
                Deductions
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>SSS:</td>
              <td className="text-right">#</td>
            </tr>
            <tr>
              <td>Philhealth:</td>
              <td className="text-right">#</td>
            </tr>
            <tr>
              <td>Pag-ibig:</td>
              <td className="text-right">#</td>
            </tr>
            <tr>
              <td>Tax:</td>
              <td className="text-right">#</td>
            </tr>
            <tr className="border-t border-gray-400">
              <td>Deductions:</td>
              <td className="text-right">#</td>
            </tr>
            <tr>
              <td>Gross:</td>
              <td className="text-right">#</td>
            </tr>
            <tr>
              <td>Additionals:</td>
              <td className="text-right">#</td>
            </tr>
          </tbody>
          <tfoot>
            <tr className="border-t border-gray-400 font-bold">
              <td>Net Pay:</td>
              <td className="text-right text-[#efc009]">#</td>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
}
