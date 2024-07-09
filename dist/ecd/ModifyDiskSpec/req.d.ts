export interface ModifyDiskSpecRequest {
    /**
     * 地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 云桌面ID。
     * @example `ecd-2yjhqxo1monbf****`
     */
    "DesktopId": string;
    /**
     * 系统盘的性能等级。当桌面规格设置为图形型或者高主频时，支持设置磁盘性能等级。取值范围：
     * - PL0
     * - PL1
     * - PL2
     * - PL3
     * @example `PL1`
     */
    "RootDiskPerformanceLevel"?: string;
    /**
     * 数据盘的性能等级。当桌面规格设置为图形型或者高主频时，支持设置磁盘性能等级。取值范围：
     * * PL0
     * * PL1
     * * PL2
     * * PL3
     * @example `PL1`
     */
    "UserDiskPerformanceLevel"?: string;
    /**
     * 优惠活动ID，可以通过询价接口获取命中的活动ID列表。
     * @example `youhuiquan_promotion_option_id_for_blank`
     */
    "PromotionId"?: string;
    /**
     * 是否自动支付。取值范围：
     * - `true`：自动支付。请确保账户余额充足，否则会产生异常订单。
     * - `false`：只产生订单，不支付。您可以登录控制台，在用户中心的**我的订单**页面，根据返回的订单号进行支付。
     * 默认值：`true`。
     * @example `false`
     */
    "AutoPay"?: boolean;
}
