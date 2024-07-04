import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { useQuery } from "@tanstack/react-query";
import { fetchAnalyticsData } from "@/lib/api";

const Analytics = () => {
  const { data, error, isLoading } = useQuery({
    queryKey: ["analyticsData"],
    queryFn: fetchAnalyticsData,
  });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading data</div>;

  return (
    <div className="p-4 space-y-4">
      <Card className="glow-on-hover glow-on-active">
        <CardHeader>
          <CardTitle>Agent Analytics</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <span>Monthly interactions</span>
              <span>{data.monthlyInteractions} out of {data.totalInteractions} interactions /mo</span>
            </div>
            <Progress value={(data.monthlyInteractions / data.totalInteractions) * 100} />
          </div>
          <div className="space-y-2 mt-4">
            <div className="flex justify-between items-center">
              <span>AI Tokens Usage</span>
              <span>{data.aiTokensUsed} out of {data.totalAiTokens} AI Tokens /mo</span>
            </div>
            <Progress value={(data.aiTokensUsed / data.totalAiTokens) * 100} />
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <Card className="glow-on-hover glow-on-active">
          <CardContent>
            <div className="flex flex-col items-center">
              <span className="text-2xl">{data.totalInteractions}</span>
              <span>Total Interactions</span>
            </div>
          </CardContent>
        </Card>
        <Card className="glow-on-hover glow-on-active">
          <CardContent>
            <div className="flex flex-col items-center">
              <span className="text-2xl">{data.totalConversations}</span>
              <span>Total Conversations</span>
            </div>
          </CardContent>
        </Card>
        <Card className="glow-on-hover glow-on-active">
          <CardContent>
            <div className="flex flex-col items-center">
              <span className="text-2xl">{data.avgMessagesPerChat}</span>
              <span>Avg Messages/Chat</span>
            </div>
          </CardContent>
        </Card>
        <Card className="glow-on-hover glow-on-active">
          <CardContent>
            <div className="flex flex-col items-center">
              <span className="text-2xl">{data.avgSecondsPerChat}</span>
              <span>Avg Seconds/Chat</span>
            </div>
          </CardContent>
        </Card>
        <Card className="glow-on-hover glow-on-active">
          <CardContent>
            <div className="flex flex-col items-center">
              <span className="text-2xl">{data.topIntents}</span>
              <span>Top Intents</span>
            </div>
          </CardContent>
        </Card>
        <Card className="glow-on-hover glow-on-active">
          <CardContent>
            <div className="flex flex-col items-center">
              <span className="text-2xl">{data.understoodMessages}</span>
              <span>Understood Messages</span>
            </div>
          </CardContent>
        </Card>
        <Card className="glow-on-hover glow-on-active">
          <CardContent>
            <div className="flex flex-col items-center">
              <span className="text-2xl">{data.userRetention}</span>
              <span>User Retention</span>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Analytics;