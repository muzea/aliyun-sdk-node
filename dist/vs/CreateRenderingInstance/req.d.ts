export interface CreateRenderingInstanceRequest {
    /**
     * 云应用服务实例规格
     * @example `crs.cp.l1`
     */
    "RenderingSpec": string;
    /**
     * 客户端信息
     */
    "ClientInfo"?: {
        /**
         * 客户端IP地址
         * @example `172.21.128.110`
         */
        ClientIp: string;
    };
    /**
     * 最大带宽，单位 Mbps，默认值10
     * @example `10`
     */
    "InternetMaxBandwidth"?: number;
    /**
     * 开启或关闭自动续费，取值：
     * * **true**：开启。
     * * **false**。关闭。
     * @example `true`
     */
    "AutoRenew"?: boolean;
    /**
     * > 此值仅在 `InstanceChargeType` 为 `PrePaid`（包年包月）时有效。
     * 包年包月的时长。
     * 取值范围 1(默认) 2 3 4 5 6 7 8 9 12当选12的时候会被换算为一年，其余以月为周期单位
     * @example `1`
     */
    "Period"?: string;
    /**
     * 实例的付费方式，取值范围：
     * PrePaid（默认）：包年包月。
     * @example `PrePaid`
     */
    "InstanceChargeType"?: string;
    /**
     * 网络计费类型，取值：
     * - 95BandwidthByMonth：月95峰值带宽。
     * 只能有一种计费方式，如果已存在计费方式，则新值默认无效，以已存在的为准。注意用户第一次购买的时候该字段必填。
     * @example `95BandwidthByMonth`
     */
    "InternetChargeType"?: string;
}
