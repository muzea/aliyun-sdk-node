export interface DescribeZonesResponse {
    /**
     * 请求ID。
     * @example `593B0448-D13E-4C56-AC0D-FDF0FDE0E9A3`
     */
    RequestId: string;
    /**
     * 可用区列表。
     */
    Zones: {
        /**
         * 可用区名称。
         * @example `杭州 可用区G`
         */
        LocalName: string;
        /**
         * 可用区ID。
         * @example `cn-hangzhou-g`
         */
        ZoneId: string;
    }[];
}
