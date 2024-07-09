export interface DescribeRegionsResponse {
    /**
     * 请求ID。
     * @example `421794A3-72A5-5D27-9E8B-A75A4C503E17`
     */
    RequestId: string;
    Regions: {
        /**
         * 地域信息列表。
         */
        Region: {
            /**
             * 地域对应的接入地址。
             * @example `adb.aliyuncs.com`
             */
            RegionEndpoint: string;
            /**
             * 地域名称。
             * @example `China (Hangzhou)`
             */
            LocalName: string;
            /**
             * 地域ID。
             * @example `cn-hangzhou`
             */
            RegionId: string;
            Zones: {
                /**
                 * 可用区列表。
                 */
                Zone: {
                    /**
                     * 可用区ID。
                     * @example `cn-hangzhou-h`
                     */
                    ZoneId: string;
                    /**
                     * 目标可用区是否支持VPC，取值说明：
                     * * **true**：支持。
                     * * **false**：不支持。
                     * @example `true`
                     */
                    VpcEnabled: boolean;
                    /**
                     * 可用区名称。
                     * @example `Hangzhou Zone H`
                     */
                    LocalName: string;
                }[];
            };
        }[];
    };
}
