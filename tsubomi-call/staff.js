import { db } from "./firebase.js";

import {
  collection,
  query,
  orderBy,
  onSnapshot,
  doc,
  updateDoc
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const callList = document.getElementById("callList");

const q = query(
  collection(db, "calls"),
  orderBy("createdAt", "desc")
);

onSnapshot(q, (snapshot) => {
  callList.innerHTML = "";

  snapshot.forEach((docSnap) => {
    const data = docSnap.data();

    if (data.status === "対応完了") return;

    const card = document.createElement("div");
    card.style.background = "white";
    card.style.padding = "15px";
    card.style.margin = "10px 0";
    card.style.borderRadius = "10px";
    card.style.borderLeft = "6px solid green";

    const title = document.createElement("h3");
    title.textContent = data.name;

    const message = document.createElement("p");
    message.textContent = data.message || "（ひとことなし）";

    const status = document.createElement("p");
    status.textContent = "状態：" + data.status;

    const button = document.createElement("button");
    button.textContent = "対応する";

    button.onclick = async () => {
      await updateDoc(doc(db, "calls", docSnap.id), {
        status: "対応完了"
      });
    };

    card.appendChild(title);
    card.appendChild(message);
    card.appendChild(status);
    card.appendChild(button);

    callList.appendChild(card);
  });
});
