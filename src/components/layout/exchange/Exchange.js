import React, {Fragment,useEffect} from 'react';
import MarketTrading from './MarketTrading';
import MarketHistory from './MarketHistory';
import AssetPrice from './AssetPrice';
import AssetSidebar from './AssetSidebar';
import ClosedOrder from './ClosedOrder';
import OpenOrder from './OpenOrder';
import { TVChartContainer } from '../../TVChartContainer';
import MarketBuyAndSell from './BuyAndSell/MarketBuyAndSell';
import LimitBuyAndSell from './BuyAndSell/LimitBuyAndSell';
import StopLimitBuyAndSell from './BuyAndSell/StopLimitBuyAndSell';
import Balance from './Balance';

const Exchange = () => {
    useEffect(() => {
        let search = window.location.search;
        let params = new URLSearchParams(search);
        let symbol = params.get('symbol');
        console.log(symbol);
        
        return () => {
            
        };
      }, []);

    return (
        <Fragment>
        <div className="container-fluid">
        <div className="row sm-gutters">
        <div className="col-md-6 col-lg-6 col-xl-7 col-xxl-8">
                <AssetSidebar />
                <div>
                    <TVChartContainer/>
                </div>
                
            </div>
            <div className="col-md-6 col-lg-6 col-xl-5 col-xxl-4">
                <div className="row sm-gutters">
                    <div className="col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <div className="crypt-market-status mt-4">
                            <div>
                                <div className="tab-content">
                                <ul className="nav nav-tabs">
                                    <li role="presentation"><a href="#history" className="active" data-toggle="tab">Emir Defteri</a></li>
                                </ul>
                                    <div role="tabpanel" className="tab-pane active" id="history">
                                        <MarketTrading />
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                        <div className="col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <div className="crypt-market-status mt-4">
                    <div>
                        <ul className="nav nav-tabs">
                            <li role="presentation"><a href="#history" className="active" data-toggle="tab">Geçmiş</a></li>
                        </ul>
                        <div className="mb-1">
                        <div className="tab-content">
                            <div role="tabpanel" className="tab-pane active" id="history">
                                < MarketHistory />
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
    <div className="container-fluid ">
        <div className="row sm-gutters">
            <div className="col-xl-7 mb-1 mt-2">
            <div className="crypt-market-status">
                <div>
                    <ul className="nav nav-tabs">
                        <li role="presentation"><a href="#active-orders" className="active" data-toggle="tab">Açık Emirler</a></li>
                        <li role="presentation"><a href="#closed-orders" data-toggle="tab">Kapanmış Emirler</a></li>
                        <li role="presentation"><a href="#balance" data-toggle="tab">Bakiye</a></li>
                    </ul>
                    <div className="tab-content">
                        <div role="tabpanel" className="tab-pane active" id="active-orders">
                            <OpenOrder />
                        </div>
                        <div role="tabpanel" className="tab-pane" id="closed-orders">
                            <ClosedOrder />
                        </div>
                        <div role="tabpanel" className="tab-pane" id="balance">
                            <Balance />
                        </div>
                    </div>
                </div>
                </div>
           
                </div>
            <div className="col-xl-5 mb-1 mt-2">
            <div>
            <div className="tab-content">
                        <ul className="nav nav-tabs">
                            <li role="presentation"><a href="#MarketBuyAndSell" className="active" data-toggle="tab">Piyasa Al-Sat</a></li>
                            <li role="presentation"><a href="#LimitBuyAndSell" data-toggle="tab">Limit Al-Sat</a></li>
                            <li role="presentation"><a href="#StopLimitBuyAndSell" data-toggle="tab">Stop Limit Al-Sat</a></li>
                        </ul>
                                    <div role="tabpanel" className="tab-pane active" id="MarketBuyAndSell">
                                        <MarketBuyAndSell/>
                                    </div>
                                    <div role="tabpanel" className="tab-pane" id="LimitBuyAndSell">
                                        <LimitBuyAndSell/>
                                    </div>
                                    <div role="tabpanel" className="tab-pane" id="StopLimitBuyAndSell">
                                        <StopLimitBuyAndSell/>
                                    </div>
                                </div>
                                </div>

            </div>
        </div>
    </div>
    </Fragment>
    );
}
    
export default Exchange;

// <div id="crypt-candle-chart"></div> tradingview ekrani eski

/* 

                <div className="tradingview-widget-container mb-3">
                    
                </div>
*/
