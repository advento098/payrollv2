import { SettingsButton } from '../../ui/Button';

export default function SettingsPage() {
  return (
    <main className="bg-off-white flex min-h-screen w-[80%] justify-center px-6 py-5">
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {/* Add Holiday */}
        <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-md">
          <h2 className="text-secondary mb-4 text-lg font-semibold">
            📅 Add a Holiday
          </h2>
          <form className="flex flex-col gap-4">
            <select className="focus:ring-primary rounded-md border px-3 py-2 focus:ring-2">
              <option>Regular Day</option>
              <option>Special Holiday</option>
            </select>
            <input
              type="date"
              className="focus:ring-primary rounded-md border px-3 py-2 focus:ring-2"
            />
            <SettingsButton>Submit</SettingsButton>
          </form>
        </div>

        {/* Add Additional */}
        <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-md">
          <h2 className="text-secondary mb-4 text-lg font-semibold">
            ➕ Add Additional to Employee
          </h2>
          <form className="flex flex-col gap-4">
            <select className="focus:ring-primary rounded-md border px-3 py-2 focus:ring-2">
              <option>Select employee</option>
              <option>Juan Dela Cruz</option>
            </select>
            <input
              type="number"
              placeholder="Enter additional amount"
              className="focus:ring-primary rounded-md border px-3 py-2 focus:ring-2"
            />
            <SettingsButton>Submit</SettingsButton>
          </form>
        </div>

        {/* Add Post */}
        <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-md">
          <h2 className="text-secondary mb-4 text-lg font-semibold">
            🏢 Add a Post
          </h2>
          <form className="flex flex-col gap-4">
            <input
              type="text"
              placeholder="Enter post name"
              className="focus:ring-primary rounded-md border px-3 py-2 focus:ring-2"
            />
            <SettingsButton> Submit </SettingsButton>
          </form>
        </div>

        {/* Add Employee */}
        <div className="col-span-3 flex flex-col rounded-xl border border-gray-200 bg-white p-6 shadow-md">
          <h2 className="text-secondary mb-4 text-lg font-semibold">
            👮 Add a Security Employee
          </h2>
          <form className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <input
              type="text"
              placeholder="Enter name"
              className="rounded-md border px-3 py-2"
            />
            <input
              type="text"
              placeholder="Enter position"
              className="rounded-md border px-3 py-2"
            />
            <input
              type="date"
              placeholder="SG License Expiration"
              title="SG License Expiration"
              className="rounded-md border px-3 py-2"
            />
            <input
              type="text"
              placeholder="PhilHealth number"
              className="rounded-md border px-3 py-2"
            />
            <input
              type="text"
              placeholder="PAG IBIG number"
              className="rounded-md border px-3 py-2"
            />
            <input
              type="text"
              placeholder="TIN"
              className="rounded-md border px-3 py-2"
            />
            <input
              type="text"
              placeholder="SSS number"
              className="rounded-md border px-3 py-2"
            />
          </form>
          <SettingsButton className="mx-auto mt-5 w-1/3">Submit</SettingsButton>
        </div>
      </div>
    </main>
  );
}
