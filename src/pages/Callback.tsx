import { useEffect } from "react";
import axios from "axios";

export default function Callback() {
  useEffect(() => {
    const fetchToken = async () => {
      const code = new URLSearchParams(window.location.search).get("code");
      const codeVerifier = localStorage.getItem("spotify_code_verifier");

      const params = new URLSearchParams({
        grant_type: "authorization_code",
        code: code!,
        redirect_uri: import.meta.env.VITE_SPOTIFY_REDIRECT_URI,
        client_id: import.meta.env.VITE_SPOTIFY_CLIENT_ID,
        code_verifier: codeVerifier!,
      });

      const response = await axios.post(
        "https://accounts.spotify.com/api/token",
        params,
        {
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
        }
      );

      localStorage.setItem("spotify_access_token", response.data.access_token);
      window.location.href = "/";
    };

    fetchToken();
  }, []);

  return <div>Loading...</div>;
}
