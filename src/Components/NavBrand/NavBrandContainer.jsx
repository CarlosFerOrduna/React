import NavBrand from "./NavBrand";

const NavBrandContainer = () => {
  const title = "FPizza";
  const image = {
    address: "./logo.png",
    alt: "pizzas planet",
  };

  return (
    <>
      <NavBrand title={title} image={image} />
    </>
  );
};

export default NavBrandContainer;
