export interface DescribeNetworkRegionBlockResponse {
    /**
     * 本次请求的ID。
     * @example `C33EB3D5-AF96-43CA-9C7E-37A81BC06A1E`
     */
    RequestId: string;
    /**
     * 区域封禁的配置信息。
     */
    Config: {
        /**
         * 区域封禁的开关状态。取值：
         * - **on**：开启
         * - **off**：关闭
         * @example `on`
         */
        RegionBlockSwitch: string;
        /**
         * 被封禁的海外地域代码列表。
         */
        Countries: number[];
        /**
         * 被封禁的中国地域代码列表。
         */
        Provinces: number[];
    };
}
