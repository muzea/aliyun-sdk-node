export interface QueryOrdersRequest {
    /**
     * 创建时间段止（缺省查询当前时间最近1小时内订单），格式：YYYY-MM-ddTHH:mm:ssZ。
     * @example `2016-05-23T12:00:00Z`
     */
    "CreateTimeEnd"?: string;
    /**
     * 页码。
     * @example `1`
     */
    "PageNum"?: number;
    /**
     * 每页条数。
     * @example `20`
     */
    "PageSize"?: number;
    /**
     * 产品代码。
     * @example `rds`
     */
    "ProductCode"?: string;
    /**
     * 产品类型。
     * @example `rds`
     */
    "ProductType"?: string;
    /**
     * 订阅类型。取值类型：
     * - Subscription：预付费。
     * - PayAsYouGo：后付费。
     * @example `Subscription`
     */
    "SubscriptionType"?: string;
    /**
     * 订单类型，取值范围
     * - New 新购
     * - Renew 续费
     * - Upgrade 升级
     * - TempUpgrade 短时升级
     * - Downgrade 降级
     * - Refund 退款
     * - Convert 付费类型转换
     * - ResizeDisk 调整磁盘大小
     * - CompensatoryRenew 补偿续费
     * - IncreaseUpgrade 带宽升级
     * - Exchange 换购
     * - ChangeOperatingSystem 更换操作系统
     * @example `New`
     */
    "OrderType"?: string;
    /**
     * 支付状态。非退款订单，取值范围：
     * - Unpaid：未支付。
     * - Paid：已支付。
     * - Cancelled：已作废。
     * > 对于退款订单可置NULL。
     * @example `Paid`
     */
    "PaymentStatus"?: string;
    /**
     * 创建时间段起（缺省查询当前时间最近1小时内订单），格式：YYYY-MM-ddTHH:mm:ssZ。
     * @example `2016-05-23T13:00:00Z`
     */
    "CreateTimeStart"?: string;
}
