import Logo from "@/components/logo";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useStore } from "@/store/store";
import React from "react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";

const GoogleOAuth = () => {
  const navigate = useNavigate();

  const [params] = useSearchParams();
  const { setAccessToken } = useStore();

  const accessToken = params.get("access_token");
  const currentWorkspace = params.get("current_workspace");

  React.useEffect(() => {
    console.log(accessToken, currentWorkspace);
    if (accessToken) {
      console.log("comming 0");
      setAccessToken(accessToken);
      if (currentWorkspace) {
        console.log("comming 1");
        navigate(`/workspace/${currentWorkspace}`);
      } else {
        console.log("comming 2");
        navigate(`/`);
      }
    }
  }, [accessToken, currentWorkspace, navigate, setAccessToken]);

  return (
    <div className="flex min-h-svh flex-col items-center justify-center gap-6 bg-muted p-6 md:p-10">
      <div className="flex w-full max-w-sm flex-col gap-6">
        <Link
          to="/"
          className="flex items-center gap-2 self-center font-bold text-lg text-primary dark:text-primary-foreground"
        >
          <Logo />
          Task Pilot
        </Link>
        <div className="flex flex-col gap-6"></div>
      </div>
      <Card>
        <CardContent>
          <div style={{ textAlign: "center", marginTop: "50px" }}>
            <h1>Authentication Failed</h1>
            <p>We couldn't sign you in with Google. Please try again.</p>

            <Button onClick={() => navigate("/")} style={{ marginTop: "20px" }}>
              Back to Login
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default GoogleOAuth;
