export interface DescribeVpcZoneResponse {
    /**
     * 返回结果的请求ID。
     * @example `694DFBF3-C060-529F-92D0-7FC7E0DA1E21`
     */
    RequestId: string;
    /**
     * 可用区列表。
     */
    ZoneList: {
        /**
         * 可用区ID。
         * @example `cn-hangzhou-b`
         */
        ZoneId: string;
        /**
         * 可用区名称。
         * @example `华东 1 可用区 B`
         */
        LocalName: string;
        /**
         * 查询到的可用区的类型，默认取值为 AvailabilityZone 即普通云上可用区。
         * @example `AvailabilityZone`
         */
        ZoneType: string;
    }[];
}
