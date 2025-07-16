import { useEffect } from "react";
import axios from "axios";

export default function Chatbot({ userId }) {
  useEffect(() => {
    if (!userId) return;

    axios.get(`http://localhost:3000/api/chatbase-auth/${userId}`)
      .then(res => {
        const { userId, userHash } = res.data;

        window.chatbaseConfig = {
          chatbotId: "7Q11tTlluNJUAsN_AWV3V",
          domain: "www.chatbase.co",
          userId,
          userHash,
        };

        const script = document.createElement("script");
        script.src = "https://www.chatbase.co/embed.min.js";
        script.id = "chatbase-script";
        document.body.appendChild(script);
      })
      .catch(err => console.error("Erreur de chargement du chatbot :", err));
  }, [userId]);

  return null; 
}
