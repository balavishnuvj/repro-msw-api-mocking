
function savePost(data) {
  return new Promise((res, rej) => {
    fetch("/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        res({ success: true });
      })
      .catch((error) => {
        rej(error);
      });
  });
}

export { savePost  };
