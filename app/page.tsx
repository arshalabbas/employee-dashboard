export default function Home() {
  return (
    <section>
      <h1 className="text-head mb-5">Insights</h1>
      <div className="join shadow-md">
        <div className="join-item p-10">
          <p className="text-6xl font-black text-accent text-center">84</p>
          <p className="text-center opacity-80">Total Employees</p>
        </div>
        <div className="join-item p-10">
          <p className="text-6xl font-black text-accent text-center">35000</p>
          <p className="text-center opacity-80">Average Salary</p>
        </div>
        <div className="join-item p-10">
          <p className="text-6xl font-black text-accent text-center">54000</p>
          <p className="text-center opacity-80">Highest Salery</p>
        </div>
      </div>
    </section>
  );
}
