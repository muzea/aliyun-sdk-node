import { GetTokenRequest } from "./GetToken/req";
import { GetTokenResponse } from "./GetToken/res";
import { SearchRequest } from "./Search/req";
import { SearchResponse } from "./Search/res";
import { EnrichRequest } from "./Enrich/req";
import { EnrichResponse } from "./Enrich/res";
import { BookRequest } from "./Book/req";
import { BookResponse } from "./Book/res";
import { OrderListRequest } from "./OrderList/req";
import { OrderListResponse } from "./OrderList/res";
import { TicketingRequest } from "./Ticketing/req";
import { TicketingResponse } from "./Ticketing/res";
import { CancelRequest } from "./Cancel/req";
import { CancelResponse } from "./Cancel/res";
import { AncillarySuggestRequest } from "./AncillarySuggest/req";
import { AncillarySuggestResponse } from "./AncillarySuggest/res";
import { OrderDetailRequest } from "./OrderDetail/req";
import { OrderDetailResponse } from "./OrderDetail/res";
import { PricingRequest } from "./Pricing/req";
import { PricingResponse } from "./Pricing/res";
import { RefundApplyRequest } from "./RefundApply/req";
import { RefundApplyResponse } from "./RefundApply/res";
import { RefundDetailListRequest } from "./RefundDetailList/req";
import { RefundDetailListResponse } from "./RefundDetailList/res";
import { RefundDetailRequest } from "./RefundDetail/req";
import { RefundDetailResponse } from "./RefundDetail/res";
import { ChangeConfirmRequest } from "./ChangeConfirm/req";
import { ChangeConfirmResponse } from "./ChangeConfirm/res";
import { ChangeCancelRequest } from "./ChangeCancel/req";
import { ChangeCancelResponse } from "./ChangeCancel/res";
import { ChangeDetailListOfBuyerRequest } from "./ChangeDetailListOfBuyer/req";
import { ChangeDetailListOfBuyerResponse } from "./ChangeDetailListOfBuyer/res";
import { ChangeDetailRequest } from "./ChangeDetail/req";
import { ChangeDetailResponse } from "./ChangeDetail/res";
import { ChangeApplyRequest } from "./ChangeApply/req";
import { ChangeApplyResponse } from "./ChangeApply/res";
import { ChangeDetailListOfOrderNumRequest } from "./ChangeDetailListOfOrderNum/req";
import { ChangeDetailListOfOrderNumResponse } from "./ChangeDetailListOfOrderNum/res";
import { FlightChangeOfOrderRequest } from "./FlightChangeOfOrder/req";
import { FlightChangeOfOrderResponse } from "./FlightChangeOfOrder/res";
import { AccountFlowListRequest } from "./AccountFlowList/req";
import { AccountFlowListResponse } from "./AccountFlowList/res";
import { FileUploadRequest } from "./FileUpload/req";
import { FileUploadResponse } from "./FileUpload/res";
import { TicketingCheckRequest } from "./TicketingCheck/req";
import { TicketingCheckResponse } from "./TicketingCheck/res";
import { LuggageDirectRequest } from "./LuggageDirect/req";
import { LuggageDirectResponse } from "./LuggageDirect/res";
import { TransitVisaRequest } from "./TransitVisa/req";
import { TransitVisaResponse } from "./TransitVisa/res";

interface AIRTICKETOPEN {
    /**
     * 获取接口调用 token 凭证，token 有效期2小时。
     */
    GetToken(query: GetTokenRequest): Promise<GetTokenResponse>;
    /**
     * 搜索。
     */
    Search(query: SearchRequest): Promise<SearchResponse>;
    /**
     * 查到该行程更丰富的报价信息，还有免费行李、退改签、行李直挂规则。
     */
    Enrich(query: EnrichRequest): Promise<EnrichResponse>;
    /**
     * 预定生单。
     */
    Book(query: BookRequest): Promise<BookResponse>;
    /**
     * 订单列表。
     */
    OrderList(query: OrderListRequest): Promise<OrderListResponse>;
    /**
     * 支付出票。
     */
    Ticketing(query: TicketingRequest): Promise<TicketingResponse>;
    /**
     * 未支付取消。
     */
    Cancel(query: CancelRequest): Promise<CancelResponse>;
    /**
     * 辅营推荐。
     */
    AncillarySuggest(query: AncillarySuggestRequest): Promise<AncillarySuggestResponse>;
    /**
     * 订单详情。
     */
    OrderDetail(query: OrderDetailRequest): Promise<OrderDetailResponse>;
    /**
     * 验座，验价。如果价格变动，开发者继续 Book 则是以变价后的价格下单；如果未变价，则以未变价的价格下单。
     */
    Pricing(query: PricingRequest): Promise<PricingResponse>;
    /**
     * 退票申请。
     */
    RefundApply(query: RefundApplyRequest): Promise<RefundApplyResponse>;
    /**
     * 退票单详情列表。
     */
    RefundDetailList(query: RefundDetailListRequest): Promise<RefundDetailListResponse>;
    /**
     * 退票单详情。
     */
    RefundDetail(query: RefundDetailRequest): Promise<RefundDetailResponse>;
    /**
     * 确认改签。
     */
    ChangeConfirm(query: ChangeConfirmRequest): Promise<ChangeConfirmResponse>;
    /**
     * 取消改签。
     */
    ChangeCancel(query: ChangeCancelRequest): Promise<ChangeCancelResponse>;
    /**
     * 根据买家账号分页查询改签单简要信息列表。
     */
    ChangeDetailListOfBuyer(query: ChangeDetailListOfBuyerRequest): Promise<ChangeDetailListOfBuyerResponse>;
    /**
     * 改签详情。
     */
    ChangeDetail(query: ChangeDetailRequest): Promise<ChangeDetailResponse>;
    /**
     * 改签申请。
     */
    ChangeApply(query: ChangeApplyRequest): Promise<ChangeApplyResponse>;
    /**
     * 根据正向订单号查询改签订单列表信息。
     */
    ChangeDetailListOfOrderNum(query: ChangeDetailListOfOrderNumRequest): Promise<ChangeDetailListOfOrderNumResponse>;
    /**
     * 订单号查询航变信息。
     */
    FlightChangeOfOrder(query: FlightChangeOfOrderRequest): Promise<FlightChangeOfOrderResponse>;
    /**
     * 账号资金流水列表。
     */
    AccountFlowList(query: AccountFlowListRequest): Promise<AccountFlowListResponse>;
    /**
     * 文件上传，限制只能传300KB以内大小。
     */
    FileUpload(query: FileUploadRequest): Promise<FileUploadResponse>;
    /**
     * Ticketing 前检查，该接口是可选使用。
     */
    TicketingCheck(query: TicketingCheckRequest): Promise<TicketingCheckResponse>;
    /**
     * 航程行李直挂。
     */
    LuggageDirect(query: LuggageDirectRequest): Promise<LuggageDirectResponse>;
    /**
     * 航程过境签信息查询，接口输入航程信息，返回乘坐该航程是否存在过境签要求。只有中转/经停才是有效入参(中转/经停经过第三国)，当前支持的乘客默认为中国大陆旅客。
     */
    TransitVisa(query: TransitVisaRequest): Promise<TransitVisaResponse>;
}
export default AIRTICKETOPEN;
