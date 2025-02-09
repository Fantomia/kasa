import footer from '../../assets/logoblack.png'

const Footer = () => {
    return (
        <div className='footer'>
            <img src={footer} className="footer__logo" alt="allrights" />
            <p>© 2020 Kasa. All rights reserved</p>
        </div>
    )
}

export default Footer