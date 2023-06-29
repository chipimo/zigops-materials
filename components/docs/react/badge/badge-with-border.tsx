import { Badge, Button } from "packages/zigops-material-react/src";

export function BadgeWithBorder() {
  return (
    <Badge content="5" withBorder>
      <Button>Notifications</Button>
    </Badge>
  );
}
