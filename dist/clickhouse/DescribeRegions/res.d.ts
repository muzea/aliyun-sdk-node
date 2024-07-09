export interface DescribeRegionsResponse {
    /**
     * 地域和可用区。
     */
    Data: {
        /**
         * 地域ID。
         * @example `cn-hangzhou`
         */
        RegionId: string;
        /**
         * 可用区列表。
         */
        Zones: {
            /**
             * 可用区ID。
             * @example `cn-hangzhou-h`
             */
            ZoneId: string;
            /**
             * 是否支持VPC，取值说明：
             * - **true**：支持VPC。
             * - **false**：不支持VPC。
             * @example `true`
             */
            VpcEnabled: boolean;
        }[];
    }[];
    /**
     * 请求ID。
     * @example `F5178C10-1407-4987-9133-DE4DC9119F75`
     */
    RequestId: string;
}
