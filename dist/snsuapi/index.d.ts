import { BandPrecheckRequest } from "./BandPrecheck/req";
import { BandPrecheckResponse } from "./BandPrecheck/res";
import { BandOfferOrderRequest } from "./BandOfferOrder/req";
import { BandOfferOrderResponse } from "./BandOfferOrder/res";
import { BandStartSpeedUpRequest } from "./BandStartSpeedUp/req";
import { BandStartSpeedUpResponse } from "./BandStartSpeedUp/res";
import { BandStatusQueryRequest } from "./BandStatusQuery/req";
import { BandStatusQueryResponse } from "./BandStatusQuery/res";
import { BandStopSpeedUpRequest } from "./BandStopSpeedUp/req";
import { BandStopSpeedUpResponse } from "./BandStopSpeedUp/res";
import { MobileStartSpeedUpRequest } from "./MobileStartSpeedUp/req";
import { MobileStartSpeedUpResponse } from "./MobileStartSpeedUp/res";
import { MobileStatusQueryRequest } from "./MobileStatusQuery/req";
import { MobileStatusQueryResponse } from "./MobileStatusQuery/res";
import { MobileStopSpeedUpRequest } from "./MobileStopSpeedUp/req";
import { MobileStopSpeedUpResponse } from "./MobileStopSpeedUp/res";

interface SNSUAPI {
    BandPrecheck(query: BandPrecheckRequest): Promise<BandPrecheckResponse>;
    BandOfferOrder(query: BandOfferOrderRequest): Promise<BandOfferOrderResponse>;
    BandStartSpeedUp(query: BandStartSpeedUpRequest): Promise<BandStartSpeedUpResponse>;
    BandStatusQuery(query: BandStatusQueryRequest): Promise<BandStatusQueryResponse>;
    BandStopSpeedUp(query: BandStopSpeedUpRequest): Promise<BandStopSpeedUpResponse>;
    MobileStartSpeedUp(query: MobileStartSpeedUpRequest): Promise<MobileStartSpeedUpResponse>;
    MobileStatusQuery(query: MobileStatusQueryRequest): Promise<MobileStatusQueryResponse>;
    MobileStopSpeedUp(query: MobileStopSpeedUpRequest): Promise<MobileStopSpeedUpResponse>;
}
export default SNSUAPI;
