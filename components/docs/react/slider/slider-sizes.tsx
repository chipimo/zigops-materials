import { Slider } from "packages/zigops-material-react/src";

export function SliderSizes() {
  return (
    <div className="flex w-96 flex-col gap-8">
      <Slider size="sm" defaultValue={50} />
      <Slider size="md" defaultValue={50} />
      <Slider size="lg" defaultValue={50} />
    </div>
  );
}
