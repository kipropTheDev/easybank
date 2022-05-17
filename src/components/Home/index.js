import './index.scss'
import IconOnline from '../../assets/images/icon-online.svg'
import IconBudg from '../../assets/images/icon-budgeting.svg'
import IconBoard from '../../assets/images/icon-onboarding.svg'
import IconApi from '../../assets/images/icon-api.svg'
import Currency from '../../assets/images/image-currency.jpg'
import Restaurant from '../../assets/images/image-restaurant.jpg'
import Plane from '../../assets/images/image-plane.jpg'
import Confetti from '../../assets/images/image-confetti.jpg'

const Home = ()=>{
    return(
        <div>

            <div className='hero'>
                <div className="container">
                    <div className="hero__image"></div>
                    <div className="hero__text container--pall">
                        <h1>Next generation digital banking</h1>
                        <p>Take your financial life online. Your Easybank account will be a one-stop-shop 
                            for spending, saving, budgeting, investing, and much more.</p>
                        <a href="#" className="button hero__cta">Request Invite</a>
                    </div>
                </div>
            </div>

            <div className='feature'>
                <div className="feature__content container container--pall">
                    <div className="feature__intro">
                        <h2> Why choose Easybank? </h2>
                        <p>We leverage Open Banking to turn your bank account into your financial hub. Control your finances like never before.</p>
                    </div>
                    
                    <div className="feature__grid">
            
                        <div className="feature__item">
                            <div className="feature__icon">
                                <img src={IconOnline} alt="online"/>
                            </div>
                            <div className="feature__title">
                                Online Banking
                                
                            </div>
                            <div className="feature__desc">
                                <p>Our modern web and mobile applications allow you to keep track of your finances 
                                    wherever you are in the world.</p>
                            </div>
                        </div>
            
                        <div className="feature__item">
                            <div className="feature__icon">
                                <img src={IconBudg} alt="online"/>
                            </div>
                            <div className="feature__title">
                                Simple Budgeting
                                
                            </div>
                            <div className="feature__desc">
                                <p>See exactly where your money goes each month. Receive notifications when you're 
                                    close to hitting your limits.</p>
                            </div>
                        </div>
            
                        <div className="feature__item">
                            <div className="feature__icon">
                                <img src={IconBoard} alt="online"/>
                            </div>
                            <div className="feature__title">
                                Fast Onboarding
                                
                            </div>
                            <div className="feature__desc">
                                <p>We don't do branches. Open your account in minutes online and start taking control 
                                    of your finances right away.</p>
                            </div>
                        </div>
                        
                        <div className="feature__item">
                            <div className="feature__icon">
                                <img src={IconApi} alt="online"/>
                            </div>
                            <div className="feature__title">
                                Open API
                                
                            </div>
                            <div className="feature__desc">
                                <p>Manage your savings, investments, pension, and much more from one account. Tracking 
                                    your money has never been easier.</p>
                            </div>
                        </div>
            
                    </div>
                </div>
            </div>

            <div className='articles'>
                <div className="article__content container container--pall">
                    <h2>Latest Articles</h2>
                    <div className="article__grid">
                        <a href="#" className="article__item">
                            <div className="article__image" style={{backgroundImage: `url(${Currency})`}}></div>
                            <div className="article__text">
                                <div className="article__author">By Claire Robinson</div>
                                <div className="article__title">
                                    Receive money in any currency with no fees
                                </div>
                                <div className="article__description">
                                    The world is getting smaller and we're becoming more mobile. So why should you be 
                                    forced to only receive money in a single …
                                </div>

                            </div>
                        </a>
                        <a href="#" className="article__item">
                            <div className="article__image" style={{backgroundImage: `url(${Restaurant})`}}></div>
                            <div className="article__text">
                                <div className="article__author">By Wilson Hutton</div>
                                <div className="article__title">
                                    Treat yourself without worrying about money
                                </div>
                                <div className="article__description">
                                    Our simple budgeting feature allows you to separate out your spending and set 
                                    realistic limits each month. That means you …
                                </div>

                            </div>
                        </a>
                        <a href="#" className="article__item">
                            <div className="article__image" style={{backgroundImage: `url(${Plane})`}}></div>
                            <div className="article__text">
                                <div className="article__author">By Wilson Hutton</div>
                                <div className="article__title">
                                    Take your Easybank card wherever you go
                                </div>
                                <div className="article__description">
                                    We want you to enjoy your travels. This is why we don't charge any fees on purchases 
                                    while you're abroad. We'll even show you …
                                </div>

                            </div>
                        </a>
                        <a href="#" className="article__item">
                            <div className="article__image" style={{backgroundImage: `url(${Confetti})`}}></div>
                            <div className="article__text">
                                <div className="article__author">By Claire Robinson</div>
                                <div className="article__title">
                                    Our invite-only Beta accounts are now live!
                                </div>
                                <div className="article__description">
                                    After a lot of hard work by the whole team, we're excited to launch our closed beta. 
                                    It's easy to request an invite through the site ...
                                </div>

                            </div>
                        </a>
                    </div>

                    </div>
            </div>

        </div>
    )
}

export default Home