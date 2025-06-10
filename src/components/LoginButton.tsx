import { generateCodeChallenge, generateRandomString } from "../utils/auth";

const clientId = import.meta.env.VITE_SPOTIFY_CLIENT_ID;
const redirectUri = import.meta.env.VITE_SPOTIFY_REDIRECT_URI;
const scopes = import.meta.env.VITE_SPOTIFY_SCOPES;

export default function LoginButton() {
  const handleLogin = async () => {
    const codeVerifier = generateRandomString(128);
    const codeChallenge = await generateCodeChallenge(codeVerifier);
    localStorage.setItem("spotify_code_verifier", codeVerifier);

    const params = new URLSearchParams({
      response_type: "code",
      client_id: clientId,
      scope: scopes,
      redirect_uri: redirectUri,
      code_challenge_method: "S256",
      code_challenge: codeChallenge,
    });

    window.location.href = `https://accounts.spotify.com/authorize?${params.toString()}`;
  };

  return <button onClick={handleLogin}>Login with Spotify</button>;
}
