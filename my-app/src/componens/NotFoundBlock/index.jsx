import React from "react";

import styles from "./NotFoundBlock.module.scss";

const NotFoundBlock = () => {
  return (
   <div className={styles.root}>
     <h1>
      <spaan> :( </spaan>
      <br />
      Ничего не найдено
    </h1>
    <p className={styles.descriptio}>К сожалению данная страница отсуствует в нашем интернет-магазине</p>
   </div>
  );
};

export default NotFoundBlock;
