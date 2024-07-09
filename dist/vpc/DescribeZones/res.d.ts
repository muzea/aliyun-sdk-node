export interface DescribeZonesResponse {
    /**
     * 请求ID。
     * @example `6FEA0CF3-D3B9-43E5-A304-D217037876A8`
     */
    RequestId: string;
    Zones: {
        /**
         * 可用区的集合。
         */
        Zone: {
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
             * 查询到的可用区的类型，默认取值为**AvailabilityZone**即普通云上可用区。
             * @example `AvailabilityZone`
             */
            ZoneType: string;
        }[];
    };
}
