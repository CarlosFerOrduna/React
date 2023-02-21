import styles from "./NavBrand.module.scss";
console.log(styles);
const NavBrand = ({ title, image }) => {
  return (
    <button className={styles.brand}>
      <BrandImage image={image} />
      <BrandTitle title={title} />
    </button>
  );
};

export default NavBrand;

const BrandImage = ({ image }) => {
  return (
    <img className={styles.brand__image} src={image.address} alt={image.alt} />
  );
};

const BrandTitle = ({ title }) => {
  return <h2 className={styles.brand__title}>{title}</h2>;
};
