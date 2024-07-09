export interface CancelSubscriptionBillRequest {
    /**
     * 订阅类型
     * -  PartnerBillingItemDetailForBillingPeriod  计费项账单明细
     * - PartnerBillingItemDetailMonthly    计费项月账单
     * - PartnerInstanceDetailForBillingPeriod  实例账单明细
     * - PartnerInstanceDetailMonthly 实例月账单
     * @example `PartnerBillingItemDetailForBillingPeriod`
     */
    "SubscribeType": string;
}
