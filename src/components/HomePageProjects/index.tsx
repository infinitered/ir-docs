import Link from "@docusaurus/Link";
import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<"svg">>;
  description: JSX.Element;
};

function Feature({ title, description }: FeatureItem) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
        <p>Check it out</p>
      </div>
    </div>
  );
}

export default function HomePageProjects() {
  const context = useDocusaurusContext();
  const packages = context.globalData["custom-homepage-plugin"].default["packages"];
  console.log(packages.map((pkg) => pkg.projectName));

  return (
    <div className={"container"}>
      <section className={styles.projects}>
        {packages.map((item: any) => (
          <Link to={`/${item.projectName}`} key={item.projectName}>
            <div className={styles.project}>
              <div className={styles.projectHead}>
                <h2 className={styles.projectHeadText}>{item.label}</h2>
              </div>
              <div className={styles.projectBody}>
                <p className={styles.projectText}>{item.description}</p>
              </div>
              <p className={styles.callToAction}>Check it out</p>
            </div>
          </Link>
        ))}
      </section>
    </div>
  );
}
