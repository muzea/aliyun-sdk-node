export interface AddGatewayRequest {
    /**
     * 网关名称。
     * @example `test-ceshi`
     */
    "Name"?: string;
    /**
     * 地域。
     * @example `cn-hangzhou`
     */
    "Region": string;
    /**
     * 私网SLB规格（适用于传统实例）。
     * - 简约型 (slb.s1.small)
     * - 标准型1 (slb.s2.small)
     * - 标准型I(slb.s2.medium)
     * - 高阶型1 (slb.s3.small)
     * - 高阶型I(slb.s3.medium)
     * - 超强型I (slb.s3.large)
     * > 传统实例：创建时只能在NLB、按LCU计费的CLB、按规格的CLB中选择一种代购
     * > Serverless实例：创建时只能在NLB、按LCU计费的CLB中选择一种代购
     * @example `slb.s2.small`
     */
    "SlbSpec"?: string;
    /**
     * 专有网络ID。
     * @example `vpc-bp15mncnrtm83uauxd1xb`
     */
    "Vpc": string;
    /**
     * 主交换机ID。
     * @example `vsw-bp1q8th57frl5khj2li43`
     */
    "VSwitchId"?: string;
    /**
     * 节点规格（购买传统实例时指定）。
     * - MSE_GTW_16_32_200_c(16C32G)
     * - MSE_GTW_2_4_200_c(2C4G)
     * - MSE_GTW_4_8_200_c(4C8G)
     * - MSE_GTW_8_16_200_c(8C16G)
     * @example `MSE_GTW_2_4_200_c`
     */
    "Spec"?: string;
    /**
     * 节点数量（购买传统实例时指定）。
     * @example `2`
     */
    "Replica"?: number;
    /**
     * 公网SLB规格（适用于传统实例）。
     * - 简约型 (slb.s1.small)
     * - 标准型1 (slb.s2.smal)
     * - 标准型I(slb.s2.medium)
     * - 高阶型1 (slb.s3.small)
     * - 高阶型I(slb.s3.medium)
     * - 超强型I (slb.s3.large)
     * > 传统实例：创建时只能在NLB、按LCU计费的CLB、按规格的CLB中选择一种代购
     * > Serverless实例：创建时只能在NLB、按LCU计费的CLB中选择一种代购
     * @example `slb.s2.small`
     */
    "InternetSlbSpec"?: string;
    /**
     * 备交换机ID。
     * @example `vsw-wz9bu6o5vsvitt5mrxo6s`
     */
    "VSwitchId2"?: string;
    /**
     * 是否企业安全组类型。
     * @example `false`
     */
    "EnterpriseSecurityGroup"?: boolean;
    /**
     * 是否开启硬件加速。
     * @example `false`
     */
    "EnableHardwareAcceleration"?: boolean;
    /**
     * 是否启用链路追踪。
     * @example `false`
     */
    "EnableXtrace"?: boolean;
    /**
     * 链路追踪采样率，取值[1,100]。
     * @example `10`
     */
    "XtraceRatio"?: string;
    /**
     * 是否启用SLS日志投递。
     * @example `false`
     */
    "EnableSls"?: boolean;
    /**
     * 网关标签。
     */
    "Tag"?: {
        /**
         * 标签Key。
         * @example `key`
         */
        Key: string;
        /**
         * 标签Value。
         * @example `value`
         */
        Value: string;
    }[];
    /**
     * 资源组ID。
     * @example `rg-acfm34x43l*****`
     */
    "ResourceGroupId"?: string;
    /**
     * 扩展字段。
     * @example `{}`
     */
    "RequestPars"?: string;
    /**
     * 可用区信息。
     */
    "ZoneInfo": {
        /**
         * 可用区ID。
         * @example `cn-shenzhen-e`
         */
        ZoneId: string;
        /**
         * 交换机ID。
         * @example `vsw-bp*****`
         */
        VSwitchId: string;
    }[];
    /**
     * 付费类型（购买传统实例时指定）。
     * @example `POSTPAY`
     */
    "ChargeType"?: string;
    /**
     * 网关产品类型：
     * - mse_pro：传统实例
     * - mse_serverless：Serverless
     * @example `mse_pro`
     */
    "MserVersion"?: string;
    /**
     * 代购的NLB网络类型：
     * - pubnet：公网
     * - privatenet：私网
     * - privatepubnet：公网+私网
     * > 传统实例：创建时只能在NLB、按LCU计费的CLB、按规格的CLB中选择一种代购
     * > Serverless实例：创建时只能在NLB、按LCU计费的CLB中选择一种代购
     * @example `pubnet`
     */
    "NlbNetworkType"?: string;
    /**
     * 代购按LCU计费的CLB的网络类型：
     * - pubnet：公网
     * - privatenet：私网
     * - privatepubnet：公网+私网
     * > 传统实例：创建时只能在NLB、按LCU计费的CLB、按规格的CLB中选择一种代购
     * > Serverless实例：创建时只能在NLB、按LCU计费的CLB中选择一种代购
     * @example `pubnet`
     */
    "ClbNetworkType"?: string;
    /**
     * 返回信息的语言类型：
     * - zh：中文
     * - en：英文
     * @example `zh`
     */
    "AcceptLanguage"?: string;
}
