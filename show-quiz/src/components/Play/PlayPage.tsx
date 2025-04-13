import { Box } from "@mui/material";
import { useEffect, useState } from "react";
import * as signalR from "@microsoft/signalr";
import { protectedResources } from "../../config/apiConfig";

export const PlayPage = () => {
  const [message, setMessage] = useState("");
  const [receivedMessages, setReceivedMessages] = useState<any>([]);
  const [connection, setConnection] = useState<signalR.HubConnection | null>(
    null
  );

  useEffect(() => {
    const newConnection = new signalR.HubConnectionBuilder()
      .withUrl(protectedResources.oaprojectsApi.chatHubEndpoint) // Replace with your SignalR hub URL
      .configureLogging(signalR.LogLevel.Information)
      .build();

    setConnection(newConnection);
  }, []);

  useEffect(() => {
    if (connection) {
      connection
        .start()
        .then(() => console.log("Connected to SignalR hub"))
        .catch((err) => console.error("Error connecting to hub: ", err));

      connection.on("ReceiveMessage", (user: string, message: string) => {
        setReceivedMessages((prevMessages: any) => [
          ...prevMessages,
          { user, message },
        ]);
      });

      return () => {
        connection.off("ReceiveMessage");
        connection.stop();
      };
    }
  }, [connection]);

  const sendMessage = async () => {
    try {
      if (!connection) return;
      await connection.invoke("SendMessage", "User", message);
      setMessage("");
    } catch (err) {
      console.error("Error sending message: ", err);
    }
  };

  return (
    <Box
      sx={{
        width: "90vw",
      }}
    >
      <Box
        sx={{
          display: "grid",
          columnGap: "10px",
          rowGap: "10px",
          gridTemplateColumns: {
            xs: "1fr",
            sm: "1fr 1fr",
            lg: "1fr 1fr 1fr 1fr",
          },
        }}
      >
        Play
      </Box>
      <div>
        <ul>
          {receivedMessages.map((msg: any, index: number) => (
            <li key={index}>
              {msg.user}: {msg.message}
            </li>
          ))}
        </ul>
        <div>
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <button onClick={sendMessage}>Send</button>
        </div>
      </div>
    </Box>
  );
};
