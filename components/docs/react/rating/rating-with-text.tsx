import React from "react";
import { Rating, Typography } from "packages/zigops-material-react/src";

export function RatingWithText() {
  const [rated, setRated] = React.useState(4);

  return (
    <div className="flex items-center gap-2">
      <Rating value={4} onChange={(value) => setRated(value)} />
      <Typography color="blue-gray" className="font-medium">
        {rated}.0 Rated
      </Typography>
    </div>
  );
}
