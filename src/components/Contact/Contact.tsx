import React from "react";
import styles from "./Contact.module.css";
import { imgArray, contactArray } from "../../constant";
import { IContactArray } from "../../models/common";

const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
      </div>
      <ul className={styles.links}>
        {contactArray.map((item: IContactArray, index: number) => {
          return (
            <React.Fragment key={`Contact_${index + 1}`}>
              <li className={styles.link}>
                <a href={item?.href} target="_blank" rel="noreferrer">
                  <img
                    src={
                      imgArray.filter(
                        (imgItem) => imgItem?.key === item?.key
                      )[0]?.img ?? ""
                    }
                    alt={item?.imgAlt}
                  />
                  {item?.label ?? ""}
                </a>
              </li>
            </React.Fragment>
          );
        })}
      </ul>
    </footer>
  );
};

export default Contact;
