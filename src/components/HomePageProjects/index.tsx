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
            <Svg className={styles.featureSvg} role="img"/>
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

    return (<div className={"container"}><section className={styles.features}>
        {packages.map((packageItem: any) => (<Link to={`/ir-docs/docs/${packageItem.dir}`} key={packageItem.dir}>
            <div className={styles.feature}>

                <div className={styles.featureHead}>
                    <div className={styles.logoContainer}>
                        <img src={"img/irMark--reversed@2x.png"} alt={"Infinite Red Logo"} className={styles.logo}/>
                    </div>
                    <h2 className={styles.featureHeadText}>{packageItem.label}</h2>
                </div>
                <div className={styles.featureBody}>

                    <p className={styles.featureText}>
                        {packageItem.description}
                    </p>
                </div>
            </div>
        </Link>))}
    </section></div>);
}
