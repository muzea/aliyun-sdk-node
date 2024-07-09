export interface ModifyDBInstanceDiskTypeRequest {
    /**
     * 修改后的磁盘类型，取值：
     * - **cloud_auto**：ESSD AutoPL 云盘。
     * - **cloud_essd1**：ESSD PL1 云盘。
     * - **cloud_essd2**：ESSD PL2 云盘。
     * - **cloud_essd3**：ESSD PL3 云盘。
     * @example `cloud_auto`
     */
    "DbInstanceStorageType"?: string;
    /**
     * 预配置性能（IOPS）。取值范围为 0~50000。
     * @example `1960`
     */
    "ProvisionedIops"?: number;
    /**
     * 实例ID。
     * @example `dds-bp1fa5efaa93****`
     */
    "DBInstanceId": string;
    /**
     * 是否自动付费。取值：
     * - **true**：自动付费，请确保账号有足够的余额。
     * - **false**：控制台手动付费。具体操作为：登录控制台，在页面右上角选择**费用**>**用户中心**，在**订单管理**找到目标订单进行支付。
     * 默认值为：**true**。
     * @example `true`
     */
    "AutoPay"?: boolean;
    /**
     * 附加参数，业务信息。
     * @example `{“ActivityId":"000000000"}`
     */
    "BusinessInfo"?: string;
    /**
     *  优惠码，默认为`youhuiquan_promotion_option_id_for_blank`。
     * @example `youhuiquan_promotion_option_id_for_blank`
     */
    "CouponNo"?: string;
    /**
     * 附加参数。
     * @example `async`
     */
    "ExtraParam"?: string;
    /**
     * 是否开启自动续费，取值说明：
     * - **true**：开启自动续费。
     * - **false**：不开启自动续费。
     * 默认值为 **false**
     * @example `false`
     */
    "AutoRenew"?: string;
    /**
     * 变配类型，取值：
     * - **UPGRADE**：升级配置。
     * - **DOWNGRADE**：降级配置。
     * > 当实例付费方式为包年包月时，该参数可用。
     * @example `UPGRADE`
     */
    "OrderType"?: string;
}
