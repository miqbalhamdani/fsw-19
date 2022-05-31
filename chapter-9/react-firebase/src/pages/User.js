import React, { useEffect, useState } from "react";
import { getDatabase, ref, child, get, set, onValue } from "firebase/database";

export default function User() {
  useEffect(() => {
    // fetchUser();
    fetchRealtimeUser();
  }, []);

  const [users, setUsers] = useState([]);
  const [students, setStudents] = useState([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  // tidak digunakan
  const fetchUser = () => {
    const dbRef = ref(getDatabase());
    get(child(dbRef, "users"))
      .then((snapshot) => {
        setUsers(snapshot.val());
        console.log(snapshot.val());
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const fetchRealtimeUser = () => {
    const db = getDatabase();
    const usersRef = ref(db, "student");
    onValue(usersRef, (snapshot) => {
      console.log('ada data baru nih');
      setStudents(snapshot.val())
    });
  };

  //  tidak digunakan
  const handleSaved = (e) => {
    e.preventDefault();

    const db = getDatabase();
    const data = [
      ...users,
      {
        name: name,
        email: email,
      },
    ];

    set(ref(db, "users"), data);
  };

  const randomId = () => {
    let result = "";
    const characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    const charactersLength = characters.length;
    for (let i = 0; i < 15; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  };

  const handleSavedRandomId = (e) => {
    e.preventDefault();

    const db = getDatabase();
    const id = randomId();
    set(ref(db, `student/${id}`), {
      name: name,
      email: email,
    });
  };

  return (
    <div style={{ marginTop: "30px" }}>
      <h1>Create New User</h1>
      <form onSubmit={handleSavedRandomId}>
        <div>
          <label>Name</label>
          <input
            type="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div>
          <label>Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <button type="submit">Saved</button>
      </form>

      <br />
      <br />

      <table>
        { Object.keys(students).map(key => (
          <tr key={key}>
            <td>{students[key].name}</td>
            <td>{students[key].email}</td>
          </tr>
        ))}
      </table>
    </div>
  );
}
