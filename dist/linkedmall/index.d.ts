import { QueryDistributionMallRequest } from "./QueryDistributionMall/req";
import { QueryDistributionMallResponse } from "./QueryDistributionMall/res";
import { QueryDistributionTradeStatusRequest } from "./QueryDistributionTradeStatus/req";
import { QueryDistributionTradeStatusResponse } from "./QueryDistributionTradeStatus/res";
import { QueryOrderList4DistributionRequest } from "./QueryOrderList4Distribution/req";
import { QueryOrderList4DistributionResponse } from "./QueryOrderList4Distribution/res";
import { ModifyRefund4DistributionRequest } from "./ModifyRefund4Distribution/req";
import { ModifyRefund4DistributionResponse } from "./ModifyRefund4Distribution/res";
import { CancelRefund4DistributionRequest } from "./CancelRefund4Distribution/req";
import { CancelRefund4DistributionResponse } from "./CancelRefund4Distribution/res";
import { QueryLogistics4DistributionRequest } from "./QueryLogistics4Distribution/req";
import { QueryLogistics4DistributionResponse } from "./QueryLogistics4Distribution/res";
import { InitApplyRefund4DistributionRequest } from "./InitApplyRefund4Distribution/req";
import { InitApplyRefund4DistributionResponse } from "./InitApplyRefund4Distribution/res";
import { QueryRefundApplicationDetail4DistributionRequest } from "./QueryRefundApplicationDetail4Distribution/req";
import { QueryRefundApplicationDetail4DistributionResponse } from "./QueryRefundApplicationDetail4Distribution/res";
import { ApplyRefund4DistributionRequest } from "./ApplyRefund4Distribution/req";
import { ApplyRefund4DistributionResponse } from "./ApplyRefund4Distribution/res";
import { CancelDistributionTradeRequest } from "./CancelDistributionTrade/req";
import { CancelDistributionTradeResponse } from "./CancelDistributionTrade/res";
import { InitModifyRefund4DistributionRequest } from "./InitModifyRefund4Distribution/req";
import { InitModifyRefund4DistributionResponse } from "./InitModifyRefund4Distribution/res";
import { RenderDistributionOrderRequest } from "./RenderDistributionOrder/req";
import { RenderDistributionOrderResponse } from "./RenderDistributionOrder/res";
import { ListDistributionMallRequest } from "./ListDistributionMall/req";
import { ListDistributionMallResponse } from "./ListDistributionMall/res";
import { ConfirmDisburse4DistributionRequest } from "./ConfirmDisburse4Distribution/req";
import { ConfirmDisburse4DistributionResponse } from "./ConfirmDisburse4Distribution/res";
import { SubmitReturnGoodLogistics4DistributionRequest } from "./SubmitReturnGoodLogistics4Distribution/req";
import { SubmitReturnGoodLogistics4DistributionResponse } from "./SubmitReturnGoodLogistics4Distribution/res";
import { QueryOrderDetail4DistributionRequest } from "./QueryOrderDetail4Distribution/req";
import { QueryOrderDetail4DistributionResponse } from "./QueryOrderDetail4Distribution/res";
import { ApplyCreateDistributionOrderRequest } from "./ApplyCreateDistributionOrder/req";
import { ApplyCreateDistributionOrderResponse } from "./ApplyCreateDistributionOrder/res";
import { ListDistributionItemRequest } from "./ListDistributionItem/req";
import { ListDistributionItemResponse } from "./ListDistributionItem/res";
import { QueryItemDetailRequest } from "./QueryItemDetail/req";
import { QueryItemDetailResponse } from "./QueryItemDetail/res";
import { QueryChildDivisionCodeByIdRequest } from "./QueryChildDivisionCodeById/req";
import { QueryChildDivisionCodeByIdResponse } from "./QueryChildDivisionCodeById/res";
import { QueryMallCategoryListRequest } from "./QueryMallCategoryList/req";
import { QueryMallCategoryListResponse } from "./QueryMallCategoryList/res";
import { QueryItemGuideRetailPriceRequest } from "./QueryItemGuideRetailPrice/req";
import { QueryItemGuideRetailPriceResponse } from "./QueryItemGuideRetailPrice/res";
import { QueryItemDetailWithDivisionRequest } from "./QueryItemDetailWithDivision/req";
import { QueryItemDetailWithDivisionResponse } from "./QueryItemDetailWithDivision/res";
import { QueryDistributionBillDetailRequest } from "./QueryDistributionBillDetail/req";
import { QueryDistributionBillDetailResponse } from "./QueryDistributionBillDetail/res";
import { ListDistributionItemWithoutCacheRequest } from "./ListDistributionItemWithoutCache/req";
import { ListDistributionItemWithoutCacheResponse } from "./ListDistributionItemWithoutCache/res";

