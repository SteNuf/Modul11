import axios from "axios";
import { useEffect, useState } from "react";

function User() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetchUser();
  }, []);

  async function fetchUser() {
    const response = axios.get("https://randomuser.me/api/");
  }

  return <h2>Hallo</h2>;
}

export default User;
