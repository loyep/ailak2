import { signIn } from "../../server/auth";
import { Button } from "@ailak/ui";
import { redirect } from "next/navigation";

export function SignIn({
  provider,
  ...props
}: { provider?: string } & React.ComponentPropsWithRef<typeof Button>) {
  return (
    <form
      action={async () => {
        "use server";
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        const url: string = await signIn(provider, { redirect: false });
        // TODO: fix in next-auth
        redirect(url.replace("signin", "api/auth/signin"));
      }}
    >
      <Button {...props}>Sign In</Button>
    </form>
  );
}
