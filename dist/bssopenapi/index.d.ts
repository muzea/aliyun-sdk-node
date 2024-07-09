import { AllocateCostUnitResourceRequest } from "./AllocateCostUnitResource/req";
import { AllocateCostUnitResourceResponse } from "./AllocateCostUnitResource/res";
import { ApplyInvoiceRequest } from "./ApplyInvoice/req";
import { ApplyInvoiceResponse } from "./ApplyInvoice/res";
import { CancelOrderRequest } from "./CancelOrder/req";
import { CancelOrderResponse } from "./CancelOrder/res";
import { ChangeResellerConsumeAmountRequest } from "./ChangeResellerConsumeAmount/req";
import { ChangeResellerConsumeAmountResponse } from "./ChangeResellerConsumeAmount/res";
import { ConvertChargeTypeRequest } from "./ConvertChargeType/req";
import { ConvertChargeTypeResponse } from "./ConvertChargeType/res";
import { CreateAgAccountRequest } from "./CreateAgAccount/req";
import { CreateAgAccountResponse } from "./CreateAgAccount/res";
import { CreateCostUnitRequest } from "./CreateCostUnit/req";
import { CreateCostUnitResponse } from "./CreateCostUnit/res";
import { CreateInstanceRequest } from "./CreateInstance/req";
import { CreateInstanceResponse } from "./CreateInstance/res";
import { CreateResellerUserQuotaRequest } from "./CreateResellerUserQuota/req";
import { CreateResellerUserQuotaResponse } from "./CreateResellerUserQuota/res";
import { CreateResourcePackageRequest } from "./CreateResourcePackage/req";
import { CreateResourcePackageResponse } from "./CreateResourcePackage/res";
import { DeleteCostUnitRequest } from "./DeleteCostUnit/req";
import { DeleteCostUnitResponse } from "./DeleteCostUnit/res";
import { DescribePricingModuleRequest } from "./DescribePricingModule/req";
import { DescribePricingModuleResponse } from "./DescribePricingModule/res";
import { DescribeResourcePackageProductRequest } from "./DescribeResourcePackageProduct/req";
import { DescribeResourcePackageProductResponse } from "./DescribeResourcePackageProduct/res";
import { GetCustomerAccountInfoRequest } from "./GetCustomerAccountInfo/req";
import { GetCustomerAccountInfoResponse } from "./GetCustomerAccountInfo/res";
import { GetCustomerListRequest } from "./GetCustomerList/req";
import { GetCustomerListResponse } from "./GetCustomerList/res";
import { GetOrderDetailRequest } from "./GetOrderDetail/req";
import { GetOrderDetailResponse } from "./GetOrderDetail/res";
import { GetPayAsYouGoPriceRequest } from "./GetPayAsYouGoPrice/req";
import { GetPayAsYouGoPriceResponse } from "./GetPayAsYouGoPrice/res";
import { GetResourcePackagePriceRequest } from "./GetResourcePackagePrice/req";
import { GetResourcePackagePriceResponse } from "./GetResourcePackagePrice/res";
import { GetSubscriptionPriceRequest } from "./GetSubscriptionPrice/req";
import { GetSubscriptionPriceResponse } from "./GetSubscriptionPrice/res";
import { ModifyCostUnitRequest } from "./ModifyCostUnit/req";
import { ModifyCostUnitResponse } from "./ModifyCostUnit/res";
import { ModifyInstanceRequest } from "./ModifyInstance/req";
import { ModifyInstanceResponse } from "./ModifyInstance/res";
import { QueryAccountBalanceRequest } from "./QueryAccountBalance/req";
import { QueryAccountBalanceResponse } from "./QueryAccountBalance/res";
import { QueryAccountBillRequest } from "./QueryAccountBill/req";
import { QueryAccountBillResponse } from "./QueryAccountBill/res";
import { QueryAccountTransactionDetailsRequest } from "./QueryAccountTransactionDetails/req";
import { QueryAccountTransactionDetailsResponse } from "./QueryAccountTransactionDetails/res";
import { QueryAccountTransactionsRequest } from "./QueryAccountTransactions/req";
import { QueryAccountTransactionsResponse } from "./QueryAccountTransactions/res";
import { QueryAvailableInstancesRequest } from "./QueryAvailableInstances/req";
import { QueryAvailableInstancesResponse } from "./QueryAvailableInstances/res";
import { QueryBillRequest } from "./QueryBill/req";
import { QueryBillResponse } from "./QueryBill/res";
import { QueryBillOverviewRequest } from "./QueryBillOverview/req";
import { QueryBillOverviewResponse } from "./QueryBillOverview/res";
import { QueryBillToOSSSubscriptionRequest } from "./QueryBillToOSSSubscription/req";
import { QueryBillToOSSSubscriptionResponse } from "./QueryBillToOSSSubscription/res";
import { QueryCashCouponsRequest } from "./QueryCashCoupons/req";
import { QueryCashCouponsResponse } from "./QueryCashCoupons/res";
import { QueryCostUnitRequest } from "./QueryCostUnit/req";
import { QueryCostUnitResponse } from "./QueryCostUnit/res";
import { QueryCostUnitResourceRequest } from "./QueryCostUnitResource/req";
import { QueryCostUnitResourceResponse } from "./QueryCostUnitResource/res";
import { QueryCustomerAddressListRequest } from "./QueryCustomerAddressList/req";
import { QueryCustomerAddressListResponse } from "./QueryCustomerAddressList/res";
import { QueryEvaluateListRequest } from "./QueryEvaluateList/req";
import { QueryEvaluateListResponse } from "./QueryEvaluateList/res";
import { QueryInstanceBillRequest } from "./QueryInstanceBill/req";
import { QueryInstanceBillResponse } from "./QueryInstanceBill/res";
import { QueryInstanceGaapCostRequest } from "./QueryInstanceGaapCost/req";
import { QueryInstanceGaapCostResponse } from "./QueryInstanceGaapCost/res";
import { QueryInvoicingCustomerListRequest } from "./QueryInvoicingCustomerList/req";
import { QueryInvoicingCustomerListResponse } from "./QueryInvoicingCustomerList/res";
import { QueryOrdersRequest } from "./QueryOrders/req";
import { QueryOrdersResponse } from "./QueryOrders/res";
import { QueryPrepaidCardsRequest } from "./QueryPrepaidCards/req";
import { QueryPrepaidCardsResponse } from "./QueryPrepaidCards/res";
import { QueryProductListRequest } from "./QueryProductList/req";
import { QueryProductListResponse } from "./QueryProductList/res";
import { QueryRIUtilizationDetailRequest } from "./QueryRIUtilizationDetail/req";
import { QueryRIUtilizationDetailResponse } from "./QueryRIUtilizationDetail/res";
import { QueryRedeemRequest } from "./QueryRedeem/req";
import { QueryRedeemResponse } from "./QueryRedeem/res";
import { QueryResellerAvailableQuotaRequest } from "./QueryResellerAvailableQuota/req";
import { QueryResellerAvailableQuotaResponse } from "./QueryResellerAvailableQuota/res";
import { QueryResourcePackageInstancesRequest } from "./QueryResourcePackageInstances/req";
import { QueryResourcePackageInstancesResponse } from "./QueryResourcePackageInstances/res";
import { QuerySettleBillRequest } from "./QuerySettleBill/req";
import { QuerySettleBillResponse } from "./QuerySettleBill/res";
import { QuerySplitItemBillRequest } from "./QuerySplitItemBill/req";
import { QuerySplitItemBillResponse } from "./QuerySplitItemBill/res";
import { QueryUserOmsDataRequest } from "./QueryUserOmsData/req";
import { QueryUserOmsDataResponse } from "./QueryUserOmsData/res";
import { RenewInstanceRequest } from "./RenewInstance/req";
import { RenewInstanceResponse } from "./RenewInstance/res";
import { RenewResourcePackageRequest } from "./RenewResourcePackage/req";
import { RenewResourcePackageResponse } from "./RenewResourcePackage/res";
import { SetRenewalRequest } from "./SetRenewal/req";
import { SetRenewalResponse } from "./SetRenewal/res";
import { SetResellerUserAlarmThresholdRequest } from "./SetResellerUserAlarmThreshold/req";
import { SetResellerUserAlarmThresholdResponse } from "./SetResellerUserAlarmThreshold/res";
import { SetResellerUserQuotaRequest } from "./SetResellerUserQuota/req";
import { SetResellerUserQuotaResponse } from "./SetResellerUserQuota/res";
import { SetResellerUserStatusRequest } from "./SetResellerUserStatus/req";
import { SetResellerUserStatusResponse } from "./SetResellerUserStatus/res";
import { SubscribeBillToOSSRequest } from "./SubscribeBillToOSS/req";
import { SubscribeBillToOSSResponse } from "./SubscribeBillToOSS/res";
import { UnsubscribeBillToOSSRequest } from "./UnsubscribeBillToOSS/req";
import { UnsubscribeBillToOSSResponse } from "./UnsubscribeBillToOSS/res";
import { UpgradeResourcePackageRequest } from "./UpgradeResourcePackage/req";
import { UpgradeResourcePackageResponse } from "./UpgradeResourcePackage/res";
import { QuerySavingsPlansDeductLogRequest } from "./QuerySavingsPlansDeductLog/req";
import { QuerySavingsPlansDeductLogResponse } from "./QuerySavingsPlansDeductLog/res";
import { QuerySavingsPlansInstanceRequest } from "./QuerySavingsPlansInstance/req";
import { QuerySavingsPlansInstanceResponse } from "./QuerySavingsPlansInstance/res";
import { QueryFinancialAccountInfoRequest } from "./QueryFinancialAccountInfo/req";
import { QueryFinancialAccountInfoResponse } from "./QueryFinancialAccountInfo/res";
import { QueryPermissionListRequest } from "./QueryPermissionList/req";
import { QueryPermissionListResponse } from "./QueryPermissionList/res";
import { QueryRelationListRequest } from "./QueryRelationList/req";
import { QueryRelationListResponse } from "./QueryRelationList/res";
import { QueryInstanceByTagRequest } from "./QueryInstanceByTag/req";
import { QueryInstanceByTagResponse } from "./QueryInstanceByTag/res";
import { TagResourcesRequest } from "./TagResources/req";
import { TagResourcesResponse } from "./TagResources/res";
import { UntagResourcesRequest } from "./UntagResources/req";
import { UntagResourcesResponse } from "./UntagResources/res";
import { DescribeSplitItemBillRequest } from "./DescribeSplitItemBill/req";
import { DescribeSplitItemBillResponse } from "./DescribeSplitItemBill/res";
import { DescribeInstanceBillRequest } from "./DescribeInstanceBill/req";
import { DescribeInstanceBillResponse } from "./DescribeInstanceBill/res";
import { QueryDPUtilizationDetailRequest } from "./QueryDPUtilizationDetail/req";
import { QueryDPUtilizationDetailResponse } from "./QueryDPUtilizationDetail/res";
import { DescribeResourceCoverageDetailRequest } from "./DescribeResourceCoverageDetail/req";
import { DescribeResourceCoverageDetailResponse } from "./DescribeResourceCoverageDetail/res";
import { DescribeResourceCoverageTotalRequest } from "./DescribeResourceCoverageTotal/req";
import { DescribeResourceCoverageTotalResponse } from "./DescribeResourceCoverageTotal/res";
import { DescribeResourceUsageDetailRequest } from "./DescribeResourceUsageDetail/req";
import { DescribeResourceUsageDetailResponse } from "./DescribeResourceUsageDetail/res";
import { DescribeResourceUsageTotalRequest } from "./DescribeResourceUsageTotal/req";
import { DescribeResourceUsageTotalResponse } from "./DescribeResourceUsageTotal/res";
import { AddAccountRelationRequest } from "./AddAccountRelation/req";
import { AddAccountRelationResponse } from "./AddAccountRelation/res";
import { ConfirmRelationRequest } from "./ConfirmRelation/req";
import { ConfirmRelationResponse } from "./ConfirmRelation/res";
import { ModifyAccountRelationRequest } from "./ModifyAccountRelation/req";
import { ModifyAccountRelationResponse } from "./ModifyAccountRelation/res";
import { RelieveAccountRelationRequest } from "./RelieveAccountRelation/req";
import { RelieveAccountRelationResponse } from "./RelieveAccountRelation/res";
import { SetAllExpirationDayRequest } from "./SetAllExpirationDay/req";
import { SetAllExpirationDayResponse } from "./SetAllExpirationDay/res";
import { DescribeSavingsPlansCoverageDetailRequest } from "./DescribeSavingsPlansCoverageDetail/req";
import { DescribeSavingsPlansCoverageDetailResponse } from "./DescribeSavingsPlansCoverageDetail/res";
import { DescribeSavingsPlansCoverageTotalRequest } from "./DescribeSavingsPlansCoverageTotal/req";
import { DescribeSavingsPlansCoverageTotalResponse } from "./DescribeSavingsPlansCoverageTotal/res";
import { DescribeSavingsPlansUsageDetailRequest } from "./DescribeSavingsPlansUsageDetail/req";
import { DescribeSavingsPlansUsageDetailResponse } from "./DescribeSavingsPlansUsageDetail/res";
import { DescribeSavingsPlansUsageTotalRequest } from "./DescribeSavingsPlansUsageTotal/req";
import { DescribeSavingsPlansUsageTotalResponse } from "./DescribeSavingsPlansUsageTotal/res";
import { CreateSavingsPlansInstanceRequest } from "./CreateSavingsPlansInstance/req";
import { CreateSavingsPlansInstanceResponse } from "./CreateSavingsPlansInstance/res";
import { GetAccountRelationRequest } from "./GetAccountRelation/req";
import { GetAccountRelationResponse } from "./GetAccountRelation/res";
import { InquiryPriceRefundInstanceRequest } from "./InquiryPriceRefundInstance/req";
import { InquiryPriceRefundInstanceResponse } from "./InquiryPriceRefundInstance/res";
import { RefundInstanceRequest } from "./RefundInstance/req";
import { RefundInstanceResponse } from "./RefundInstance/res";
import { ReleaseInstanceRequest } from "./ReleaseInstance/req";
import { ReleaseInstanceResponse } from "./ReleaseInstance/res";
import { QueryPriceEntityListRequest } from "./QueryPriceEntityList/req";
import { QueryPriceEntityListResponse } from "./QueryPriceEntityList/res";
import { QueryCommodityListRequest } from "./QueryCommodityList/req";
import { QueryCommodityListResponse } from "./QueryCommodityList/res";
import { QuerySkuPriceListRequest } from "./QuerySkuPriceList/req";
import { QuerySkuPriceListResponse } from "./QuerySkuPriceList/res";
import { QuerySavingsPlansDiscountRequest } from "./QuerySavingsPlansDiscount/req";
import { QuerySavingsPlansDiscountResponse } from "./QuerySavingsPlansDiscount/res";
import { DescribeCostBudgetsSummaryRequest } from "./DescribeCostBudgetsSummary/req";
import { DescribeCostBudgetsSummaryResponse } from "./DescribeCostBudgetsSummary/res";
import { DescribeInstanceAmortizedCostByAmortizationPeriodRequest } from "./DescribeInstanceAmortizedCostByAmortizationPeriod/req";
import { DescribeInstanceAmortizedCostByAmortizationPeriodResponse } from "./DescribeInstanceAmortizedCostByAmortizationPeriod/res";
import { DescribeProductAmortizedCostByAmortizationPeriodRequest } from "./DescribeProductAmortizedCostByAmortizationPeriod/req";
import { DescribeProductAmortizedCostByAmortizationPeriodResponse } from "./DescribeProductAmortizedCostByAmortizationPeriod/res";
import { DescribeInstanceAmortizedCostByConsumePeriodRequest } from "./DescribeInstanceAmortizedCostByConsumePeriod/req";
import { DescribeInstanceAmortizedCostByConsumePeriodResponse } from "./DescribeInstanceAmortizedCostByConsumePeriod/res";
import { DescribeProductAmortizedCostByConsumePeriodRequest } from "./DescribeProductAmortizedCostByConsumePeriod/req";
import { DescribeProductAmortizedCostByConsumePeriodResponse } from "./DescribeProductAmortizedCostByConsumePeriod/res";
import { QueryResellerUserAlarmThresholdRequest } from "./QueryResellerUserAlarmThreshold/req";
import { QueryResellerUserAlarmThresholdResponse } from "./QueryResellerUserAlarmThreshold/res";
import { RenewChangeInstanceRequest } from "./RenewChangeInstance/req";
import { RenewChangeInstanceResponse } from "./RenewChangeInstance/res";

