import DashContainer from "@/components/DashContainer";

export const Home = () => {
  return (
    <DashContainer>
        <div className="p-8">
            <h1 className="text-2xl font-bold mb-4">Welcome to the Dashboard Home</h1>
            <p>This is the home page of your dashboard. Use the navigation menu to explore different sections.</p>
        </div>
    </DashContainer>
  );
};

export default Home;