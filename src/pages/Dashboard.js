const Dashboard = ({ user }) => {
  return (
    <section className='section'>
      <h4>Dashboard, hello {user?.name}</h4>
    </section>
  );
};
export default Dashboard;