interface LINKEDMALL {
    /**
     * 分销商查询自己拥有的商城信息
     * 。
     */
    QueryDistributionMall(query: QueryDistributionMallRequest): Promise<QueryDistributionMallResponse>;
    /**
     * 查询分销交易状态。
     */
    QueryDistributionTradeStatus(query: QueryDistributionTradeStatusRequest): Promise<QueryDistributionTradeStatusResponse>;
    /**
     * 查询分销订单列表。
     */
    QueryOrderList4Distribution(query: QueryOrderList4DistributionRequest): Promise<QueryOrderList4DistributionResponse>;
    /**
     * 分销订单退款申请修改。
     */
    ModifyRefund4Distribution(query: ModifyRefund4DistributionRequest): Promise<ModifyRefund4DistributionResponse>;
    /**
     * 取消分销订单退款申请。
     */
    CancelRefund4Distribution(query: CancelRefund4DistributionRequest): Promise<CancelRefund4DistributionResponse>;
    /**
     * 分销订单物流查询。
     */
    QueryLogistics4Distribution(query: QueryLogistics4DistributionRequest): Promise<QueryLogistics4DistributionResponse>;
    /**
     * 初始化分销订单退款申请。
     */
    InitApplyRefund4Distribution(query: InitApplyRefund4DistributionRequest): Promise<InitApplyRefund4DistributionResponse>;
    /**
     * 基于子分销订单号查询逆向申请的详情。
     */
    QueryRefundApplicationDetail4Distribution(query: QueryRefundApplicationDetail4DistributionRequest): Promise<QueryRefundApplicationDetail4DistributionResponse>;
    /**
     * 分销订单退款申请。
     */
    ApplyRefund4Distribution(query: ApplyRefund4DistributionRequest): Promise<ApplyRefund4DistributionResponse>;
    /**
     * 取消/关闭分销交易。
     */
    CancelDistributionTrade(query: CancelDistributionTradeRequest): Promise<CancelDistributionTradeResponse>;
    /**
     * 分销订单退款申请修改初始化。
     */
    InitModifyRefund4Distribution(query: InitModifyRefund4DistributionRequest): Promise<InitModifyRefund4DistributionResponse>;
    /**
     * 分销订单渲染。
     */
    RenderDistributionOrder(query: RenderDistributionOrderRequest): Promise<RenderDistributionOrderResponse>;
    /**
     * 查询自己已经开通的商城列表。
     */
    ListDistributionMall(query: ListDistributionMallRequest): Promise<ListDistributionMallResponse>;
    /**
     * 分销订单确认收货。
     */
    ConfirmDisburse4Distribution(query: ConfirmDisburse4DistributionRequest): Promise<ConfirmDisburse4DistributionResponse>;
    /**
     * 如果提交了退货申请，通过该接口提交退货的物流信息。
     */
    SubmitReturnGoodLogistics4Distribution(query: SubmitReturnGoodLogistics4DistributionRequest): Promise<SubmitReturnGoodLogistics4DistributionResponse>;
    /**
     * 查询分销订单详情。
     */
    QueryOrderDetail4Distribution(query: QueryOrderDetail4DistributionRequest): Promise<QueryOrderDetail4DistributionResponse>;
    /**
     * 提交分销订单创建请求。
     */
    ApplyCreateDistributionOrder(query: ApplyCreateDistributionOrderRequest): Promise<ApplyCreateDistributionOrderResponse>;
    /**
     * 查询分销商商品库内的商品列表。
     */
    ListDistributionItem(query: ListDistributionItemRequest): Promise<ListDistributionItemResponse>;
    /**
     * 查询单个商品的详细信息
     * 。
     */
    QueryItemDetail(query: QueryItemDetailRequest): Promise<QueryItemDetailResponse>;
    QueryChildDivisionCodeById(query: QueryChildDivisionCodeByIdRequest): Promise<QueryChildDivisionCodeByIdResponse>;
    /**
     * 商品类目查询接口。
     */
    QueryMallCategoryList(query: QueryMallCategoryListRequest): Promise<QueryMallCategoryListResponse>;
    /**
     * 商品建议售价查询接口。
     */
    QueryItemGuideRetailPrice(query: QueryItemGuideRetailPriceRequest): Promise<QueryItemGuideRetailPriceResponse>;
    /**
     * 支持根据区域查询商品详细信息接口。
     */
    QueryItemDetailWithDivision(query: QueryItemDetailWithDivisionRequest): Promise<QueryItemDetailWithDivisionResponse>;
    /**
     * 分销账单明细数据查询接口。
     */
    QueryDistributionBillDetail(query: QueryDistributionBillDetailRequest): Promise<QueryDistributionBillDetailResponse>;
    /**
     * 查询无缓存分销商商品库内的商品列表，分销商品信息排序规则为商品的添加时间。
     */
    ListDistributionItemWithoutCache(query: ListDistributionItemWithoutCacheRequest): Promise<ListDistributionItemWithoutCacheResponse>;
}
export default LINKEDMALL;
