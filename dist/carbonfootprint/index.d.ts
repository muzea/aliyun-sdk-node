import { GetSummaryDataRequest } from "./GetSummaryData/req";
import { GetSummaryDataResponse } from "./GetSummaryData/res";
import { AllowRequest } from "./Allow/req";
import { AllowResponse } from "./Allow/res";
import { QueryCarbonTrackRequest } from "./QueryCarbonTrack/req";
import { QueryCarbonTrackResponse } from "./QueryCarbonTrack/res";
import { VerifyRequest } from "./Verify/req";
import { VerifyResponse } from "./Verify/res";
import { QueryMultiAccountCarbonTrackRequest } from "./QueryMultiAccountCarbonTrack/req";
import { QueryMultiAccountCarbonTrackResponse } from "./QueryMultiAccountCarbonTrack/res";

interface CARBONFOOTPRINT {
    /**
     * 获取汇总数据。
     */
    GetSummaryData(query: GetSummaryDataRequest): Promise<GetSummaryDataResponse>;
    /**
     * 开通授权。
     */
    Allow(query: AllowRequest): Promise<AllowResponse>;
    /**
     * 查询碳足迹。
     */
    QueryCarbonTrack(query: QueryCarbonTrackRequest): Promise<QueryCarbonTrackResponse>;
    /**
     * 账号校验。
     */
    Verify(query: VerifyRequest): Promise<VerifyResponse>;
    /**
     * 获取账号碳足迹明细数据。
     */
    QueryMultiAccountCarbonTrack(query: QueryMultiAccountCarbonTrackRequest): Promise<QueryMultiAccountCarbonTrackResponse>;
}
export default CARBONFOOTPRINT;
