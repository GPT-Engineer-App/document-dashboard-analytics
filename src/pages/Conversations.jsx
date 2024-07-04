import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Badge } from "@/components/ui/badge";

const conversations = [
  {
    id: "GBHrLKswy_h3XcKOkDReTi7n6U",
    interactions: 2,
    lastInteraction: "Jun 11, 02:53 PM",
  },
  {
    id: "GBHrLKswy_Yflg...",
    interactions: 3,
    lastInteraction: "Jun 11, 02:51 PM",
  },
  // Add more conversations as needed
];

const Conversations = () => {
  const [selectedConversation, setSelectedConversation] = useState(null);

  return (
    <div className="flex h-full">
      <div className="w-1/3 border-r">
        <Card className="h-full glow-on-hover glow-on-active">
          <CardHeader>
            <CardTitle>Conversations</CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            <ScrollArea className="h-[calc(100vh-200px)]">
              {conversations.map((conversation) => (
                <div
                  key={conversation.id}
                  className={`p-4 cursor-pointer ${
                    selectedConversation?.id === conversation.id
                      ? "bg-muted"
                      : ""
                  }`}
                  onClick={() => setSelectedConversation(conversation)}
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <p>{conversation.id}</p>
                      <p className="text-sm text-muted-foreground">
                        {conversation.interactions} Interactions
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {conversation.lastInteraction}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </ScrollArea>
            <div className="p-4">
              <Button variant="outline" className="w-full glow-on-hover glow-on-active">
                Load More
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
      <div className="w-2/3 p-4">
        {selectedConversation ? (
          <Card className="h-full glow-on-hover glow-on-active">
            <CardHeader>
              <CardTitle>Chat with Elliot</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col h-full">
              <ScrollArea className="flex-1">
                {/* Chat history goes here */}
                <div className="space-y-4">
                  <div className="flex items-start space-x-2">
                    <div className="bg-muted p-2 rounded">Hej, jag är Elliot! 👋</div>
                  </div>
                  <div className="flex items-start space-x-2">
                    <div className="bg-muted p-2 rounded">Jag är här för att hjälpa dig och svara på dina frågor.</div>
                  </div>
                  <div className="flex items-start space-x-2">
                    <div className="bg-muted p-2 rounded">Vad kan jag hjälpa dig med idag? 😊</div>
                  </div>
                  {/* Add more chat messages as needed */}
                </div>
              </ScrollArea>
              <div className="border-t p-4">
                <Input placeholder="Message" className="glow-on-hover glow-on-active" />
              </div>
            </CardContent>
          </Card>
        ) : (
          <div className="flex items-center justify-center h-full">
            <p>Select a conversation to view details</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Conversations;