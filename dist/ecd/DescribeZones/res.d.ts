export interface DescribeZonesResponse {
    /**
     * 请求ID。
     * @example `1CBAFFAB-B697-4049-A9B1-67E1FC5F****`
     */
    RequestId: string;
    /**
     * 可用区信息集合。
     */
    Zones: {
        /**
         * 可用区ID。
         * @example `cn-hangzhou-h`
         */
        ZoneId: string;
    }[];
}
