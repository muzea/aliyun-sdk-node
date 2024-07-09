export interface DescribeZonesResponse {
    /**
     * 请求id
     * @example `E9116F2D-82F8-501E-9ADB-2BE0C02B6A84`
     */
    RequestId: string;
    /**
     * 可用区列表
     */
    Zones: {
        /**
         * 可用区名称
         * @example `杭州`
         */
        LocalName: string;
        /**
         * 可用区id
         * @example `cn-hangzhou-i`
         */
        ZoneId: string;
    }[];
}
