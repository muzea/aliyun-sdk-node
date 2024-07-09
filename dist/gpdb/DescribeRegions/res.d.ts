export interface DescribeRegionsResponse {
    /**
     * 请求ID。
     * @example `FF8EB261-5447-4B1B-9F14-294CEA008A9F`
     */
    RequestId: string;
    Regions: {
        /**
         * 地域列表。
         */
        Region: {
            Zones: {
                /**
                 * 可用区列表。
                 */
                Zone: {
                    /**
                     * 可用区ID。
                     * @example `cn-hangzhou-c`
                     */
                    ZoneId: string;
                    /**
                     * VPC是否可用，取值说明：
                     * - **true**：表示VPC可用。
                     * - **false**：表示VPC不可用。
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