interface BSSOPENAPI {
    /**
     * 资源实例（实例型和分拆型）从源财务单元分配到目标财务单元。
     */
    AllocateCostUnitResource(query: AllocateCostUnitResourceRequest): Promise<AllocateCostUnitResourceResponse>;
    /**
     * 提交开票申请服务。
     */
    ApplyInvoice(query: ApplyInvoiceRequest): Promise<ApplyInvoiceResponse>;
    /**
     * 调用CancelOrder取消未支付订单服务。
     */
    CancelOrder(query: CancelOrderRequest): Promise<CancelOrderResponse>;
    ChangeResellerConsumeAmount(query: ChangeResellerConsumeAmountRequest): Promise<ChangeResellerConsumeAmountResponse>;
    /**
     * 为一个实例变更订阅类型。目前支持SLB、EIP和NAT网关后付费实例转预付费实例，和SLB、EIP产品预付费转后付费实例操作。
     */
    ConvertChargeType(query: ConvertChargeTypeRequest): Promise<ConvertChargeTypeResponse>;
    /**
     * 创建一个财务关联关系。
     */
    CreateAgAccount(query: CreateAgAccountRequest): Promise<CreateAgAccountResponse>;
    /**
     * 创建财务单元，支持批量创建。
     */
    CreateCostUnit(query: CreateCostUnitRequest): Promise<CreateCostUnitResponse>;
    /**
     * 创建一个实例资源，会创建一个新购实例资源的订单，并自动支付。不支持ECS和RDS系列产品的创建。
     */
    CreateInstance(query: CreateInstanceRequest): Promise<CreateInstanceResponse>;
    /**
     * 创建用户 Quota 配额账本和 Quota 消费账本。
     */
    CreateResellerUserQuota(query: CreateResellerUserQuotaRequest): Promise<CreateResellerUserQuotaResponse>;
    /**
     * 创建用户某个资源包的实例。
     */
    CreateResourcePackage(query: CreateResourcePackageRequest): Promise<CreateResourcePackageResponse>;
    /**
     * 删除财务单元。
     */
    DeleteCostUnit(query: DeleteCostUnitRequest): Promise<DeleteCostUnitResponse>;
    /**
     * 查询阿里云某个产品对应模块信息。
     */
    DescribePricingModule(query: DescribePricingModuleRequest): Promise<DescribePricingModuleResponse>;
    /**
     * 查询某个资源包产品的信息。
     */
    DescribeResourcePackageProduct(query: DescribeResourcePackageProductRequest): Promise<DescribeResourcePackageProductResponse>;
    /**
     * 查询虚商下终端客户账号信息。
     */
    GetCustomerAccountInfo(query: GetCustomerAccountInfoRequest): Promise<GetCustomerAccountInfoResponse>;
    /**
     * 查询虚商下的终端客户uid列表。
     */
    GetCustomerList(query: GetCustomerListRequest): Promise<GetCustomerListResponse>;
    /**
     * 查询用户或分销客户某个订单详情信息。
     */
    GetOrderDetail(query: GetOrderDetailRequest): Promise<GetOrderDetailResponse>;
    /**
     * 查询后付费产品价格。
     */
    GetPayAsYouGoPrice(query: GetPayAsYouGoPriceRequest): Promise<GetPayAsYouGoPriceResponse>;
    /**
     * 查询用户某个资源包的价格。
     */
    GetResourcePackagePrice(query: GetResourcePackagePriceRequest): Promise<GetResourcePackagePriceResponse>;
    /**
     * 查询预付费产品价格。
     */
    GetSubscriptionPrice(query: GetSubscriptionPriceRequest): Promise<GetSubscriptionPriceResponse>;
    /**
     * 修改财务单元，支持批量修改。
     */
    ModifyCostUnit(query: ModifyCostUnitRequest): Promise<ModifyCostUnitResponse>;
    /**
     * 对实例资源配置进行变更。调用接口会创建一个变配实例资源的订单，并自动支付。该接口不支持ECS和RDS 系列产品的变更，请查找对应产品的专有API执行变配。
     */
    ModifyInstance(query: ModifyInstanceRequest): Promise<ModifyInstanceResponse>;
    /**
     * 查询用户账户余额信息。
     */
    QueryAccountBalance(query: QueryAccountBalanceRequest): Promise<QueryAccountBalanceResponse>;
    /**
     * 查询用户某个账期内的消费，并以资源所有者的维度进行汇总。
     */
    QueryAccountBill(query: QueryAccountBillRequest): Promise<QueryAccountBillResponse>;
    /**
     * 查询用户收支明细。
     */
    QueryAccountTransactionDetails(query: QueryAccountTransactionDetailsRequest): Promise<QueryAccountTransactionDetailsResponse>;
    /**
     * 查询用户账户流水信息。
     */
    QueryAccountTransactions(query: QueryAccountTransactionsRequest): Promise<QueryAccountTransactionsResponse>;
    /**
     * 查询用户可用实例列表。
     */
    QueryAvailableInstances(query: QueryAvailableInstancesRequest): Promise<QueryAvailableInstancesResponse>;
    /**
     * 查询用户某个账期内结算账单。
     */
    QueryBill(query: QueryBillRequest): Promise<QueryBillResponse>;
    /**
     * 查询用户某个账期内账单总览信息。
     */
    QueryBillOverview(query: QueryBillOverviewRequest): Promise<QueryBillOverviewResponse>;
    /**
     * 查询账单订阅到OSS储存桶的记录。
     */
    QueryBillToOSSSubscription(query: QueryBillToOSSSubscriptionRequest): Promise<QueryBillToOSSSubscriptionResponse>;
    /**
     * 查询用户代金券信息。
     */
    QueryCashCoupons(query: QueryCashCouponsRequest): Promise<QueryCashCouponsResponse>;
    /**
     * 查询财务单元树当前节点下的所有财务单元节点。当 ParentUnitId 为 -1，表示查所有财务单元。
     */
    QueryCostUnit(query: QueryCostUnitRequest): Promise<QueryCostUnitResponse>;
    /**
     * 查询用户的财务单元所属的资源实例列表。当 UnitId 为 0，表示查未分配的主子资源实例。
     */
    QueryCostUnitResource(query: QueryCostUnitResourceRequest): Promise<QueryCostUnitResourceResponse>;
    /**
     * 查询阿里云发票邮寄地址信息服务。
     */
    QueryCustomerAddressList(query: QueryCustomerAddressListRequest): Promise<QueryCustomerAddressListResponse>;
    /**
     * 查询待开票对象信息。
     */
    QueryEvaluateList(query: QueryEvaluateListRequest): Promise<QueryEvaluateListResponse>;
    /**
     * 查询用户某个账期内所有商品实例或计费项的消费汇总。API已升级为DescribeInstanceBill，此API不再提供50000行以后数据的查询。
     */
    QueryInstanceBill(query: QueryInstanceBillRequest): Promise<QueryInstanceBillResponse>;
    /**
     * 该API不再更新。请前往使用如下API获取对应分摊成本：
     * DescribeInstanceAmortizedCostByAmortizationPeriod - 查询实例摊销月摊销成本；
     * DescribeProductAmortizedCostByAmortizationPeriod- 查询产品摊销月摊销成本；
     * DescribeInstanceAmortizedCostByConsumePeriod- 查询实例账期月摊销成本；
     * DescribeProductAmortizedCostByConsumePeriod- 查询产品账期月摊销成本。
     */
    QueryInstanceGaapCost(query: QueryInstanceGaapCostRequest): Promise<QueryInstanceGaapCostResponse>;
    /**
     * 查询阿里云用户发票抬头信息。
     */
    QueryInvoicingCustomerList(query: QueryInvoicingCustomerListRequest): Promise<QueryInvoicingCustomerListResponse>;
    /**
     * 查询用户或者分销客户订单列表情况。默认查询当前时间最近1小时范围内订单，如需查询更长时间范围的订单数据，请设CreateTimeStart和CreateTimeEnd参数。
     */
    QueryOrders(query: QueryOrdersRequest): Promise<QueryOrdersResponse>;
    /**
     * 查询用户卡包信息。
     */
    QueryPrepaidCards(query: QueryPrepaidCardsRequest): Promise<QueryPrepaidCardsResponse>;
    /**
     * 查询阿里云产品信息。
     */
    QueryProductList(query: QueryProductListRequest): Promise<QueryProductListResponse>;
    /**
     * 查询RI的使用量情况。
     */
    QueryRIUtilizationDetail(query: QueryRIUtilizationDetailRequest): Promise<QueryRIUtilizationDetailResponse>;
    /**
     * 查询用户提货券信息。
     */
    QueryRedeem(query: QueryRedeemRequest): Promise<QueryRedeemResponse>;
    /**
     * 查询用户（代付场景下设置消费配额）的当前可用配额余额信息。
     */
    QueryResellerAvailableQuota(query: QueryResellerAvailableQuotaRequest): Promise<QueryResellerAvailableQuotaResponse>;
    /**
     * 查询用户某个资源包的实例，限定支持查询失效时间一年以内的资源包。
     */
    QueryResourcePackageInstances(query: QueryResourcePackageInstancesRequest): Promise<QueryResourcePackageInstancesResponse>;
    /**
     * 查询用户某个账期内结算账单。支持账单条目超过50000条的国内账号。
     */
    QuerySettleBill(query: QuerySettleBillRequest): Promise<QuerySettleBillResponse>;
    /**
     * 查询分账账单。分账账单API已升级，请使用新版API：DescribeSplitItemBill。
     */
    QuerySplitItemBill(query: QuerySplitItemBillRequest): Promise<QuerySplitItemBillResponse>;
    /**
     * 根据传入的云产品查询相应的计量记录。
     */
    QueryUserOmsData(query: QueryUserOmsDataRequest): Promise<QueryUserOmsDataResponse>;
    /**
     * 对相关实例进行续费。不支持ECS、RDS、REDIS产品类实例的续费，请查找对应产品的专用续费API执行续费。
     */
    RenewInstance(query: RenewInstanceRequest): Promise<RenewInstanceResponse>;
    /**
     * 为用户某个资源包实例续费。
     */
    RenewResourcePackage(query: RenewResourcePackageRequest): Promise<RenewResourcePackageResponse>;
    /**
     * 调用SetRenewal为一个实例设置自动续费服务。
     */
    SetRenewal(query: SetRenewalRequest): Promise<SetRenewalResponse>;
    SetResellerUserAlarmThreshold(query: SetResellerUserAlarmThresholdRequest): Promise<SetResellerUserAlarmThresholdResponse>;
    SetResellerUserQuota(query: SetResellerUserQuotaRequest): Promise<SetResellerUserQuotaResponse>;
    SetResellerUserStatus(query: SetResellerUserStatusRequest): Promise<SetResellerUserStatusResponse>;
    /**
     * 导出阿里云OSS订阅账单详单数据。
     */
    SubscribeBillToOSS(query: SubscribeBillToOSSRequest): Promise<SubscribeBillToOSSResponse>;
    /**
     * 取消详单导出订阅。
     */
    UnsubscribeBillToOSS(query: UnsubscribeBillToOSSRequest): Promise<UnsubscribeBillToOSSResponse>;
    /**
     * 升级用户某个资源包的实例。
     */
    UpgradeResourcePackage(query: UpgradeResourcePackageRequest): Promise<UpgradeResourcePackageResponse>;
    /**
     * 查询节省计划抵扣的明细数据
     */
    QuerySavingsPlansDeductLog(query: QuerySavingsPlansDeductLogRequest): Promise<QuerySavingsPlansDeductLogResponse>;
    /**
     * 查询当前用户保有的节省计划实例信息。
     */
    QuerySavingsPlansInstance(query: QuerySavingsPlansInstanceRequest): Promise<QuerySavingsPlansInstanceResponse>;
    /**
     * 查询有主子关系权限的账号的企业财务账号信息。
     */
    QueryFinancialAccountInfo(query: QueryFinancialAccountInfoRequest): Promise<QueryFinancialAccountInfoResponse>;
    /**
     * 根据关系ID查询有主子关系权限的关系的权限列表。
     */
    QueryPermissionList(query: QueryPermissionListRequest): Promise<QueryPermissionListResponse>;
    /**
     * 查询有主子关系权限的账号的成员账号关系列表。
     */
    QueryRelationList(query: QueryRelationListRequest): Promise<QueryRelationListResponse>;
    /**
     * 根据标签信息查询实例列表。
     */
    QueryInstanceByTag(query: QueryInstanceByTagRequest): Promise<QueryInstanceByTagResponse>;
    /**
     * 支持添加资源上配置的标签。
     */
    TagResources(query: TagResourcesRequest): Promise<TagResourcesResponse>;
    /**
     * 取消资源上配置的标签。
     */
    UntagResources(query: UntagResourcesRequest): Promise<UntagResourcesResponse>;
    /**
     * 查询分账账单。
     */
    DescribeSplitItemBill(query: DescribeSplitItemBillRequest): Promise<DescribeSplitItemBillResponse>;
    /**
     * 查询用户某个账期内所有商品实例或计费项的消费汇总。
     */
    DescribeInstanceBill(query: DescribeInstanceBillRequest): Promise<DescribeInstanceBillResponse>;
    /**
     * 查询资源包(包含RI、scu)的使用量情况。
     */
    QueryDPUtilizationDetail(query: QueryDPUtilizationDetailRequest): Promise<QueryDPUtilizationDetailResponse>;
    /**
     * 预留实例、SCU覆盖率明细查询。
     */
    DescribeResourceCoverageDetail(query: DescribeResourceCoverageDetailRequest): Promise<DescribeResourceCoverageDetailResponse>;
    /**
     * 预留实例、SCU覆盖率汇总查询。
     */
    DescribeResourceCoverageTotal(query: DescribeResourceCoverageTotalRequest): Promise<DescribeResourceCoverageTotalResponse>;
    /**
     * 预留实例、SCU使用率明细查询。
     */
    DescribeResourceUsageDetail(query: DescribeResourceUsageDetailRequest): Promise<DescribeResourceUsageDetailResponse>;
    /**
     * 预留实例、SCU使用率汇总查询。
     */
    DescribeResourceUsageTotal(query: DescribeResourceUsageTotalRequest): Promise<DescribeResourceUsageTotalResponse>;
    /**
     * 创建一个财务关联关系。
     */
    AddAccountRelation(query: AddAccountRelationRequest): Promise<AddAccountRelationResponse>;
    /**
     * 子账号确认主账号发起的邀约。
     */
    ConfirmRelation(query: ConfirmRelationRequest): Promise<ConfirmRelationResponse>;
    /**
     * 支持添加、删除财务关联权限点。
     */
    ModifyAccountRelation(query: ModifyAccountRelationRequest): Promise<ModifyAccountRelationResponse>;
    /**
     * 解除主、子账号关联。
     */
    RelieveAccountRelation(query: RelieveAccountRelationRequest): Promise<RelieveAccountRelationResponse>;
    /**
     * 为ECS实例的续费设置统一到期日。
     */
    SetAllExpirationDay(query: SetAllExpirationDayRequest): Promise<SetAllExpirationDayResponse>;
    /**
     * 节省计划覆盖率明细查询。
     */
    DescribeSavingsPlansCoverageDetail(query: DescribeSavingsPlansCoverageDetailRequest): Promise<DescribeSavingsPlansCoverageDetailResponse>;
    /**
     * 节省计划覆盖率汇总查询。
     */
    DescribeSavingsPlansCoverageTotal(query: DescribeSavingsPlansCoverageTotalRequest): Promise<DescribeSavingsPlansCoverageTotalResponse>;
    /**
     * 节省计划使用率明细查询
     */
    DescribeSavingsPlansUsageDetail(query: DescribeSavingsPlansUsageDetailRequest): Promise<DescribeSavingsPlansUsageDetailResponse>;
    /**
     * 节省计划使用率汇总查询
     */
    DescribeSavingsPlansUsageTotal(query: DescribeSavingsPlansUsageTotalRequest): Promise<DescribeSavingsPlansUsageTotalResponse>;
    /**
     * 新购一个节省计划，并自动完成支付，创建节省计划实例。
     */
    CreateSavingsPlansInstance(query: CreateSavingsPlansInstanceRequest): Promise<CreateSavingsPlansInstanceResponse>;
    /**
     * 查询财务关联详情。
     */
    GetAccountRelation(query: GetAccountRelationRequest): Promise<GetAccountRelationResponse>;
    /**
     * InquiryPriceRefundInstance：调用本接口对需要退订的实例进行询价。
     */
    InquiryPriceRefundInstance(query: InquiryPriceRefundInstanceRequest): Promise<InquiryPriceRefundInstanceResponse>;
    /**
     * RefundInstance：调用本接口退订不再需要的实例。
     */
    RefundInstance(query: RefundInstanceRequest): Promise<RefundInstanceResponse>;
    /**
     * 国家云虚商侧主动释放实例。
     */
    ReleaseInstance(query: ReleaseInstanceRequest): Promise<ReleaseInstanceResponse>;
    /**
     * 本API是用来查询一个商品下有哪些定价对象。
     * 定价对象是用来计量和计算费用的最小产品能力。
     */
    QueryPriceEntityList(query: QueryPriceEntityListRequest): Promise<QueryPriceEntityListResponse>;
    /**
     * 该接口提供根据产品code获取商品信息列表的能力。
     */
    QueryCommodityList(query: QueryCommodityListRequest): Promise<QueryCommodityListResponse>;
    /**
     * 通常一个产品功能会有1到多个SKU，有的产品会多达数万级别的SKU。
     * 本API是用来查询一个指定的产品功能下的SKU列表及其目录价。接口入参支持按照某种SKU配置的条件来进行过滤查询。
     */
    QuerySkuPriceList(query: QuerySkuPriceListRequest): Promise<QuerySkuPriceListResponse>;
    /**
     * 查询节省计划折扣信息列表。
     */
    QuerySavingsPlansDiscount(query: QuerySavingsPlansDiscountRequest): Promise<QuerySavingsPlansDiscountResponse>;
    /**
     * 查询用户 “成本管理-预算”的概要信息。
     */
    DescribeCostBudgetsSummary(query: DescribeCostBudgetsSummaryRequest): Promise<DescribeCostBudgetsSummaryResponse>;
    /**
     * 以摊销月视角查询月实例摊销成本。
     */
    DescribeInstanceAmortizedCostByAmortizationPeriod(query: DescribeInstanceAmortizedCostByAmortizationPeriodRequest): Promise<DescribeInstanceAmortizedCostByAmortizationPeriodResponse>;
    /**
     * 以摊销月视角查询月产品摊销成本。
     */
    DescribeProductAmortizedCostByAmortizationPeriod(query: DescribeProductAmortizedCostByAmortizationPeriodRequest): Promise<DescribeProductAmortizedCostByAmortizationPeriodResponse>;
    /**
     * 以账期月视角查询月实例摊销成本。
     */
    DescribeInstanceAmortizedCostByConsumePeriod(query: DescribeInstanceAmortizedCostByConsumePeriodRequest): Promise<DescribeInstanceAmortizedCostByConsumePeriodResponse>;
    /**
     * 以账期月视角查询月产品摊销成本。
     */
    DescribeProductAmortizedCostByConsumePeriod(query: DescribeProductAmortizedCostByConsumePeriodRequest): Promise<DescribeProductAmortizedCostByConsumePeriodResponse>;
    /**
     * 查询 Quota 额度低额预警规则
     */
    QueryResellerUserAlarmThreshold(query: QueryResellerUserAlarmThresholdRequest): Promise<QueryResellerUserAlarmThresholdResponse>;
    /**
     * 对一个实例续费的同时进行变配操作，实际变配时间，是续费订单生效的时间，并自动支付。不支持ECS和RDS系列产品的创建。
     */
    RenewChangeInstance(query: RenewChangeInstanceRequest): Promise<RenewChangeInstanceResponse>;
}
export default BSSOPENAPI;
