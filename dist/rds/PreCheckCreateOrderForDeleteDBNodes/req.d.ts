export interface PreCheckCreateOrderForDeleteDBNodesRequest {
    /**
     * 用于保证请求的幂等性，防止重复提交请求。由客户端生成该参数值，要保证在不同请求间唯一，最大值不超过64个ASCII字符，且该参数值中不能包含非ASCII字符。
     * @example `ETnLKlblzczshOTUbOC****`
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
     * @example `rds`
     */
    "CommodityCode": string;
    /**
     * 实例id。
     * @example `rm-wz9rziy3he051if82`
     */
    "DBInstanceId"?: string;
    /**
     * 地域id。可以通过接口[describeregions](~~26243~~)查看地域id。
     * @example `cn-hangzhou`
     */
    "RegionId"?: string;
    /**
     * 可用区ID。
     * @example `cn-hangzhou-a`
     */
    "ZoneId"?: string;
    /**
     * 资源
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
     * @example `True`
     */
    "AutoPay"?: boolean;
    /**
     * 优惠码。
     * @example `aliwood-1688-mobile-promotion`
     */
    "PromotionCode"?: string;
    /**
     * 目标数据库版本。根据**Engine**参数取值的不同，本参数取值如下：
     * * MySQL：**5.5/5.6/5.7/8.0**
     * * SQL Server：**2008r2/08r2_ent_ha/2012/2012_ent_ha/2012_std_ha/2012_web/2014_std_ha/2016_ent_ha/2016_std_ha/2016_web/2017_std_ha/2017_ent/2019_std_ha/2019_ent**
     * * PostgreSQL：**10.0/11.0/12.0/13.0/14.0/15.0**
     * @example `8.0`
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
     * @example `{\"promotion_input_param\":\"{\\\"promotionFilter\\\":{},\\\"promotionOptionCode\\\":\\\"youhui_quan\\\"}\"}`
     */
    "BusinessInfo"?: string;
    /**
     * 节点ID列表
     */
    "DBNodeId"?: string[];
}
