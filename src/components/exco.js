import excoCSS from '../styles/exco.module.css'

const Exco = () => {
    return ( 
        <div className={excoCSS.container}>
            <h2>EXCO</h2>
            <h3>2023 - PIONEER</h3>
            <div className={excoCSS.memberContainer}>
                <div className={excoCSS.member}>
                    <img src="./excoPlaceholder.png" alt=""/>
                    <h3>Aaron Tua</h3>
                    <p>President</p>
                </div>
                <div className={excoCSS.member}>
                    <img src="./excoPlaceholder.png" alt=""/>
                    <h3>Lee Yan Han</h3>
                    <p>Vice President</p>
                </div>
                <div className={excoCSS.member}>
                    <img src="./excoPlaceholder.png" alt=""/>
                    <h3>Justin Wong</h3>
                    <p>Head Of Outreach</p>
                </div>
                <div className={excoCSS.member}>
                    <img src="./excoPlaceholder.png" alt=""/>
                    <h3>Matthias Lee</h3>
                    <p>Head Of Community</p>
                </div>
                <div className={excoCSS.member}>
                    <img src="./excoPlaceholder.png" alt=""/>
                    <h3>Muthuvel Vimal</h3>
                    <p>Web3 Director</p>
                </div>
                <div className={excoCSS.member}>
                    <img src="./excoPlaceholder.png" alt=""/>
                    <h3>Vivek Thomas</h3>
                    <p>Web3 Director</p>
                </div>
            </div>
        </div>
     );
}
 
export default Exco;