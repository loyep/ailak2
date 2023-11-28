import { signIn } from "../../server/auth";
import { Button } from "@ailak/ui";
import { redirect } from "next/navigation";

export function SignIn({
  provider,
  ...props
}: { provider?: Parameters<typeof signIn>[0] } & React.ComponentPropsWithRef<
  typeof Button
>) {
  return (
    <form
      action={async () => {
        "use server";
        const url: string = await signIn(provider, { redirect: false });
        // TODO: fix in next-auth
        redirect(url);
      }}
    >
      <Button {...props}>Sign In</Button>
    </form>
  );
}
