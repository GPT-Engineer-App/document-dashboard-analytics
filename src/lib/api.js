export const fetchAnalyticsData = async () => {
  // Mock data for now
  return {
    monthlyInteractions: 55,
    totalInteractions: 100,
    aiTokensUsed: 189793,
    totalAiTokens: 200000,
    totalConversations: 0,
    avgMessagesPerChat: 0,
    avgSecondsPerChat: 0,
    topIntents: "Not Enough Data",
    understoodMessages: "Not Enough Data",
    userRetention: "Not Enough Data",
    totalConversationsGraph: [
      { time: "13:00", value: 5 },
      { time: "17:00", value: 10 },
      { time: "21:00", value: 20 },
      { time: "02:00", value: 5 },
      { time: "07:00", value: 10 },
      { time: "12:00", value: 15 },
    ],
    userRetentionGraph: [
      { interactions: 1, value: 180 },
      { interactions: 3, value: 135 },
      { interactions: 5, value: 90 },
      { interactions: 7, value: 45 },
      { interactions: 10, value: 0 },
    ],
    timeRetentionGraph: [
      { seconds: 19, value: 180 },
      { seconds: 39, value: 135 },
      { seconds: 60, value: 90 },
    ],
  };
};