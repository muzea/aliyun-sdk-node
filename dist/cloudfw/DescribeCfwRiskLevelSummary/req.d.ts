export interface DescribeCfwRiskLevelSummaryRequest {
    /**
     * 接收消息的语言类型。
     * 取值包括：
     * - **zh**（默认）：中文
     * - **en**：英文
     * @example `zh`
     */
    "Lang"?: string;
    /**
     * 云防火墙所在的地域ID。
     * >  关于云防火墙支持地域的详细信息，请参见[支持的地域](~~195657~~)。
     * @example `cn-shanghai`
     */
    "RegionId"?: string;
    /**
     * 实例类型。
     * @example `EcsEIP`
     */
    "InstanceType"?: string;
}
