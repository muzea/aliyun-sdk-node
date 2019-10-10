import { QueryCdpOfferRequest } from "./QueryCdpOffer/req";
import { QueryCdpOfferResponse } from "./QueryCdpOffer/res";
import { QueryCdpOfferByIdRequest } from "./QueryCdpOfferById/req";
import { QueryCdpOfferByIdResponse } from "./QueryCdpOfferById/res";
import { QueryCdpOrderRequest } from "./QueryCdpOrder/req";
import { QueryCdpOrderResponse } from "./QueryCdpOrder/res";

interface DYCDPAPI {
    QueryCdpOffer(query: QueryCdpOfferRequest): Promise<QueryCdpOfferResponse>;
    QueryCdpOfferById(query: QueryCdpOfferByIdRequest): Promise<QueryCdpOfferByIdResponse>;
    QueryCdpOrder(query: QueryCdpOrderRequest): Promise<QueryCdpOrderResponse>;
}
export default DYCDPAPI;
