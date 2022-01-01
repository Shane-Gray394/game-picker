import NavBar from './NavBar';

const Layout = (props) => {
  return (
    <div>
      <NavBar />
      <main
        style={{
          margin: '3rem auto',
          width: '40%',
        }}
      >
        {props.children}
      </main>
    </div>
  );
};

export default Layout;
