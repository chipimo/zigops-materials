import { Card, Typography } from "packages/zigops-material-react/src";

const TABLE_HEAD = ["Name", "Job", "Employed", ""];

const TABLE_ROWS = [
  {
    name: "Moshi Musukwa",
    job: "Manager",
    date: "23/04/18",
  },
  {
    name: "Thomas Munguya",
    job: "Developer",
    date: "23/04/18",
  },
  {
    name: "Stella Mwanahamuntu",
    job: "Designer",
    date: "19/09/17",
  },
  {
    name: "Oyindamola Arowora",
    job: "Designer",
    date: "19/09/17",
  },
  {
    name: "Chileshe Tembo",
    job: "Graphic Designer",
    date: "19/09/17",
  },
  {
    name: "Friday Nyambe",
    job: "Data Engineer",
    date: "24/12/08",
  },
  {
    name: "Mulenga Sichangwa",
    job: "Project Manager",
    date: "04/10/21",
  },
];

export function TableWithStripedRows() {
  return (
    <Card className="h-full w-full overflow-scroll">
      <table className="w-full min-w-max table-auto text-left">
        <thead>
          <tr>
            {TABLE_HEAD.map((head) => (
              <th key={head} className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="font-normal leading-none opacity-70"
                >
                  {head}
                </Typography>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {TABLE_ROWS.map(({ name, job, date }, index) => (
            <tr key={name} className="even:bg-blue-gray-50/50">
              <td className="p-4">
                <Typography variant="small" color="blue-gray" className="font-normal">
                  {name}
                </Typography>
              </td>
              <td className="p-4">
                <Typography variant="small" color="blue-gray" className="font-normal">
                  {job}
                </Typography>
              </td>
              <td className="p-4">
                <Typography variant="small" color="blue-gray" className="font-normal">
                  {date}
                </Typography>
              </td>
              <td className="p-4">
                <Typography as="a" href="#" variant="small" color="blue" className="font-medium">
                  Edit
                </Typography>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Card>
  );
}
