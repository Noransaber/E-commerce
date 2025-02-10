const Spinner: React.FC = () => {
    return (
      <div className="flex justify-center items-center">
        <div
          className="animate-spin rounded-full h-10 w-10 border-t-4 border-primary border-opacity-50"
          role="status"
        >
          <span className="sr-only">Loading...</span>
        </div>
      </div>
    );
  };
  
  export default Spinner;