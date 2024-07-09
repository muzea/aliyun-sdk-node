export interface DescribeZonesResponse {
    /**
     * 请求ID。
     * @example `CEF72CEB-54B6-4AE8-B225-F876FF7BA984`
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
