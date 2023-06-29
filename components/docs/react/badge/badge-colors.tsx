import { Badge, Button } from "packages/zigops-material-react/src";

export function BadgeColors() {
  return (
    <div className="flex items-center gap-4">
      <Badge color="red">
        <Button>Red</Button>
      </Badge>
      <Badge color="green">
        <Button>Green</Button>
      </Badge>
      <Badge color="amber">
        <Button>Amber</Button>
      </Badge>
      <Badge color="purple">
        <Button>Purple</Button>
      </Badge>
    </div>
  );
}
