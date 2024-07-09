export interface DescribeRegionsResponse {
    /**
     * 请求ID。
     * @example `C0EE05F4-6C1D-5993-B028-B569F9ED6B51`
     */
    RequestId: string;
    /**
     * 地域信息列表。
     */
    Regions: {
        /**
         * 地域ID。
         * @example `cn-hangzhou`
         */
        RegionId: string;
        /**
         * 地域名称。
         * @example `China (Hangzhou)`
         */
        LocalName: string;
    }[];
}
