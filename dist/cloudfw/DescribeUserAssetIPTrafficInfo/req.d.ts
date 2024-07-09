export interface DescribeUserAssetIPTrafficInfoRequest {
    /**
     * 接收消息的语言类型。取值：
     * - **zh**（默认）：中文。
     * - **en**：英文。
     * @example `zh`
     */
    "Lang"?: string;
    /**
     * 目标资产的IP。
     * @example `192.0.XX.XX`
     */
    "AssetIP": string;
    /**
     * 设置查询时间。使用秒级时间戳格式表示。
     * @example `1656923760`
     */
    "TrafficTime": string;
}
