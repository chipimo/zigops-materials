import { Slider } from "packages/zigops-material-react/src";

export function DefaultSlider() {
  return (
    <div className="w-96">
      <Slider defaultValue={50} />
    </div>
  );
}
