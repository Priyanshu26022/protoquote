import { useState, useEffect } from "react";


function QuoteCalculator() {
    
const [material, setMaterial] = useState("Aluminium");

const [process, setProcess] = useState("CNC");

const [quantity, setQuantity] = useState(10);

const [tolerance, setTolerance] = useState("Medium");

const [quote, setQuote] = useState(null);

async function generateQuote() {
  try {
    const response = await fetch("https://protoquote-backend.onrender.com/quote", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        material,
        process,
        quantity,
        tolerance,
      }),
    });

    const data = await response.json();

    setQuote(data);
  } catch (error) {
    console.error(error);
  }
}
useEffect(() => {
  generateQuote();
}, [material, process, quantity, tolerance]);


    return (
     
            <section className="bg-slate-950 py-24 text-white">
  <div className="mx-auto max-w-3xl rounded-2xl border border-slate-700 bg-slate-900 p-8">

    <h2 className="mb-8 text-center text-4xl font-bold">
      Manufacturing Quote Calculator
    </h2>

    <div className="space-y-6">

    
      <div>
        <label className="mb-2 block">Material</label>

        <select
          value={material}
          onChange={(e) => setMaterial(e.target.value)}
          className="w-full rounded-lg bg-slate-800 p-3"
        >
          <option>Aluminium</option>
          <option>Steel</option>
          <option>Plastic</option>
        </select>
      </div>

    
      <div>
        <label className="mb-2 block">Process</label>

       <select
          value={process}
          onChange={(e) => setProcess(e.target.value)}
          className="w-full rounded-lg bg-slate-800 p-3"

          className="w-full rounded-lg bg-slate-800 p-3"
        >
          <option>CNC</option>
          <option>3D Printing</option>
          <option>Injection Molding</option>
        </select>
      </div>

      <div>
        <label className="mb-2 block">Quantity</label>

        <input
          type="number"
          value={quantity}
          onChange={(e) => setQuantity(Number(e.target.value))}
          className="w-full rounded-lg bg-slate-800 p-3"
        />
      </div>

      
      <div>
        <label className="mb-2 block">Tolerance</label>

        <select
          value={tolerance}
          onChange={(e) => setTolerance(e.target.value)}
          className="w-full rounded-lg bg-slate-800 p-3"
        >
          <option>Low</option>
          <option>Medium</option>
          <option>High</option>
        </select>
      </div>

      <div className="mt-8 rounded-xl bg-slate-800 p-6 space-y-4">

    <h3 className="text-2xl font-bold">
        Quote Summary
    </h3>

    <div className="flex justify-between">
        <span>Estimated Price</span>
        <span className="font-bold text-blue-400">
           ₹ {quote?.estimated_price ?? "Loading..."}
        </span>
    </div>

    <div className="flex justify-between">
        <span>Recommended Process</span>
        <span>{quote?.recommended_process ?? process}</span>
    </div>

    <div className="flex justify-between">
        <span>Material</span>
        <span>{material}</span>
    </div>

    <div className="flex justify-between">
        <span>Tolerance</span>
        <span>{tolerance}</span>
    </div>

    <div className="flex justify-between">
        <span>Estimated Lead Time</span>
        <span className="text-green-400">
          {quote?.lead_time ?? "Loading..."}
        </span>
    </div>

</div>

    </div>

  </div>
</section>

      
    );

}

export default QuoteCalculator;