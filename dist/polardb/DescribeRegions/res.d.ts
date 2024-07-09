export interface DescribeRegionsResponse {
    /**
     * 请求ID。
     * @example `3F9E6A3B-C13E-4064-A010-18582A******`
     */
    RequestId: string;
    Regions: {
        /**
         * 地域信息列表。
         */
        Region: {
            Zones: {
                /**
                 * 可用区列表。
                 */
                Zone: {
                    /**
                     * 可用区ID。
                     * @example `cn-hangzhou-g`
                     */
                    ZoneId: string;
                    /**
                     * 是否支持VPC。
                     * @example `true`
                     */
                    VpcEnabled: boolean;
                }[];
            };
            /**
             * 地域ID。
             * @example `cn-hangzhou`
             */
            RegionId: string;
        }[];
    };
}
