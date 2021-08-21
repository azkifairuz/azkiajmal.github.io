function tombol() {
  Swal.fire({
    title: "Hi Zhilan ,saya jarvis asisten azki.",
    width: 600,
    padding: "3em",
    background: "#fff url(/images/trees.png)",
  }).then((result) => {
    Swal.fire({
      title: "Tulis Harapan kamu tahun ini",
      input: "text",
    }).then((result) => {
      Swal.fire({
        title: "semoga harapan mu  bisa tercapai",
      });
    });
  });
}
