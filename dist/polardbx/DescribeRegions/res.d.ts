export interface DescribeRegionsResponse {
    /**
     *  错误代码。
     * @example `200`
     */
    Code: number;
    /**
     *  错误信息。
     * @example `success`
     */
    Message: string;
    /**
     * 请求ID。
     * @example `C458B1E8-1683-3645-B154-6BA32080EEA`
     */
    RequestId: string;
    /**
     * 请求是否成功。
     * @example `true`
     */
    Success: boolean;
    /**
     * 错误代码。
     * @example `200`
     */
    ErrorCode: number;
    Regions: {
        /**
         * 区域列表。
         */
        Region: {
            /**
             * 支持polardb-x 1.0版本。
             * @example `true`
             */
            SupportPolarx10: boolean;
            /**
             * 支持polardb-x 2.0版本。
             * @example `true`
             */
            SupportPolarx20: boolean;
            /**
             * 实例ID。
             * @example `ch-hangzhou`
             */
            RegionId: string;
            Zones: {
                /**
                 * 可用区列表。
                 */
                Zone: {
                    /**
                     * 可用区。
                     * @example `cn-hangzhou-a`
                     */
                    ZoneId: string;
                    /**
                     * 是否支持vpc。
                     * @example `true`
                     */
                    VpcEnabled: boolean;
                }[];
            };
        }[];
    };
}
