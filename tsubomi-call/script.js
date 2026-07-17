import { db } from "./firebase.js";
import {
  collection,
  addDoc,
  serverTimestamp
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const button = document.getElementById("callButton");
const result = document.getElementById("result");

button.addEventListener("click", async () => {
  const name = document.getElementById("name").value.trim();
  const message = document.getElementById("message").value.trim();

  if (name === "") {
    alert("お名前を入力してください");
    return;
  }

  try {
    await addDoc(collection(db, "calls"), {
      name: name,
      message: message,
      createdAt: serverTimestamp(),
      status: "受付待ち"
    });

    result.textContent = "✅ 受付スタッフへ通知しました！";

    document.getElementById("name").value = "";
    document.getElementById("message").value = "";

  } catch (error) {
    console.error(error);
    result.textContent = "❌ 保存に失敗しました";
  }
});
