export interface DescribeAvailableResourceRequest {
    /**
     * 地域ID。
     * > 您可以调用[DescribeRegions](~~143074~~)查看。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 可用区ID。
     * > 您可以调用[DescribeRegions](~~143074~~)查看。
     * @example `cn-hangzhou-k`
     */
    "ZoneId"?: string;
    /**
     * 付费类型，取值说明：
     * - **PrePaid**：包年包月。
     * - **PostPaid**：按量付费。
     * @example `PostPaid`
     */
    "ChargeType"?: string;
    /**
     * 返回值的语言，取值说明：
     * - **zh-CN**（默认值）：中文。
     * - **en-US**：英文。
     * @example `zh-CN`
     */
    "AcceptLanguage"?: string;
    /**
     * 数仓版集群版本。
     * @example `3.0`
     */
    "DBClusterVersion"?: string;
}
