export interface CreateOrderForDeleteDBNodesRequest {
    /**
     * 用于保证请求的幂等性，防止重复提交请求。由客户端生成该参数值，要保证在不同请求间唯一，最大值不超过64个ASCII字符，且该参数值中不能包含非ASCII字符。
     * @example `ETnLKlblzczshOTUbOCzxxxxxxx`
     */
    "ClientToken"?: string;
    /**
     * 商品码。取值：
     * * **bards**：主实例按量付费
     * * **rds**：主实例包年包月
     * * **rords**：只读实例按量付费
     * * **rds\_rordspre\_public\_cn**：只读实例包年包月
     * * **bards_intl**：主实例按量付费
     * * **rds_intl**：主实例包年包月
     * * **rords_intl**：只读实例按量付费
     * * **rds\_rordspre\_public\_intl**：只读实例包年包月
     * @example `bards`
     */
    "CommodityCode": string;
    /**
     * 实例ID。可调用[DescribeDBInstances](~~610396~~)获取。
     * @example `rm-8vb9******`
     */
    "DBInstanceId"?: string;
    /**
     * 地域ID。可调用[DescribeRegions](~~610399~~)获取。
     * @example `cn-hangzhou`
     */
    "RegionId"?: string;
    /**
     * 可用区ID。
     * @example `cn-hangzhou-a`
     */
    "ZoneId"?: string;
    /**
     * 资源。
     * @example `buy`
     */
    "Resource"?: string;
    /**
     * 是否自动支付。
     * 取值范围：
     * 1. **true**：自动支付。您需要确保账户余额充足。
     * 1. **false**：只生成订单不扣费。
     * > 默认值为true。如果您的支付方式余额不足，可以将参数AutoPay设置为false，此时会生成未支付订单，您可以登录RDS管理控制台自行支付。
     * >
     * @example `false`
     */
    "AutoPay"?: boolean;
    /**
     * 优惠码。
     * @example `aliwood-1688-mobile-promotion`
     */
    "PromotionCode"?: string;
    /**
     * 当前数据库版本。取值：
     * MySQL：**5.5、5.6、5.7、8.0**
     * @example `5.7`
     */
    "EngineVersion"?: string;
    /**
     * 数据库节点类型。取值：
     * - **Master**：主节点
     * - **Slave**：备节点
     * @example `Master`
     */
    "NodeType"?: string;
    /**
     * 业务扩展参数。
     * @example `无`
     */
    "BusinessInfo"?: string;
    /**
     * 节点ID列表。
     */
    "DBNodeId"?: string[];
    /**
     * 资源组ID。
     * @example `rg-acfmy*****`
     */
    "ResourceGroupId"?: string;
}
