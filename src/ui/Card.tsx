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
          type={type}
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
  type,
  img,
  imgAlt,
  name,
  sss,
  philhealth,
  firstHalf,
  secondHalf,
}: CardTypes) {
  return (
    <div className="flex w-full gap-5 border-2 p-5">
      {' '}
      {/* Main card container */}
      <div className="profile flex gap-2 border-2 p-3 text-center">
        <div className="picture-name">
          <img className="aspect-square w-30 border-2" src={img} alt={imgAlt} />
          <h2>{name}</h2>
        </div>
        <div className="gov-details text-left">
          <h2 className="font-bold">SSS</h2>
          <h3 className="ml-3">{sss}</h3>
          <h2 className="font-bold">Philhealth</h2>
          <h3 className="ml-3">{philhealth}</h3>
        </div>
      </div>
      {/* { RD: 1, RH: 2, 'RD AND RH': 3 } */}
      <div className="duty-summary flex flex-col">
        <h2 className="mt-auto">Second Half</h2>
        <table className="first-half border-b-1">
          <thead>
            <tr>
              <th className="border-1 border-r-0 border-b-0 p-1">RD</th>
              <th className="border-1 border-r-0 border-b-0 p-1">RH</th>
              <th className="border-1 border-b-0 p-1">RD & RH</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border-1 border-r-0 border-b-0 p-1">
                {firstHalf?.RD}
              </td>
              <td className="border-1 border-r-0 border-b-0 p-1">
                {firstHalf?.RH}
              </td>
              <td className="border-1 border-b-0 p-1">
                {firstHalf?.['RD AND RH']}
              </td>
            </tr>
          </tbody>
        </table>
        <h2 className="mt-auto">Second Half</h2>
        <table className="second-half mt-auto border-b-1">
          <thead>
            <tr>
              <th className="border-1 border-r-0 border-b-0 p-1">RD</th>
              <th className="border-1 border-r-0 border-b-0 p-1">RH</th>
              <th className="border-1 border-b-0 p-1">RD & RH</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border-1 border-r-0 border-b-0 p-1">
                {firstHalf?.RD}
              </td>
              <td className="border-1 border-r-0 border-b-0 p-1">
                {firstHalf?.RH}
              </td>
              <td className="border-1 border-b-0 p-1">
                {firstHalf?.['RD AND RH']}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="2nd-half border-2"></div>
      <div className="summary border-2"></div>
    </div>
  );
}
