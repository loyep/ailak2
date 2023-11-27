import { signIn } from "../../server/auth";
import { Button } from "@ailak/ui";

export function SignIn({
  provider,
  ...props
}: { provider?: string } & React.ComponentPropsWithRef<typeof Button>) {
  return (
    <form
      action={async () => {
        "use server";
        await signIn(provider, {
          callbackUrl: 'http://localhost:3000/',
        });
      }}
    >
      <Button {...props}>Sign In</Button>
    </form>
  );
}
