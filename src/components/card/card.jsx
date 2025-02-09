import { Link } from 'react-router-dom';
import lodgings from '../../data/lodging.json';

const CardContent = () => {
    return (
        <div className="card">
            {lodgings.map((lodging) => (
                <Link key={lodging.id} to={`/lodging/${lodging.id}`} className='card__link'>
                    <div
                        className='card__style'
                        style={{ backgroundImage: `url(${lodging.cover})` }}
                    >
                    <div className='card__image'/>
                        <div className='card__image--title'>
                                {lodging.title}
                        </div>
                    </div>
                </Link>
            ))}
        </div>
    );
};

export default CardContent;