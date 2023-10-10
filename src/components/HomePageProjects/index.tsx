import Link from '@docusaurus/Link';
import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

type FeatureItem = {
    title: string; Svg: React.ComponentType<React.ComponentProps<'svg'>>; description: JSX.Element;
};


function Feature({title, Svg, description}: FeatureItem) {
    return (<div className={clsx('col col--4')}>
        <div className="text--center">
            <Svg className={styles.projectSvg} role="img"/>
        </div>
        <div className="text--center padding-horiz--md">
            <h3>{title}</h3>
            <p>{description}</p>
        </div>
    </div>);
}

export default function HomePageProjects() {
    const context = useDocusaurusContext();

    const packages = context.globalData['custom-homepage-plugin'].default['packages'];

    return (<div className={"container"}><section className={styles.projects}>
        {packages.map((item: any) => (<Link to={`/docs/${item.projectName}`} key={item.projectName}>
            <div className={styles.project}>

                <div className={styles.projectHead}>
                    <div className={styles.logoContainer}>
                        <img src={"img/irMark--reversed@2x.png"} alt={"Infinite Red Logo"} className={styles.logo}/>
                    </div>
                    <h2 className={styles.projectHeadText}>{item.label}</h2>
                </div>
                <div className={styles.projectBody}>

                    <p className={styles.projectText}>
                        {item.description}
                    </p>
                </div>
            </div>
        </Link>))}
    </section></div>);
}
