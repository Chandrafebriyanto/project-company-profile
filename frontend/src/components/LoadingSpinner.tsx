function LoadingSpinner() {
  return (
    // Container untuk menengahkan spinner
    <div className="flex items-center justify-center w-full min-h-[50vh]">
      {/* Lingkaran yang berputar */}
      <div className="w-12 h-12 border-4 border-slate-200 border-t-primary rounded-full animate-spin"></div>
    </div>
  );
}

export default LoadingSpinner;