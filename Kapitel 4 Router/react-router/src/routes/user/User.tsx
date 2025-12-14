import axios from "axios";
import { useEffect, useState } from "react";

type RandomUser = {
  email: string;
  gender: string;
  name: {
    first: string;
    last: string;
  };
  picture: {
    large: string;
    medium: string;
  };
};

function User() {
  const [user, setUser] = useState<RandomUser | null>(null);
  const [errorText, setErrorText] = useState("");

  useEffect(() => {
    fetchUser();
  }, []);

  async function fetchUser() {
    try {
      const { data, status, statusText } = await axios.get<{
        results: RandomUser[];
      }>("https://randomuser.me/api/");
      if (status === 200 && data.results.length > 0) {
        setUser(data.results[0]);
      } else {
        setUser(null);
        setErrorText(statusText);
      }
    } catch (error) {
      console.log(error);
      setUser(null);
      setErrorText("Fehler beim Laden des Users");
    }
  }

  function displayUser() {
    if (user) {
      return (
        <div>
          <img alt="User Profile" src={user.picture.medium} />
          <p>
            {user.name.first} {user.name.last}
          </p>
          <p>{user.email}</p>
          <p>{user.gender}</p>
        </div>
      );
    } else {
      return <p>{errorText}</p>;
    }
  }
  return <>{displayUser()}</>;
}

export default User;
