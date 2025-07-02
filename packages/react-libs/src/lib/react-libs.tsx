import styles from './react-libs.module.css';

export function ReactLibs(props: { children: React.ReactNode }) {
  return <div className={styles['container']}>{props.children}</div>;
}

export default ReactLibs;
