import { useState } from "react";

function Uploads() {
  const [file, setFile] = useState(null);
  const [message, setMessage] = useState("");

  const uploadFile = async () => {
    if (!file) {
      setMessage("Please choose a file.");
      return;
    }

    const formData = new FormData();
    formData.append("file", file);

    try {
      const response = await fetch("https://protoquote-backend.onrender.com/upload", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      setMessage(data.status);
    } catch (error) {
      setMessage("Upload Failed");
    }
  };

  return (
    <section  id="upload" 
    className="bg-slate-950 py-24 text-white">
      <div className="mx-auto max-w-3xl rounded-2xl border border-slate-700 bg-slate-900 p-10">
        
        <h2 className="mb-6 text-center text-4xl font-bold">
          Upload CAD File
        </h2>

        <input
          type="file"
          onChange={(e) => setFile(e.target.files[0])}
          className="mb-6 w-full"
        />
        
        <button
          onClick={uploadFile}
          className="rounded-xl bg-blue-600 px-6 py-3 font-semibold hover:bg-blue-700"
        >
          Upload
        </button>

        <p className="mt-6 text-green-400">
          {message}
        </p>

      </div>
    </section>
  );
}

export default Uploads;