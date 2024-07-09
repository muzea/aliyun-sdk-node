export interface DescribeRegionsResponse {
    /**
     * 请求id
     * @example `1D2FBB36-C39B-5EBB-9928-FCC1A236D65D`
     */
    RequestId: string;
    /**
     * 地域信息列表。
     */
    Regions: {
        /**
         * 区域名称
         * @example `杭州`
         */
        LocalName: string;
        /**
         * 区域id
         * @example `cn-hangzhou`
         */
        RegionId: string;
    }[];
}
