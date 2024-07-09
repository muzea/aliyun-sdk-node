export interface DescribeZonesResponse {
    /**
     * 请求ID。
     * @example `A48D35FF-440A-4BC0-A4A2-A9BF69B7E43A`
     */
    RequestId: string;
    Zones: {
        /**
         * 可用区列表。
         */
        Zone: {
            /**
             * 可用区ID。
             * @example `cn-hangzhou-b`
             */
            ZoneId: string;
            /**
             * 可用区名称。
             * @example `杭州 可用区B`
             */
            LocalName: string;
            SlaveZones: {
                /**
                 * 主可用区对应的备可用区列表。
                 */
                SlaveZone: {
                    /**
                     * 备可用区ID。
                     * @example `cn-hangzhou-g`
                     */
                    ZoneId: string;
                    /**
                     * 备可用区名称。
                     * @example `杭州 可用区G`
                     */
                    LocalName: string;
                }[];
            };
        }[];
    };
}
