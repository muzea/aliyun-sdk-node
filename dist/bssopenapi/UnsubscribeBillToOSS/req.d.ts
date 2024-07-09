export interface UnsubscribeBillToOSSRequest {
    /**
     * 订阅类型。取值类型：
     * - BillingItemDetailForBillingPeriod：计费项消费明细。
     * - InstanceDetailForBillingPeriod：实例消费明细。
     * - BillingItemDetailMonthly：计费项消费账期汇总。
     * - InstanceDetailMonthly：实例消费账期汇总。
     * - SplitItemDetailDaily: 分账账单按天汇总。
     * - MonthBill：月账单PDF。仅支持订阅MA。
     * @example `BillingItemDetailForBillingPeriod`
     */
    "SubscribeType": string;
    /**
     * 对于多级账号，可指定推送账单的类型。可选值为：
     * - MA：推送主账号账单。
     * - ACP1：推送虚商子账号账单。
     * 默认值：MA。
     * @example `MA`
     */
    "MultAccountRelSubscribe"?: string;
}
