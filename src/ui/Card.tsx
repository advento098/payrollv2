type CardTypes = {
  type: 'simple';
  //   Profile section
  img: string;
  name: string;
  sss: string;
  philhealth: string;
  //   Duty summary
};

export default function Card({ type = 'simple' }: CardTypes) {
  switch (type) {
    default:
      return <DashboardSimpleCard />;
  }
}

function DashboardSimpleCard() {
  return (
    <div className="overflow-y-hidden">
      {/* Main card container */}
      <div className="flex w-full border-2 border-red-700">
        <div className="profile">
          <img src="" alt="" />
        </div>
        <div className="1st-half"></div>
        <div className="2nd-half"></div>
        <div className="summary"></div>
      </div>
    </div>
  );
}
