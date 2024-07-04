import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Index = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen space-y-4">
      <Card className="w-full max-w-md glow-on-hover glow-on-active">
        <CardHeader>
          <CardTitle>Welcome to the Dashboard</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-center">Your Blank Canvas</p>
          <p className="text-center">Chat with the agent to start making edits.</p>
        </CardContent>
      </Card>
      <Button variant="outline" className="glow-on-hover glow-on-active">
        Get Started
      </Button>
    </div>
  );
};

export default Index;
