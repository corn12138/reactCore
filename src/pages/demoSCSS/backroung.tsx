/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import {useNavigate} from "react-router-dom"

import styles from './back.module.scss'

const DemoScss: React.FC = () => {
    // 返回上一级页面的
    const navigate = useNavigate();
const goBack = () => {
    navigate(-1);
}
    return (
        // 这个写法 是  cssmodule和scss结合 将css定于局部。
        <div className={styles.uniqueClassName}>
            <div className={styles["goback"]}>
                <button onClick={goBack}>Go Back</button>
            </div>
            <div className={styles["l-container"]}>
                <div className={styles["g-container"]}>
                    <ul>
                        <li>Bottom</li>
                        <li>Bottom</li>
                        <li>Bottom</li>
                        <li>Bottom</li>
                        <li>Bottom</li>
                        <li>Bottom</li>
                    </ul>
                </div>
                {/* 颜色的渐变 */}
                <div className={styles["c-colors"]}></div>
                {/* 渐变三角形的*/}
                <div className={styles["triangle"]}></div>
                {/* 叠加的渐变 */}
                <div className={styles["overlay"]}></div>
                {/* 使用重复渐变 */}
                <div className={styles["repeat"]}></div>
                {/* 径向渐变 */}
                <div className={styles["radical"]}></div>
                {/* 径向渐变实际使用 */}
                <div className={styles["radicalWave"]}>88</div>
                {/* 关于角向渐变的问题 */}
                <div className={styles['conicS']}></div>
                {/* 角向渐变  配合scss  */}
                <div className={styles['colors']}></div>
                {/* 利用角向渐变实现一个 饼状图 */}
                <div className={styles['pieChart']}></div>
                {/* conic-gradient和background-size结合实现对应的贴图 */}
                <div className={styles["basis"]}></div>
                <div className={styles["wallpaper"]}></div>
                <div className={styles["wallpaper2"]}></div>
                {/* 重复的角向渐变可以 填充整个区域 */}
                <div className={styles['repeatConic']}></div>
                {/* 使用 repeat和background-position 实现特殊团 */}
                <div className={styles["repeat-position"]}></div>
            {/*多重角向渐变 使用小单位 实现风格迥异的图案 */}
                <div className={styles["repeating-conic"]}></div>
            {/*多重径向渐变 还是使用小单位 实现图案*/}
                <div className={styles["repeating-radial"]}></div>
            </div>
            {/* 径向渐变加上动画帧实际使用 */}
            <div className={styles["keyframes"]}>

                <p>渐变实现波浪</p>
                <a>Hover Me</a>
            </div>
        </div>
    )
}

export default DemoScss;
