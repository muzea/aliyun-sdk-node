export interface DescribeVpnGatewayAvailableZonesResponse {
    /**
     * 地域ID。
     * @example `cn-hangzhou`
     */
    RegionId: string;
    /**
     * 请求ID。
     * @example `29784052-931F-543D-A612-36B3838163FA`
     */
    RequestId: string;
    /**
     * 可用区列表。
     */
    AvailableZoneIdList: {
        /**
         * 可用区ID。
         * @example `cn-hangzhou-h`
         */
        ZoneId: string;
        /**
         * 可用区名称。
         * @example `cn-hangzhou-h`
         */
        ZoneName: string;
    }[];
}
