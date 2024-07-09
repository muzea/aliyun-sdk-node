export interface ListBusiRegionsResponse {
    /**
     * 请求ID。
     * @example `6FEA0CF3-D3B9-43E5-A304-D217037876A8	`
     */
    RequestId: string;
    /**
     * 全球加速服务支持的地域信息。
     */
    Regions: {
        /**
         * 地域名称。
         * @example `杭州`
         */
        LocalName: string;
        /**
         * 地域ID。
         * @example `cn-hangzhou`
         */
        RegionId: string;
    }[];
}
