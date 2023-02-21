import styles from "./NavItems.module.scss";

const NavItems = () => {
  return (
    <>
      <ul className={styles.items}>
        <li>
          <button>Concepto</button>
        </li>
        <li>
          <button>Productos</button>
        </li>
        <li>
          <button>Sucursales</button>
        </li>
      </ul>
    </>
  );
};

export default NavItems;
